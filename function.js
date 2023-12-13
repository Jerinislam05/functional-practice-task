function stringChanger(elementId, text) {
  document.getElementById(elementId).addEventListener("mouseenter", function () {
    const paraText = document.getElementById(elementId);
    paraText.innerText = text;
  });
};
stringChanger('bd', 'salman');
stringChanger('usa', 'sami');
stringChanger('uk', 'jerin');
stringChanger('canada', 'sanju');