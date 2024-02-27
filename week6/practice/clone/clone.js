let divcount=0;
function ball(){
    if (divcount >= 10) {
        alert(" limit of 10 divs.");
        return; // Exit the function if the limit is reached
    }
    const ball= document.createElement("div")
    ball.className="ball"
    const container= document.getElementById("container")
    ball.style.backgroundColor=generateHex();
    container.appendChild(ball)
    divcount++
 }
 const mybt= document.getElementById("bt");
 mybt.onclick=ball;
 const mybt1= document.getElementById("bt1");
 mybt.onclick=ball;

 function generateHex() {
    // Create an array of hexadecimal characters
    const hexChars = '0123456789ABCDEF';
    
    // Initialize an empty string to store the hexadecimal color code
    let hexColor = '#';

    // Generate a 6-digit hexadecimal color code
    for (let i = 0; i < 6; i++) {
        // Randomly select a character from the hexChars array
        const randomIndex = Math.floor(Math.random() * hexChars.length);
        
        // Append the selected character to the hexadecimal color code
        hexColor += hexChars[randomIndex];
    }

    // Return the generated hexadecimal color code
    return hexColor;
}

function generateRandom(){
    const arr = document.getElementsByClassName("ball");
    
    Array.from(arr).forEach((item) => {
        item.style.backgroundColor = generateHex();
    });
}
const random= document.getElementById("random");
 random.onclick=generateRandom;


// Example usage:

 