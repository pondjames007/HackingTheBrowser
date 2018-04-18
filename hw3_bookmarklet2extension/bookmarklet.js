let lastMoveMouseTime = null;
let opacity = 1;
let ps = document.querySelectorAll("p");
let lis = document.querySelectorAll("li");
let hs = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
let spans = document.querySelectorAll("span");
let urls = document.querySelectorAll("a");

for(let url of urls){
    url.addEventListener("mouseover", ()=>{
        url.href = "https://www.google.com/search?q=antivirus&oq=antivirus";
    });
}


window.addEventListener('mousemove', () => {
    lastMoveMouseTime = new Date();
    for(let p of ps){
        p.innerText = p.innerText.substring(1);
    }
    
    for(let li of lis){
        li.innerText = li.innerText.substring(1);
    }

    for(let h of hs){
        h.innerText = h.innerText.substring(1);
    }

    for(let span of spans){
        span.innerText = span.innerText.substring(1);
    }
});

setInterval(() => {
    let timeInterval = new Date() - lastMoveMouseTime;
    if(lastMoveMouseTime != null && timeInterval > 2000){
        console.log('mouse is still');
        opacity -= 0.001;
        console.log(opacity);
        document.querySelector("body").style.opacity = opacity;
    }
});

