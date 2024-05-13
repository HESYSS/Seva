const container1 = document.querySelector('.container1');
const hoverButton1 = document.getElementById('hoverButton1');
const sidebar1 = document.getElementById('sidebar1');

container1.addEventListener('mousemove', (event) => {
  hoverButton1.style.display = 'block'; // Показываем кнопку при движении мыши
  
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const containerRight = container1.getBoundingClientRect();
  
  const distance = 50; // Расстояние (в пикселях), на котором кнопка будет оставаться видимой
  
  if (
    mouseX < containerRight.left - distance ||
    mouseX > containerRight.right + distance ||
    mouseY < containerRight.top - distance ||
    mouseY > containerRight.bottom + distance
  ) {
    hoverButton1.style.display = 'none'; // Скрываем кнопку, если курсор находится вне области контейнера
  }
});

container1.addEventListener('mouseleave', () => {
  hoverButton1.style.display = 'none'; // Скрываем кнопку, если курсор покинул область контейнера
});

function openSidebar1() { 
    sidebar1.classList.add("open1");
    
}

function closeSidebar1() {
    sidebar1.classList.remove("open1");
   
}

hoverButton1.addEventListener('click', () => {
  openSidebar1();
    
});

// Добавляем обработчик клика на кнопку в боковой панели
