import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecipeSearch from './components/RecipeSearch';

function App() {
  return (
    <div className="App">
      <Header />
      <RecipeSearch />
      <Sidebar />
    </div>
  );
}

export default App;
