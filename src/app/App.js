import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Routes} from "react-router-dom";
import AppLayout from './AppLayout';
import MainPageArticle from '../features/MainPageArticles/MainPageArticles';
import ArticlePage from '../features/ArticlePageArticle/ArticlePage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadHomeData } from '../features/articledata/articledataslice';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadHomeData());
  }, [dispatch])

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
