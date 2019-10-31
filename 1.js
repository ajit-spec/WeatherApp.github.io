let key = 'vap7qOwGFCE6uhCK2jGfr7wzYO1oGROs';

let getCity = async (city) => {

    let base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    let query = `?apikey=${key}&q=${city}`;

    let response = await fetch(base + query);

    if (response.status !== 200) {
        throw new Error('cannot fetch data');
    }

    let data = await response.json();
    return data[0];

};

let getWeather = async (id) => {
    let base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    let query = `${id}?apikey=${key}`;

    let response = await fetch(base + query);
    if (response.status !== 200) {
        throw new Error('cannot find');
    }

    let data = await response.json();
    return data[0];
};

// getCity('manchester').then((data) => {
//     console.log(data.Key);
//     return getWeather(data.Key);
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });

