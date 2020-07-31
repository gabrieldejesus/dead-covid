const c = (el)=>document.querySelector(el); // return item

let form = c("#form");
let field = c('#field').value;
let covids = 0;
let score = 0;

// add covid in screen
function addCovid() {
    const covid = document.createElement("div");
    covid.setAttribute("class", "covid")

    const position1 = Math.floor(Math.random() * 800) // position 1: x
    const position2 = Math.floor(Math.random() * 400) // position 2: y

    covid.setAttribute("style", "left:"+position1+"px;top:"+position2+"px;");

    covid.setAttribute("onclick", "dead(this)");
    c('main').appendChild(covid);
    covids++;
    document.getElementById('covids').innerHTML = `${covids}`;
}
// kill covid
function dead(element) {
    c('main').removeChild(element);
    incrementScore();
    covids--;
}

// start game
function start() {
    setInterval(addCovid, 1000);
    c('h1').style.display = 'none';
    c('form').style.display = 'none';
    c('main').style.background = '#262D37';
    c('aside').style.display = 'flex';
    c('.info').style.display = 'flex';

}

// getting name for user
form.addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('name').innerHTML = `Vamos lá <span>${field}</span> você consegue!`;
});

// score
function incrementScore() {
    score++;
    document.getElementById('scores').innerHTML = score;
}