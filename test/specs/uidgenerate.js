import LoginPage from '../pageobjects/login.page.js'
import uidgenerate from '../pageobjects/uidgenerate.js'

describe('My Login application', () => {
   // it('should login with valid credentials', async () => {
       // await LoginPage.open()

        //await LoginPage.login('kawsar.ahmed@selise.ch', 'J2x2E0z5w^bR')
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!')
   // })
 
    it('UID generation', async () => {
        await uidgenerate.UIDGenerate()
        await expect (await uidgenerate.successfulMsg).toHaveTextContaining("UIDs Generated Successfully")
        await uidgenerate.okButton.click();

        /*await uidgenerate.generate_uid.click();
        //await browser.pause(2000);

        await browser.waitUntil(async () => {
            return await uidgenerate.inputNoOfUIDs.isExisting();
        }, {timeout : 100000})

        await uidgenerate.inputNoOfUIDs.setValue(5);

        await browser.waitUntil(async () => {
            return await uidgenerate.inputComment.isExisting();
        }, {timeout : 100000})

        await uidgenerate.inputComment.setValue('Create 5 UIDs');

        await uidgenerate.generateFinalUID.click();
        await browser.pause(2000);

        await uidgenerate.confirmButton.click();
        await browser.pause(2000);

        await browser.waitUntil(async () => {
            return await uidgenerate.successfulMsg.isExisting();
        }, {timeout : 200000})

        await expect (await uidgenerate.successfulMsg).toHaveTextContaining("UIDs Generated Successfully")

        await uidgenerate.okButton.click();
        await browser.pause(2000);*/

    })
   
    
})

 