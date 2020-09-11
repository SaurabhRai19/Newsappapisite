import React, { useEffect, useState} from 'react';
import Newspage from '../components/Newspage';
import './App.css';
import '../index.css';
import Searchbox from '../components/Searchbox';
import { BiNews } from 'react-icons/bi';
import { MdEmail } from "react-icons/md";

function App() {

  const APIKEY = "355ad7894c714aba88ac735135f85785";

  const [searchfd, setSearchfd] = useState({
    searchfield: ''
  });
  const [newsarr, setNewarr] = useState([]);

  const [isOpen, setisOpen] = useState(true);

  

  const emailsubscription = () => {
    return (
      <div className="containerwa">
        <div id="emailsubs">
          <div id="emailandclose">
            <MdEmail color='red' size='10rem'/>
            <button id="closebutton" onClick={(e) => setisOpen(false)}>X</button>
          </div>
          <h2 id="subtoget">SUBSCRIBE TO GET DAILY UPDATES</h2>
          <form>
            
            <div class="form-group">
              <label for="emaiid">Email Address</label>
              <input type="email" class="form-control" id="emaiid" aria-describedby="emailHelp" placeholder="Email" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            
            <button  id="Subscribe" type="submit" class="btn btn-primary btn-block">Subscribe</button>
          </form>
          
        </div>
      </div>
    )
  }
  
   const getNews = async () => {
     const response = await fetch(`http://newsapi.org/v2/top-headlines?country=in&apiKey=${APIKEY}`);
     const data = await response.json();
     //setNews(data.articles);
     setNewarr(data.articles);
   };
  useEffect(() => {
    getNews();

  });

  const onSearchChange = (event) => {
    setSearchfd({ searchfield: event.target.value })
  }
  const { searchfield } = searchfd;
 
  const filterednews = newsarr.filter(filtering => {
    return filtering.title.toLowerCase().includes(searchfield.toLowerCase());
  })
  return (
    <div>
      <div className="headiconandtitle">
        <BiNews id='newicon' color='grey' />
        <h1 className="headline">Get Your Daily News Update</h1>
      </div>
      {isOpen===true ? null : <Searchbox searchChange={onSearchChange}/> }
      {isOpen === true
        ? emailsubscription()
        : 
        filterednews.map(newas => (
        <Newspage
          key={newas.title}
          title={newas.title}
          description={newas.description}
          url={newas.url}
          publishedAt={newas.publishedAt}
          content={newas.content}
          image={newas.urlToImage}
        />
      ))};
      
      {/* 
        <Newspage
          key={news.title}
          title={news.title}
          description={news.description}
          url={news.url}
          publishedAt={news.publishedAt}
          content={news.content}
          image={news.image}
        />



        const [news, setNews] = useState({
    title: 'Title',
    description: 'Description of everything',
    url: 'https://www.google.com',
    publishedAt: '2020',
    content: 'Our main content has to be designed really well',
    image: 'C:\Users\saura\Downloads\jennifer-marquez--shIc419kMU-unsplash.jpg'
  });
      */}
    </div>
  );
}

export default App;

