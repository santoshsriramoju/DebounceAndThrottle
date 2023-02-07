
const btn = document.querySelector(".increment-btn");
const btnPress = document.querySelector(".increment-pressed");
const count = document.querySelector(".increment-count");

var pressedCount = 0;
var triggeredCount = 0;

const debouncedCount = _.debounce(() => {
    count.innerHTML = ++triggeredCount;
}, 800)

// const throttledCount = _.throttle(() => {
//     count.innerHTML = ++triggeredCount;
// }, 800)

// const myDebounce = ((cb, d) => {
//     let timer;
//     return function (...args) {
//         if (timer) clearTimeout(timer);
//         timer = setTimeout(() => {
//             cb(...args);
//         }, d)
//     }
// })

// const debouncedCount = myDebounce(() => {
//     triggeredCount += 1;
//     count.innerHTML = triggeredCount;
// }, 800)

const myThrottle = (cb, d) => {
    let last = 0;

    return function (...args) {
        let now = new Date().getTime();
        if (now - last < d) return;
        last = now;
        return cb(...args);
    }
}

var throttled = myThrottle(() => {
    triggeredCount += 1;
    count.innerHTML = triggeredCount;
}, 1000)



btn.addEventListener('click', () => {
    btnPress.innerHTML = ++pressedCount;
    // debouncedCount();
    throttled();
})





