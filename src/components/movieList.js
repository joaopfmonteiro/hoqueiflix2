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
    poster_path: 'https://firebasestorage.googleapis.com/v0/b/hoqueiflix2.appspot.com/o/turquelvsoliveirense.PNG?alt=media&token=34ac3018-409a-490a-9044-4ea3f155e09f',
    backgroundImage : 'https://firebasestorage.googleapis.com/v0/b/hoqueiflix2.appspot.com/o/turquelback.PNG?alt=media&token=5d7479b1-9714-4196-a154-5f07d45e4cda' ,
    description : 'Jogo do campeonato nacional disputado entre duas grandes equipas.....',
    genres : 'Sport',
    video:0 ,
     },
     {
    gameName : 'AD Valongo vs SC Marinhense',
    division : 'National Championship',
    season : '2021/2022',
    poster_path: 'https://firebasestorage.googleapis.com/v0/b/hoqueiflix2.appspot.com/o/valongoVsMarinhense.PNG?alt=media&token=5e4d38ee-b62c-4682-b38b-21e113ae1375',
    backgroundImage : 'https://firebasestorage.googleapis.com/v0/b/hoqueiflix2.appspot.com/o/ValongoBack.PNG?alt=media&token=3fcffcbd-9098-4047-8634-82bf57ce82f3',
    description : 'Jogo do campeonato nacional disputado entre duas grandes equipas.....',
    genres : 'Sport' ,
    video: 0,
     },
     {
    gameName : 'HC Turquel vs AD Valongo',
    division : 'National Championship',
    season : '2021/2022',
    poster_path: 'https://firebasestorage.googleapis.com/v0/b/hoqueiflix2.appspot.com/o/turquel%20vs%20valongo.PNG?alt=media&token=cb75da92-a018-4b95-82a2-f257e586371f',
    backgroundImage : 'https://firebasestorage.googleapis.com/v0/b/hoqueiflix2.appspot.com/o/turquelback.PNG?alt=media&token=5d7479b1-9714-4196-a154-5f07d45e4cda',
    description :'Jogo do campeonato nacional disputado entre duas grandes equipas.....',
    genres : 'Sport' ,
    video: 0,
    },
    {
    gameName : 'Biblioteca IR vs S. Alenquer e Benfica',
    division : 'Second South Division',
    season : '2021/2022',
    poster_path: 'https://firebasestorage.googleapis.com/v0/b/hoqueiflix2.appspot.com/o/bir%20vs%20alenquer.PNG?alt=media&token=ffe53bbd-c109-4f4f-bc1c-353c0b219891',
    backgroundImage : 'https://firebasestorage.googleapis.com/v0/b/hoqueiflix2.appspot.com/o/birback.PNG?alt=media&token=67c703e7-914a-42c5-94de-5abf6c746259',
    description :'Jogo do campeonato nacional disputado entre duas grandes equipas.....',
    genres : 'Sport' , 
    video : 0 ,
    },
    {
    gameName : 'Biblioteca IR vs CD CRIAR-T',
    division : 'Second South Division',
    season : '2021/2022',
    poster_path: 'https://firebasestorage.googleapis.com/v0/b/hoqueiflix2.appspot.com/o/bir%20vs%20criar-t.PNG?alt=media&token=cc81c43e-0237-43d0-92e4-c92ea6bc559a',
    backgroundImage : 'https://firebasestorage.googleapis.com/v0/b/hoqueiflix2.appspot.com/o/birback.PNG?alt=media&token=67c703e7-914a-42c5-94de-5abf6c746259',
    description :'Jogo do campeonato nacional disputado entre duas grandes equipas.....',
    genres : 'Sport' ,
    video : 0 ,
    },
    {
    gameName : 'HC Braga vs HC Turquel',
    division : 'National Championship',
    season : '2021/2022',
    poster_path: 'https://firebasestorage.googleapis.com/v0/b/hoqueiflix2.appspot.com/o/Braga%20vs%20turquel.PNG?alt=media&token=c3da9674-084d-4b52-a90c-c8c6f6b89fc3',
    backgroundImage : 'https://firebasestorage.googleapis.com/v0/b/hoqueiflix2.appspot.com/o/bragaback.PNG?alt=media&token=66a1fc07-af6d-4423-b059-e971e8497964',
    description :'Jogo do campeonato nacional disputado entre duas grandes equipas.....',
    genres : 'Sport' ,
    video : 0 ,
    },
    {
    gameName : 'HC Braga vs UD Oliveirense',
    division : 'National Championship',
    season : '2021/2022',
    poster_path: 'https://firebasestorage.googleapis.com/v0/b/hoqueiflix2.appspot.com/o/bragavsoliveirense.PNG?alt=media&token=d6207eaf-c3e4-40fc-a008-bef10cc2c681',
    backgroundImage : 'https://firebasestorage.googleapis.com/v0/b/hoqueiflix2.appspot.com/o/bragaback.PNG?alt=media&token=66a1fc07-af6d-4423-b059-e971e8497964',
    description : 'Jogo do campeonato nacional disputado entre duas grandes equipas.....',
    genres : 'Sport' ,
    video : 0 ,
    },
    {
    gameName : 'HC Braga vs AJ Viana',
    division : 'National Championship',
    season : '2021/2022',
    poster_path: 'https://firebasestorage.googleapis.com/v0/b/hoqueiflix2.appspot.com/o/bragavsviana.PNG?alt=media&token=52721190-da99-4358-9a5f-491dfc24ed3d',
    backgroundImage : 'https://firebasestorage.googleapis.com/v0/b/hoqueiflix2.appspot.com/o/bragaback.PNG?alt=media&token=66a1fc07-af6d-4423-b059-e971e8497964',
    description : 'Jogo do campeonato nacional disputado entre duas grandes equipas.....',
    genres : 'Sport' ,
    video : 0 ,
    },
    {
    gameName : 'HC Braga vs Parede FC',
    division : 'National Championship',
    season : '2021/2022',
    poster_path: 'https://firebasestorage.googleapis.com/v0/b/hoqueiflix2.appspot.com/o/bragavsparede.PNG?alt=media&token=bd80c689-9783-459e-a1db-80a806f82195',
    backgroundImage : 'https://firebasestorage.googleapis.com/v0/b/hoqueiflix2.appspot.com/o/bragaback.PNG?alt=media&token=66a1fc07-af6d-4423-b059-e971e8497964',
    description : 'Jogo do campeonato nacional disputado entre duas grandes equipas.....',
    genres : 'Sport' ,
    video : 0 ,
    },
    {
    gameName : 'SC Tomar VS FC Porto',
    division : 'National Championship',
    season : '2021/2022',
    poster_path: 'https://firebasestorage.googleapis.com/v0/b/hoqueiflix2.appspot.com/o/marinenseVsTomar.PNG?alt=media&token=73d0515d-7c02-4f70-9947-4415da375944',
    backgroundImage : 'https://firebasestorage.googleapis.com/v0/b/hoqueiflix2.appspot.com/o/TomarBack2.PNG?alt=media&token=841a3503-33ee-4b60-9606-0a913e1617c3',
    description : 'Jogo do campeonato nacional disputado entre duas grandes equipas.....',
    genres : 'Sport' ,
    video : 0 ,
    },
    {
    gameName : 'SC Tomar vs HC Braga',
    division : 'National Championship',
    season : '2021/2022',
    poster_path: 'https://fpp.pt/wp-content/uploads/WRG19.0035_0326.jpg',
    backgroundImage :'https://firebasestorage.googleapis.com/v0/b/hoqueiflix2.appspot.com/o/TomarBack2.PNG?alt=media&token=841a3503-33ee-4b60-9606-0a913e1617c3',
    description :'Jogo do campeonato nacional disputado entre duas grandes equipas.....',
    genres : 'Sport' ,
    video : 0 ,
    },
    {
    gameName : 'SC Tomar vs AJ Viana',
    division : 'National Championship',
    season : '2021/2022',
    poster_path: 'https://fpp.pt/wp-content/uploads/WRG19.0035_0326.jpg',
    backgroundImage : 'https://firebasestorage.googleapis.com/v0/b/hoqueiflix2.appspot.com/o/TomarBack2.PNG?alt=media&token=841a3503-33ee-4b60-9606-0a913e1617c3',
    description : 'Jogo do campeonato nacional disputado entre duas grandes equipas.....',
    genres : 'Sport' ,
    video : 0 ,
    },

]
export default {movieList, getDivision};
