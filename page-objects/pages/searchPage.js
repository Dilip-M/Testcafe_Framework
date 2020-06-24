import { Selector, t } from 'testcafe'
import { ClientFunction } from 'testcafe'

class searchPage{
    constructor(){
        this.searchPageTitle = Selector('title')
        this.followTwitterIndiaButton = Selector('div').withAttribute('data-testid', '103770785-follow');
        this.unFollowTwitterIndiaButton = Selector('div').withAttribute('data-testid', '103770785-unfollow'); 
        this.confirmButton = Selector('div').withAttribute('data-testid', 'confirmationSheetConfirm');
        this.articleSection = Selector('article');
        this.tweetSection = Selector('div');
        this.imageCloseButton = Selector('div').withAttribute('aria-label', 'Close');
    }
    
    async followPage() {
        if (await this.followTwitterIndiaButton.exists){
            await t.click(this.followTwitterIndiaButton)
         }
     }

     async unfollowPage() {
        if (await this.unFollowTwitterIndiaButton.exists){
        await t.click(this.unFollowTwitterIndiaButton)
            .click(this.confirmButton)
        }
     }

     async validatePostTwitterIndiaPage(postURL) {
        var count    = await this.articleSection.count;
        var getPostURL = ``
        for (var i = 0; i < count; i++){
            await t.click(this.articleSection.nth(i))
            getPostURL = await ClientFunction(() => window.location.href)();
            await t.pressKey(`esc`)
            if (postURL == getPostURL){
                break
            }
        }
     }
}
export default searchPage