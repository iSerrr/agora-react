class Timer {
    constructor(fn, t) {
        this.fn = fn
        this.t = t
    }

    interval = null

    stop() {
        clearInterval(this.interval);
        this.interval = null;
        return this
    }

    start() {
        if (!this.interval) {
            this.interval = setInterval(this.fn, this.t)
        }
        return this
    }

    reset(t = this.t) {
        this.t = t
        return this.stop().start()
    }
}

export default Timer
