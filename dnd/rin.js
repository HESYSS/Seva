document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById('sidebar');
    
    const Enemy = ['Goblin', 'Kobold', 'Cultist']
    for(let i = 0; i < Enemy.length; i++){
        (function(index) {
            var requestURL = 'http://localhost:3000/' + Enemy[index];
            var request = new XMLHttpRequest();
            request.open("GET", requestURL);
            request.responseType = "json";
            
            request.onload = function() {
                const newElement = document.createElement('div');
                const innerElement = document.createElement('img');
                innerElement.classList.add('hero');
                newElement.id = Enemy[index];
                innerElement.src = request.response["img"];
                newElement.appendChild(innerElement);
                sidebar.appendChild(newElement);
            };

            request.send();
        })(i);
    }
    document.dispatchEvent(new Event('firstScriptFinished'));
});
