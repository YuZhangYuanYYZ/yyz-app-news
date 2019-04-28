import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewsCard from './news-card'
const post = [{
  imgSrc: 'https://www.realestate.com.au/blog/images/600x450-fit,progressive/2019/04/12110413/Cross-St-exterior.jpg',
  title: 'Australia’s most in-demand streets',
  description: 'All roads lead to Melbourne, with the Victorian capital home to eight of the 10 most sought-after streets for buyers in Australia.',
  author: 'Danielle Cahill',
},
{
  imgSrc: "https://www.realestate.com.au/blog/images/600x337-fit,progressive/2019/04/15161259/capi_53993d78a92d88df85e2b17551870ac7_ccdc2f498c2ad27d52304edf6d35e11d.jpeg",
  title: 'Unpacking real estate jargon for home buyers',
  description: 'It’s easy to be mystified by the real estate jargon used when buying, selling, or renting a property.',
  author: 'Emily Hutchinson',
},
{
  imgSrc: "https://www.realestate.com.au/blog/images/600x450-fit,progressive/2019/04/08120206/Newport-Terraces-Skillion-2000x1500px.jpg",
  title: '5 tips for building on a small block of land',
  description: 'Building a well designed home on a small block of land can be one of the smartest ways to get into the property market.',
  author: 'Cedar Woods',
}]
function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <NewsCard post={post} />
    </div>
  );
}

export default App;
