class Music {
  constructor(title, singer, img, file) {
    this.title = title;
    this.singer = singer;
    this.img = img;
    this.file = file;
  }

  getName() {
    return this.title + " - " + this.singer;
  }
}

const musicList = [
  new Music("Gangsta's Paradise", "Coolio", "1.jpeg", "1.mp3"),
  new Music("The Unforgiven", "Metallica", "2.jpeg", "2.mp3"),
  new Music("Not Afraid", "Eminem", "3.jpeg", "3.mp3"),
  new Music("Wind Of Change", "Scorpions", "4.jpeg", "4.mp3"),
];
