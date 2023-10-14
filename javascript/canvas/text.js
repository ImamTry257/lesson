var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

buatGambar()

function buatGambar() {
    ctx.fillStyle = 'red'
    ctx.strokeStyle = 'blue'
    ctx.font = 'italic bold 40px arial'
    ctx.textBaseAline = 'top'
    // ctx.textAlign = 'center'
    ctx.fillText('HTML5 Canvas', 50, 50)
    ctx.strokeText('HTML5 Canvas', 50, 200)
}