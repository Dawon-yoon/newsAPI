const sideMenu=document.getElementById("side-menu-id");

const openNav=()=>{
    sideMenu.style.width="250px";
};

const closeNav=()=>{
sideMenu.style.width="0";
}

const openSearchBox=()=>{
    let inputArea=document.getElementById("input-area");
    if(inputArea.style.display==="inline"){
        inputArea.style.display="none";    }else{inputArea.style.display="inline";}
}



