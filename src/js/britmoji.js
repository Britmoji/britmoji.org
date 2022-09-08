let speed = 20;
let scale = 0.17; // Image scale (I work on 1080p monitor)
let canvas;
let ctx;
let logoColor;

function createImage(url) {
    const img = new Image();
    img.src = url;
    return img;
}

let clicks = [];
const phrases = [
    "britmoji.",
    "no bitches?",
    createImage("https://media.discordapp.net/stickers/958516600296865843.png?size=160"),
    "\"the pipeline isnt real\"",
    "* racial slur *",
    "\"this doesn't affect my baby\"",
    createImage("https://media.discordapp.net/stickers/966761901780504597.png?size=160"),
    createImage("https://media.discordapp.net/stickers/960619462460076092.png?size=160"),
    createImage("https://media.discordapp.net/stickers/968699293370310666.png?size=160"),
    createImage("https://media.discordapp.net/stickers/887267915102056460.png?size=160"),
    "banger",
    "(autism diagnosis)",
    "${jndi:ldap://192.168.1.1:6969/britmoji}",
    "poggingfile:///home/britmoji/Pictures/Screenshot%20from%202021-04-11%2023-09-14.png",
    "* moans *",
    "calling all oomfies",
    "@oomfies",
    "hi oomfies",
    createImage("https://media.discordapp.net/stickers/983690705727815731.webp?size=160")
];

let dvd = {
    x: 200,
    y: 300,
    xspeed: 10,
    yspeed: 10,
    img: new Image()
};

(function main() {
    canvas = document.getElementById("tv-screen");
    if (!canvas) return;

    ctx = canvas.getContext("2d");

    dvd.img.src = 'https://media.discordapp.net/stickers/902594793266356284.png?size=512';

    //Draw the "tv screen"
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    document.body.onclick = onClick;

    onHit();
    update();
    theOnePiece();
})();

function onClick(e) {
    const x = e.clientX;
    const y = e.clientY;
    clicks.push({
        x: x,
        y: y,
        scale: 30,
        phrase: phrases[Math.floor(Math.random() * phrases.length)],
        color: randColor()
    });

    // Check if they click on the logo
    if (x > dvd.x && x < dvd.x + dvd.img.width * scale && y > dvd.y && y < dvd.y + dvd.img.height * scale) {
        window.location.pathname = "/run.html";
    }
}

function update() {
    setTimeout(() => {
        ctx.drawImage(ctx.canvas, 0, 0);
        ctx.fillStyle = "rgba(0, 0, 0, 0.45)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        //Draw DVD Logo and his background
        ctx.fillStyle = logoColor;
        ctx.fillRect(dvd.x, dvd.y, dvd.img.width * scale, dvd.img.height * scale);
        ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.img.width * scale, dvd.img.height * scale);

        //Move the logo
        dvd.x += dvd.xspeed;
        dvd.y += dvd.yspeed;

        // Process clicks
        for (let click of clicks) {
            if (click.phrase instanceof Image) {
                const size = click.scale * 5;
                ctx.drawImage(click.phrase, click.x - size / 2, click.y - size / 2, size, size);
            } else {
                // Draw text
                ctx.font = `${click.scale}px Comic Sans MS, cursive`;
                ctx.fillStyle = click.color;
                ctx.textAlign = "center";
                ctx.fillText(click.phrase, click.x, click.y + 10);
            }
            click.scale -= 1;
        }

        clicks = clicks.filter(click => click.scale > 0);

        //Check for collision
        checkHitBox();
        update();
    }, speed)
}

//Check for border collision
function checkHitBox() {
    if (dvd.x + dvd.img.width * scale >= canvas.width || dvd.x <= 0) {
        dvd.xspeed *= -1;
        onHit();
    }

    if (dvd.y + dvd.img.height * scale >= canvas.height || dvd.y <= 0) {
        dvd.yspeed *= -1;
        onHit();
    }
}

function randomBetween(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randColor() {
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    return `rgb(${r}, ${g}, ${b})`;
}

//Pick a random color in RGB format
function onHit() {
    logoColor = randColor();

    dvd.img.width = randomBetween(300, 1000);
    dvd.img.height = randomBetween(300, 1000);

    if (dvd.y + dvd.img.height * scale >= canvas.height) {
        dvd.y = canvas.height - dvd.img.height * scale;
    }

    if (dvd.x + dvd.img.width * scale >= canvas.width) {
        dvd.x = canvas.width - dvd.img.width * scale;
    }
}

if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;
    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

function handle(delta) {
    var time = 1000;
    var distance = 300;
    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (distance * delta)
    }, time);
}

const randomizeCapitalization = (str) => {
    return str.split('').map(c => {
        let result = Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase();
        if (Math.random() > 0.9) result += " ";
        return result;
    }).join('');
}

const funnyElements = {
    "notes": "notes!!!",
    "britmoji-inc": "Britmoji Inc.",
    "peep": "ayo peep this one!!!"
}

setInterval(() => {
    for (let id in funnyElements) {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = randomizeCapitalization(funnyElements[id]);
        }
    }
}, 500);

(function(_0x5c5f12,_0x28bd78){var _0x46e7e4=_0x1111,_0x16d3af=_0x5c5f12();while(!![]){try{var _0x269fdf=parseInt(_0x46e7e4(0x1a9))/0x1*(parseInt(_0x46e7e4(0x19e))/0x2)+parseInt(_0x46e7e4(0x1a1))/0x3*(parseInt(_0x46e7e4(0x19d))/0x4)+-parseInt(_0x46e7e4(0x1a8))/0x5+parseInt(_0x46e7e4(0x1a5))/0x6+-parseInt(_0x46e7e4(0x1a7))/0x7*(parseInt(_0x46e7e4(0x1a0))/0x8)+parseInt(_0x46e7e4(0x19f))/0x9+parseInt(_0x46e7e4(0x1a6))/0xa*(-parseInt(_0x46e7e4(0x1a4))/0xb);if(_0x269fdf===_0x28bd78)break;else _0x16d3af['push'](_0x16d3af['shift']());}catch(_0x2b36fd){_0x16d3af['push'](_0x16d3af['shift']());}}}(_0x26f7,0x95065));function _0x1111(_0x5787ea,_0x249ecf){var _0x26f737=_0x26f7();return _0x1111=function(_0x11119a,_0x602260){_0x11119a=_0x11119a-0x19a;var _0x32915f=_0x26f737[_0x11119a];return _0x32915f;},_0x1111(_0x5787ea,_0x249ecf);}async function theOnePiece(){var _0x499871=_0x1111,_0x2883c8=new Audio(_0x499871(0x19a));_0x2883c8[_0x499871(0x1a2)]=_0x499871(0x19b);try{await _0x2883c8[_0x499871(0x19c)]();}catch(_0x16876d){console['log'](_0x499871(0x1a3)+_0x16876d);}}function _0x26f7(){var _0x4f20ff=['1VQzevx','https://cdn.discordapp.com/attachments/392884654333493269/1016833949621817424/can_we_get_much_higher_sound_effect.mp3','audio/mp3','play','261848lZfcwg','1777846OyNcIH','2737845Sladmq','38520gcHqlA','51AQPIzc','type','Failed\x20to\x20play...','69399tNUTET','7207728mmKGcw','1670EYBxkh','1610aOjBgv','3679060qAnVHQ'];_0x26f7=function(){return _0x4f20ff;};return _0x26f7();}
