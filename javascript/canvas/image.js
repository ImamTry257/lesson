var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

buatGambar()

function buatGambar() {

    // image from sistem
    var img = new Image()
    img.src = 'image.png'
    img.onload = function () {
        ctx.drawImage(img, 100, 100, 300, 150)
    }
}