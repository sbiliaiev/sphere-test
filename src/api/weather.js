export function getCurrentWeather(city) {
	let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=5a8bd71cbab016797e85c46060bd7b2f';
	return fetch(url)
		.then((response) => {
			console.log('success', response.json());
		})
		.catch((error) => {
			console.log('error', error);
		});
}