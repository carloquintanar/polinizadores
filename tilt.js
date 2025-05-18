// JavaScript Document
  const container = document.querySelector('.container');
  const tilt = document.querySelector('.tilt');

  container.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = container.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = ((y / height) - 0.5) * -40; // Negativo para que se mueva natural
    const rotateY = ((x / width) - 0.5) * 40;

    tilt.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  container.addEventListener('mouseleave', () => {
    tilt.style.transform = 'rotateX(0) rotateY(0)';
  });