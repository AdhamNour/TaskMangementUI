import { Provider } from 'react-redux';
import TasksList from './TasksList/presentation/pages/TaskList';
import {store} from './store/store';

function App() {
  return (
    <Provider store={store}>

      <TasksList/>
    </Provider>
  );
}

export default App;
