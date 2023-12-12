import { $ } from '@wdio/globals'
import {Page} from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class UIDCreate extends Page {
    /**
     * define selectors using getter methods
     */
   
    get clickUserManagement () {
        return $("span=User Management");
    }
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    async UIDCreate () {
        // await browser.debug();
        await this.clickUserManagement.click();
        await browser.waitUntil(async () => {
            return await this.inputNoOfUIDs.isExisting();
        }, {timeout : 100000})
        await this.inputNoOfUIDs.setValue(5);

        await this.inputComment.setValue('Create 5 UIDs');
        await this.generateFinalUID.click();

        await browser.waitUntil(async () => {
            return await this.confirmButton.isExisting();
        }, {timeout : 100000})
        await this.confirmButton.click();

        await browser.waitUntil(async () => {
            return await this.successfulMsg.isExisting();
        }, {timeout : 200000})
        

       

    }
    
    
}

export default new UIDGenerate();
