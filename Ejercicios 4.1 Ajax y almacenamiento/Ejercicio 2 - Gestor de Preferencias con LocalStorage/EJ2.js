
//Aqui cargo del Local Storage los valos y si estan vacios pongo unos por dedectos
function loadPreferences() {
    const theme = localStorage.getItem('theme') || 'light';
    const fontSize = localStorage.getItem('fontSize') || 'medium';
    const language = localStorage.getItem('language') || 'es';

    document.body.classList.add(theme === 'dark' ? 'dark-theme' : 'light-theme');
    document.body.classList.add(fontSize === 'small' ? 'small-font' : fontSize === 'medium' ? 'medium-font' : 'large-font');
    document.getElementById('themeSelector').value = theme;
    document.getElementById('fontSizeSelector').value = fontSize;
    document.getElementById('languageSelector').value = language;

    changeLanguage(language); //LLamo a la funcion de cambiar idioma pero no me funciona bien del todo y no se porque
}

function savePreferences() { //En esta funcion creo el locolaStorage con los valores que quiero
    const theme = document.getElementById('themeSelector').value;
    const fontSize = document.getElementById('fontSizeSelector').value;
    const language = document.getElementById('languageSelector').value;

    localStorage.setItem('theme', theme);
    localStorage.setItem('fontSize', fontSize);
    localStorage.setItem('language', language);

    document.body.className = '';
    document.body.classList.add(theme === 'dark' ? 'dark-theme' : 'light-theme');
    document.body.classList.add(fontSize === 'small' ? 'small-font' : fontSize === 'medium' ? 'medium-font' : 'large-font');
    
    changeLanguage(language);
}

function resetPreferences() { //Aqui restauro por defectos los valores del localstorage
    localStorage.removeItem('theme');
    localStorage.removeItem('fontSize');
    localStorage.removeItem('language');
    
    document.getElementById('themeSelector').value = 'light';
    document.getElementById('fontSizeSelector').value = 'medium';
    document.getElementById('languageSelector').value = 'es';

    savePreferences();
}

function saveProfile() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    alert('Perfil Guardado:\nNombre: ' + username + '\nCorreo: ' + email);
}

function changeLanguage(language) {
    const texts = {
        es: {
            title: "Gestor de Preferencias",
            config: "Configuraciones",
            theme: "Tema:",
            fontSize: "Tamaño de Fuente:",
            language: "Idioma:",
            savePreferences: "Guardar Preferencias",
            resetPreferences: "Restaurar Predeterminadas",
            profile: "Perfil de Usuario",
            usernamePlaceholder: "Nombre de Usuario",
            emailPlaceholder: "Correo Electrónico",
            saveProfile: "Guardar Perfil"
        },
        en: {
            title: "Preferences Manager",
            config: "Settings",
            theme: "Theme:",
            fontSize: "Font Size:",
            language: "Language:",
            savePreferences: "Save Preferences",
            resetPreferences: "Restore Default",
            profile: "User Profile",
            usernamePlaceholder: "Username",
            emailPlaceholder: "Email",
            saveProfile: "Save Profile"
        }
    };

    const selectedTexts = texts[language];

    document.querySelector('h1').textContent = selectedTexts.title;
    document.getElementById('configSection').querySelector('h2').textContent = selectedTexts.config;
    document.querySelector('label[for="themeSelector"]').textContent = selectedTexts.theme;
    document.querySelector('label[for="fontSizeSelector"]').textContent = selectedTexts.fontSize;
    document.querySelector('label[for="languageSelector"]').textContent = selectedTexts.language;
    document.querySelector('button[onclick="savePreferences()"]').textContent = selectedTexts.savePreferences;
    document.querySelector('button[onclick="resetPreferences()"]').textContent = selectedTexts.resetPreferences;
    document.getElementById('profileSection').querySelector('h2').textContent = selectedTexts.profile;
    document.getElementById('username').placeholder = selectedTexts.usernamePlaceholder;
    document.getElementById('email').placeholder = selectedTexts.emailPlaceholder;
    document.querySelector('button[onclick="saveProfile()"]').textContent = selectedTexts.saveProfile;
}

window.onload = loadPreferences;
