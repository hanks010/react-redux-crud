import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Headers';
import WritePage from './pages/WritePage';
import DetailPage from './pages/DetailPage';
import UpdatePage from './pages/UpdatePage';
function App() {
  return (
    <div>
      <Header />
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/post" exact={true} component={WritePage} />
      <Route path="/post/:id" exact={true} component={DetailPage} />
      <Route path="/post/:id/update" exact={true} component={UpdatePage} />
    </div>
  );
}

export default App;
