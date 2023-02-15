// В следующем коде в двум событиям привязан один 
// и тот же обработчик:
let elem = document.querySelector('#elem');

elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);

// Допишите код функции func так, чтобы при клике 
// на элемент этот элемент красился в зеленый цвет, 
// а при двойном клике - в красный.

function func(event) {
	if(event.type == 'click') {
    this.style.color = 'green';
  } else if (event.type == 'dblclick') {
    this.style.color = 'red';
  }
}