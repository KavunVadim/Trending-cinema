import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import routers from "./utils/routers";
import Navigation from "./Components/Navigation/Navigation";
import Spinner from "./Components/Spinner/Spinner";

const Home = lazy(() => import("./pages/Home/Home"));
const Movies = lazy(() => import("./pages/Movies/Movies"));
const MovieDetails = lazy(() => import("./pages/MoviesDetails/MoviesDetails"));

function App() {
  const { HOME, MOVIES, MOVIE_DETAILS } = routers;
  return (
    <>
      <Navigation />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={HOME} component={Home} />
          <Route exact path={MOVIES} component={Movies} />
          <Route path={MOVIE_DETAILS} component={MovieDetails} />
          <Redirect to={HOME} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
