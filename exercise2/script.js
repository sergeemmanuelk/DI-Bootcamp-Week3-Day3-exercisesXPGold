// document.addEventListener('mousemove', function(event) {
//     var x = event.clientX;
//     var y = event.clientY;
//     var paragraph = document.querySelector('p');
//     paragraph.style.fontSize = x + 'px';
// });
  

const p = document.querySelector('p');

p.addEventListener('drag', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    p.style.fontSize = `${x / y}px`;
});
