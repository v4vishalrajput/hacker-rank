const puppy=require("puppeteer");

async function  main(){
    let id="hohaca1696@art2427.com";
    let pswd="user@1999";
    let word="kawaki";
    let moderators = [
        "bansalbhavesh47",
        "bansalbhavesh50",
        "nocidi6371", 
        "ralariv999", 
        "yasekin473", 
        "sibaje3329", 
        "pamahex943"
    ];
    let browser= await puppy.launch({
        headless:false,
        defaultViewport:false
    })
     let tabs=await  browser.pages();
     let tab=await tabs[0];
     await tab.goto("https://www.hackerrank.com/auth/login");
     await tab.type("#input-1",id);
     await tab.type("#input-2",pswd);
     await tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled")
     await tab.waitForSelector(".username.text-ellipsis",{visible:true});
     await tab.click(".username.text-ellipsis");
      await tab.click("a[data-analytics='NavBarProfileDropDownAdministration']");
      await tab.waitForSelector("li.active",{visible:true});
      let manage=await tab.$$("a.backbone");
      let manageLink=await tab.evaluate(function(ele){
        return ele.getAttribute("href");
      },manage[manage.length-1]);
    
      await tab.goto("https://www.hackerrank.com"+manageLink);
      await tab.waitForSelector(".btn.btn-green.backbone.pull-right",{visible:true});
      let challangeLink=await tab.$(".btn.btn-green.backbone.pull-right");
      
      let link=await tab.evaluate(function(ele){
          return ele.getAttribute("href");
      },challangeLink);

      for(let i=0;i<5;i++){
       await tab.goto("https://www.hackerrank.com"+link);
    //    await tab.waitForNavigation({waitUntil:"networkidle0"});
       await tab.waitForSelector("#name",{visible:true});
       await tab.type("#name",word);
       await tab.type("#preview",word);
       await tab.waitForSelector(".CodeMirror textarea",{visible:true});
       let textAreas=await tab.$$(".CodeMirror textarea");
       for(let j=0;j<textAreas.length;j++)
       await textAreas[j].type(word);
      await tab.type("#tags_tag",word);
      await tab.keyboard.press("Enter");
      await tab.click(".save-challenge.btn.btn-green")
      await tab.waitForSelector('li[data-tab="moderators"]',{visible:true});
      await tab.click('li[data-tab="moderators"]')
      await tab.waitForSelector('#moderator',{visible:true});
   for(let j=0;j<moderators.length;j++){
      await tab.type("#moderator",moderators[j]);
      await tab.keyboard.press("Enter");
   }
   await tab.click(".save-challenge.btn.btn-green");
}
}
main();