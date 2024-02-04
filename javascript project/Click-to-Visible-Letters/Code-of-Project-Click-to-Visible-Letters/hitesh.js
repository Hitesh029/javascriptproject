const H = document.getElementById("H")
const i = document.getElementById("i")
const t = document.getElementById("t")
const e = document.getElementById("e")
const s = document.getElementById("s")
const h = document.getElementById("h")
const Hitesh = document.getElementById("complete")

H.addEventListener("click",()=>{
    H.style.display = "none";
    i.style.display = "block";
});

i.addEventListener("click",()=>{
    i.style.display = "none";
    t.style.display = "block";
});

t.addEventListener("click",()=>{
    t.style.display = "none";
    e.style.display = "block";
});

e.addEventListener("click",()=>{
    e.style.display = "none";
    s.style.display = "block";
});

s.addEventListener("click",()=>{
    s.style.display = "none";
    h.style.display = "block";
});

h.addEventListener("click",()=>{
    h.style.display = "none";
    Hitesh.style.display = "block";
});

Hitesh.addEventListener("click",()=>{
    Hitesh.style.display = "none";
    v.style.display = "block";
});


