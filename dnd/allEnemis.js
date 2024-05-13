document.addEventListener('firstScriptFinished', function() {
    const addButtonHero = document.getElementById('addButtonHero');
    const deleteButtonHero = document.getElementById('deleteButtonHero');
    
    let isElementHeroDragging = false;
    let dexterityHero = 0;

    var requestURL = "http://localhost:3000/Goblin";
    var request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    


    
    addButtonHero.addEventListener('click', () => {
    const newElement = document.createElement('div');
    newElement.classList.add('hero');
    const StateElement = document.createElement('div');
    StateElement.classList.add('hero');
    
    const innerElement = document.createElement('img');
    innerElement.classList.add('hero')
    innerElement.src = request.response["img"];
    newElement.appendChild(innerElement);
    const innerStateElement = document.createElement('img');
    innerStateElement.classList.add('hero')
    innerStateElement.src = request.response["img"];
    StateElement.appendChild(innerStateElement);


    const Initiative = Number(document.getElementById('dexterityHeroAdd').value);
    StateElement.Initiative = Initiative;
    const addButtonHeroRect = addButtonHero.getBoundingClientRect();

    // Устанавливаем позицию нового элемента
    newElement.style.position = 'absolute';
    newElement.style.left = addButtonHeroRect.left + 'px';
    newElement.style.top = addButtonHeroRect.bottom + 'px';

    elementsContainer.appendChild(newElement);
    addStateElement(StateElement);
    let offsetX, offsetY, isDragging = false;

    newElement.dataset.stateElementId = StateElement.dataset.stateElementId = Date.now();

      

    newElement.addEventListener('mousedown', (e) => {
        isDragging = true;
        isElementHeroDragging = true
        offsetX = e.clientX - newElement.getBoundingClientRect().left;
        offsetY = e.clientY - newElement.getBoundingClientRect().top;
        selectedElement = newElement;
        deleteButtonHero.removeAttribute('disabled');
      });

      document.addEventListener('mousemove', (e) => {
        if (isDragging) {
          const x = e.clientX - offsetX;
          const y = e.clientY - offsetY;

          newElement.style.left = `${x}px`;
          newElement.style.top = `${y}px`;
        }
        isElementHeroDragging = false
      });

      document.addEventListener('mouseup', () => {
        isDragging = false;
      });
    });
  
deleteButtonHero.addEventListener('click', () => {
    if (selectedElement) {
      const stateElementId = selectedElement.dataset.stateElementId;
      const stateElement = InitiativeList.querySelector(`[data-state-element-id='${stateElementId}']`);
      if (stateElement) {
          InitiativeList.removeChild(stateElement);
      }
      elementsContainer.removeChild(selectedElement);
      selectedElement = null;
      deleteButtonHero.setAttribute('disabled', 'true');
    }
  });
});