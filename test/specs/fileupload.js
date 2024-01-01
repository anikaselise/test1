import LoginPage from '../pageobjects/login.page.js'
import uidgenerate from '../pageobjects/uidgenerate.js'
import fileuploadPage from '../pageobjects/fileupload.page.js'

describe('My Login application', () => {
    /*it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('kawsar.ahmed@selise.ch', 'J2x2E0z5w^bR')
  
    })*/
 
    it('File Upload', async () => {
        await fileuploadPage.fileUploadHelper()    
        //await fileuploadPage.okButton.click();
        await browser.pause(10000);
    })
   
    
})

 