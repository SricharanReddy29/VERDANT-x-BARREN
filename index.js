let bon=1;
document.querySelector('#mbt').addEventListener("click",(event)=>{
    bon=bon*-1;
    let img=document.querySelector('#img');
    if(bon<0){
    document.querySelector('#galaxy').style.display="none";
    document.querySelector('#verdant').style.display="block";
    img.src="img/gmouse.png";
    }

    else{
        document.querySelector('#galaxy').style.display="block";
        document.querySelector('#verdant').style.display="none";
        img.src="img/mouse.png";  
    }
})

document.querySelector('#n').addEventListener("click",(event)=>{
    let p=document.querySelector('#n');
    let a=document.querySelector("#switch-btn");

    if(p.checked==1 && bon<0){
        a.style.backgroundColor="crimson";
        a.style.boxShadow="0px 0px 20px var(--BG-COLOR) inset,0px 0px 20px var(--ALT-COLOR2)"
        document.querySelector('#barren').style.display="block";
        document.querySelector('#verdant').style.display="none";

    }

    if(p.checked==0 && bon<0){
        a.style.backgroundColor="green";
        a.style.boxShadow="0px 0px 20px var(--BG-COLOR) inset,0px 0px 20px var(--ALT-COLOR)"
        document.querySelector('#verdant').style.display="block";
        document.querySelector('#barren').style.display="none";
    }
})
