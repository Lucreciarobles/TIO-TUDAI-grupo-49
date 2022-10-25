const imgArray = [
    './imagenes/mg.jpg',
    './imagenes/sh.jpg',
    './imagenes/sd.jpg',
    './imagenes/tk.jpg'
    
]

const img = document.querySelector('#slide')
//const img = document.getElementById('slide')
let i = 0

const slideShow = () => {
    img.src = imgArray[i]
    i = ( i < imgArray.length - 1) ? i+1 : 0
}

const interval = () => {
    setInterval(slideShow, 3000)
}