import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Routes} from "react-router-dom";
import AppLayout from './AppLayout';
import MainPageArticle from '../components/MainPageArticles/MainPageArticles';
import ArticlePage from '../components/ArticlePageArticle/ArticlePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout/>}>
            <Route index element={<MainPageArticle/>} />
            <Route path="/articles" element={<ArticlePage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
