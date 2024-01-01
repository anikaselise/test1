import { $ } from '@wdio/globals'
import {Page} from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PWAGenerate extends Page {
    /**
     * define selectors using getter methods
     */
    get click_pwa () { return $("span=PWA Management"); }
    get create_new_template () { return $("span=Create New Template"); }

    //get add_text_widget () { return $("span=Text Field"); }
   // get write_text_widget () { return $("aria/Rich Text Area. Press ALT-0 for help."); }

    get select_cust_info () { return $("span=Customer Information"); }
    get pwa_template_publish () { return $("span=Publish"); }
    get pwa_template_rename () { return $("input[name='numberUid']"); }
    get pwa_template_save () { return $("button[type='submit']");}

    
    
    async PWAGenerate () {
        // await browser.debug();
        await this.click_pwa.click();
        await this.create_new_template.click();
        //await this.add_text_widget.previousElement().click();
        //await this.add_text_widget.click();
        await this.select_cust_info.previousElement().click();
        await this.select_cust_info.click();
        await browser.pause(2000)
        //await this.write_text_widget.click();

        //await this.select_cust_info.click();

        await this.pwa_template_publish.click();
        await this.pwa_template_rename.setValue('PWA Template 01');
        await this.pwa_template_save.click();
        
        
       
    }
    
    
}

export default new PWAGenerate();
