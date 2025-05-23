// 1
document.addEventListener("DOMContentLoaded", function(){
    let a = document.querySelectorAll(".menu1[data-dropdown]");
    a.forEach(el=>{
        let b = el.querySelector(".menu2");
        el.addEventListener("mouseenter", ()=>{
            b.style.display="block";
        });
        el.addEventListener("mouseleave", ()=>{
              b.style.display="none"; 
        })
    })
})

// 2
document.addEventListener("DOMContentLoaded", function(){
    let c = document.querySelectorAll(".ask1");
    c.forEach(f=>{
        f.addEventListener("click", function(){
            document.querySelectorAll(".ask").forEach(i=>i.classList.remove ("active"));
            this.parentElement.classList.add("active");
        });
    });
});

// 3
document.addEventListener("DOMContentLoaded", function(){
    let d = document.querySelectorAll(".tab-button");
    let z = document.querySelectorAll(".tab-content");
    d.forEach(f=>{
        f.addEventListener("click", ()=>{
            d.forEach(i=>i.classList.remove ("active"));
            z.forEach(e=>e.classList.remove ("active"));
            f.classList.add("active");
            let k = f.getAttribute("data-tab");
            document.getElementById(k).classList.add("active");
        })
    })
})

// 4
document.addEventListener("DOMContentLoaded", function(){
    let i = document.querySelectorAll(".slider-img");
    let p = document.querySelector(".prev");
    let n = document.querySelector(".next");
    let s = 0;
    function slide(index){
        i.forEach(f=>f.classList.remove ("active"));
        if(index >=i.length){
            s=0;
        } else if(index<0){
            s=i.length-1;
        } else {
            s=index;
        } 
        i[s].classList.add("active");
    }
    p.addEventListener("click", ()=>{
        slide(s-1)
    })
    n.addEventListener("click", ()=>{
        slide(s+1)
    })
    setInterval(()=>{
        slide(s+1)
    },5000)
})

// 5
let m = document.getElementById("reg-modal");
let h = document.querySelector(".b-header button")
let j = document.getElementsByClassName("close")[0];
function openModal(){
    m.style.display="block";
}
j.onclick=function(){
    m.style.display="none";
}
window.onclick=function(e){
    if(e.target==m){
        m.style.display="none";
    }
}