function  mudacor(){
    let  body = document.getElementById("bg");
    let rand = Math.floor(Math.random() * 6);

    switch(rand){
        case 0:
            body.style.backgroundColor = "#836FFF";
        break;
        case 1:
            body.style.backgroundColor = "#6495ED";
        break;
        case 2:
            body.style.backgroundColor = "#4682b4";
        break;
        case 3:
            body.style.backgroundColor = "#008080";
        break;
        case 4:
            body.style.backgroundColor = "#8b008b"; 
        break;
    }



};
