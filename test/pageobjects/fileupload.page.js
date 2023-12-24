import { $ } from '@wdio/globals'
import {Page} from './page.js';
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class fileUpload extends Page {
    /**
     * define selectors using getter methods
     */
    get user_module () { return $("span=User Management"); }
    get add_user () { return $("span=Add User"); }
    get up_file () { return $("input[id='uploadImage']"); }

    
    async fileUpload(url, upload_file_element) {
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
      const filePath = path.join(__dirname, url);
  
      // const upload_file_element = await locator;
      // await upload_file_element.scrollIntoView({ block: 'end' });
      await browser.execute(async (e) => {
        e.style.display = 'block';
        e.classList.remove("display-none");
      }, upload_file_element);
  
      await upload_file_element.waitForExist();
      console.log(filePath);
      await upload_file_element.waitForClickable({timeout: 20000});
      await upload_file_element.setValue(filePath);
    }

    async fileUploadHelper () {
        // await browser.debug();
        await this.user_module.click();
        await this.add_user.click();
        
        await this.fileUpload("../data/files/MicrosoftTeams-image.png", await this.up_file);
    }

    async fileUpload2(url, locator) {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(magnet.hub.png);
        const filePath = path.join(files, 'C:\Users\anika\webdriverio\test1\test\data\files');
    
        const upload_file_element = await locator;
        await upload_file_element.scrollIntoView({ block: 'end' });
        await browser.execute(async (e) => {
          e.style.display = 'block';
        }, upload_file_element);
    
        await upload_file_element.waitForDisplayed();
        await upload_file_element.setValue(filePath);
      }
    
    
}

export default new fileUpload();

