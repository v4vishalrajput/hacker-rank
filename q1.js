let arr1=[1,2,4,5,8,1247];

function sevenBoom(arr){
    for(let i=0;i<arr.length;i++){
        let n=arr[i];
     
        if(n%10==7){
                console.log("Boom!");
                return;
            }
        }
    console.log("there is no 7 in the array");
    return;
}
sevenBoom(arr1);

let arr=[20,10,30,40];
 function grid(arr) {
    let dir=0;
    let x=0;
    let y=0;
    for(let i=0;i<arr.length;i++){
    if(dir==0){
        y+=arr[i];
        dir++;
    }
    else if(dir==1){
        x+=arr[i];
        dir++;
    }
    else if(dir==2){
        y=y-arr[i];
        dir++;
    }
    else if(dir==3){
        x=x-arr[i];
        dir++;
    }
    dir=dir%4;
    }
    console.log("("+x+","+y+")");
}
grid(arr);


let arr=[true,false,false,true,false];
function countTrue(arr) {
    let count=0;
    for(let i=0;i<arr.length;i++){
      if(arr[i]){
          count++;
      }
    }
    return count; 
}
console.log(countTrue(arr));


const process=require("process");
let link=process.argv[2];
console.log(link);
    let ylink=link.replace("youtube","ssyoutube");
const puppy=require("puppeteer");
async function main(){
    let browser=await puppy.launch({
        headless:false,
        defaultViewport:false
    });
    let tabs=await browser.pages();
    let tab=await tabs[0];
    
    await tab.goto(ylink);
    await tab.waitForSelector(".link.link-download.no-downloadable.subname.ga_track_events.download-icon", {visible: true});
    await tab.click(".link.link-download.no-downloadable.subname.ga_track_events.download-icon");
}
main();