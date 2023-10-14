var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

// image from input client
var img = new Image()
var open = document.getElementById('open')

open.addEventListener('change', function (g) {
    var file = g.target.files[0]
    var reader = new FileReader()
    reader.onload = function (e) {
        img.src = e.target.result
    }

    reader.readAsDataURL(file)
    buatGambar()
})

function buatGambar() {
    img.addEventListener('load', function () {
        ctx.drawImage(img, 100, 100, 300, 150)
    })
}