import * as rxjs from "rxjs";

const modes = {
    SCROLL: 0,
    HOVER: 1
}

export class MagicMaxi{
     constructor(canvasId, animationSources, mode, options, showFirstImageWhenLoaded = true, showLoadingIndicator = false, onLoadingFirstImgFinished, autoLoadFrames = false){
        this.canvasId = canvasId;
        this.canvas = document.getElementById(canvasId);
        this.imgAmount = animationSources.length;
        this.animationSources = animationSources;
        this.mode = mode;
        this.showLoadingIndicator = showLoadingIndicator;
        // this.imageFileNames = imageFileNames;
        this.onLoadingFirstImgFinished = onLoadingFirstImgFinished;
        this.currentFrameIndex = options.startFrameIndex ? options.startFrameIndex : 0;
        this.autoLoadFrames = autoLoadFrames;
        /**
         * @type {speed: number, scene: Object, startFrameIndex: number}
         * @description speed: hover animation speed for Hover Mode, scene: ScrollMagic Scene for Scroll Mode
         */
        this.options = options;
        this.showFirstImageWhenLoaded = showFirstImageWhenLoaded;
    }
    async init(){

        const self = this;
        return new Promise((resolve, reject) => {
            self.ctx = self.canvas.getContext('2d');
            self.ctx.fillStyle = 'white';
            self.ctx.font = 'bold 30px Helvetica';
            self.ctx.lineWidth = 10;

            // await self.sleep(5000);

            let firstImage = null;

            const startFrameIndex = self.options.startFrameIndex ? self.options.startFrameIndex : 0;
            const img = new Image();
            img.src = this.animationSources[startFrameIndex];
            img.onload = (e) => {
                self.drawImage(img);
                firstImage = img;
                self.firstImage = img;
                resolve();
            }



            let oldText = '';


            if(this.autoLoadFrames)
            {
                this.loadFrames();
            }
        });

        // window.addEventListener('load', function(){




        // });



    }

    async loadFrames()
    {
        const firstImage = this.firstImage;
        const self = this;
        let loadedImages = 0;
        function updateProgress(image)
        {

            loadedImages++;
            const progress = Math.round((loadedImages / self.imgAmount) * 100) + '%';
            // if(!firstImage && !self.options.startFrameIndex){
            //
            //     firstImage = image.img;
            // }
            if(self.showFirstImageWhenLoaded && firstImage)
            {
                self.clearCanvas();
                self.drawImage(firstImage);
                if(self.showLoadingIndicator)
                {

                    self.ctx.fillText(progress, self.canvas.width/2, self.canvas.height/2);
                }
            }
            // else if(!firstImage && !self.showFirstImageWhenLoaded){
            //     firstImage = image.img;
            //     self.drawImage(firstImage);
            // }
        }

        return new Promise((resolve, reject) => {

            rxjs.forkJoin(
                self.animationSources.map((filename, i) => {

                    return rxjs.Observable.create(observer => {
                        const img = new Image();
                        img.src = self.animationSources[i];
                        img.onload = (e) => {

                            observer.next({
                                img: img,
                                filename: filename
                            });
                            observer.complete();
                        };
                    }).pipe(rxjs.tap(x => updateProgress(x)));
                })
            ).subscribe(
                (images) => {
                    const imgIndexRegex = /.*\_(?<index>\d{1,3})*\_.*\.(png|jpe?g|svg|webp)/;

                    const sortData = (nodeArr) => nodeArr.sort((a,b)=> a.filename.match(imgIndexRegex).groups.index - b.filename.match(imgIndexRegex).groups.index);

                    self.images = sortData(images);
                    const firstImg = images[self.options.startFrameIndex ? self.options.startFrameIndex : 0].img;
                    self.drawImage(firstImg);


                    switch (self.mode)
                    {
                        case modes.SCROLL:
                            self.initScroll(images);
                            break;
                        case modes.HOVER:
                            self.initHover(images);
                            break;
                        default:
                            break;
                    }
                    resolve(this.canvasId);

                }, (err) => {
                    console.log(err);
                    reject();
                }, () => {
                    console.log('done: ' + self.canvasId);
                }
            );
        });
    }



    static get modes(){
        return modes;
    }

    clearCanvas(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    animateToFrame(frameIndex)
    {

    }

    drawImage(img) {
        this.ctx.drawImage(img, this.canvas.width / 2 - img.width / 2,
            this.canvas.height / 2 - img.height / 2, img.width, img.height);
    }

    initScroll(images) {
        const self = this;
        let initAnimationFinished = false;
        setTimeout(async () => {
                const goalImageIndex = Math.round(self.imgAmount * this.options.scene.progress());
                const startFrame = self.options.startFrameIndex ? self.options.startFrameIndex : 0;

                var steps = Math.abs(goalImageIndex - startFrame);
                var speed = 5;
                let currentMax = 0;
                for (var i = 0; i < steps+1; i++) {
                    self.clearCanvas();
                    let imageIndex = 0;
                    if(goalImageIndex > startFrame)
                    {
                        imageIndex = startFrame + i;
                    }
                    else {
                        imageIndex = startFrame - i;
                    }
                    const img = images[imageIndex !== 0 ? imageIndex - 1: imageIndex].img;
                    self.drawImage(img);
                    // var stepValue = easeInOutQuad(i, 0, speed*steps, steps);
                    await self.sleep(10);
                }
                initAnimationFinished = true;

        }, 0);
        this.options.scene.on("progress", function (event) {
            if (initAnimationFinished){
                self.clearCanvas();
                const imageIndex = Math.round(self.imgAmount * event.progress);
                const img = images[imageIndex !== 0 ? imageIndex - 1: imageIndex].img;
                self.drawImage(img);
                console.log(imageIndex)
            }
        });
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    initHover(images) {
        const speed = this.options.speed;
        let currentFrame = this.options.startFrameIndex ? this.options.startFrameIndex : 0;
        console.log(currentFrame);
        let currentlyHovering = false;
        const self = this;

       function onHover(){
           currentlyHovering = true;
           setTimeout(async () => {
               while(currentlyHovering && currentFrame < self.imgAmount - 1)
               {
                   self.clearCanvas()
                   const img = images[currentFrame].img;
                   self.drawImage(img);
                   currentFrame++;
                   await self.sleep(speed - currentFrame);
               }
           });
       }

       if(this.canvas.matches(':hover')) {
           onHover();
       }

        this.canvas.addEventListener("mouseenter", () => {
            onHover()
        })

        this.canvas.addEventListener("mouseleave", () => {
            currentlyHovering = false;
            setTimeout(async () => {
                while(!currentlyHovering && currentFrame > 0)
                {
                    self.clearCanvas();
                    const img = images[currentFrame].img;
                    self.drawImage(img);
                    currentFrame--;
                    await self.sleep(speed - currentFrame);
                }
            });
        })
    }
}