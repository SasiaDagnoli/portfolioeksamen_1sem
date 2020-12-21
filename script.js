let hover1 = document.querySelector(".knap1");
let hover2 = document.querySelector(".knap2");
let hover3 = document.querySelector(".knap3");
let hover4 = document.querySelector(".knap4");
let hover5 = document.querySelector(".knap5");
let hover6 = document.querySelector(".knap6");
let hover7 = document.querySelector(".knap7");
let hover8 = document.querySelector(".knap8");

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);

    document.querySelector("#chokolade").classList.add("hop_chokolade");
    document.querySelector("#sukker").classList.add("hop_sukker");
    document.querySelector("#mel").classList.add("hop_mel");
    document.querySelector("#maelk").classList.add("hop_maelk");
    document.querySelector("#marmelade").classList.add("hop_marmelade");

    hover1.addEventListener("mouseover", img4, false);
    hover2.addEventListener("mouseover", img6, false);
    hover3.addEventListener("mouseover", img0, false);
    hover4.addEventListener("mouseover", img5, false);
    hover5.addEventListener("mouseover", svg1, false);
    hover6.addEventListener("mouseover", img3, false);
    hover7.addEventListener("mouseover", img1, false);
    hover8.addEventListener("mouseover", img7, false);
    hover1.addEventListener("mouseout", imgNot4, false);
    hover2.addEventListener("mouseout", imgNot6, false);
    hover3.addEventListener("mouseout", imgNot0, false);
    hover4.addEventListener("mouseout", imgNot5, false);
    hover5.addEventListener("mouseout", svgNot, false);
    hover6.addEventListener("mouseout", imgNot3, false);
    hover7.addEventListener("mouseout", imgNot1, false);
    hover8.addEventListener("mouseout", imgNot7, false);
}

function toggleMenu() {
    console.log("toggleMenu")

    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "╳";
    }
}

function img4() {
    console.log("img4");
    document.querySelector(".img4").classList.add("blur");
}

function imgNot4() {
    console.log("imgNot4");
    document.querySelector(".img4").classList.remove("blur");
}

function img6() {
    console.log("img6");
    document.querySelector(".img6").classList.add("blur");
}

function imgNot6() {
    console.log("imgNot6");
    document.querySelector(".img6").classList.remove("blur");
}

function img0() {
    console.log("img0");
    document.querySelector(".img0").classList.add("blur");
}

function imgNot0() {
    console.log("imgNot0");
    document.querySelector(".img0").classList.remove("blur");
}

function img5() {
    console.log("img5");
    document.querySelector(".img5").classList.add("blur");
}

function imgNot5() {
    console.log("imgNot5");
    document.querySelector(".img5").classList.remove("blur");
}

function svg1() {
    console.log("svg");
    document.querySelector("#chokolade").classList.add("blur");
    document.querySelector("#sukker").classList.add("blur");
    document.querySelector("#mel").classList.add("blur");
    document.querySelector("#marmelade").classList.add("blur");
    document.querySelector("#maelk").classList.add("blur");
}

function svgNot() {
    console.log("svgNot");
    document.querySelector("#chokolade").classList.remove("blur");
    document.querySelector("#sukker").classList.remove("blur");
    document.querySelector("#mel").classList.remove("blur");
    document.querySelector("#marmelade").classList.remove("blur");
    document.querySelector("#maelk").classList.remove("blur");
}

function img3() {
    console.log("img3");
    document.querySelector(".img3").classList.add("blur");
}

function imgNot3() {
    console.log("imgNot3");
    document.querySelector(".img3").classList.remove("blur");
}

function img1() {
    console.log("img1");
    document.querySelector(".img1").classList.add("blur");

}

function imgNot1() {
    console.log("imgNot1");
    document.querySelector(".img1").classList.remove("blur");
}

function img7() {
    console.log("img7");
    document.querySelector(".img7").classList.add("blur");
}

function imgNot7() {
    console.log("img7");
    document.querySelector(".img7").classList.remove("blur");
}
