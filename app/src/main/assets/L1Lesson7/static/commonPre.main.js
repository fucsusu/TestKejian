function World() {
  for (this.boards = [], this.page = 0,
    board = eval("new " + pageObj[depends[this.page]]),
    this.boards.push(board), x = 0; x < depends.length - 1; x++)
    board = eval("new " + pageObj[depends[x]]),
    this.boards.push(0);
  this.init = function () {
      this.boards[this.page].init()
    },
    this.loadSouce = function () {
      this.boards[this.page].loadSouce(window[depends[this.page]], "lesson")
    },
    this.work = function () {
      this.boards[this.page].work()
    },
    this.rend = function () {

      this.boards[this.page].rend()
    },
    this.exec = function (e, t) {
      // .9 < e && t < .1 ? this.pagedown() : e < .1 && t < .1 ? this.pageup() : this.boards[this.page].exec(e, t)
      this.boards[this.page].exec(e, t)
    },
    this.pageup = function () {
      0 < this.page && (this.page--, this.boards[this.page] = eval("new " + pageObj[depends[this.page]]), this.boards[this.page].init(), this.boards[this.page].loadSouce(window[depends[this.page]], "lesson")),
        this.boards[this.page + 1].pageup && this.boards[this.page + 1].pageup()
    },
    this.pagedown = function () {
      this.page < depends.length - 1 && (this.page++, this.boards[this.page] = eval("new " + pageObj[depends[this.page]]), this.boards[this.page].init(), this.boards[this.page].loadSouce(window[depends[this.page]], "lesson")),
        0 < this.page && this.boards[this.page - 1].pagedown && this.boards[this.page - 1].pagedown()
    },
    this.topage = function (p) {
      //this.boards[0].video.pause();
      this.page = p,
      this.boards[this.page-1] = eval("new " + pageObj[depends[this.page-1]]),
        this.boards[this.page-1].init(),
        this.boards[this.page-1].loadSouce(window[depends[this.page-1]], "lesson"),

        this.boards[this.page] = eval("new " + pageObj[depends[this.page]]),
        this.boards[this.page].init(),
        this.boards[this.page].loadSouce(window[depends[this.page]], "lesson"),
        0 < this.page && this.boards[this.page - 1].pagedown && this.boards[this.page - 1].pagedown()
        console.log(this.page)
    },
    this.allSource = 0,
    this.allSourceFalse = 0,
    this.MyName = "",
    this.YouName = "",
    this.clickTip = 0,
    this.Works,
    this.Rendings
    this.trueAudio = new Audio(); //正确音频
		this.trueAudio.src = "static/audio/Great.mp3";
		this.trueAudio.preload="auto"
		this.errorAudio = new Audio(); //错误音频
		this.errorAudio.src = "static/audio/error.mp3";
    this.errorAudio.preload="auto"
}

function init() {
    count = 0,
    world = new World,
    world.init(),
    world.loadSouce(),
    Pagenum = 0,
    imgbkg = new Image,
    imgbkg.src = "static/image/bkg.jpg",
    // imgbkg.src = "",
    imgframe = new Image,
    imgframe.src = "static/image/frame.jpg",
    // imgframe.src = "",
    SizeY > .5625 * SizeX ? (framepx = 0, framesx = SizeX, framepy = (SizeY - .5625 * SizeX) / 2, framesy = .5625 * SizeX) : (framepx = (SizeX - SizeY / .5625) / 2, framesx = SizeY / .5625, framepy = 0, framesy = SizeY)
}

function execMessage(e) {

  if (e.source == window.parent) {
    var t = e.data;
    "onPageup" == (t = JSON.parse(t)).method && world.pageup(),
      "onPagedown" == t.method && world.pagedown(),
      "onJumpPage" == t.method && (p = t.toPage, world.topage(p - 1)),
      "onFileMessage" == t.method && (world.boards[world.page].status = t.status, px = t.posx, py = t.posy, world.boards[world.page].exec(px, py))
  }
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
  for (xy = 0; xy < depends.length; xy++) 0 == world.boards[xy] && count > 500 * xy - 450 && (world.boards[xy] = eval("new " + pageObj[depends[xy]]), world.boards[xy].init(), world.boards[xy].loadSouce(window[depends[xy]]));
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

function RotaleTxt(e, t, a, n, o, s, i, r) {
  tempContext.fillStyle = r,
    tempContext.translate(t, a),
    tempContext.rotate(-o * Math.PI / 180),
    tempContext.font = "" + framesx * n / 1e3 + "px Arial",
    tempContext.fillText(e, -s * framesx * n / 1e3, -i * framesx * n / 1e3),
    tempContext.rotate(o * Math.PI / 180),
    tempContext.translate(-t, -a)
}

function RotalePic(e, t, a, n, o, s, i, r) {
  "" != e.src && (0 != s ? (tempContext.translate(t, a), tempContext.rotate(-s * Math.PI / 180), e.complete && tempContext.drawImage(e, -i, -r, n, o), tempContext.rotate(s * Math.PI / 180), tempContext.translate(-t, -a)) : e.complete && tempContext.drawImage(e, t - i, a - r, n, o))
}

function DrawVideo(e, t, n, a, o, i) {
  "" != e.src && (0 != i ? (tempContext.translate(t, n), tempContext.rotate(-i * Math.PI / 180), tempContext.drawImage(e, -a / 2, -o / 2, a, o), tempContext.rotate(i * Math.PI / 180), tempContext.translate(-t, -n)) : tempContext.drawImage(e, t - a / 2, n - o / 2, a, o))


}

function DrawSth(e, t, a, n, o, s) {
  0 != s ? (tempContext.translate(t, a), tempContext.rotate(-s * Math.PI / 180), e.complete && tempContext.drawImage(e, -n / 2, -o / 2, n, o), tempContext.rotate(s * Math.PI / 180), tempContext.translate(-t, -a)) : e.complete && tempContext.drawImage(e, t - n / 2, a - o / 2, n, o)
}

function FrameDraw(e, t, a, n, o, s) {
  DrawSth(e, framepx + t * framesx, framepy + a * framesy, framesx * n, framesy * o, s)
}

function VideoDraw(e, t, n, a, o, i) {
  "" != e.src && DrawVideo(e, framepx + t * framesx, framepy + n * framesy, framesx * a, framesy * o, i)
}

function FrameRotale(e, t, a, n, o, s, i, r) {
  RotalePic(e, framepx + t * framesx, framepy + a * framesy, framesx * n, framesy * o, s, framesx * i, framesx * r)
}

function FrameTxt(e, t, a, n, o) {
  tempContext.font = " " + framesy * t / 100 + "px Arial",
    tempContext.fillStyle = o,
    tempContext.fillText(e, framepx + a * framesx, framepy + n * framesy)
}

function PaperSets(e) {
  for (x in this.currentSprite = 0, this.imgs = [], e) this.imgs[x] = new Image,
    this.imgs[x].src = e[x];
  this.papernum = this.imgs.length,
    this.show = function (e, t, a, n, o, s) {
      FrameDraw(this.imgs[parseInt(count * e) % this.papernum], t, a, n, o, s)
    },
    this.showOnce = function (e, t, a, n, o, s, i) {
      this.currentSprite++,
        parseInt(this.currentSprite * e) >= this.papernum - 1 ? FrameDraw(this.imgs[this.papernum - 1], t, a, n, o, s) : FrameDraw(this.imgs[parseInt(this.currentSprite * e) % this.papernum], t, a, n, o, s)
    }
}

function load_tempers_js2() {
  var e = document.getElementsByTagName("head"),
    t = document.createElement("script");
  t.src = "static/jsmpeg.js",
    t.type = "text/javascript",
    e[0].appendChild(t);
  e = document.getElementsByTagName("head")
}

function load_tempers_js1() {
  for (x in depends) {
    var e = document.getElementsByTagName("head"),
      t = document.createElement("script");
    t.src = depends[x] + "/" + pageObj[depends[x]] + "/config.js",
      t.type = "text/javascript",
      e[0].appendChild(t);
    e = document.getElementsByTagName("head")
  }
}

function load_tempers_js() {
  for (x in depends) {
    var e = document.getElementsByTagName("head"),
      t = document.createElement("script");
    t.src = depends[x] + "/" + pageObj[depends[x]] + "/board.js",
      t.type = "text/javascript",
      e[0].appendChild(t);
    e = document.getElementsByTagName("head")
  }
}

function SizeInit() {
  // canvas = document.getElementById("event_canvas"),
  canvas = document.getElementById("canvas"),
    canvas.getContext ? (tempContext = canvas.getContext("2d"), tempContext.canvas.height = window.innerHeight, tempContext.canvas.width = window.innerWidth, SizeX = tempContext.canvas.width, SizeY = tempContext.canvas.height, SizeX < SizeY ? (temps = SizeY, SizeY = SizeX, SizeX = temps, isrotate = 1, tempContext.rotate(90 * Math.PI / 180), tempContext.translate(0, -SizeY)) : isrotate = 0, SizeY > .5625 * SizeX ? (framepx = 0, framesx = SizeX, framepy = (SizeY - .5625 * SizeX) / 2, framesy = .5625 * SizeX) : (framepx = (SizeX - SizeY / .5625) / 2, framesx = SizeY / .5625, framepy = 0, framesy = SizeY)) : console.log("Canvas not supported. Please install a HTML5 compatible browser.")
}
function Drow(){
  this.Works=window.setInterval(Work, 20);
  this.Rendings=window.setInterval(Rending, 20)
}
function clearDrow(){
  clearInterval(this.Works)
  clearInterval(this.Rendings)
}

window.onload = load_tempers_js1(),
  window.onload = load_tempers_js(),
  window.onload = function () {
    SizeInit();
    var e = {
      method: "onPagenum",
      totalPages: depends.length
    };
    e = JSON.stringify(e),
      window.parent.postMessage(e, "*"),
      -1 != navigator.userAgent.indexOf("iPhone") || -1 != navigator.userAgent.indexOf("iPod") || -1 != navigator.userAgent.indexOf("iPad") || -1 != navigator.userAgent.indexOf("Android") || -1 != navigator.userAgent.indexOf("Linux") ? (canvas.addEventListener("touchstart", doTouchStart, !1), canvas.addEventListener("touchmove", doTouchMove, !1), canvas.addEventListener("touchend", doTouchEnd, !1), evt = "onorientationchange" in window ? "orientationchange" : "resize", window.addEventListener(evt, SizeInit, !1)) : (canvas.addEventListener("mousedown", doMouseDown, !1), canvas.addEventListener("mousemove", doMouseMove, !1), canvas.addEventListener("mouseup", doMouseUp, !1), window.addEventListener("keydown", doKeydown, !1), window.addEventListener("keyup", doKeyup, !1), window.onresize = function () {
        SizeInit()
      }),
      window.addEventListener("message", execMessage, !1);
    e = {
      method: "onLoadComplete"
    };
    e = JSON.stringify(e),
      window.parent.postMessage(e, "*"),
      started = 1,
      document.addEventListener("touchstart",
        function () {
          0 == started && (started = 1)
        },
        !1),
      document.addEventListener("mousedown",
        function () {
          0 == started && (started = 1)
        },
        !1),
      init(),
      Drow()
  };