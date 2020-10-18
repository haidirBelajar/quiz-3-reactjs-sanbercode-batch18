import React from 'react';
import Axios from 'axios';

class HomeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          id: null,
          title: "",
          year: "",
          duration: "",
          genre: "",
          description: "",
          rating: "",
          imgUrl: "",
          movies: null,
          status: "view",
        };
      }
      componentDidMount() {
        const url = `http://backendexample.sanbercloud.com/api/movies`;
        Axios.get(url).then((res) => {
          const newMovies = res.data;
          this.setState({
            movies: newMovies,
          });
        });
      }
      render() {
        return (
          <>
            
            <section className="none">
              <h1>Daftar Film Terbaik</h1>
            </section>
            {this.state.movies !== null &&
              this.state.movies.map((m, index) => {
                return (
                  <>
                    <div className="movie">
                        <div className="judul-film">
                            <h4>{m.title}</h4>
                        </div>
                        <div className="isi-film">
                            <div className="thumbnail">
                                <img className="containt" src={m.image_url} />
                            </div>
                            <div className="blabla">
                                <p>Rating : {m.rating}</p>
                                <p>Durasi : {m.durasi }</p>
                                <p>Genre : {m.genre}</p>
                            </div>
                        </div>
                        <div className="deskripsi">
                            <p>{m.description}</p>
                        </div>
                    </div>
                  </>
                );
              })}
          </>
        );
      }
    }

export default HomeView