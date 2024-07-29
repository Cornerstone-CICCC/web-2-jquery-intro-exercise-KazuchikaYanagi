$(function () {
  // YOUR CODE HERE
  // exercise1
  const exercise1Btn = $("#toggleButton");
  const hiddenParagraph = $("#myParagraph");

  exercise1Btn.on("click", function () {
    hiddenParagraph.hide();
  });

  // exercise2
  const colorBtn = $("#colorButton");
  const colorDiv = $("#colorDiv");

  colorBtn.on("click", function () {
    colorDiv.css("background-color", "yellow");
  });

  // exercise3
  const addClass = $("#addClassButton");
  const removeClass = $("#removeClassButton");
  const targetId = $("#classDiv");

  addClass.on("click", function () {
    targetId.addClass(".new-class");
  });

  removeClass.on("click", function () {
    targetId.removeClass(".new-class");
  });

  // exercise4
  const fadeInBtn = $("#fadeInButton");
  const fadeOutBtn = $("#fadeOutButton");
  const fadeDiv = $("#fadeDiv");

  fadeInBtn.on("click", function () {
    fadeDiv.fadeIn();
  });

  fadeOutBtn.on("click", function () {
    fadeDiv.fadeOut();
  });

  // exercise5
  const slideUpBtn = $("#slideUpButton");
  const slideDownBtn = $("#slideDownButton");
  const slideDiv = $("#slideDiv");

  slideUpBtn.on("click", function () {
    slideDiv.slideUp();
  });

  slideDownBtn.on("click", function () {
    slideDiv.slideDown();
  });
});
