var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var x = 10
var y = 20

function buatGambar() {
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.translate(0, 0)
    // reset gambar/
    ctx.clearRect(0, 0, canvas.width, canvas.height)


    if (x < 300) x += 2
    if (y < 300) y += 2

    ctx.translate(x, y)
    ctx.fillStyle = 'red'
    ctx.fillRect(10, 20, 80, 50)
}

setInterval(buatGambar, 1000)