

const btnEle=document.getElementById("calculate");
const billInput=document.getElementById("bill");
const tipInput=document.getElementById("tip");
const total=document.getElementById("total");

btnEle.addEventListener("click",()=>{
    const billValue=billInput.value;
    const tipValue=tipInput.value;
    const totalValue=billValue*(1+tipValue/100);
    total.innerText=totalValue.toFixed(2)
})