// TIMERAPP Membuat aplikasi Timer dengan JavaScript
class Timer {
    constructor(numberDurationInput, startButtonEl, pauseButtonEl) {
        this.numberDurationInput = numberDurationInput;
        this.startButtonEl = startButtonEl;
        this.pauseButtonEl = pauseButtonEl;

        this.initListenerEl();
    }

    initListenerEl() {
        // Bermasalah dengan scope this karena this berisi nilai startButtonElement
        // this.startButtonEl.addEventListener('click', function(event) {
        //     console.log(this);
        //     this.startTimer(event);
        // });

        // Dengan menggunakan bind untuk memperbaiki masalah this scope
        // this.startButtonEl.addEventListener(
        //     'click',
        //     function(event) {
        //         console.log(this);
        //         console.log(event);
        //     }.bind(this),
        // );

        // Menggunakan arrow function untuk memperbaiki masalah this scope
        this.startButtonEl.addEventListener('click', event => {
            this.startTimer(event);
        });
    }

    startTimer(event) {
        // this berisi nilai parameter dan context dimana this ini berada
        // bisa berisi nilai dari kelas ataupun dari object atau bisa global window
        console.log(this, event);
        console.log('Start timer dimulai');
    }

    stopTimer() {
        console.log('Stop timer yang dimulai');
    }

    pauseTimer(event) {
        // hentikan timer sementara waktu
        console.log(event);
    }
}

const durasiInputEl = document.querySelector('#input_duration');
const startButtonEl = document.querySelector('#button_start');
const pauseButtonEl = document.querySelector('#button_pause');

const timerWaktu = new Timer(durasiInputEl, startButtonEl, pauseButtonEl);
