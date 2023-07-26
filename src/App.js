
import './App.css';
import Slider from './Slider';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';







function App() {
  return (
    <>
    <Nav />
    <Banner fetchUrl={requests.fetchActionMovies}/>
    <Slider title="Netflix originals" isPoster={true} fetchUrl={requests.fetchNetflixOriginals}/>
    <Slider title="Trending" fetchUrl={requests.fetchTrending}/>
    <Slider title="Action" fetchUrl={requests.fetchActionMovies}/>
    <Slider title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
    <Slider title="Documentries" fetchUrl={requests.fetchDocumentaries}/>
    <Slider title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
    <Slider title="Top Rated" fetchUrl={requests.fetchTopRated}/>
    <Slider title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
    
    
    
    
    
    
    
    
    </>
    
      
    
  );
}

export default App;
