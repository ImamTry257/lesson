var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

buatGambar()

function buatGambar() {
    ctx.lineWidth = 5
    ctx.lineCap = 'round'

    ctx.strokeStyle = '#00f'
    ctx.beginPath()
    ctx.moveTo(100, 100)
    ctx.bezierCurveTo(200, 400, 300, 0, 400, 300)
    ctx.stroke()
    ctx.closePath()

    ctx.strokeStyle = '#f00'
    ctx.beginPath()
    ctx.moveTo(200, 100)
    ctx.quadraticCurveTo(300, 300, 400, 100)
    ctx.stroke()
    ctx.closePath()


}