function pages2_1() {
	    //初始化模板所需要的状态值
	    this.init = function () {
	        
	    }
	    this.loadSouce = function (data, type) {
	        this.bg = new Image();
	        this.bg.src = data.BackgroundImage;
	        serc = [];
	        for (var x = 0; x < 25; x++) {
	            serc[x] = 'page2_1/pages2_1/img/work/' + (x + 1) + '.png';
	        }
	        this.WorkImage = new PaperSets(serc);
	    }
	    this.rend = function () {
	        FrameDraw(this.bg, 0.5, 0.5, 1, 1, 0);
	        this.WorkImage.show(.5,.52, .4, .3, .5, 0)
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