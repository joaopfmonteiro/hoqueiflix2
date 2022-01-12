import React, { useEffect, useState } from 'react';
import './app.css';
import tmdb from './tmdb';
import MovieRow from './components/movieRow';
import movieListComponent from './components/movieList';
import FeaturedMovie from './components/featuredMovie';
import Header from './components/header';
import movieList from './components/movieList';

export default () => {
  
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState([]);
  const [blackHeader, setBlackHeader] = useState(false)
  useEffect(()=>{
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      setMovieList(list);

      let movieRandom = movieListComponent.movieList;
      let randomChosen = Math.floor(Math.random() * movieRandom.length);  
      let chosen = movieRandom[randomChosen];
      setFeaturedData(chosen)
      console.log(chosen)
        
    }
    loadAll();
  },[]);

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY>10) {
        setBlackHeader(true);
      }else{
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener);
    return ()=> {
    window.removeEventListener('scroll', scrollListener);  
    }

  },[])
  return (
    <div className="page">

      <Header black= {blackHeader} />

      {featuredData &&
        <FeaturedMovie item= {featuredData}/>
      }
      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
          ))}
      </section>  
    </div>
  );
}


