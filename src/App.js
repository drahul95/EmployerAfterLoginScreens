import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import useToken from "./Auth/useToken";
//All routers pages

// import Footer from "./pages/Footer/Footer";
import "./App.css";
// import Footer from "./pages/Footer/Footer";
// import Header from "./pages/Header/Header";
// import Home from "./pages/Home/Home";
// import HomeNew from "./pages/Home/HomeNew";
// import SignIn from "./pages/Login/SignIn";
// import SignUp from "./pages/Login/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import PostAJob from "./pages/PostJob/PostAJob";
import GroupProfile from "./pages/GroupProfile/groupProfile"
import SearchCandidate from "./pages/SearchCandidate/SearchCandidate";
import CandidateSaved from "./pages/CandidateSaved/CandidateSaved";
import CandidateInvited from "./pages/CandidateInvited/CandidateInvited";
import CandidateInvitedDeno from "./pages/CandidateInvited/CandidateInvitedDemo2";
import CandidateSavedDemo from "./pages/CandidateSaved/CandidateSavedDemo2";
import ApplicationReceived from "./pages/ApplicationReceived/ApplicationReceived";
import ApplicationReceivedDemo from "./pages/ApplicationReceived/ApplicationReceivedDemo2";
import CandidateSuggestions from "./pages/CandidateSuggestions/CandidateSuggestions";
import CandidateSuggestionsDemo from "./pages/CandidateSuggestions/CandidateSuggestionsDemo2";

require("dotenv").config();
const BASE_URL = process.env.REACT_APP_BASE_URL;

function App() {
  const { token, setToken, removeToken } = useToken();
  const [loginMutate, setLoginMutate] = useState(null);

  useEffect(() => {
    console.log(token.success);
  }, [token]);

  return (
    <BrowserRouter basename={BASE_URL}>
      {/* <Switch>
        <Header
          token={token}
          setToken={setToken}
          removeToken={removeToken}
          loginMutate={loginMutate}
        />
      </Switch> */}
      <Switch>
      {/* <Route exact path={"/"}>
          <main role="main" className="wrapper">
            <Home token={token} setToken={setToken} removeToken={removeToken} />
          </main>
        </Route> */}
        <Route exact path={"/"}>
          <main role="main" className="wrapper">
            <Dashboard
              token={token}
              setToken={setToken}
              removeToken={removeToken}
              setLoginMutate={setLoginMutate}
            />
          </main>
        </Route>
        <Route exact path={"/dashboard"}>
          <main role="main" className="wrapper">
            <Dashboard
              token={token}
              setToken={setToken}
              removeToken={removeToken}
              setLoginMutate={setLoginMutate}
            />
          </main>
        </Route>
        <Route exact path={"/postjob"}>
          <main role="main" className="wrapper">
            <PostAJob
              token={token}
              setToken={setToken}
              removeToken={removeToken}
              setLoginMutate={setLoginMutate}
            />
          </main>
        </Route>
        <Route exact path={"/searchcandidate"}>
          <main role="main" className="wrapper">
            <SearchCandidate
              token={token}
              setToken={setToken}
              removeToken={removeToken}
              setLoginMutate={setLoginMutate}
            />
          </main>
        </Route>
        <Route exact path={"/candidate-saved"}>
          <main role="main" className="wrapper">
            <CandidateSaved
              token={token}
              setToken={setToken}
              removeToken={removeToken}
              setLoginMutate={setLoginMutate}
            />
          </main>
        </Route>
        <Route exact path={"/candidate-saved-demo"}>
          <main role="main" className="wrapper">
            <CandidateSavedDemo
              token={token}
              setToken={setToken}
              removeToken={removeToken}
              setLoginMutate={setLoginMutate}
            />
          </main>
        </Route>
        <Route exact path={"/candidate-suggestions"}>
          <main role="main" className="wrapper">
            <CandidateSuggestions
              token={token}
              setToken={setToken}
              removeToken={removeToken}
              setLoginMutate={setLoginMutate}
            />
          </main>
        </Route>
        <Route exact path={"/candidate-suggestions-demo"}>
          <main role="main" className="wrapper">
            <CandidateSuggestionsDemo
              token={token}
              setToken={setToken}
              removeToken={removeToken}
              setLoginMutate={setLoginMutate}
            />
          </main>
        </Route>
        <Route exact path={"/candidate-invited"}>
          <main role="main" className="wrapper">
            <CandidateInvited
              token={token}
              setToken={setToken}
              removeToken={removeToken}
              setLoginMutate={setLoginMutate}
            />
          </main>
        </Route>
        <Route exact path={"/candidate-invited-demo"}>
          <main role="main" className="wrapper">
            <CandidateInvitedDeno
              token={token}
              setToken={setToken}
              removeToken={removeToken}
              setLoginMutate={setLoginMutate}
            />
          </main>
        </Route>
        <Route exact path={"/application-received"}>
          <main role="main" className="wrapper">
            <ApplicationReceived
              token={token}
              setToken={setToken}
              removeToken={removeToken}
              setLoginMutate={setLoginMutate}
            />
          </main>
        </Route>
        <Route exact path={"/application-received-demo"}>
          <main role="main" className="wrapper">
            <ApplicationReceivedDemo
              token={token}
              setToken={setToken}
              removeToken={removeToken}
              setLoginMutate={setLoginMutate}
            />
          </main>
        </Route>
        <Route exact path={"/GroupProfile"}>
          <main role="main" className="wrapper">
            <GroupProfile
              token={token}
              setToken={setToken}
              removeToken={removeToken}
              setLoginMutate={setLoginMutate}
            />
          </main>
        </Route>
      </Switch>
      {/* <Switch>
        <Footer token={token} setToken={setToken} removeToken={removeToken} />
      </Switch> */}
    </BrowserRouter>
  );
}

export default App;
