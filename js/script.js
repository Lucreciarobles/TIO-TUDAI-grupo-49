const imgArray = [
    './imagenes/sh.jpg',
    './imagenes/sp.jpg',
    './imagenes/tk.jpg',
    './imagenes/mg.jpg',
    './imagenes/rayman.jpg',
    './imagenes/ctr.jpg',
    './imagenes/fifa.jpg'
]

const img = document.querySelector('#slide')
//const img = document.getElementById('slide')
let i = 0

const slideShow = () => {
    img.src = imgArray[i]
    i = ( i < imgArray.length - 1) ? i+1 : 0
}

const interval = () => {
    setInterval(slideShow, 2000)
}