function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll(".ranked-list li");

  for (let i = 0; i < lis.length; i++) {
    let rankInt = parseInt(lis[i].innerHTML);
    lis[i].innerHTML = rankInt + n;
  }
}

function deepestChild() {
  let currentElement = document.getElementById("grand-node");
  let nextElement = currentElement.children[0];

  while (nextElement) {
    currentElement = nextElement;
    nextElement = currentElement.children[0];
  }

  return currentElement;
}
