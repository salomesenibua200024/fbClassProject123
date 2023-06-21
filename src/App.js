import { firebaseConfig } from './config/Config';
import { initializeApp } from 'firebase/app'

import './App.css';
import { Test } from './components/Test'; 

const firebaseapp = initializeApp(firebaseConfig)

function App() {
  return (
    <div className="App">
      <Test />
      <Test />
      <div />
      );
}

      export default TypesExample;
    </div>
  );
}

export default App;
