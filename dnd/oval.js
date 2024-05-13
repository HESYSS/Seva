const addButtonOval = document.getElementById('addButtonOval');
    const deleteButtonOval = document.getElementById('deleteButtonOval');
    
    
    
    let isElementDraggingOval = false;
    let dexterityOval = 0;



    
    function dexterityOvalAdd(){
      dexterityOval = document.getElementById('dexterityOvalAdd').value;
    }

    // Функция для добавления нового элемента в список InitiativeList
    

    addButtonOval.addEventListener('click', () => {
      const newElement = document.createElement('div');
      const StateElement = document.createElement('div');
      newElement.classList.add('oval');
      StateElement.classList.add('oval');
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

      newElement.style.backgroundColor = randomColor;

      StateElement.style.backgroundColor = newElement.style.backgroundColor;

      const Initiative = Math.floor(Math.random() * 20) + 1 + Number(dexterityOval);
      StateElement.Initiative = Initiative;


      newElement.Hp = hp('ovalhp')
      StateElement.Hp = newElement.Hp
    
      newElement.ProcentHp = 100
      StateElement.ProcentHp = 100


      const addButtonOvalRect = addButtonOval.getBoundingClientRect();

      newElement.style.position = 'absolute';
      newElement.style.left = addButtonOvalRect.left + 'px';
      newElement.style.top = addButtonOvalRect.bottom + 'px';

      const innerElement = document.createElement('div');
      innerElement.classList.add('progress-bar');
      newElement.appendChild(innerElement);

      const innerElementState = document.createElement('div');
      innerElementState.classList.add('progress-bar');
      StateElement.appendChild(innerElementState);
      
      
      elementsContainer.appendChild(newElement); // Добавляем элемент в контейнер

      let offsetX, offsetY, isDragging = false; // Объявляем переменную isDragging

      // Добавляем новый StateElement в соответствующее место в списке InitiativeList
      addStateElement(StateElement);

      // Сохраняем ссылку на соответствующий StateElement внутри newElement
      newElement.dataset.stateElementId = StateElement.dataset.stateElementId = Date.now();

      newElement.addEventListener('click', () => {
        if (isElementDraggingOval) {
          const inputValue = prompt('Нанесенный урон');
          if (inputValue !== null) {
           if (newElement.Hp - inputValue <= 0){
            const innerElement = newElement.querySelector('.progress-bar');
            innerElement.style.width = 100 + "%";
            const innerElementState = StateElement.querySelector('.progress-bar');
            innerElementState.style.width = 100 + "%";

            setTimeout(function() {
                deleteButton.dispatchEvent(new Event("click"))}
                , 60*1000) 
           }
           else{
            var progressBar = newElement.querySelector(".progress-bar");
            newElement.ProcentHp -= inputValue * newElement.ProcentHp / newElement.Hp;
            newElement.Hp -= inputValue;
            progressBar.style.width = Math.abs(newElement.ProcentHp - 100)  + "%";
            var progressBar = StateElement.querySelector(".progress-bar");
            StateElement.ProcentHp -= inputValue * StateElement.ProcentHp / StateElement.Hp;
            StateElement.Hp -= inputValue;
            progressBar.style.width = Math.abs(StateElement.ProcentHp - 100)  + "%";

           }
        }



          
        }
      });

      newElement.addEventListener('mousedown', (e) => {
        isDragging = true;
        isElementDraggingOval = true
        offsetX = e.clientX - newElement.getBoundingClientRect().left;
        offsetY = e.clientY - newElement.getBoundingClientRect().top;
        selectedElement = newElement;
        deleteButtonOval.removeAttribute('disabled');
      });

      document.addEventListener('mousemove', (e) => {
        if (isDragging) {
          const x = e.clientX - offsetX;
          const y = e.clientY - offsetY;

          newElement.style.left = `${x}px`;
          newElement.style.top = `${y}px`;
        }
        isElementDraggingOval = false
      });

      document.addEventListener('mouseup', () => {
        isDragging = false;
      });
    });

    deleteButtonOval.addEventListener('click', () => {
      if (selectedElement) {
        const stateElementId = selectedElement.dataset.stateElementId;
        const stateElement = InitiativeList.querySelector(`[data-state-element-id='${stateElementId}']`);
        if (stateElement) {
            InitiativeList.removeChild(stateElement);
        }
        elementsContainer.removeChild(selectedElement);
        selectedElement = null;
        deleteButtonOval.setAttribute('disabled', 'true');
      }
    });
