import LoginPage from '../pageobjects/login.page.js'
import click_dashboard from '../pageobjects/dashboard.page.js'


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('kawsar.ahmed@selise.ch', 'J2x2E0z5w^bR')
        
    })
 
    it('Dashbooard Open', async () => {
        await click_dashboard.DashboardGenerate();
        await browser.pause(10000);
        

    })
   
    
})

 