const box = document.querySelector('.box');
    const text = document.querySelector('p');
    
    box.addEventListener('mouseenter', () => {
      text.textContent = 'You entered the box!';
    });
    
    box.addEventListener('mouseleave', () => {
      text.textContent = 'Hover over me!';
    });
    
    box.addEventListener('mousemove', (event) => {
      const x = event.clientX - box.offsetLeft;
      const y = event.clientY - box.offsetTop;
      
      text.textContent = `X: ${x}, Y: ${y}`;
    });