import { Provider } from 'react-redux';
import TasksList from './TasksList/presentation/pages/TaskList';
import { store } from './store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login/presentation/pages/Login';
import Layout from './layout/Pages/layout';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='tasks' element={<TasksList />} />
            <Route path='login' element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
