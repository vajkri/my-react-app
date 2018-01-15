import axios from 'axios';

const BASE_URL = 'https://my-json-server.typicode.com/vajkri/demo';

export {getImageData};

function getImageData() {
	const url = `${BASE_URL}/images`;
	return axios.get(url).then(response => response.data);
}