import { $ } from '@wdio/globals'
import {Page} from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardGenerate extends Page {
    /**
     * define selectors using getter methods
     */
    get click_dashboard () { return $("span=Dashboard Management"); }
    get export_data () { return $("span=Export"); }

    
    
    async DashboardGenerate () {
        // await browser.debug();
        await this.click_dashboard.click();
        await this.export_data.click();
        
       
    }
    
    
}

export default new DashboardGenerate();
