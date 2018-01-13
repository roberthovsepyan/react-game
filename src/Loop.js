export default class Loop {
    constructor () {
        this.loopID = null;
        this.loop = this.loop.bind(this);
        this.subscribers = undefined;
    }

    loop () {
        this.loopID = null;
        this.subscribers.call();
        this.start();
    }

    start () {
        if (!this.loopID) {
            this.loopID = window.requestAnimationFrame(this.loop);
        }
    }

    stop () {
        if (this.loopID) {
            window.cancelAnimationFrame(this.loopID);
            this.loopID = null;
        }
    }

    subscribe (callback) {
        this.subscribers = callback;
    }
}