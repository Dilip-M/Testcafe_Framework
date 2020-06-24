import { Selector, t } from 'testcafe'
import { ClientFunction } from 'testcafe'

class homePage{
    constructor(){
        this.homePageTitle = Selector('title')
        this.appTabBarHomeLink = Selector('a').withAttribute('data-testid', 'AppTabBar_Home_Link')
        this.appTabBarExploreLink = Selector('a').withAttribute('data-testid', 'AppTabBar_Explore_Link')
        this.appTabBarNotificationsLink = Selector('a').withAttribute('data-testid', 'AppTabBar_Notifications_Link')
        this.appTabBarMessagesLink = Selector('a').withAttribute('data-testid', 'AppTabBar_DirectMessage_Link')
        this.appTabBarBookmarksLink = Selector('a').withAttribute('aria-label', 'Bookmarks')
        this.appTabBarListsLink = Selector('a').withAttribute('aria-label', 'Lists')
        this.appTabBarProfileLink = Selector('a').withAttribute('aria-label', 'Profile')
        this.appTabBarMoreLink = Selector('a').withAttribute('data-testid', 'AppTabBar_More_Link')
        this.searchTextBox = Selector('input').withAttribute('data-testid', 'SearchBox_Search_Input');
        this.tweetMessageTextArea = Selector('div').withAttribute('class', 'public-DraftStyleDefault-block public-DraftStyleDefault-ltr');
        this.tweetButton = Selector('div').withAttribute('data-testid', 'tweetButtonInline');
        this.articleSection = Selector('article');
        this.twitterIndiaLink = Selector('a').withAttribute('href', '/hashtag/twitterindia?src=hashtag_click'); 
        this.imageCloseButton = Selector('div').withAttribute('aria-label', 'Close');
    }   

    async appTabBarNavigation(menu) {
        switch(menu){
            case `Home` : await t
                            .click(this.appTabBarHomeLink)
                break
            case `Explore` : await t
                            .click(this.appTabBarExploreLink)
                break
            case `Notifications` : await t
                            .click(this.appTabBarNotificationsLink)
                break
            case `Messages` : await t
                            .click(this.appTabBarMessagesLink)
                break
            case `Bookmarks` : await t
                            .click(this.appTabBarBookmarksLink)
                break
            case `Lists` : await t
                            .click(this.appTabBarListsLink)
                break  
            case `Profile` : await t
                            .click(this.appTabBarProfileLink)
                break  
            case `More` : await t
                            .click(this.appTabBarMoreLink)
                break  
            default:    await t
                            .click(this.appTabBarHomeLink)
        }
    }

    async search(twitterpage) {
        await t
            .typeText(this.searchTextBox,twitterpage,{paste:true,replace:true})
            .pressKey(`enter`)
    }

    async enterTweetMessage(message) {
        await t
            .typeText(this.tweetMessageTextArea,message)
           
    }
    async uploadTweetImage() {
        await t
            .setFilesToUpload('div:nth-child(1) > input', [`./image.jpeg`])
            .click(this.tweetButton)
     }

     async postTweet() {
        await t
            .click(this.tweetButton)
        await t
            .wait(3000)    
     }

     async verifyPostedTweet() {
        var postCount    = await this.articleSection.count;
        var postURL = ``
        for (var i = 0; i < postCount; i++){
            await t.click(this.articleSection.nth(i))
            postURL = await ClientFunction(() => window.location.href)();
            await t.pressKey(`esc`)
            break
        }
        return postURL;
     }
    
     async navigateToTwitterIndiaPage() {
        await  t.click(this.twitterIndiaLink) 
        await  t.wait(3000) 
     }
}

export default homePage