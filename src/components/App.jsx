import { lazy } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from "react-router-dom";

const AppLayout = lazy(() => import('./AppLayout/AppLayout'));
const HomePage = lazy(() => import('../Pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../Pages/CatalogPage/CatalogPage'));
const FavoritePage = lazy(() => import('../Pages/FavoritePage/FavoritePage'));


export const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="catalog" element={<CatalogPage/>}/>
          <Route path="favorite" element={<FavoritePage/>}/>
          {/* <Route  path="catalog/:camperId" element={<CampareDetails/>}>
            <Route path="features" element={<Features/>}/>
            <Route path="reviews" element={<Reviews/>}/>
          </Route> */}
        </Route>
        <Route path="*" element={<HomePage/>} />
      </Routes>

      <GlobalStyle/>
    </div>
    
  );
};


// '/' - компонент Home, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
// /movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.