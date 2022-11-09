import './App.css';
import { useState } from 'react';

function App() {

  let [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })

  const toggleStyle = () => {
    if (myStyle.color == 'white') {
      setMyStyle({

        color: 'black',
        backgroundColor: 'white'
      })
    }
    else {
      setMyStyle({

        color: 'white',
        backgroundColor: 'black'
      })
    }

  }

  return (
    <div className="App" style={myStyle}>
      <h1>Overreacted</h1>
      <button type='button' className='toggle' onClick={toggleStyle} >Toggle</button>
      <br>
      </br>
      <h2 className='pink-color'>The WET codbase</h2>
      <h5><i>Sunday 4th, 2020 11 min read</i></h5>
      <h5>Come waste your time with me</h5>
      <br>
      </br>
      <h2 className='pink-color'>Goodby, Clean Code</h2>
      <h5><i>Friday 22nd, 2019 5 min read</i></h5>
      <h5>Let clean code guide you. Then let it go.</h5>
      <br>
      </br>
      <h2 className='pink-color'>My Decade In Review</h2>
      <h5><i>Saturday 11th, 2018 5 min read</i></h5>
      <h5>A personal reflection</h5>
      <br>
      </br>
      <h2 className='pink-color'>What Are The React Team Principles</h2>
      <h5><i>Thursday 4th, 2015 5 min read</i></h5>
    </div>
  );
}

export default App;
