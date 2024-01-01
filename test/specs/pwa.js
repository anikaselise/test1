import LoginPage from '../pageobjects/login.page.js'
import click_pwa from '../pageobjects/pwa.page.js'


describe('My Login application', () => {
    // before('should login with valid credentials', async () => {
    //     await LoginPage.open()
    //     await LoginPage.login('kawsar.ahmed@selise.ch', 'J2x2E0z5w^bR')
    // })
 
    it('PWA Management Open', async () => {
        await click_pwa.PWAGenerate();
        await browser.pause(10000);
        

    })
   
    
})

 