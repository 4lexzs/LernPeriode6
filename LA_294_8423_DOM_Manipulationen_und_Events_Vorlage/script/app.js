const quotes = {
  quotes: [
    {
      id: 1,
      quote:
        "Life isn’t about getting and having, it’s about giving and being.",
      author: "Kevin Kruse",
    },
    {
      id: 2,
      quote:
        "Whatever the mind of man can conceive and believe, it can achieve.",
      author: "Napoleon Hill",
    },
    {
      id: 3,
      quote: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein",
    },
    {
      id: 4,
      quote:
        "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
      author: "Robert Frost",
    },
    {
      id: 5,
      quote: "I attribute my success to this: I never gave or took any excuse.",
      author: "Florence Nightingale",
    },
    {
      id: 6,
      quote: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky",
    },
    {
      id: 7,
      quote:
        "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
      author: "Michael Jordan",
    },
    {
      id: 8,
      quote:
        "The most difficult thing is the decision to act, the rest is merely tenacity.",
      author: "Amelia Earhart",
    },
    {
      id: 9,
      quote: "Every strike brings me closer to the next home run.",
      author: "Babe Ruth",
    },
    {
      id: 10,
      quote:
        "Definiteness of purpose is the starting point of all achievement.",
      author: "W. Clement Stone",
    },
    {
      id: 11,
      quote:
        "We must balance conspicuous consumption with conscious capitalism.",
      author: "Kevin Kruse",
    },
    {
      id: 12,
      quote:
        "Life is what happens to you while you’re busy making other plans.",
      author: "John Lennon",
    },
    {
      id: 13,
      quote: "We become what we think about.",
      author: "Earl Nightingale",
    },
    {
      id: 14,
      quote:
        "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
      author: "Mark Twain",
    },
    {
      id: 15,
      quote: "Life is 10% what happens to me and 90% of how I react to it.",
      author: "Charles Swindoll",
    },
    {
      id: 16,
      quote:
        "The most common way people give up their power is by thinking they don’t have any.",
      author: "Alice Walker",
    },
    {
      id: 17,
      quote: "The mind is everything. What you think you become.",
      author: "Buddha",
    },
    {
      id: 18,
      quote:
        "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb",
    },
    {
      id: 19,
      quote: "An unexamined life is not worth living.",
      author: "Socrates",
    },
    {
      id: 20,
      quote: "Eighty percent of success is showing up.",
      author: "Woody Allen",
    },
    {
      id: 21,
      quote:
        "Your time is limited, so don’t waste it living someone else’s life.",
      author: "Steve Jobs",
    },
    {
      id: 22,
      quote: "Winning isn’t everything, but wanting to win is.",
      author: "Vince Lombardi",
    },
    {
      id: 23,
      quote:
        "I am not a product of my circumstances. I am a product of my decisions.",
      author: "Stephen Covey",
    },
    {
      id: 24,
      quote:
        "Every child is an artist.  The problem is how to remain an artist once he grows up.",
      author: "Pablo Picasso",
    },
    {
      id: 25,
      quote:
        "You can never cross the ocean until you have the courage to lose sight of the shore.",
      author: "Christopher Columbus",
    },
    {
      id: 26,
      quote:
        "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
      author: "Maya Angelou",
    },
    {
      id: 27,
      quote: "Either you run the day, or the day runs you.",
      author: "Jim Rohn",
    },
    {
      id: 28,
      quote: "Whether you think you can or you think you can’t, you’re right.",
      author: "Henry Ford",
    },
    {
      id: 29,
      quote:
        "The two most important days in your life are the day you are born and the day you find out why.",
      author: "Mark Twain",
    },
    {
      id: 30,
      quote:
        "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
      author: "Johann Wolfgang von Goethe",
    },
  ],
  total: 100,
  skip: 0,
  limit: 30,
};

const AUSBLENDEN_TEXT = "Autoren ausblenden";
const EINBLENDEN_TEXT = "Autoren einblenden";

let createForm = function (parent) {
  let form_el = document.createElement("form");
  let input_el = document.createElement("input");
  input_el.setAttribute("type", "text");
  input_el.setAttribute("placeholder", "Search");
  input_el.classList.add("form-control");
  let btn_el = document.createElement("button");
  btn_el.innerHTML = AUSBLENDEN_TEXT;
  btn_el.addEventListener("click", toggleAuthor);
  form_el.appendChild(input_el);
  form_el.appendChild(btn_el);
  parent.appendChild(form_el);
};

let createListEntry = function (quote, parent) {
  let li_el = document.createElement("li");
  let p_el = document.createElement("p");
  p_el.innerHTML = quote.quote;
  let i_el = document.createElement("i");
  i_el.innerHTML = quote.author;
  li_el.appendChild(p_el);
  li_el.appendChild(i_el);
  parent.appendChild(li_el);
};

let createList = function (parent, filtered_quotes) {
  let old_ul = document.querySelector("#app ul");
  if (old_ul != null) {
    old_ul.remove();
  }
  let list_el = document.createElement("ul");
  filtered_quotes.quotes.forEach((quote) => {
    createListEntry(quote, list_el);
  });
  parent.appendChild(list_el);
};

let filterQuotes = function () {
  let searchTerm = document.querySelector("input").value;
  let filteredQuotes = quotes.quotes.filter((quote) => {
    return quote.quote.toLowerCase().includes(searchTerm.toLowerCase());
  });
  createList(app_el, { quotes: filteredQuotes });
};

let toggleAuthor = function (event) {
  event.preventDefault();
  let author = document.querySelectorAll("i");
  author.forEach((author) => {
    author.classList.toggle("hidden");
  });
  let button = document.querySelector("button");
  if (button.innerHTML == EINBLENDEN_TEXT) {
    button.innerHTML = AUSBLENDEN_TEXT;
  } else {
    button.innerHTML = EINBLENDEN_TEXT;
  }
};

let app_el = document.getElementById("app");
let h1_el = document.createElement("h1");
h1_el.innerHTML = "Quotes of the world";
app_el.appendChild(h1_el);
createForm(app_el);
createList(app_el, quotes);
document.querySelector("input").addEventListener("keyup", filterQuotes);
