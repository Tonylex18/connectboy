document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar").classList.add("navbar-scroll");
      // document.getElementById("navbar-scroll").style.display = "none";
      // navbar_height = document.querySelector(".navbar").offsetHeight;
    } else {
      document.getElementById("navbar").classList.remove("navbar-scroll");
      // document.getElementById("navbar-scroll").style.display = "block";
    }
  });
});
// DOMContentLoaded  end

////CATEGORY 1

function animateTextFinite(interval, content) {
  let text = document.getElementById("text"); //this is where you intend to display the text
  let index = 0; //this gets the first value of the array
  let intID = setInterval(() => {
    text.innerHTML = content[index];
    index++; //this auto increments the index of the array values
    if (index === content.length) {
      clearInterval(intID);
    }
  }, interval);
  return intID;
}
function animateTextInfinite() {
  const fixedInterval = arguments[0] * arguments[1].length;
  let intID = setInterval(() => {
    animateTextFinite(2500, [
      "Bet on global events and trending topics.",
      "Get the best odds on your favourite sports events.",
      "Bet on political elections and events from around the world.",
    ]);
  }, fixedInterval);
  return intID;
}
animateTextInfinite(2500, [
  "Bet on global events and trending topics.",
  "Get the best odds on your favourite sports events.",
  "Bet on political elections and events from around the world.",
]);

///////////
////CATEGORY 2

function animateTextFinite2(interval, content) {
  let text = document.getElementById("text-2"); //this is where you intend to display the text
  let index = 0; //this gets the first value of the array
  let intID = setInterval(() => {
    text.innerHTML = content[index];
    index++; //this auto increments the index of the array values
    if (index === content.length) {
      clearInterval(intID);
    }
  }, interval);
  return intID;
}
function animateTextInfinite2() {
  const fixedInterval = arguments[0] * arguments[1].length;
  let intID = setInterval(() => {
    animateTextFinite2(2500, [
      "Connect your wallet to our meterverse casino to enjoy our new gaming experience.",
      "Play casino games daily and win amazing cash prices.",
      "Buy official lottery tickets to win our weekly and monthly lottery draw.",
    ]);
  }, fixedInterval);
  return intID;
}
animateTextInfinite2(2500, [
  "Connect your wallet to our meterverse casino to enjoy our new gaming experience.",
  "Play casino games daily and win amazing cash prices.",
  "Buy official lottery tickets to win our weekly and monthly lottery draw.",
]);

////////
////CATEGORY 3

function animateTextFinite3(interval, content) {
  let text = document.getElementById("text-3"); //this is where you intend to display the text
  let index = 0; //this gets the first value of the array
  let intID = setInterval(() => {
    text.innerHTML = content[index];
    index++; //this auto increments the index of the array values
    if (index === content.length) {
      clearInterval(intID);
    }
  }, interval);
  return intID;
}
function animateTextInfinite3() {
  const fixedInterval = arguments[0] * arguments[1].length;
  let intID = setInterval(() => {
    animateTextFinite3(2500, [
      "Binary trading on cryptocurrencies, fiat and on daily stock market prices.",
      "High or low trade with minimum risks.",
      "Join our affiliate program and get amazing referral bonus",
    ]);
  }, fixedInterval);
  return intID;
}
animateTextInfinite3(2500, [
  "Binary trading on cryptocurrencies, fiat and on daily stock market prices.",
  "High or low trade with minimum risks.",
  "Join our affiliate program and get amazing referral bonus.",
]);

//////////////
/////CATEGORY 4

function animateTextFinite4(interval, content) {
  let text = document.getElementById("text-4"); //this is where you intend to display the text
  let index = 0; //this gets the first value of the array
  let intID = setInterval(() => {
    text.innerHTML = content[index];
    index++; //this auto increments the index of the array values
    if (index === content.length) {
      clearInterval(intID);
    }
  }, interval);
  return intID;
}
function animateTextInfinite4() {
  const fixedInterval = arguments[0] * arguments[1].length;
  let intID = setInterval(() => {
    animateTextFinite4(2500, [
      "Challenge your opponent, Post Challenge videos, Place wager against opponent, Highest Likes wins the challenge.",
      "If you love creating content on social media then this is for you.",
      "Challenge your friends and see who gets the best engagements on your videos.",
    ]);
  }, fixedInterval);
  return intID;
}
animateTextInfinite4(2500, [
  "Challenge your opponent, Post Challenge videos, Place wager against opponent, Highest Likes wins the challenge.",
  "If you love creating content on social media then this is for you.",
  "Challenge your friends and see who gets the best engagements on your videos.",
]);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
