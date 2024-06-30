let btn=document.querySelector("button");

btn.addEventListener("mouseenter",function(){
    let color=randomGenerate();
    document.querySelector("h3").innerText=color;
    document.querySelector("div").style.backgroundColor=color;
})

function randomGenerate(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let color=`rgb(${r},${g},${b})`;
    return color;
}