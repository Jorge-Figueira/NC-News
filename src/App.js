import Header from './componets/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageCreator from './componets/PageCreator';
import SingleArticle from './componets/SingleArticle';
import "./App.css"



import './App.css';

function App() {
  //const [chosenTopic, setChosenTopic] = useState('All')
  return (
    <BrowserRouter>
            <div className="App">
            <Header />
              <Routes>
                  <Route path="/" element={<PageCreator />} />
                  <Route path="/topics/:topic" element={<PageCreator/> } />
                  <Route path="/articles/:article_id" element={<SingleArticle/> } />
              </Routes>
            </div>
        </BrowserRouter>
    
  )
}

export default App;
