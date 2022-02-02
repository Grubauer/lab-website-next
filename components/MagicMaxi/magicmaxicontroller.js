
export class MagicMaxiController{
    static magicMaxis = [];
    static normalImages = [];
    static loaderTimer = null;


    static addMagicMaxi(magicMaxi){
        this.magicMaxis.push({
            magicMaxi: magicMaxi,
            firstImgLoaded: false,
            animationLoaded: false
        });

        magicMaxi.init().then(() => {
            this.magicMaxis.find(x => x.magicMaxi === magicMaxi).firstImgLoaded = true;
        });

        !this.loaderTimer && this.startLoaderTimer();
    }

    static addNormalImage(imageId){
        // console.log('addNormalImage', imageId);
        if (this.normalImages.indexOf(imageId) === -1){
            this.normalImages.push({
                id: imageId,
                loaded: false
            });
        }

    }

    static setLoadedStatusForNormalImage(imageId)
    {
        // console.log('setLoadedStatusForNormalImage', imageId);
        if(this.normalImages.find(x => x.id === imageId))
            this.normalImages.find(x => x.id === imageId).loaded = true;
    }

    static startLoaderTimer()
    {

        this.loaderTimer = setInterval(() => {
            let allLoaded = true;
            this.magicMaxis.forEach(x => {
                if(!x.firstImgLoaded){
                    allLoaded = false;
                }
            });

            // this.normalImages.forEach(x => {
            //     if(!x.loaded){
            //         allLoaded = false;
            //     }
            // });

            // console.log('allLoaded', allLoaded);
            // console.log('normalImages', this.normalImages);

            if(allLoaded){
                clearInterval(this.loaderTimer);
                this.loaderTimer = null;
                this.magicMaxis.filter(x => !x.animationLoaded).forEach(x => {
                    x.magicMaxi.loadFrames().then(() => {
                        x.animationLoaded = true;
                    });

                });
            }
        }, 1000);
    }

    // static loadAnimations()
    // {
    //     this.loaderTimer && clearInterval(this.loaderTimer);
    //     this.loaderTimer = null;
    //
    // }

}