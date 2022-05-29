const sec = document.querySelector(".secs");
const min = document.querySelector(".mins");
const hours = document.querySelector(".hours");

function bigBang() {
  const d = new Date();

  let second = d.getSeconds();
  let minute = d.getMinutes();
  let hour = d.getHours();

  sec.style.transform = `rotate(${180 + second * 6}deg)`;
  min.style.transform = `rotate(${180 + minute * 6}deg)`;
  hours.style.transform = `rotate(${180 + hour * 30}deg)`;
}

setInterval(bigBang, 1000);
