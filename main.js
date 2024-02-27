'use strict';

/*=================================================
  スムーススクロール
===================================================*/

  const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');

  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
      console.log(href);
      let targetElement = document.getElementById(href.replace('#',''));
  
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.screenY;
      const gap = 20;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior:'smooth',
      })
    })
  }
  