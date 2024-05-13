const container = document.querySelector('.container');
const hoverButton = document.getElementById('hoverButton');


container.addEventListener('mousemove', (event) => {
  hoverButton.style.display = 'block'; // Показываем кнопку при движении мыши
  
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const containerLeft = container.getBoundingClientRect();
  
  const distance = 50; // Расстояние (в пикселях), на котором кнопка будет оставаться видимой
  
  if (
    mouseX < containerLeft.left - distance ||
    mouseX > containerLeft.right + distance ||
    mouseY < containerLeft.top - distance ||
    mouseY > containerLeft.bottom + distance
  ) {
    hoverButton.style.display = 'none'; // Скрываем кнопку, если курсор находится вне области контейнера
  }
});

container.addEventListener('mouseleave', () => {
  hoverButton.style.display = 'none'; // Скрываем кнопку, если курсор покинул область контейнера
});

function openSidebar() { 
    sidebar.classList.add("open");
    const sidebarRect = sidebar.getBoundingClientRect();
    hoverButton.style.left = `${sidebarRect.right + 20}px`; // Перемещаем кнопку к краю открытой панели
    
    
    
}

function closeSidebar() {
    sidebar.classList.remove("open");
   
}

hoverButton.addEventListener('click', () => {
    openSidebar();
});

// Добавляем обработчик клика на кнопку в боковой панели
