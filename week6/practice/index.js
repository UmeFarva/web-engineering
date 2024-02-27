const myp1= document.getElementById("p1");
// alert(myp1.innerText)
myp1.style.color="red"
myp1.innerText="i am over the moon"
const mybt= document.getElementById("bt");
mybt.innerText="i am button" 
function sayhi(){
    alert(mybt.innerText)

}
mybt.onclick=sayhi;