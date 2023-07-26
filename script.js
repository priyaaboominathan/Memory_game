
const easy = document.getElementsByClassName("easybtn")[0];

easy.onclick = function(){
    location.href = "Easy/Easy.html";
}

const medium = document.getElementsByClassName("mediumbtn")[0];

medium.onclick = function(){
    location.href = "Medium/Medium.html";
}

const hard = document.getElementsByClassName("hardbtn")[0];

hard.onclick = function(){
    location.href = "Hard/Hard.html";
}

 const bgm = document.getElementById("bgm");
 const icon = document.getElementsByClassName("soundbtn")[0];
function toggleplay(){
    icon.classList.toggle("strikediag");
    return bgm.paused ? bgm.play() : bgm.pause();
};