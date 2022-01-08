import movieList from './components/movieList';


export default {
    getHomeList: async () => {
        return [{
            title: "National Championship",
            items: movieList.getDivision('National Championship')
        },
        {
            title: "Second North Division",
            items: movieList.getDivision('Second North Division')
        },
        {
            title: "Second South Division",
            items: movieList.getDivision('Second South Division')
        }
    ]
}
}
