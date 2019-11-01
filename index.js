
let x= 0;
let Changer = () =>{
    let list = document.getElementsByClassName("oneDiv");
    let  container = document.getElementsByClassName("redContainer");
    if(x === 0){
        for(let i =0;i<list.length;i++){
            list[i].style.display = "flex"

        }
        console.log(container);
        container[0].style.paddingBottom = "50px";
        x ++
    }
    else {
        for(let i =0;i<list.length;i++){
        list[i].style.display = "none";
            container[0].style.paddingBottom = "0px";

    }
        x = 0;
    }



};
