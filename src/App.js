import logo from './logo.svg';
import './App.css';
import TaskList from './component/TaskList';
import DateTimeDisplay from './component/DateTimeDisplay';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import HomeComponent from './component/Home';
import SearchList from './component/SearchList';
import Pagination from './component/Pagination';
import Quiz from './component/Quiz';
import FormValidation from './component/FormValidation';
import Calculator from './component/Calculator';
import Profile from './component/Profile';
import PublicAPI from './component/PublicAPI';

function App() {
  return (
    <div>
      <h1 id="title">React Practice Tasks</h1>
      <Router>
        <nav class="container">      
          <Link to="/">
            <button class="btn">Home</button>
          </Link>
          <Link to="/TaskList">
            <button class="btn">Task 1</button>
          </Link>
          <Link to="/DateTimeDisplay">
            <button class="btn">Task 2</button>
          </Link>  
          <Link to="/SearchList">
            <button class="btn">Task 3</button>
          </Link>
          <Link to="/Pagination">
            <button class="btn">Task 4</button>
          </Link>
          <Link to="/Quiz">
            <button class="btn">Task 5</button>
          </Link>
          <Link to="/FormValidation">
            <button class="btn">Task 6</button>
          </Link>
          <Link to="/Calculator">
            <button class="btn">Task 7</button>
          </Link>
          <Link to="/Profile">
            <button class="btn">Task 8</button>
          </Link>
          <Link to="/PublicAPI">
            <button class="btn">Task 9</button>
          </Link>
        </nav>
        <div>
          <Switch>
            <Route path="/" component={HomeComponent} exact></Route>
            <Route path="/TaskList" component={TaskList} exact></Route>
            <Route path="/DateTimeDisplay" component={DateTimeDisplay} exact></Route>
            <Route path="/SearchList" component={SearchList} exact></Route>
            <Route path="/Pagination" component={Pagination} exact></Route>
            <Route path="/Quiz" component={Quiz} exact></Route>
            <Route path="/FormValidation" component={FormValidation} exact></Route>
            <Route path="/Calculator" component={Calculator} exact></Route>
            <Route path="/Profile" component={Profile} exact></Route>
            <Route path="/PublicAPI" component={PublicAPI} exact></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
