// Интеграция "Симптомы → Анализы" — версия 4: работа только с текстовыми узлами
// Решает проблему дублирования ссылок
(function() {
  'use strict';
 
  var analysisLinks = {
    'ТТГ': 'hormones.html',
    'Т3 св': 'hormones.html',
    'Т3 св.': 'hormones.html',
    'Т4 св': 'hormones.html',
    'Т4 св.': 'hormones.html',
    'Т3': 'hormones.html',
    'Т4': 'hormones.html',
    'Инсулин': 'biochem-carbs.html',
    'инсулин': 'biochem-carbs.html',
    'Глюкоза': 'biochem-carbs.html',
    'глюкоза': 'biochem-carbs.html',
    'Лептин': 'biochem-lipids.html',
    'лептин': 'biochem-lipids.html',
    'Липидный профиль': 'biochem-lipids.html',
    'липидный профиль': 'biochem-lipids.html',
    'ОАК': 'OAK.html',
    'общий анализ крови': 'OAK.html',
    'СРБ': 'biochem-inflammation.html',
    'срб': 'biochem-inflammation.html',
    'С-реактивный белок': 'biochem-inflammation.html',
    'Иммуноглобулины': 'biochem-inflammation.html',
    'IgE общий': 'biochem-inflammation.html',
    'IgE': 'biochem-inflammation.html',
    'Витамин D': 'vitamin-d.html',
    'витамин D': 'vitamin-d.html',
    'Ферритин': 'ferritin.html',
    'ферритин': 'ferritin.html',
    'Гомоцистеин': 'homocysteine.html',
    'гомоцистеин': 'homocysteine.html',
    'Креатинин': 'biochem-protein.html',
    'креатинин': 'biochem-protein.html',
    'Мочевина': 'biochem-protein.html',
    'мочевина': 'biochem-protein.html',
    'Натрий': 'biochem-electrolytes.html',
    'натрий': 'biochem-electrolytes.html',
    'Калий': 'biochem-electrolytes.html',
    'калий': 'biochem-electrolytes.html',
    'Кальций': 'biochem-electrolytes.html',
    'кальций': 'biochem-electrolytes.html',
    'Магний': 'biochem-electrolytes.html',
    'магний': 'biochem-electrolytes.html',
    'Альбумин': 'biochem-protein.html',
    'альбумин': 'biochem-protein.html',
    'Общий белок': 'biochem-protein.html',
    'общий белок': 'biochem-protein.html',
    'АЛТ': 'biochem-liver.html',
    'АСТ': 'biochem-liver.html',
    'ГГТП': 'biochem-liver.html',
    'Холестерин': 'biochem-lipids.html',
    'холестерин': 'biochem-lipids.html',
    'ЛПНП': 'biochem-lipids.html',
    'ЛПВП': 'biochem-lipids.html',
    'Триглицериды': 'biochem-lipids.html',
    'триглицериды': 'biochem-lipids.html',
    'Гликированный гемоглобин': 'biochem-carbs.html',
    'HbA1c': 'biochem-carbs.html',
    'HOMA-IR': 'medical-calculators.html',
    'Кортизол': 'hormones.html',
    'кортизол': 'hormones.html',
    'Тестостерон': 'hormones.html',
    'тестостерон': 'hormones.html',
    'Эстрадиол': 'hormones.html',
    'эстрадиол': 'hormones.html',
    'Прогестерон': 'hormones.html',
    'прогестерон': 'hormones.html',
    'Пролактин': 'hormones.html',
    'пролактин': 'hormones.html',
    'ФСГ': 'hormones.html',
    'ЛГ': 'hormones.html',
    'ДГЭА-С': 'hormones.html',
    'ПСА': 'checkup-men.html',
    'СОЭ': 'biochem-inflammation.html',
    'Гемоглобин': 'OAK.html',
    'гемоглобин': 'OAK.html',
    'Лейкоциты': 'OAK.html',
    'лейкоциты': 'OAK.html',
    'Тромбоциты': 'OAK.html',
    'тромбоциты': 'OAK.html',
    'ЭКБ': 'biochem-inflammation.html',
    'Эозинофильный катионный белок': 'biochem-inflammation.html',
    'Кальпротектин': 'biochem-inflammation.html',
    'кальпротектин': 'biochem-inflammation.html',
    'Витамин В12': 'homocysteine.html',
    'витамин В12': 'homocysteine.html',
    'В12': 'homocysteine.html',
    'В9': 'homocysteine.html',
    'Фолиевая кислота': 'homocysteine.html',
    'фолиевая кислота': 'homocysteine.html',
    'ОАМ': 'OAM.html',
    'общий анализ мочи': 'OAM.html',
    'Копрограмма': 'coprogram.html',
    'копрограмма': 'coprogram.html',
    'Билирубин': 'biochem-liver.html',
    'билирубин': 'biochem-liver.html',
    'Мочевая кислота': 'biochem-protein.html',
    'мочевая кислота': 'biochem-protein.html',
    'Фосфор': 'biochem-electrolytes.html',
    'фосфор': 'biochem-electrolytes.html',
    'ПТГ': 'vitamin-d.html',
    'Паратгормон': 'vitamin-d.html',
    'паратгормон': 'vitamin-d.html',
    'Антитела к ТПО': 'hormones.html',
    'антитела к ТПО': 'hormones.html',
    'ГСПГ': 'hormones.html',
    'SHBG': 'hormones.html',
    'Адипонектин': 'biochem-lipids.html',
    'адипонектин': 'biochem-lipids.html',
    'Иммуноглобулины (IgG, IgA, IgM)': 'biochem-inflammation.html',
    'IgG': 'biochem-inflammation.html',
    'IgA': 'biochem-inflammation.html',
    'IgM': 'biochem-inflammation.html',
    'ЛДГ': 'biochem-inflammation.html',
    'лдг': 'biochem-inflammation.html',
    'Фибриноген': 'biochem-inflammation.html',
    'фибриноген': 'biochem-inflammation.html',
    '25-OH': 'vitamin-d.html',
    '25(ОН)D': 'vitamin-d.html'
  };
 
  // Сортируем по длине — сначала длинные названия
  var sortedKeys = Object.keys(analysisLinks).sort(function(a, b) {
    return b.length - a.length;
  });
 
  // Функция экранирования для regex
  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
 
  // ГЛАВНАЯ ФУНКЦИЯ: обрабатывает ТОЛЬКО текстовые узлы
  // Никогда не трогает innerHTML, поэтому не создаёт дублирования
  function processTextNode(textNode) {
    // Пропускаем уже обработанные узлы
    if (textNode.__linkified) return;
   
    // Пропускаем узлы внутри ссылок, скриптов, стилей
    var parent = textNode.parentNode;
    if (!parent) return;
    if (parent.tagName === 'A' || parent.tagName === 'SCRIPT' ||
        parent.tagName === 'STYLE' || parent.tagName === 'CODE' ||
        parent.tagName === 'PRE') return;
   
    var text = textNode.nodeValue;
    if (!text || text.trim().length === 0) return;
   
    // Быстрая проверка — есть ли хоть одно название анализа
    var hasAny = false;
    for (var i = 0; i < sortedKeys.length; i++) {
      if (text.indexOf(sortedKeys[i]) !== -1) {
        hasAny = true;
        break;
      }
    }
    if (!hasAny) return;
   
    // Создаём фрагмент документа
    var fragment = document.createDocumentFragment();
    var remainingText = text;
    var modified = false;
   
    // Ищем все вхождения всех названий анализов
    // Собираем все совпадения с позициями
    var matches = [];
    for (var i = 0; i < sortedKeys.length; i++) {
      var analysis = sortedKeys[i];
      var escaped = escapeRegExp(analysis);
      var regex = new RegExp(escaped, 'g');
      var match;
      while ((match = regex.exec(text)) !== null) {
        matches.push({
          start: match.index,
          end: match.index + analysis.length,
          text: analysis,
          href: analysisLinks[analysis]
        });
      }
    }
   
    // Сортируем по позиции начала
    matches.sort(function(a, b) { return a.start - b.start; });
   
    // Удаляем перекрывающиеся совпадения (оставляем более длинные)
    var filtered = [];
    var lastEnd = -1;
    for (var i = 0; i < matches.length; i++) {
      if (matches[i].start >= lastEnd) {
        filtered.push(matches[i]);
        lastEnd = matches[i].end;
      }
    }
   
    if (filtered.length === 0) return;
   
    // Строим фрагмент: текст + ссылки
    var pos = 0;
    for (var i = 0; i < filtered.length; i++) {
      var m = filtered[i];
      // Текст до совпадения
      if (m.start > pos) {
        fragment.appendChild(document.createTextNode(text.substring(pos, m.start)));
      }
      // Создаём ссылку
      var link = document.createElement('a');
      link.href = m.href;
      link.style.color = '#1a5490';
      link.style.fontWeight = 'bold';
      link.style.textDecoration = 'underline';
      link.title = 'Перейти к расшифровке: ' + m.text;
      link.textContent = m.text;
      fragment.appendChild(link);
     
      pos = m.end;
      modified = true;
    }
   
    // Оставшийся текст после последнего совпадения
    if (pos < text.length) {
      fragment.appendChild(document.createTextNode(text.substring(pos)));
    }
   
    // Заменяем текстовый узел на фрагмент
    if (modified) {
      parent.replaceChild(fragment, textNode);
    }
  }
 
  // Рекурсивный обход всех текстовых узлов
  function walkTextNodes(root) {
    if (!root) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    var node;
    while ((node = walker.nextNode())) {
      processTextNode(node);
    }
  }
 
  // Главная функция обработки
  function processPage() {
    walkTextNodes(document.body);
  }
 
  // Запуск при загрузке
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(processPage, 300);
    });
  } else {
    setTimeout(processPage, 300);
  }
 
  // Повторные запуски с задержкой (для динамически генерируемого контента)
  setTimeout(processPage, 1000);
  setTimeout(processPage, 2500);
  setTimeout(processPage, 5000);
 
  // MutationObserver — но теперь безопасный, т.к. работаем только с текстовыми узлами
  if (window.MutationObserver) {
    var observer = new MutationObserver(function(mutations) {
      var shouldProcess = false;
      for (var i = 0; i < mutations.length; i++) {
        if (mutations[i].addedNodes.length > 0) {
          shouldProcess = true;
          break;
        }
      }
      if (shouldProcess) {
        setTimeout(processPage, 200);
      }
    });
   
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
 
  console.log('✅ Интеграция "Симптомы → Анализы" v4 активирована! Словарь: ' + sortedKeys.length + ' анализов. Работает только с текстовыми узлами — дублирования не будет.');
})();