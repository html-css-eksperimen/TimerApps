/* eslint-disable max-classes-per-file */
// TIMERAPP Membuat aplikasi Timer dengan JavaScript
// class Timer {
//     constructor(numberDurationInput, startButtonEl, pauseButtonEl) {
//         this.numberDurationInput = numberDurationInput;

//         // karena ada keyword getter get, tidak perlu pake kurung buka tutup
//         this.numberSisaWaktu = this.getTimeRemaining();

//         this.startButtonEl = startButtonEl;
//         this.pauseButtonEl = pauseButtonEl;

//         this.intervalId = 0;

//         this.initListenerEl();
//     }

//     initListenerEl() {
//         // Bermasalah dengan scope this karena this berisi nilai startButtonElement
//         // this.startButtonEl.addEventListener('click', function(event) {
//         //     console.log(this);
//         //     this.startTimer(event);
//         // });

//         // Dengan menggunakan bind untuk memperbaiki masalah this scope
//         // this.startButtonEl.addEventListener(
//         //     'click',
//         //     function(event) {
//         //         console.log(this);
//         //         console.log(event);
//         //     }.bind(this),
//         // );

//         // Menggunakan arrow function untuk memperbaiki masalah this scope
//         this.startButtonEl.addEventListener('click', event => {
//             this.startTimer(event);
//         });

//         this.pauseButtonEl.addEventListener('click', event => {
//             this.pauseTimer(event);
//         });
//     }

//     // this berisi nilai parameter dan context dimana this ini berada
//     // bisa berisi nilai dari kelas ataupun dari object atau bisa global window
//     startTimer() {
//         this.tickWaktu();

//         this.intervalId = setInterval(() => {
//             this.tickWaktu();
//         }, 1000);
//     }

//     stopTimer() {
//         clearInterval(this.intervalId);
//     }

//     pauseTimer() {
//         // hentikan timer sementara waktu
//         clearInterval(this.intervalId);
//     }

//     onDurationChange() {}

//     tickWaktu() {
//         // Dengan cek getter dan setter
//         if (this.timeRemaining <= 0) {
//             this.pauseTimer();
//         } else {
//             this.timeRemaining -= 1;
//         }
//     }

//     onTick() {
//         console.log('Waktu berdetik');
//         if (this.numberSisaWaktu > 0) {
//             // this.numberSisaWaktu -= 1;
//             // this.setTimeInput(this.numberSisaWaktu);

//             // dengan getter setter
//             this.timeRemaining -= 1;
//             this.numberSisaWaktu = this.timeRemaining;
//             // this.numberDurationInput.value = this.numberSisaWaktu - 1;
//         } else {
//             // this.numberSisaWaktu = 0;
//             // this.setTimeInput(this.numberSisaWaktu);

//             // Dengan getter setter
//             this.timeRemaining = 0;
//             this.stopTimer();
//         }
//     }

//     getTimeRemaining() {
//         return parseFloat(this.numberDurationInput.value);
//     }

//     setTimeInput(numberTime) {
//         this.numberDurationInput.value = numberTime;
//     }

//     // Dengan getter dan setter
//     // Menyimpan nilai di dalam DOM
//     get timeRemaining() {
//         return parseFloat(this.numberDurationInput.value);
//     }

//     set timeRemaining(time) {
//         this.numberDurationInput.value = time;
//     }
// }

// class TimerWaktu {
//     constructor(numberDurationInput, startButtonEl, pauseButtonEl, callbacks) {
//         this.numberDurationInput = numberDurationInput;
//         this.startButtonEl = startButtonEl;
//         this.pauseButtonEl = pauseButtonEl;

//         if (callbacks) {
//             this.onStartCallback = callbacks.onStart;
//             this.onTickCallback = callbacks.onTick;
//             this.onCompleteCallback = callbacks.onComplete;
//         }

//         this.intervalId = 0;

//         this.initListenerEl();
//     }

//     initListenerEl() {
//         // Menggunakan arrow function untuk memperbaiki masalah this scope
//         this.startButtonEl.addEventListener('click', event => {
//             this.startTimer(event);
//         });

//         this.pauseButtonEl.addEventListener('click', event => {
//             this.pauseTimer(event);
//         });
//     }

//     // this berisi nilai parameter dan context dimana this ini berada
//     // bisa berisi nilai dari kelas ataupun dari object atau bisa global window
//     startTimer() {
//         if (this.onStartCallback) {
//             this.onStartCallback();
//         }

//         this.tickWaktu();
//         this.intervalId = setInterval(() => {
//             this.tickWaktu();
//         }, 1000);
//     }

//     pauseTimer() {
//         // hentikan timer sementara waktu
//         clearInterval(this.intervalId);
//     }

//     onDurationChange() {}

//     tickWaktu() {
//         // Dengan cek getter dan setter
//         if (this.timeRemaining <= 0) {
//             this.pauseTimer();
//             if (this.onCompleteCallback) {
//                 this.onCompleteCallback();
//             }
//         } else {
//             this.timeRemaining -= 1;
//             if (this.onTickCallback) {
//                 this.onTickCallback();
//             }
//         }
//     }

//     // Dengan getter dan setter
//     // Menyimpan nilai di dalam DOM
//     get timeRemaining() {
//         return parseFloat(this.numberDurationInput.value);
//     }

//     set timeRemaining(time) {
//         this.numberDurationInput.value = time;
//     }
// }

// Dengan ES2015 Import
import TimerWaktu from './TimerWaktu';

const durasiInputEl = document.querySelector('#input_duration');
const startButtonEl = document.querySelector('#button_start');
const pauseButtonEl = document.querySelector('#button_pause');

// const timerWaktu = new TimerWaktu(durasiInputEl, startButtonEl, pauseButtonEl);

// Menggunakan Callback
const timerWaktu = new TimerWaktu(durasiInputEl, startButtonEl, pauseButtonEl, {
    onStart() {
        console.log('Timer dimulai callback');
    },
    onTick() {
        console.log('Timer sedang berdetik');
    },
    onComplete() {
        console.log('Timer sudah selesai');
    },
});
