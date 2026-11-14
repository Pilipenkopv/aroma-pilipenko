// Premium Animations - Intersection Observer для анимаций при скролле
(function() {
  'use strict';
 
  // Ждём загрузки DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
 
  function init() {
    // 1. Находим все карточки, блоки и секции для анимации
    var animatableElements = document.querySelectorAll(
      '.card, .checkup-card, .calc-card, .service-card, .feature-card, ' +
      '.info-box, .target-box, .alert-box, .prep-box, .context-box, ' +
      '.quote-box, .warn, .history-controls, .checkup-section, ' +
      'table, .block-title, h2'
    );
   
    // Добавляем класс анимации ко всем найденным элементам
    for (var i = 0; i < animatableElements.length; i++) {
      animatableElements[i].classList.add('animate-on-scroll');
    }
   
    // 2. Настраиваем Intersection Observer
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Перестаём наблюдать после появления (одноразовая анимация)
            observer.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Анимация запускается, когда 10% элемента видно
      });
     
      // Наблюдаем за всеми элементами
      var allAnimated = document.querySelectorAll('.animate-on-scroll');
      for (var i = 0; i < allAnimated.length; i++) {
        observer.observe(allAnimated[i]);
      }
     
      console.log('✅ Premium Animations активированы! Элементов: ' + allAnimated.length);
    } else {
      // Fallback для старых браузеров - показываем всё сразу
      var allAnimated = document.querySelectorAll('.animate-on-scroll');
      for (var i = 0; i < allAnimated.length; i++) {
        allAnimated[i].classList.add('visible');
      }
      console.log('⚠️ Intersection Observer не поддерживается. Анимации отключены.');
    }
   
    // 3. Плавное появление элементов при загрузке страницы
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.6s ease';
    setTimeout(function() {
      document.body.style.opacity = '1';
    }, 50);
  }
})();