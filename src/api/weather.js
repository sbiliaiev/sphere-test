export function getCurrentWeather(city) {
	let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=5a8bd71cbab016797e85c46060bd7b2f';
	return fetch(url)
		.then((response) => {
			return response.json()
		});
		// .then((response) => {
		// 	if (response.status >= 200 && response.status < 300) {  
		// 		return Promise.resolve(response)  
		// 	} else {  
		// 		return Promise.reject(new Error(response.statusText))  
		// 	}  
		// })
		// .then((response) => {
		// 	return response.json()
		// })
		// .then((data) => {
		// 	console.log('Request succeeded with JSON response', data);
		// 	tmp = data;
		// 	// console.log('here', tmp);
		// 	return data;
		// })
		// .catch((error) => {
		// 	console.log('error', error);
		// });
}