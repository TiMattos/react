import './App.css';
import Pessoas from './components/pessoas';


function App() {
  const url = "https://via.placeholder.com/150"
  return (
  <div className = "App">
    <Pessoas nome="Thiago" idade="34" profissao="Analista de sistemas" foto={url}/>
  </div>
  )
}

export default App;
