function pages17() {
	//初始化模板所需要的状态值
	this.init = function () {
	}
	this.loadSouce = function (data, type) {
	 this.video=document.createElement("video");
	 this.video.src="page17/pages17/video/6.mp4"
	 this.video.autoplay="autoplay";
	 this.video.muted=true;
	 this.video.setAttribute("loop",true)
	 this.video.setAttribute("preload","auto")
	 this.video.setAttribute("webkit-playsinline",true)
	 this.video.setAttribute("playsinline",true)
	 this.tip=1;
	}
	this.rend = function () {
	 VideoDraw(this.video, .5, .5, 1, 1, 0); 
	};
	this.work = function () {
	 if(this.tip){
	  this.tip=0
	  this.video.play()
	 }
	};
	this.exec = function (rx, ry) {
	 // console.log(this.video)
	 // this.video.play()
	}
	this.pagedown = function () {
	 this.video.src = ""
	}
	this.pageup = function () {
	 this.video.src = ""
	}
}