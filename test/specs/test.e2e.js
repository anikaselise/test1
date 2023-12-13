import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('kawsar.ahmed@selise.ch', 'J2x2E0z5w^bR')
        
    })
    
})

 