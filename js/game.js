const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");


const game = {
    ducks: [],
    start: () => {
        interval = setInterval(() => {
            updateCanvas();
          }, 10);
    },
    clear: () => {
        context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    },
    stop: () => {
        clearInterval(interval);
    }
}