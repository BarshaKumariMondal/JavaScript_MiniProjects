let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let task=document.createElement("li");
    task.innerText=inp.value;
    ul.appendChild(task);
    
    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("delete");
    task.appendChild(delbtn);

    inp.value="";
})

ul.addEventListener("click",function(event){
    // console.log(event.target.nodeName);
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
    }
})

// let delbtns=document.querySelectorAll(".delete");
// for(del of delbtns){
//     del.addEventListener("click",function(){
//         let li=this.parentElement;
//         li.remove();
//     })
// }