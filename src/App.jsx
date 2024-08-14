import React, { useState, useEffect } from 'react';
import './App.css';
import $ from "https://esm.sh/jquery";
import twitter_icon from './Assets/tweeterX.png';
import next_icon from './Assets/next.png';

const App = () => { 
  const [quotes, setQuotes] = useState('');

  const getQuote = () => {
    fetch('https://type.fit/api/quotes')
    .then((res) => res.json())
    .then(data => {
      let selectQuote = Math.floor(Math.random()*data.length);
    setQuotes(data[selectQuote]);
    });
  };
 
  useEffect(() => {
    getQuote();
  }, []);

  const twitter = () => {
    window.open('https://twitter.com/intent/tweet?text=' + quotes.text + (' ') + ('-') + (quotes.author?.split(',')[0]))
}
$('.tweetQuote').on('click',function(event){
  event.preventDefault();

  window.open('https://twitter.com/intent/tweet?text=' + quotes.text + (' ') + ('-') + (quotes.author?.split(',')[0]))
})

  return (
    <div className="app" id='quote-box'>
      <div className='quote' id='text'>{'"' + ' ' + quotes.text + ' ' + '"'}</div>
      <div className='line'>
      <div className='bottom'>
      <div className='author' id='author'>- {quotes.author?.split(',')[0]}</div>
      <div className='icons'>
     
      <div id='new-quote'><img src={next_icon} onClick={getQuote} /></div>
      
      <a href='https://twitter.com/intent/tweet?text=' className='tweetQuote' id='tweet-quote'><img src={twitter_icon} /></a>
    
    
  
  </div>
  </div>
  </div>
  </div>

  

  );
   
};

export default App;
