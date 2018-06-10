var assert = require('assert');

describe('login to application', function() {
    it('should login', function () {

        // NEED URL
        browser.url('PASTE THE URL');
        browser.waitForExist(".//*[@id='block-block-3']/*[@class='header']/*[@class='signing']/*[@class='signin']");
        browser.click(".//*[@id='block-block-3']/*[@class='header']/*[@class='signing']/*[@class='signin']");
        browser.pause(400);   
        
        // NEED USERNAME and PASSWORD
         browser.setValue('#lid','ENTER USERNAME');
         browser.setValue('#pwd','ENTER PASSWORD');
        
         browser.waitForExist(".//*[@id='signin_submit']");   
        browser.click(".//*[@id='signin_submit']");           
    });
    it('navigate to Visitors online', function () {      
        browser.waitForExist("#suppm_tracking");   
        browser.click("#suppm_tracking");           
    });
    it('check if any tabs availble, if yes click or wait', function () {   
        // Can also sent infinit loop in place of 999
        for (i = 0; i < 999; i++) {             
        if (browser.waitForVisible(".//*[@id='listbox']/*[@class='prioritybx lsbx4 ps-container']/*[@id='listpriority4']/div[1]")) {
            browser.click(".//*[@id='listbox']/*[@class='prioritybx lsbx4 ps-container']/*[@id='listpriority4']/div[1]"); 
            browser.waitForVisible(".//*[@id='startcht']/*[@id[starts-with(.,'textarea')]]")
            
            //  NEED MESSAGE TO SEND   
             browser.setValue(".//*[@id='startcht']/*[@id[starts-with(.,'textarea')]]","ENTER YOUR MESSAGE")
             browser.click('#sendmsgbtn')

            // THIS IS THE WAIT TIME, CAN SET TO WAIT FOR ANY AMOUT OF TIME
            browser.pause(20000);   
        } else {
            console.log("Time Out or tab not visible since long time")
        }         
    }
    });
});