import LoginPage from '../pageobjects/login.page.js'
import uidgenerate from '../pageobjects/uidgenerate.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('kawsar.ahmed@selise.ch', 'J2x2E0z5w^bR')
    
    })
 
    it('UID generation', async () => {
        await uidgenerate.UIDGenerate()

    })
   
    
})

 