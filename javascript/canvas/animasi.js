var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var x = 10
var y = 20

function buatGambar() {
    // reset gambar
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (x < 300) x += 4
    ctx.fillStyle = 'red'
    ctx.strokeStyle = 'blue'
    ctx.fillRect(x, y, 80, 50)
    ctx.strokeRect(x, y, 80, 50)
}

setInterval(buatGambar, 1000)