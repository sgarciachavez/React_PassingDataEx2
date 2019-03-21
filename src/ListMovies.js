import React, { Component } from 'react';

class ListMovies extends Component{
  	convertToArray = (collection) => {
      let array = [];
      
      let keys = Object.keys(collection)
      for(let k of keys){
      	let movie = collection[k];
        array.push(movie);
      }
      return array;
    }

	getUsers = (movieId, profiles,users) => {
      let array = [];
      let isEmpty = true;
      console.log('movieId = ' + movieId);
      
      
      let filtered = profiles.filter(profile => profile.favoriteMovieID == movieId);
      filtered.map((profile) => {
      	let user = users[profile.userID];
        array.push(user);
        isEmpty = false;
      })
      if(isEmpty){
      	array.push({id: 0, name: 'No one favorited the movie'}
        );
      }
      array.map(a => console.log(a));
      return array;
    }
	render(){
      
    	return (
        	<ol>
             {this.convertToArray(this.props.movies).map((movie) => (
              	<div>
              		<li key={movie.id}>
						<p>{movie.name}</p>
						<ul>
							{this.getUsers(movie.id, this.props.profiles, this.props.users).map(user => 
                            	<li key={user.id}>{user.name}</li>                                                             
                            )}
						</ul>
					</li>
              </div>
            	
            ))}
          	</ol>
        )
    }
}

export default ListMovies;