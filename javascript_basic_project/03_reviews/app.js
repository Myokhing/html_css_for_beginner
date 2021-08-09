// local reviews data
const reviews = [ 
  {
    id: 1,
    name: "အောင်အောင်",
    job: "အိုင်တီ ပညာရှင်",
    img: "img/11.jpg",
    text:
      " နေရပ်လိပ် စာ - မြန်မာ - မန်းလေး",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "img/12.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "img/13.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "img/14.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const img = document.getElementById("person-img");
console.log(img);
const author = document.getElementById("author");
console.log(author);
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBth = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

// load initial item

window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];

  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
  //console.log(item);
});

//show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
//show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
//show prev person
prevBth.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
//show random person
randomBtn.addEventListener("click", function () {
 console.log('Hello');
 showPerson(currentItem);
})

