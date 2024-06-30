let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let country=document.querySelector("input").value;
    console.log(country);

    let list=await getlist(country);
    show(list);
});

function show(list){
    let ul=document.querySelector("#ul");
    ul.innerText="";
    for(col of list){
        console.log(col.name);
        let li=document.createElement("li");
        li.innerText=col.name;
        ul.appendChild(li);
    }
}
async function getlist(country){
    let res=await axios.get(url+country);
    return res.data ;
}
