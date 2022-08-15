var models = [
  {
    name: "Bmw 418d",
    image: "img/bmw.jpg",
    link: "http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe",
  },
  {
    name: "Mazda CX-3",
    image: "img/mazda.jpg",
    link: "http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion",
  },
  {
    name: "Volvo S60",
    image: "img/volvo.jpg",
    link: "http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance",
  },
  {
    name: "Skoda Superb",
    image: "img/skoda.jpg",
    link: "http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active",
  },
  {
    name: "Honda Civic",
    image: "img/honda.jpg",
    link: "http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance",
  },
];

var index = 0;
var slideCount = models.length;
var interval;

var settings = {
  duration: "1000",
  random: true,
};

init(settings);

//Clear interval for
document
  .querySelectorAll(".fa-solid")
  .forEach((item) =>
    item.addEventListener("mouseenter", () => clearInterval(interval))
  );

document
  .querySelectorAll(".fa-solid")
  .forEach((item) => item.addEventListener("mouseleave", () => init(settings)));

function init(settings) {
  var prev;

  interval = setInterval(function () {
    if (settings.random) {
      // random index

      do {
        index = Math.floor(Math.random() * slideCount);
      } while (index == prev);
      prev = index;
    } else {
      //increasing index
      if (slideCount == index + 1) {
        index = -1;
      }
      showSlide(index);
      console.log(index);
      index++;
    }
    // console.log(index);
    showSlide(index);
  }, settings.duration);
}

//Card doms
function showSlide(i) {
  index = i;

  if (i < 0) {
    index = slideCount - 1;
  }
  if (i >= slideCount) {
    index = 0;
  }
  document.querySelector(".card-title").textContent = models[index].name;

  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);

  document.querySelector(".btn").setAttribute("href", models[index].link);
}

//Left & Right Arrows Events
document
  .querySelector(".fa-circle-arrow-left")
  .addEventListener("click", () => {
    index--;
    showSlide(index);
    console.log(index);
  });

document
  .querySelector(".fa-circle-arrow-right")
  .addEventListener("click", () => {
    index++;
    showSlide(index);
    console.log(index);
  });
