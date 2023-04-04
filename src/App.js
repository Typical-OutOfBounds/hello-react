import {useState} from 'react'
import { supabase } from './supabaseClient'
import logo from './logo.svg';
import './App.css';

const data = {
  first: "Aidan",
  last: "Lane",
  school: "Michigan State University",
  graduated: false
};

const games = [
  {
    title: "Assassins's Creed Odyssey",
    release: 2018
  },
  {
    title: "God of War",
    release: 2018
  },
  {
    title: "Player Unknown Battle Ground",
    release: 2017
  }
]

const classes = [
  {
    title: "MI 449",
  },
  {
    title: "CMSE 381",
  },
  {
    title: "CSE 404",
  },
  {
    title: "CSE 482",
  },
  {
    title: "CSE 431",
  }
]

function Person() {
  return (
    <>
      <h1>{data.first} {data.last}</h1>
      <h2
        style={{
          color: data.graduated ? "green" : "red"
        }}
      >{data.school}</h2>
      
    </>
  );
}

function Games() {
  return (
    <>
      <h2>
        Games I have recently enjoyed
      </h2>
      <ul>
        {games.map(game => 
        <li
         key={1}
         style={{textAlign: "left"}}
          
        >
          {game.title}: {game.release}
        </li>)}
      </ul>
      
    </>
  );
}

function Classes() {
  return (
    <>
    <h2>Spring 2023 Courses</h2>
    <ul>
        {classes.map(game => 
        <li
         key={1}
         style={{textAlign: "left"}}
          
        >
          {game.title}
        </li>)}
      </ul>
    </>
  );
}

function Library() {
  const [myBooks, setMyBooks] = useState([]);
  async function getBooks() {
    let { data: books } = await supabase
      .from('books')
      .select('*')
    setMyBooks(books);
  }
  getBooks();

  return (
    <table className="book-table">
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>ISBN</th>
      </tr>
    {
      myBooks == null ? <></> :
      myBooks.map(b => (
        <tr>
          <td>{b.title}</td>
          <td>{b.author}</td>
          <td>{b.isbn}</td>
        </tr>
      ))
    }
    </table>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person/>
        <Games/>
        <Classes/>
        <Library/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Aidan and MSU
        </a>
      </header>
    </div>
  );
}

export default App;
