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
 const btn = document.getElementById('toggleBtn');
  const incase = document.querySelector('.incase');
  const extra2 = document.getElementById('extra2');

  let isOn = false;

  // Setup on page load
  if (window.innerWidth >= 770) {
    extra2.style.top = '-120px'; // Shift up initially on wide screens
  } else {
    extra2.style.top = '0px'; // No shift for small screens
  }

  btn.addEventListener('click', () => {
    isOn = !isOn;

    // Toggle gallery
    incase.style.display = isOn ? 'block' : 'none';
    btn.textContent = isOn ? 'EXIT GALLERY' : 'ENTER GALLERY';

    if (window.innerWidth >= 770) {
      extra2.style.top = isOn ? '0px' : '-120px';
    } else {
      extra2.style.top = '0px';
    }
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

