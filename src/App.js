import React from 'react';
import './App.css';
import NewsContainer from './NewsContainer';
import testPhoto from './images/test.png'

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      {/* firt way */}
      <img src={images[0]} alt='test'/>
       {/* second way */}
      <img src={testPhoto} alt='test'/>
      <NewsContainer />
    </div>
  );
}

export default App;
