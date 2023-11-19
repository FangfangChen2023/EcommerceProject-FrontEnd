import logo from './logo.svg';
import './App.css';

function App() {

  const reqBody={
    "username":"Amy",
    "password":"abcdef",
    "email":"Amy@gmail.com"
  };

  fetch("api/auth/authenticate",{
    headers: {
      "Content-Type":"application/json"
    },
    method:"post",
    body: JSON.stringify(reqBody)
  }).then((response) => {
    const headers =response.headers;
    console.log(headers);
    return response.json();
  })
  .then(json=>console.log(json))
  .catch(err=>console.log(err));

  return (
    <div className="App">
      <header className="App-header">
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
