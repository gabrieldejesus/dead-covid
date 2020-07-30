// Add covid to the screen at random
function addCovid() {
// create a new element and store it in the covid variable
    const covid = document.createElement("div");
        // add the class attribute to the created div and add the covid value
    covid.setAttribute("class", "covid")

        // generate a random number from 0 to 500 and use the floor to transform it into an integer
    const position1 = Math.floor(Math.random() * 800) // posição 1: x
    const position2 = Math.floor(Math.random() * 400) // posição 2: y

        // position the covid div at a random point on the screen
    covid.setAttribute("style", "left:"+position1+"px;top:"+position2+"px;");

        // Click action to kill the covid
        // this: parameter to know that it is the object itself
    covid.setAttribute("onclick", "dead(this)");

        // Place the covid on the screen
        // appendChild: Take the content that is already on the site and add a new element
    document.body.appendChild(covid);
}

// Function to kill the covid
    function dead(element) {
	// pegar o elemento covid e remover da tela
    document.body.removeChild(element);
}

// start the game when the page loads
    function start() {
// set a timer in javascript so that every 1 second it executes the addCovid () function
    setInterval(addCovid, 1000);

        // disappear with the start button
    document.querySelector('.start').style.display = 'none';

        // appear with the information
    document.querySelector('.info').style.display = 'flex';
}