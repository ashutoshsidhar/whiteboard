let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 
let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.strokeStyle= "white";
        ctx.fillRect(0,0,1536,722);
        ctx.closePath();
        
    let movenotNoted = false;
    let pen = document.querySelector("#pen");
    let pen2 = document.querySelector("#pen2");
    let pen3 = document.querySelector("#pen3");
    let pen4 = document.querySelector("#pen4");
    let pen5 = document.querySelector("#pen5");
    let highlight = document.querySelector("#highlight");
    let erase = document.querySelector("#eraser");
    let clear = document.querySelector("#clear");
    let save = document.querySelector("#save");
    let text = document.querySelector("#text");
    
    
    pen.addEventListener("click",function(){
        $(".selected").removeClass("selected");
        $("#pen").addClass("selected");
        ctx.beginPath();
        ctx.strokeStyle = "black";
        pentest("black",5);
    })
    pen2.addEventListener("click",function(){
        $(".selected").removeClass("selected");
        $("#pen2").addClass("selected");
        ctx.beginPath();
        ctx.strokeStyle = "blue";
        pentest("blue",5);
    })
    pen3.addEventListener("click",function(){
        $(".selected").removeClass("selected");
        $("#pen3").addClass("selected");
        ctx.beginPath();
        ctx.strokeStyle = "green";
        pentest("green",5);
    })
    pen4.addEventListener("click",function(){
        $(".selected").removeClass("selected");
        $("#pen4").addClass("selected");
        ctx.beginPath();
        ctx.strokeStyle = "red";
        pentest("red",5);
    })
    pen5.addEventListener("click",function(){
        $(".selected").removeClass("selected");
        $("#pen5").addClass("selected");
        ctx.beginPath();
        ctx.strokeStyle = "yellow";
        pentest("yellow",5);
    })
    highlight.addEventListener("click",function(){
        $(".selected").removeClass("selected");
        $("#highlight").addClass("selected");
        ctx.beginPath();
        ctx.strokeStyle = "blueviolet";
        pentest("blueviolet",5);
    })
    erase.addEventListener("click",function(){
        $(".selected").removeClass("selected");
        $(erase).addClass("selected");
        ctx.beginPath();
        ctx.strokeStyle = "white";
        pentest("white",20);
    })
    clear.addEventListener("click",function(){
        $(".selected").removeClass("selected");
        
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.fillRect(0,0,1536,722);
    })
    save.addEventListener("click",function(){
        $(".selected").removeClass("selected");
        saveboard();
    })
function saveboard(){
    let link = document.createElement("a");
    link.download = "img.png";
    link.href = canvas.toDataURL();
    console.log(canvas.toDataURL());
    link.click();
}
function pentest(color , size){
    canvas.addEventListener("mousemove", function(e){
        if(e.buttons == 1){
            if(!movenotNoted){
                ctx.moveTo(e.pageX,e.pageY);
                ctx.strokeStyle = color;
                ctx.lineWidth = size ;
                movenotNoted = true;
            }else {
                ctx.strokeStyle = color;
                ctx.lineWidth = size ;
                ctx.lineTo(e.pageX,e.pageY);
                ctx.stroke();
            }
        }
        else{
            movenotNoted = false;
        }
    })
}