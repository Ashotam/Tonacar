
let x= 0;
let Changer = () =>{
    let list = document.getElementsByClassName("oneDiv");
    if(x === 0){
        for(let i =0;i<list.length;i++){
            list[i].style.display = "flex"
        }

        x ++
    }
    else {
        for(let i =0;i<list.length;i++){
        list[i].style.display = "none"
    }
        x = 0;
    }



};
