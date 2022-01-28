
export class MagicMaxiController{
    static magicMaxis = [];
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

    static startLoaderTimer()
    {

        this.loaderTimer = setInterval(() => {
            let allLoaded = true;
            this.magicMaxis.forEach(x => {
                if(!x.firstImgLoaded){
                    allLoaded = false;
                    return;
                }
            });

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