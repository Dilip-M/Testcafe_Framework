import signIn from '../page-objects/components/signIn'
import signUp from '../page-objects/components/signUp'
import homePage from '../page-objects/pages/homePage'
import searchPage from '../page-objects/pages/searchPage'
import { Selector, t } from 'testcafe'

const signin = new signIn()
const homepage = new homePage()
const searchpage = new searchPage()
const signup = new signUp()

fixture `Getting started with TestCafe`
.page `http://twitter.com/explore`



test('Sign-up with new account',async t => {
    await signup.enterNewUserNameAndPhone('QEnginnerTest','8122718020')

    await signup.skipCustomiseYourExperiencePage()

   //  await signup.newUserPasswordSetUp('Testing99') // In test environment, default OTP/skip OTP is done. Hence skipping for now. 

   //  await signup.newUserSkipOnboardingScreen()
 
 })

test('Tweet with Image and message',async t => {
   await signin.userSignIn(`QEnginner`,`Testing99`)

   await t.expect(homepage.homePageTitle.exists).ok()

   await homepage.appTabBarNavigation(`Home`)

   await homepage.search(`@TwitterIndia`)

   await t.expect(searchpage.searchPageTitle.exists).ok()

   await searchpage.followPage()

   await homepage.appTabBarNavigation(`Home`)
   
   await t.expect(homepage.homePageTitle.exists).ok()
  
   await homepage.enterTweetMessage(`#twitterindia be at home`)

   await homepage.uploadTweetImage()

   await homepage.postTweet()

   var postURL = await homepage.verifyPostedTweet()
  
   await homepage.navigateToTwitterIndiaPage()

   await t.expect(searchpage.searchPageTitle.exists).ok()

   await searchpage.validatePostTwitterIndiaPage(postURL)

  await searchpage.unfollowPage()
   
}) 
