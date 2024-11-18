// Получаем ссылки на элементы
const cityInput = document.getElementById('city');
const findWeatherButton = document.getElementById('findWeather');
const tempElement = document.getElementById('temp');
const humidityElement = document.getElementById('humidity');
const precipitationElement = document.getElementById('precipitation');
const windElement = document.getElementById('wind');
const iconElement = document.getElementById('icon');

findWeatherButton.addEventListener('click', function() {
    const city = cityInput.value;
    
    const apiKey = '8643e5fa4d67cb1ad3c160e1d6c66d90';
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            tempElement.innerText = `${data.main.temp} °C`;
            humidityElement.innerText = `${data.main.humidity} %`;
            
            const precipitation = data.weather[0].description || 'Нет осадков';
            precipitationElement.innerText = precipitation;
            
            const windSpeed = data.wind.speed;
            const windDirection = data.wind.deg;
            windElement.innerText = `Скорость: ${windSpeed} м/с, Направление: ${windDirection}°`;

            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
            iconElement.innerHTML = `<img src="${iconUrl}" alt="Погода">`;
        })
        .catch(error => {
            alert('Ошибка получения данных. Проверьте правильность названия города.');
            console.error('Error:', error);
        });
});

cityInput.addEventListener('input', function() {
    tempElement.innerText = '';
    humidityElement.innerText = '';
    precipitationElement.innerText = '';
    windElement.innerText = '';
    iconElement.innerHTML = '';
});
