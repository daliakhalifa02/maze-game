var loser = false;
var boundaries = document.querySelectorAll(".boundary");
var start = document.querySelector("#start");
var end = document.querySelector("#end");
var status = document.querySelector("#status")

window.onload = function() {
    document.getElementById("start").onclick = startClick;
    document.getElementById("end").onmouseover = overEnd;
    boundaries = $$("div#game div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
    }
};

function overBoundary() {
    loser = true;
    document.getElementById("status").textContent = "You lost";
    boundaries = $$("div#game div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].addClassName("youlose");
    }
}

function startClick() {
    loser = false;
    document.getElementById("status").textContent = "Find the end!";
    boundaries = $$("div#game div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].removeClassName("youlose");
    }
}

function overEnd() {
    if (!loser) {
        $("status").textContent = "You won";
    }
}