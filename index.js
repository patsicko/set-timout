


const myChange=()=>{
      
    var backgroundImg=["./bag.jpeg","./cart.png","./hat.jpeg","./laptop.jpg","./phone.jpeg","./shoes.jpg"
]


let i=0;

function changeImage() {   

document.body.style.backgroundImage = `url(${backgroundImg[i]})`;

setTimeout(()=>{
i++;
changeImage();
},2000)



document.body.style.backgroundRepeat="no-repeat";
document.body.style.height="100%";


document.body.style.backgroundSize="500px";
}

changeImage();





const list=document.querySelectorAll(".list");
console.log(list);

let active=0;

const change=()=>{

list[active].style.backgroundColor="red";

setTimeout(()=>{
active++;

change();
},2000)
}

change();
}


myChange();


setInterval(()=>{
   location.reload();
},10000)