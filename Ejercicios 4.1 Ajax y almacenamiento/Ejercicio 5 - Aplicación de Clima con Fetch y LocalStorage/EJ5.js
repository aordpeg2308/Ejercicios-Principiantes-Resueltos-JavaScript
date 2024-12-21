const apiKey = 'd225d6ad68eb4134650d805bdf87721c';  //  Nota no me funcionaba y tenia un espacio sin darme cuenta xDDD
const weatherForm = document.getElementById('locationForm');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');
const locationList = document.getElementById('locationList');


//Pillamos las Localicaiones que tenemos guardado en el localStorage
const getSavedLocations = () => { 
    const savedLocations = JSON.parse(localStorage.getItem('locations')) || [];
    return savedLocations;
};

//Guardamos en el localStorage la ciudad si existe.
const saveLocation = (cityName) => {
    const savedLocations = getSavedLocations();
    if (!savedLocations.includes(cityName)) {
        savedLocations.push(cityName);
        localStorage.setItem('locations', JSON.stringify(savedLocations));
    }
};

//Eliminamos la ciudad del localStorage
const deleteLocation = (cityName) => {
    const savedLocations = getSavedLocations();
    const filteredLocations = savedLocations.filter(location => location !== cityName);
    localStorage.setItem('locations', JSON.stringify(filteredLocations));
};


//Imprimimos el tiempo de la ciudad buscada
const showWeather = (data) => {
    const { main, weather, name } = data;
    weatherResult.innerHTML = `
        <h3>Clima en ${name}</h3>
        <p>Temperatura: ${main.temp}°C</p>
        <p>Humedad: ${main.humidity}%</p>
        <p>Condición: ${weather[0].description}</p>
    `;
};


//Esto es la guinda del pastel ya que es la peticion de la Api. 

const fetchWeather = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`); 
        if (!response.ok) { // En caso de que la api falle o no encuentre nada devolvere esto 
            throw new Error('Ciudad no encontrada');
        }
        const data = await response.json();
        showWeather(data);
        saveLocation(city);
        displaySavedLocations(); 
    } catch (error) {
        weatherResult.innerHTML = `<p>${error.message}</p>`;
    }
};

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (city) {
        fetchWeather(city);
    }
    cityInput.value = ''; 
});

// Aqui activaremos esto para eliminar la ciudad tanto de la lista como del localstorage
const handleDeleteLocation = (cityName) => {
    deleteLocation(cityName);
    displaySavedLocations(); 
};


//Mostrara las ciudades que estan en el localStorage 
const displaySavedLocations = () => {
    const savedLocations = getSavedLocations();
    locationList.innerHTML = '';
    savedLocations.forEach((location) => {
        const li = document.createElement('li');
        li.classList.add('location-item');
        li.innerHTML = `${location} <button onclick="handleDeleteLocation('${location}')">Eliminar</button>`;
        locationList.appendChild(li);
    });
};

const init = () => {
    displaySavedLocations(); 
};

init();
