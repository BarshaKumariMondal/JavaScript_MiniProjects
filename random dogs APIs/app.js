let url="https://dog.ceo/api/breeds/image/random";
let btn=document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let link=await getimg();
    let img=document.querySelector("img");
    img.setAttribute("src",link);
})
async function getimg(){
    let res=await axios.get(url);
    return res.data.message;
}