import LoginPage from '../pageobjects/login.page.js'
import click_user from '../pageobjects/usercreate.page.js'


describe('My Login application', () => {
   /* before('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('kawsar.ahmed@selise.ch', 'J2x2E0z5w^bR')
    })*/
 
    it('User Management Open', async () => {
        await click_user.USERCreate();
        await browser.pause(10000);
        

    })
   
    
})

 