function setMainImage(imageSrc) {
    document.getElementById('main-img').src = imageSrc;
  }

  document.addEventListener("DOMContentLoaded", function () {
  const style = document.createElement("style");
  const timestamp = new Date().getTime();
  style.innerHTML = `
    .extrabody::before {
      -webkit-mask-image: url(extrapics/bg1.gif?${timestamp});
      mask-image: url(extrapics/bg1.gif?${timestamp});
    }
  `;
  document.head.appendChild(style);
});
  //certi on off
  document.addEventListener('DOMContentLoaded', () => {
  const certiBtn = document.getElementById('certi-but');
  const achievementsBox = document.querySelector('.achievements-container');

  // Always hide the container on page load
  achievementsBox.style.display = 'none';
  certiBtn.textContent = 'ON';

  certiBtn.addEventListener('click', () => {
    const isOn = certiBtn.textContent.trim() === 'ON';

    // Toggle visibility
    achievementsBox.style.display = isOn ? 'grid' : 'none';

    // Toggle button text
    certiBtn.textContent = isOn ? 'OFF' : 'ON';
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const eduBtn = document.getElementById('edu-btn');
  const eduBox = document.querySelector('.education-list');

  // Always hide the education section on page load
  eduBox.style.display = 'none';
  eduBtn.textContent = 'ON';

  eduBtn.addEventListener('click', () => {
    const isOn = eduBtn.textContent.trim() === 'ON';

    // Toggle display
    eduBox.style.display = isOn ? 'grid' : 'none';

    // Toggle button text
    eduBtn.textContent = isOn ? 'OFF' : 'ON';
  });
});

