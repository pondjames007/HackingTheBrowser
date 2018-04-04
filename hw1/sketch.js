
window.onload = () => {
    let newWindowFeature = "menubar=no,location=yes,resizable=no,scrollbars=no,status=yes,width=100,height=71,screenX=500, screenY=500";
    let event = new MouseEvent("mousemove");
    $('h3').hide();

    $('h3').css({
        "text-align": "center",
        "font-size": "32px",
        background: "#f7b559",
        color: "#2096a3"
        
    });

    $('#start').css({
        background: "#008CBA",
        color: "white",
        padding: "15px 32px",
        display: "inline-block",
        "font-size": "16px",
        "text-align": "center"
    });

    $('#stop').css({
        left: window.innerWidth/2 + "px", 
        top: window.innerHeight/2 + "px",
        background: "#ff6666",
        color: "white",
        padding: "0px 20px",
        display: "inline-block",
        "font-size": "14px",
        "text-align": "center"
    });

    $('#start').click(()=>{
        $('h3').hide();
        window.open("./popup.html", "popup", newWindowFeature);
    });
    
    if(window.name == "popup"){
        window.addEventListener("mousemove", 
            (event)=>{
                 console.log(`mouse position: ${event.movementX}:${event.movementY}`);
                window.moveBy(event.movementX*20, event.movementY*20);
                },
            false);
        
    }
    
    
    $('#stop').click(()=>{
        window.close();
    });

    if(window.name == ""){
        window.addEventListener("focus", ()=>{
            console.log("123")
            $('h3').show();
        });
        
    }
}
