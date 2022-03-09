import Header from './componets/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './componets/HomePage';
import "./App.css"



import './App.css';

function App() {
  //const [chosenTopic, setChosenTopic] = useState('All')
  return (
    <BrowserRouter>
            <div className="App">
            <Header />
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/topics/:topic" element={<HomePage/> } />
              </Routes>
            </div>
        </BrowserRouter>
    
  )
}

export default App;
