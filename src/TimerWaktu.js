// Kelas menghitung waktu
export default class TimerWaktu {
    constructor(numberDurationInput, startButtonEl, pauseButtonEl, callbacks) {
        this.numberDurationInput = numberDurationInput;
        this.startButtonEl = startButtonEl;
        this.pauseButtonEl = pauseButtonEl;

        if (callbacks) {
            this.onStartCallback = callbacks.onStart;
            this.onTickCallback = callbacks.onTick;
            this.onCompleteCallback = callbacks.onComplete;
        }

        this.intervalId = 0;

        this.initListenerEl();
    }

    initListenerEl() {
        // Menggunakan arrow function untuk memperbaiki masalah this scope
        this.startButtonEl.addEventListener('click', event => {
            this.startTimer(event);
        });

        this.pauseButtonEl.addEventListener('click', event => {
            this.pauseTimer(event);
        });
    }

    // this berisi nilai parameter dan context dimana this ini berada
    // bisa berisi nilai dari kelas ataupun dari object atau bisa global window
    startTimer() {
        if (this.onStartCallback) {
            this.onStartCallback(this.timeRemaining);
        }

        this.tickWaktu();
        this.intervalId = setInterval(() => {
            this.tickWaktu();
        }, 20);
    }

    pauseTimer() {
        // hentikan timer sementara waktu
        clearInterval(this.intervalId);
    }

    onDurationChange() {}

    tickWaktu() {
        // Dengan cek getter dan setter
        if (this.timeRemaining <= 0) {
            this.pauseTimer();
            if (this.onCompleteCallback) {
                this.onCompleteCallback();
            }
        } else {
            this.timeRemaining -= 0.02;
            if (this.onTickCallback) {
                this.onTickCallback(this.timeRemaining);
            }
        }
    }

    // Dengan getter dan setter
    // Menyimpan nilai di dalam DOM
    get timeRemaining() {
        return parseFloat(this.numberDurationInput.value);
    }

    set timeRemaining(time) {
        this.numberDurationInput.value = time.toFixed(2);
    }
}
