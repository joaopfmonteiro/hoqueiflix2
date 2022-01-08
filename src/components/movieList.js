export function getDivision(title) {
	let games = [];
    movieList.forEach(elem => {
		if (elem.division === title) {
			games.push (elem);
		}
	});
    return games;
}

export const movieList  =[
    {
    gameName : 'HC Turquel vs UD Oliveirense',
    division : 'National Championship',
    season : '2021/2022',
    poster_path: 'https://fpp.pt/wp-content/uploads/WRG19.0035_0326.jpg',
    backgroundimage : 0 ,
    description : 0,
    genres : 'Sport',
    video:0 ,
     },
     {
    gameName : 'AD Valongo vs SC Marinhense',
    division : 'National Championship',
    season : '2021/2022',
    poster_path: 'https://fpp.pt/wp-content/uploads/WRG19.0035_0326.jpg',
    backgroundimage : 0,
    description : 0,
    genres : 'Sport' ,
    video: 0,
     },
    {
    gameName : 'Biblioteca IR vs S. Alenquer e Benfica',
    division : 'Second South Division',
    season : '2021/2022',
    poster_path: 'https://fpp.pt/wp-content/uploads/WRG19.0035_0326.jpg',
    backgroundimage : 0,
    description : 0,
    genres : 'Sport' ,
    video : 0 ,
    },
    {
    gameName : 'Biblioteca IR vs CD CRIAR-T',
    division : 'Second South Division',
    season : '2021/2022',
    poster_path: 'https://fpp.pt/wp-content/uploads/WRG19.0035_0326.jpg',
    backgroundimage : 0,
    description : 0,
    genres : 'Sport' ,
    video : 0 ,
    },
]
export default {movieList, getDivision};
