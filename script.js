function myfun() {
let mypara =document.getElementById('mypara')
let mypara2 =document.getElementById('mypara2')
let btn1 =document.getElementById('btn1');
let inputText = document.getElementById('inputText');
let inputTextSet = inputText.value;

mypara.textContent = inputTextSet;    
mypara2.textContent = "updated is Success"
inputText.value = ''
}

function toggle() {
   var image = document.getElementById('image')
    var output = document.getElementById('output')

    if(image.src.includes('img1.jpg')){
        image.src=("img2.jpg")
        output.textContent = "Image has changed"
    }

    else{
        image.src=('img1.jpg')
        output.textContent = "Image has changed"
    }
}

//hide
function hideImage(){
    image.style.display = "none"
    output.textContent = "Hide Image"
}

function showImage(){
    image.style.display = "Block"
    output.textContent = "show Image" 
}
