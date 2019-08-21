import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { async } from 'q';
import Movie from './Movie';
import './App.css';


class App extends React.Component{
   state={
     isLoading:true,
     movies:[]
   }
   getMovie=async()=>{
    const {data:{data:{movies}}}=await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    //console.log(movies);
    this.setState({movies:movies,isLoading:false});
   }
   componentDidMount(){
     /*setTimeout(()=>{
      this.setState({isLoading:false});
     },6000);*/
     this.getMovie();
   }
   render(){
     console.log("render");
     const {isLoading,movies}=this.state;
     return(
     <section className="container">
     {isLoading?(
        <div className="loader">
          <span className="loader_text">Loading</span>
        </div>):(
        <div className="movies">
          {movies.map((movie)=>{
            return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} poster={movie.medium_cover_image} summary={movie.summary} genres={movie.genres}/>
          })}
        </div>
      )}
     </section>
       );
   }
}

export default App;
