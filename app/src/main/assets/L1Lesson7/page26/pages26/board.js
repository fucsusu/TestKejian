function pages26() {
	//初始化模板所需要的状态值
	 this.init = function () {
		this.bg = new Image();
		this.bg.src = "page26/pages26/img/bg.jpg";

	    }
	    this.loadSouce = function (data, type) {
	//         this.bg = new Image();
	//         this.bg.src = data.BackgroundImage;
            

	    }
	    this.rend = function () {
	   FrameDraw(this.bg, 0.5, 0.5, 1, 1, 0);
     
            
	//         this.WorkImage.show(.5,.52, .43, .3, .5, 0)
	    };
	    this.work = function () {
	        
	    };
	    this.exec = function (rx, ry) {
	        //world.pagedown();
	    }
	    this.pagedown = function () {
	    }
	    this.pageup = function () {
	    }
}