let form = document.querySelector('form');

let card = document.querySelector('.card');

let details = document.querySelector('.card-body');

let updateUI = (data) => {

    let cityDets = data.cityDets;
    let weatherDets = data.weatherDets;

    details.innerHTML = `
                        <h4 class="card-title">${cityDets.EnglishName}</h4>
                        <p class="card-text">${weatherDets.WeatherText}</p>
                        <h1 class="display-3">${weatherDets.Temperature.Metric.Value} &deg;C</h1>
                        `;

    card.classList.remove('d-none');

};


let updateCity = async (city) => {
    // console.log(city);

    let cityDets = await getCity(city);
    let weatherDets = await getWeather(cityDets.Key);

    return {
        cityDets,
        weatherDets
    };

};


form.addEventListener('submit', (e) => {
    e.preventDefault();

    let input = e.target.city.value;

    form.reset();

    updateCity(input).then((data) => {
        // console.log(data);
        updateUI(data);
    }).catch((err) => {
        console.log(err);
    });

    localStorage.setItem('location', input);


});

if (localStorage.getItem('location')) {
    updateCity(localStorage.getItem('location')).then((data) => {
        // console.log(data);
        updateUI(data);
    }).catch((err) => {
        console.log(err);
    });
}