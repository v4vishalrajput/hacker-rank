const puppy=require("puppeteer");
let id="hohaca1696@art2427.com";
let pswd="user@1999";
let text="Kakashi";
async function main(){
    let browser= await puppy.launch({
        headless:false,
        defaultViewport:false
    });
    let tabs=await browser.pages();
    let tab=tabs[0];
    await tab.goto("https://www.hackerrank.com/auth/login");
    await tab.type("#input-1",id);
    await tab.type("#input-2",pswd);
    await tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled")
    // await tab.waitForSelector(".dropdown-handle.nav_link.toggle-wrap",{visible:true});
    await tab.waitForNavigation({waitUntil:"networkidle0"});
    await tab.click(".dropdown-handle.nav_link.toggle-wrap");
    
    await tab.click("a[data-analytics='NavBarProfileDropDownAdministration']");
    await tab.waitForSelector("li.active",{visible:true});
    let manage=await tab.$$("a.backbone");
    let manageLink=await tab.evaluate(function(ele){
          return ele.getAttribute("href");
    },manage[manage.length-1]);
    
    await tab.goto("https://www.hackerrank.com"+manageLink);
    await tab.waitForSelector(".btn.btn-green.backbone.pull-right",{visible:true});
    let challangeClass=await tab.$(".btn.btn-green.backbone.pull-right");
     let challangeLink=await tab.evaluate(function(ele){
         return ele.getAttribute("href");
     },challangeClass);
     for(let i=0;i<5;i++){
         await tab.goto("https://www.hackerrank.com"+challangeLink);
         await tab.waitForSelector("#name",{visible:true});
        // await tab.waitForNavigation({waitUntil:"networkidle0"});
        await tab.type("#name",text);
        await tab.type("#preview",text);
       
        // await tab.waitForSelector(".block.span12.profile-input.pull-left  #problem_statement-container",{visible:true}); 
        await tab.waitForSelector(".CodeMirror textarea",{visible:true});
        let textAreas=await tab.$$(".CodeMirror textarea");
        for(let j=0;j<textAreas.length;j++)
        await textAreas[j].type(word);
       await tab.type("#tags_tag",word);
       await tab.keyboard.press("Enter");
        await tab.click(".save-challenge.btn.btn-green")
        await tab.waitForSelector("li[data-tab='moderators']",{visible:true});
        await tab.click(".save-challenge.btn.btn-green");;
        await tab.waitForSelector("li[data-tab='moderators']",{visible:true});
        
        await tab.click("li[data-tab='moderators']");
        await tab.waitForSelector(".block.span12.profile-input.pull-left #moderator",{visible:true});
        await tab.click(".block.span12.profile-input.pull-left #moderator");
        let users=["hilay33436", "sai","RickyRick","WangChuk","mojigir233","pomoket649","NoobCode","yixesag502", "pajikep574",
            "akAtSukiii"];
            var j;
         for(j=0;j<users.length;j++){
           let username=users[j];
            // console.log(users[j]);
            await tab.type("#moderator",username);
          
            await tab.keyboard.press("Enter");
           
           
        }
 await tab.click(".save-challenge.btn.btn-green");
     }
}
main();