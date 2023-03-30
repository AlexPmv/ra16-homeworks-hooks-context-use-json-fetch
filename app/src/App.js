import logo from './logo.svg';
import './App.css';
import DataComponent from './components/DataComponent';
import LoadingComponent from './components/LoadingComponent';
import ErrorComponent from './components/ErrorComponent';

function App() {
  return (
    <div className="App">
      <DataComponent url={'http://localhost:7070/data'} opts={'GET'} />
      <LoadingComponent url={'http://localhost:7070/loading'} opts={'GET'} />
      <ErrorComponent url={'http://localhost:7070/error'} opts={'GET'} />
    </div>
  );
}

export default App;
