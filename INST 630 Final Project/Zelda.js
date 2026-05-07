fetch('./Zelda.json')
  .then(response => response.json())
  .then(data => {
    const slide = document.querySelector('.slide');
    const button = document.querySelector('.button');

    const dummy = document.createElement('div');
    dummy.classList.add('item');
    dummy.style.backgroundImage = `url(./Image/Chapter0.jpg)`;
    dummy.style.backgroundPosition = '50% 20%';
    dummy.style.backgroundSize = '80%';
    slide.insertBefore(dummy, button);

    data.slides.forEach(slideData => {
      const item = document.createElement('div');
      item.classList.add('item');
      item.style.backgroundImage = `url(${slideData.image})`;
      item.style.backgroundPosition = slideData.bgPosition;
      item.style.backgroundSize = slideData.bgSize;

      item.innerHTML = `
        <div class="content">
          <div class="name">${slideData.name}</div>
          <div class="des">${slideData.des}</div>
        </div>
      `;

      slide.insertBefore(item, button);
    });

    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    next.addEventListener('click', function () {
      let items = document.querySelectorAll('.item');
      slide.appendChild(items[0]);
    });

    prev.addEventListener('click', function () {
      let items = document.querySelectorAll('.item');
      slide.prepend(items[items.length - 1]);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') next.click();
      else if (e.key === 'ArrowLeft') prev.click();
    });
  });