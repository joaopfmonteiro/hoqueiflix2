import movieList from './components/movieList';


export default {
    getHomeList: async () => {
        return [
            {
                title: "National Championship",
                items: movieList.getDivision('National Championship')
            },
            {
                title: "Second Division",
                items: movieList.getDivision('Second Division')
            },
        ];
    },

}
