const text = "Welcome To Xadu.life...";

let index = 0;

function writeText() {
    document.body.innerText = text.slice (0, index);

    index++;

    if (index > text.length - 1) {
        index = 0;
    }
}

setInterval(writeText, 200);