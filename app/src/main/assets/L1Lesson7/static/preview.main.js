function World() {
    this.boards = [],
    this.page = 0,
    board = eval("new " + depends[0]),
    this.boards.push(board),
    this.init = function() {
        this.boards[this.page].init()
    },
    this.loadSouce = function() {
        this.boards[this.page].loadSouce(window.preview, "mould")
    },
    this.work = function() {
        this.boards[this.page].work()
    },
    this.rend = function() {
        this.boards[this.page].rend()
    },
    this.exec = function(e, t) {
        this.boards[this.page].exec(e, t)
    }
}
function init() {
    imgbkg = new Image,
    imgbkg.src = "img/image/bkg.jpg",
    imgframe = new Image,
    imgframe.src = "img/image/frame.jpg",
    SizeY > .5625 * SizeX ? (framepx = 0, framesx = SizeX, framepy = (SizeY - .5625 * SizeX) / 2, framesy = .5625 * SizeX) : (framepx = (SizeX - SizeY / .5625) / 2, framesx = SizeY / .5625, framepy = 0, framesy = SizeY),
    count = 0,
    world = new World,
    world.init(),
    world.loadSouce(),
    Pagenum = 0
}
function doKeydown(e) {
    e.keyCode
}
function doKeyup(e) {
    e.keyCode
}
function ExecMove(e, t) {
    1 == isrotate && (tempx = e, e = t, t = SizeY - tempx)
}
function Exec(e, t) {
    1 == isrotate && (tempx = e, e = t, t = SizeY - tempx),
    ex = e - framepx,
    ey = t - framepy,
    rx = ex / framesx,
    ry = ey / framesy,
    world.exec(rx, ry)
}
function doTouchStart(e) {
    for (v in e.targetTouches) {
        var t = e.targetTouches[v];
        Exec(t.pageX, t.pageY)
    }
    e.preventDefault()
}
function doTouchMove(e) {
    for (v in e.targetTouches) {
        var t = e.targetTouches[v];
        ExecMove(t.pageX, t.pageY)
    }
    e.preventDefault()
}
function doTouchEnd(e) {
    for (v in e.changedTouches) {
        var t = e.changedTouches[v];
        t.pageX,
        t.pageY
    }
    e.preventDefault()
}
function doMouseDown(e) {
    Exec(e.pageX, e.pageY)
}
function doMouseMove(e) {
    e.pageX,
    e.pageY
}
function doMouseUp(e) {
    ExecMove(e.pageX, e.pageY)
}
function Work() {
    world.work(),
    count++
}
function clearCanvas() {
    tempContext.clearRect(0, 0, SizeX, SizeY)
}
function Rending() {
    clearCanvas(),
    tempContext.drawImage(imgframe, framepx, framepy, framesx, framesy),
    world.rend(),
    SizeY > .5625 * SizeX ? (tempContext.drawImage(imgbkg, 0, 0, SizeX, framepy), tempContext.drawImage(imgbkg, 0, SizeY - framepy, SizeX, framepy)) : (tempContext.drawImage(imgbkg, 0, 0, framepx, SizeY), tempContext.drawImage(imgbkg, SizeX - framepx, 0, framepx, SizeY))
}
function RotaleTxt(e, t, n, a, o, i, r, s) {
    tempContext.fillStyle = s,
    tempContext.translate(t, n),
    tempContext.rotate( - o * Math.PI / 180),
    tempContext.font = "bold " + framesx * a / 1e3 + "px Arial ",
    tempContext.fillText(e, -i * framesx * a / 1e3, -r * framesx * a / 1e3),
    tempContext.rotate(o * Math.PI / 180),
    tempContext.translate( - t, -n)
}
function RotalePic(e, t, n, a, o, i, r, s) {
    0 != i ? (tempContext.translate(t, n), tempContext.rotate( - i * Math.PI / 180), e.complete && tempContext.drawImage(e, -r, -s, a, o), tempContext.rotate(i * Math.PI / 180), tempContext.translate( - t, -n)) : e.complete && tempContext.drawImage(e, t - r, n - s, a, o)
}
function DrawSth(e, t, n, a, o, i) {
    "" != e.src && (0 != i ? (tempContext.translate(t, n), tempContext.rotate( - i * Math.PI / 180), e.complete && tempContext.drawImage(e, -a / 2, -o / 2, a, o), tempContext.rotate(i * Math.PI / 180), tempContext.translate( - t, -n)) : e.complete && tempContext.drawImage(e, t - a / 2, n - o / 2, a, o))
}
function DrawVideo(e, t, n, a, o, i) {
    "" != e.src && (0 != i ? (tempContext.translate(t, n), tempContext.rotate( - i * Math.PI / 180),  tempContext.drawImage(e, -a / 2, -o / 2, a, o), tempContext.rotate(i * Math.PI / 180), tempContext.translate( - t, -n)) : tempContext.drawImage(e, t - a / 2, n - o / 2, a, o))
}
function FrameDraw(e, t, n, a, o, i) {
    "" != e.src && DrawSth(e, framepx + t * framesx, framepy + n * framesy, framesx * a, framesy * o, i)
}
function VideoDraw(e ,t, n, a, o, i) {
    "" != e.src && DrawVideo(e, framepx + t * framesx, framepy + n * framesy, framesx * a, framesy * o, i)
}
function FrameRotale(e, t, n, a, o, i, r, s) {
    RotalePic(e, framepx + t * framesx, framepy + n * framesy, framesx * a, framesy * o, i, framesx * r, framesx * s)
}
function FrameTxt(e, t, n, a, o) {
    tempContext.font = "bold " + framesy * t / 100 + "px Montserrat-SemiBold",
    tempContext.fillStyle = o,
    tempContext.fillText(e, framepx + n * framesx, framepy + a * framesy)
}
function PaperSets(e) {
    for (x in this.currentSprite = 0, this.imgs = [], e) this.imgs[x] = new Image,
    this.imgs[x].src = e[x];
    this.papernum = this.imgs.length,
    this.show = function(e, t, n, a, o, i) {
        FrameDraw(this.imgs[parseInt(count * e) % this.papernum], t, n, a, o, i)
    },
    this.showOnce = function(e, t, n, a, o, i, r) {
        this.currentSprite++,
        parseInt(this.currentSprite * e) >= this.papernum - 1 ? FrameDraw(this.imgs[0], t, n, a, o, i) : FrameDraw(this.imgs[parseInt(this.currentSprite * e) % this.papernum], t, n, a, o, i)
    }
}
function SizeInit() {
    canvas = document.getElementById("event_canvas"),
    canvas.getContext ? (tempContext = canvas.getContext("2d"), tempContext.canvas.height = window.innerHeight, tempContext.canvas.width = window.innerWidth, SizeX = tempContext.canvas.width, SizeY = tempContext.canvas.height, SizeX < SizeY ? (temps = SizeY, SizeY = SizeX, SizeX = temps, isrotate = 1, tempContext.rotate(90 * Math.PI / 180), tempContext.translate(0, -SizeY)) : isrotate = 0, SizeY > .5625 * SizeX ? (framepx = 0, framesx = SizeX, framepy = (SizeY - .5625 * SizeX) / 2, framesy = .5625 * SizeX) : (framepx = (SizeX - SizeY / .5625) / 2, framesx = SizeY / .5625, framepy = 0, framesy = SizeY)) : console.log("Canvas not supported. Please install a HTML5 compatible browser.")
}
window.onload = function() {
    SizeInit(),
    -1 != navigator.userAgent.indexOf("iPhone") || -1 != navigator.userAgent.indexOf("iPod") || -1 != navigator.userAgent.indexOf("iPad") || -1 != navigator.userAgent.indexOf("Android") || -1 != navigator.userAgent.indexOf("Linux") ? (canvas.addEventListener("touchstart", doTouchStart, !1), canvas.addEventListener("touchmove", doTouchMove, !1), canvas.addEventListener("touchend", doTouchEnd, !1), evt = "onorientationchange" in window ? "orientationchange": "resize", window.addEventListener(evt, SizeInit, !1)) : (canvas.addEventListener("mousedown", doMouseDown, !1), canvas.addEventListener("mousemove", doMouseMove, !1), canvas.addEventListener("mouseup", doMouseUp, !1), window.addEventListener("keydown", doKeydown, !1), window.addEventListener("keyup", doKeyup, !1), window.onresize = function() {
        SizeInit()
    }),
    init(),
    window.setInterval(Work, 20),
    window.setInterval(Rending, 20)
};