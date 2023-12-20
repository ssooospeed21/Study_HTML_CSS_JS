"use strict";

let tagDescriptions = {
    "a": "Тег <a> является якорем или ссылкой, создающей гиперссылки.",
    "abbr": "Тег <abbr> представляет сокращение или аббревиатуру.",
    "address": "Тег <address> используется для определения контактной информации.",
    "article": "Тег <article> представляет независимую часть содержания страницы.",
    "aside": "Тег <aside> представляет содержание, которое относится к контенту, но не является его основной частью.",
    "b": "Тег <b> представляет текст, который должен быть отображен полужирным шрифтом.",
    "blockquote": "Тег <blockquote> представляет цитату из другого источника.",
    "cite": "Тег <cite> определяет название книги, фильма, музыкальной композиции или другого произведения.",
    "code": "Тег <code> используется для представления фрагмента кода.",
    "datalist": "Тег <datalist> определяет список предварительно определенных вариантов для элемента <input> с типом text.",
    "em": "Тег <em> выделяет текст как ударение.",
    "figcaption": "Тег <figcaption> представляет заголовок для элемента <figure>.",
    "footer": "Тег <footer> определяет нижнюю часть документа или раздела.",
    "header": "Тег <header> представляет верхнюю часть документа или раздела.",
    "i": "Тег <i> обозначает текст, который должен быть отображен курсивом.",
    "main": "Тег <main> определяет основное содержание документа.",
    "mark": "Тег <mark> отмечает текст как выделенный или подчеркнутый для акцента.",
    "nav": "Тег <nav> представляет навигационные ссылки.",
    "ol": "Тег <ol> создает нумерованный список.",
    "progress": "Тег <progress> представляет прогресс выполнения задачи.",
    "q": "Тег <q> определяет короткую цитату."
};

function getTagDescription(tagName) {
    return tagDescriptions[tagName.toLowerCase()] || "Такой тег не найден.";
}

// Обработка нажатия клавиши Enter
document.getElementById('tagInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        let tagInput = document.getElementById('tagInput');
        let tagDescription = document.getElementById('tagDescription');
        let tagName = tagInput.value.trim().toLowerCase();
        let description = getTagDescription(tagName);

        tagDescription.textContent = description;
        tagInput.value = '';
    }
});