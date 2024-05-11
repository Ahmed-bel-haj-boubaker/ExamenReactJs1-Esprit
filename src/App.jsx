import { Route, Routes } from "react-router-dom";

import { Competitions } from "./Competitions/Competitions";

import Home from "./Home/Home";
import { Layout } from "./Layout/Layout";
import NotFound from "./NotFound/NotFound";
import CompetitionDetails from "./CompetitionDetails/CompetitionDetails";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route path="/competitions">
          <Route
            path=""
            element={
              <Layout>
                <Competitions />
              </Layout>
            }
          />
          <Route
            path="competionDetails/:id"
            element={
              <Layout>
                <CompetitionDetails />
              </Layout>
            }
          />
        </Route>

        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
