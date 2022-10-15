document.querySelector('#n').addEventListener("click",(event)=>{
    let p=document.querySelector('#n');

    if(p.checked==1){
        document.querySelector('#switch-btn').style.backgroundColor="crimson";
    }

    if(p.checked==0){
        document.querySelector('#switch-btn').style.backgroundColor="green";
    }
})