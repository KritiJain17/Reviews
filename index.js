
const reviews = [
  { 
    id:1,
    Img :"download.jpg",
    Name:"Davy Jones",
    job:"Pirate",
    review:"A traitor!",
  },
  { 
    id:2,
    Img :"https://static1.moviewebimages.com/wordpress/wp-content/uploads/article/363zfJdrCxC4VDiD8oiJKUwHc6Qtfo.jpg?q=50&fit=contain&w=1500&h=790&dpr=1.5",
    Name: "Captain Jack Sparrow",
    job:"Pirate",
    review:"The captain of The Black Pearl",
  },
  { 
    id:3,
    Img : "https://upload.wikimedia.org/wikipedia/en/0/0f/Barbossa_in_Pirates_of_the_Caribbean_At_World%27s_End.JPG",
    Name:"Barbossa",
    job:"Pirate",
    review:"The man who knows ocean in depths",
  },
];

const img = document.getElementById("Img");
const Name = document.getElementById("Name");
const job = document.getElementById("job");
const review = document.getElementById("review");

const prev_btn = document.querySelector(".prev_btn");
const next_btn = document.querySelector(".next_btn");
const random_btn= document.querySelector(".random_btn");

let currentItem = 0;

window.addEventListener("DOMContentLoader", function(){
  showData(currentItem);
});

function showData(person){
  const item = reviews[person];

  img.src = item.Img;
  Name.textContent = item.Name;
  job.textContent = item.job;
  review.textContent = item.review;
}

prev_btn.addEventListener("click", function(){
  if(currentItem == 0){
    currentItem = reviews.length - 1;
  }
  else
   currentItem = currentItem - 1; 
   showData(currentItem);
});

next_btn.addEventListener("click", function(){
  if(currentItem == reviews.length-1){
    currentItem = 0;
  }
  else
   currentItem = currentItem + 1;
   showData(currentItem);
});

random_btn.addEventListener("click",function(){
  currentItem = Math.floor(Math.random() * reviews.length);
  showData(currentItem);
});




