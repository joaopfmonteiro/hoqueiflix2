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
    poster_path: '../media/images/turquelvsoliveirense.PNG',
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
    gameName : 'HC Turquel vs AD Valongo',
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
    {
    gameName : 'HC Braga vs HC Turquel',
    division : 'National Championship',
    season : '2021/2022',
    poster_path: 'https://fpp.pt/wp-content/uploads/WRG19.0035_0326.jpg',
    backgroundimage : 0,
    description : 0,
    genres : 'Sport' ,
    video : 0 ,
    },
    {
    gameName : 'HC Braga vs UD Oliveirense',
    division : 'National Championship',
    season : '2021/2022',
    poster_path: 'https://fpp.pt/wp-content/uploads/WRG19.0035_0326.jpg',
    backgroundimage : 0,
    description : 0,
    genres : 'Sport' ,
    video : 0 ,
    },
    {
    gameName : 'HC Braga vs AJ Viana',
    division : 'National Championship',
    season : '2021/2022',
    poster_path: 'https://fpp.pt/wp-content/uploads/WRG19.0035_0326.jpg',
    backgroundimage : 0,
    description : 0,
    genres : 'Sport' ,
    video : 0 ,
    },
    {
    gameName : 'HC Braga vs Parede FC',
    division : 'National Championship',
    season : '2021/2022',
    poster_path: 'https://fpp.pt/wp-content/uploads/WRG19.0035_0326.jpg',
    backgroundimage : 0,
    description : 0,
    genres : 'Sport' ,
    video : 0 ,
    },
]
export default {movieList, getDivision};
