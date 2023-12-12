import { $ } from '@wdio/globals'
import {Page} from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class UIDGenerate extends Page {
    /**
     * define selectors using getter methods
     */
    get generate_uid () { return $("span=Generate UIDs");}

    get inputNoOfUIDs () { return $("input[type='number']");}

    get inputComment () { return $('input[name="comment"]');}

    get generateFinalUID () { return $("span=Generate");}

    get confirmButton () { return $("span=Confirm and Generate UIDs");}

    get successfulMsg () { return $("h2=UIDs Generated Successfully")}

    get okButton () { return $("span=OK")}

    //get logOutOption () { return $("xpath=arrow_drop_down")}
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    async UIDGenerate () {
        // await browser.debug();
        await this.generate_uid.click();
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

        /*await browser.waitUntil(async () => {
            return await this.logOutOption.isExisting();
        }, {timeout : 200000}) */
        

       

    }
    
    
}

export default new UIDGenerate();
