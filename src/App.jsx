import './App.css';
import ParentComponent from './components/ParentComponent';
import UseEffect from './Hooks/UseEffect';
import UseMemo from './Hooks/UseMemo';
import UseState from './Hooks/UseState';

function App() {
  return (
    <div>
      <div className='state'>
        <h2>useState</h2>
        <UseState/>
      </div>

      <div className='effect'>
        <h2>useEffect</h2>
        <UseEffect/>
      </div>

      <div className='memo'>
        <h2>useMemo</h2>
        <UseMemo/>
      </div>

      <div className='callback'>
        <ParentComponent/>
      </div>
      
    </div>
  );
}

export default App;
