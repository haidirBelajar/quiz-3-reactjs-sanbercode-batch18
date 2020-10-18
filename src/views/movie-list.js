import React, { useState, useEffect } from 'react';
import Axios from 'axios';


const MLView = () => {
    const [movie, setMovie] =  useState(null)
    const [input, setInput]  =  useState({
        inputTitle: "",
        inputDescription: "",
        inputYears: 0,
        inputDuration: "",
        inputGenre: "",
        inputRating:0,
        inputImageURL: "",
        id: null})

        useEffect( () => {
            if (movie === null){
              Axios.get(`http://backendexample.sanbercloud.com/api/movies`)
              .then(res => {
                setMovie(res.data.map(el=>{ return {id: el.id,
                    title: el.title,
                    description: el.description, 
                    year: el.year,
                    duration: el.duration,
                    genre: el.genre,
                    rating: el.rating
                 }} ))
              })
            }
          }, [movie])

          const handleChange = (event) =>{
            let typeOfInput = event.target.name
            let value = event.target.value
            switch (typeOfInput){
              case "title":
              {
                setInput({...input, inputTitle: value});
                break
              }
              case "description":
              {
                setInput({...input, inputDescription: value});
                break
              }
              case "years":
              {
                setInput({...input, inputYears: value});
                  break
              }
              case "duration":
              {
                setInput({...input, inputDuration: value});
                  break
              }
              case "genre":
              {
                setInput({...input, inputGenre: value});
                  break
              }
              case "rating":
              {
                setInput({...input, inputRating: value});
                  break
              }
              case "imageurl":
              {
                setInput({...input, inputImageURL: value});
                  break
              }
            default:
              {break;}
            }
          }
          
          const handleSubmit = (event) =>{
            // menahan submit
            event.preventDefault()
        
            let title = input.inputTitle
            let description = input.inputDescription
            let year = input.inputYears.toString()
            let duration = input.inputDuration.toString()
            let genre = input.inputGenre
            let rating = input.inputRating
            let imageurl = input.inputImageURL
        
                
              Axios.post(`http://backendexample.sanbercloud.com/api/movies`, {title, description, year, duration, genre, rating, imageurl})
              .then(res => {
                  setMovie([
                    ...movie, 
                    { id: res.data.id, 
                      title ,
                      description,
                      year,
                      duration,
                      genre,
                      rating,
                      imageurl
                    }]) 
              })
            }
           

            const Delete = (event) =>{
              let idMovie = parseInt(event.target.value)
          
              Axios.delete(`http://backendexample.sanbercloud.com/api/movies/${idMovie}`)
              .then(() => {
                setMovie(null)
              })
            }

            const editHandle = (event) => {
              let idMovie = parseInt(event.target.value)
          
              Axios.get(`http://backendexample.sanbercloud.com/api/movies/${idMovie}`)
              .then(res => {
                let dataMovie = res.data
                console.log(dataMovie)
                setInput({
                  title: dataMovie.title
                })
              })
            }

    return(
      <div>
      <div className="container">
          <div className="content noborder">
              <table>
                  <thead>
                      <tr>
                          <th>Title</th>
                          <th>description</th>
                          <th>year</th>
                          <th>duration</th>
                          <th>genre</th>
                          <th>rating</th>
                      </tr>
                  </thead>
                  <tbody>
  
              {
                movie !== null && movie.map((x, index)=>{
                  return(                    
                    <tr key={x.id}>
                        <td>{x.title}</td>
                        <td>{x.description}</td>
                        <td>{x.year}</td>
                        <td>{x.duration}</td>
                        <td>{x.genre}</td>
                        <td>{x.rating}</td>
                        <td>
                        <button value={x.id} onClick={editHandle}>Edit</button>
                        &nbsp;
                        <button value={x.id} onClick={Delete}>Delete</button>
                        </td>
                    </tr>
                  )
                })
              }
          </tbody>
              </table>
          </div>
      </div>
      <div className="container">
        <div className="content noborder">
            <form className="form-input" onSubmit={handleSubmit}>
              <div className="input">
              <label >
                Title:
              </label>
              <input type="text" required name="title" value={input.inputTitle} onChange={handleChange}/>

              </div>
              <div className="input" >
              <label >
                Description:
              </label>
              <textarea name="description" value={input.inputDescription} onChange={handleChange}/>  
              </div>
              <div className="input">
              <label >
                Years:
              </label>
              <input type="number" required name="years" value={input.inputYears} min="1990" onChange={handleChange}/>
              </div>
              <div className="input">
              <label >
                Duration:
              </label>
              <input type="number" required name="duration" value={input.inputDuration} min="120" onChange={handleChange}/>
              </div>
              <div className="input">
              <label >
                Genre:
              </label>
              <input type="text" required name="genre" value={input.inputGenre} onChange={handleChange}/>
              </div>
              <div className="input">
              <label >
                Rating:
              </label>
              <input type="number" required name="rating" value={input.inputRating} min="0" max="10"onChange={handleChange}/>
              </div>
              <div className="input" >
              <label >
                Image URL:
              </label>
              <textarea name="imageurl" value={input.inputImageURL} onChange={handleChange}/>  
              </div>
              <div className="submit">
              <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
      </div>
      </div>
    )
}

export default MLView