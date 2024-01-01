import { $ } from '@wdio/globals'
import {Page} from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class USERCreate extends Page {
    /**
     * define selectors using getter methods
     */
    get click_user () { return $("span=User Management"); }
    get click_add_user () { return $("span=Add User"); }
    get select_user_role () { return $("mat-select[role='combobox']"); }
    get fix_user_role () { return $("span=Packaging Operator BLO"); }
    get write_firstName () { return $("input[name='firstName']"); }
    get write_lastName () { return $("input[name='lastName']"); }
    get write_email () { return $("input[name='email']"); }
    get select_country_code () { return $("span[class='arrow-down']"); }
    get select_bd_code () { return $("span[class='flag flag-bd']"); }
    get write_phone () { return $("input[placeholder='Enter phone number']"); }
    get create_user () { return $("span=Create User"); }

    
    
    async USERCreate () {
        await browser.waitUntil(async () => {
            return await this.click_user.isExisting();
        }, {timeout : 100000})
        // await browser.debug();
        await this.click_user.click();
        await browser.pause(2000)
        await this.click_add_user.click();
        await browser.pause(2000)
        await this.select_user_role.click();
        await this.fix_user_role.click();
        await this.write_firstName.setValue('ANIKA');
        await this.write_lastName.setValue('NAWAR');
        await this.write_email.setValue('anikanawar@yopmail.com');
        await this.select_country_code.click();
        await browser.pause(3000)
        await this.select_bd_code.click();
        await this.write_phone.addValue("1920776543");
        await this.create_user.click();
    
        await browser.pause(5000)
        
        
       
    }
    
    
}

export default new USERCreate();
