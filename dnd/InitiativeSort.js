function addStateElement(StateElement) {
    let childNodes = InitiativeList.childNodes;
    let inserted = false;
    let sameInitiativeNodes = [];
    for (let i = 0; i < childNodes.length; i++) {
      const currentNode = childNodes[i];
      if (currentNode.Initiative && StateElement.Initiative > currentNode.Initiative) {
        InitiativeList.insertBefore(StateElement, currentNode);
        inserted = true;
        break;
      } else if (currentNode.Initiative === StateElement.Initiative) {
        sameInitiativeNodes.push(currentNode);
      }
    }
    if (!inserted) {
      if (sameInitiativeNodes.length === 0 || Math.random() < 0.5) {
        InitiativeList.appendChild(StateElement);
      } else {
        InitiativeList.insertBefore(StateElement, sameInitiativeNodes[Math.floor(Math.random() * sameInitiativeNodes.length)]);
      }
    }
  }

  var currentIndex = -1;

function moveHero() {
    var divs = document.querySelectorAll(".InitiativeList div");
    // Убедимся, что currentIndex находится в пределах количества div'ов
    if (currentIndex < divs.length - 2) {
        currentIndex++; // Увеличиваем индекс
    } else {
        currentIndex = 0; // Вернемся к первому div, если currentIndex равен количеству div'ов
    }

    var currentDiv = divs[currentIndex]; // Текущий div
    var parentElement = document.querySelector(".InitiativeList");

    // Создаем или обновляем элемент .hero-marker
    var heroMarker = document.querySelector(".hero-marker");
    if (!heroMarker) {
        heroMarker = document.createElement('div');
        heroMarker.classList.add('hero-marker');
        parentElement.appendChild(heroMarker);
    }

    // Позиционируем .hero-marker относительно текущего div'а
    var rect = currentDiv.getBoundingClientRect();
    heroMarker.style.left = 30 + "px"; // Отступаем на 10px влево
    heroMarker.style.top = rect.top - 72.5 + "px"; // Позиционируем по вертикали посередине текущего div'а
}



function hp(elementid){

    a = document.getElementById(elementid).value;
    var hp = 0;
    if (a.indexOf('к') != -1){
    n = Number(a.slice(0,a.indexOf('к')))
    var k = 0 
    if (a.indexOf("+") != -1 || a.indexOf("-") != -1){
        k = Number(a.slice(a.indexOf('к')+1,a.indexOf(' ')))
        f = a.indexOf(' ')
        a = a.replaceAll(" ","")
        m = Number(a.slice(f,a.length))
    } else{
        k = Number(a.slice(a.indexOf('к')+1,a.length))
        m = 0
    }
    
    
    for(let i = 0; i<n; i++){
        hp += Math.floor(Math.random() * k) + 1 
    }
    hp += m
    }
    else{
        hp = Number(a)
    }
    
    return hp;
    }
