const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  let intervalId = null;

  return (seconds) => {
    clearInterval(intervalId);
    let remainingSeconds = seconds;

    intervalId = setInterval(() => {
      remainingSeconds--;
      if (remainingSeconds < 0) {
        clearInterval(intervalId);
        return;
      }

      const hours = Math.floor(
        remainingSeconds / 3600
      );
      const minutes = Math.floor(
        (remainingSeconds % 3600) / 60
      );
      const seconds = remainingSeconds % 60;

      const formattedTime = [
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0"),
      ].join(":");

      timerEl.textContent = formattedTime;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

console.log(inputEl);

inputEl.addEventListener("input", () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(
    /\D/g,
    ""
  );
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
