import Header from './components/Header/Header';
import Main from './components/Main/Main'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Main id="main"/>
      </div>
    </div>
  );
}

export default App;
