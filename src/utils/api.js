import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

const TMDB_TOKEN =
	'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmRlOTQyMWFhMjc5YWFjY2Q4MDFiYjU5ZTQyMTc1NCIsInN1YiI6IjY0YzlkZWQwYTU3NDNkMDEyZTFiOTZkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-AZBNmkxsLtisqDOwb1DLs7O4mfknWAMiLvP7SUJh8o';

const headers = {
	Authorization: 'bearer ' + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
	try {
		const { data } = await axios.get(BASE_URL + url, { headers, params });
		return data;
	} catch (err) {
		console.log(err);
		return err;
	}
};
