// Словарь переводов
const translations = {
    ru: {
        welcome: "Привет! Добро пожаловать в наше приложение.",
        description: "Это современная платформа для общения, поиска друзей и создания крутых сквадов.",
        action_btn: "Начать общение"
    },
    en: {
        welcome: "Hey! Welcome to our app.",
        description: "This is a modern platform for chatting, finding friends, and creating cool squads.",
        action_btn: "Start chatting"
    }
};

// Функция смены языка
function changeLanguage(lang) {
    // Сохраняем выбор пользователя в браузере, чтобы язык не слетал при перезагрузке
    localStorage.setItem('selectedLanguage', lang);
    
    // Находим все элементы с атрибутом data-lang-key
    const elements = document.querySelectorAll('[data-lang-key]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        
        // Если для этого ключа есть перевод, меняем текст
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// При загрузке страницы проверяем, какой язык был выбран ранее (по умолчанию 'ru')
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'ru';
    changeLanguage(savedLang);
});
