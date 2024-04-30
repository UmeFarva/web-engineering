const totalPs = document.getElementsByTagName("p")
console.log(totalPs[0].innerHTML = " <h1> This is H1 Updated </h1>" )

const ps = document.querySelectorAll(" #myDiv>p ")
console.log(ps)
for (const iterator of ps) {
    iterator.onclick = function (){alert("p is clicked")}
    
}