
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";
import Cars from "./components/Cars";

function App() {
  return (
      <Router>
        <div className="App">
            <div className={'header'}>
                <Link className="headerLink" to={'/'}>Home page</Link>

                <Link className="headerLink" to={'/users'}>Users page</Link>

                <Link className="headerLink" to={'/posts'}>Posts page</Link>

                <Link className="headerLink" to={'/comments'}>Comments page</Link>

                <Link className="headerLink" to={'/cars'}>Cars page</Link>
            </div>
             <div className={'renderArea'}>
                 <Route path={'/users'} render={(props)=> {
                     return <Users/>
                 }}/>
                 <Route path={'/posts'} component={Posts}/>
                 <Route path={'/comments'} component={Comments}/>
                 <Route path={'/cars'} component={Cars}/>

             </div>
        </div>
      </Router>

  )
}

export default App;
