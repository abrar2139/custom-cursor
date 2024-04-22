let container = document.querySelector(".main");
let crsr = document.querySelector(".cursor");


container.addEventListener("mousemove",function(dets) {
    crsr.style.left= dets.x+"px"
    crsr.style.top= dets.y+"px"
})