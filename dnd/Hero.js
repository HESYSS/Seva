const addButton = document.getElementById('addButton');
    const deleteButton = document.getElementById('deleteButton');
    const InitiativeList = document.getElementById('InitiativeList');
    const elementsContainer = document.getElementById('elementsContainer'); // Получаем контейнер
    let selectedElement = null;
    let isElementDragging = false;
    let dexterity = 0;

   

var i = 0
// Определение списка цветов
const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple'];

addButton.addEventListener('click', () => {
    const newElement = document.createElement('div');
    newElement.classList.add('hero');
    const StateElement = document.createElement('div');
    StateElement.classList.add('hero');

    // Выбор цвета из списка с определенным порядком
    
    newElement.style.backgroundColor = colors[i];
    StateElement.style.backgroundColor = colors[i];
    if (i > 4){
      i = 0
    }else{
      i++
    }
    const Initiative = Number(document.getElementById('dexterityAdd').value);
    StateElement.Initiative = Initiative;
    const addButtonRect = addButton.getBoundingClientRect();

    // Устанавливаем позицию нового элемента
    newElement.style.position = 'absolute';
    newElement.style.left = addButtonRect.left + 'px';
    newElement.style.top = addButtonRect.bottom + 'px';

    elementsContainer.appendChild(newElement);
    addStateElement(StateElement);
    let offsetX, offsetY, isDragging = false;

    newElement.dataset.stateElementId = StateElement.dataset.stateElementId = Date.now();

      

    newElement.addEventListener('mousedown', (e) => {
        isDragging = true;
        isElementDragging = true
        offsetX = e.clientX - newElement.getBoundingClientRect().left;
        offsetY = e.clientY - newElement.getBoundingClientRect().top;
        selectedElement = newElement;
        deleteButton.removeAttribute('disabled');
      });

      document.addEventListener('mousemove', (e) => {
        if (isDragging) {
          const x = e.clientX - offsetX;
          const y = e.clientY - offsetY;

          newElement.style.left = `${x}px`;
          newElement.style.top = `${y}px`;
        }
        isElementDragging = false
      });

      document.addEventListener('mouseup', () => {
        isDragging = false;
      });
    });

deleteButton.addEventListener('click', () => {
    if (selectedElement) {
      const stateElementId = selectedElement.dataset.stateElementId;
      const stateElement = InitiativeList.querySelector(`[data-state-element-id='${stateElementId}']`);
      if (stateElement) {
          InitiativeList.removeChild(stateElement);
      }
      elementsContainer.removeChild(selectedElement);
      selectedElement = null;
      deleteButton.setAttribute('disabled', 'true');
    }
  });
