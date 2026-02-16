const main = document.getElementById("main");
const para = "this is the text please type it for more content";
const incorrectTyoedLetter = [];
let tags = [];
let currentindex = 0;


document.addEventListener("keydown", handleKeyDown);

function e() {
    show(para);
}

e();

function updateDom(parent, tags) {

    parent.children = tags;
}


function show(text) {
    for (let i = 0; i < text.length; i++) {
        const element = span(text.charAt(i), i == currentindex ? "active" : "");
        tags.push(element);
    }
    renderTags(main, tags);

}


function renderTags(parent, tags) {
    tags.forEach((tag) => parent.appendChild(tag));
}

function removeTags(parent) {
    parent = parent.cloneNode();
    // parent.children.forEach((child) => parent.remove(child));
}

function handleKeyDown(event) {
    console.log(event.key);
    if (event.key.length !== 1) {
        if (event.key === "Backspace") {
            let currentActiveTag = tags[currentindex];
            currentindex--;
            removeTags(main);
            removeTags(main, tags);

        }
        return; // Ignore it
    }



    let currentActiveTag = tags[currentindex];
    if (event.key === currentActiveTag.innerText) {
        currentActiveTag.classList.remove("active");
        currentActiveTag.classList.add("correct");
    } else {
        console.log(event.key, currentActiveTag.innerText);
        incorrectTyoedLetter.push(event);
        currentActiveTag.classList.remove("active");
        currentActiveTag.classList.add("incorrect");
    }
    currentindex++;
    let nextTag = tags[currentindex];
    console.log("next tag us is ", nextTag);
    nextTag.classList.add("active");
    removeTags(main);
    removeTags(main, tags);

}

function span(conttent, style) {
    const span = document.createElement("span");
    span.innerText = conttent;
    if (style != "")
        span.classList.add(style);

    return span;

}