


function ball(){
   const ball= document.createElement("div")
   ball.className="ball"
   const container= document.getElementById("container")
   container.appendChild(ball)
}
const mybt= document.getElementById("bt");
mybt.onclick=ball;
