import Header from './componets/Header';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import HomePage from './componets/HomePage';
import "./App.css"



import './App.css';

function App() {
  return (
    <BrowserRouter>
            <div className="App">
            <Header />
              <Routes>
                  <Route path="/" element={<HomePage/>} />
                  
              </Routes>
            </div>
        </BrowserRouter>
    
  )
}

export default App;
