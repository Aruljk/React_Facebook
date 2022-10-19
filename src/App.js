import Header from './Header';
import Left from './pages/Left.js'
import Middle from './pages/Middle/Middle.js'
import Last from './pages/Last/Last.js'
import './bootstrap-icons.css';

function App() {
  return (
    <div className="App">
    <Header />
    <div className='inline'>
    <Left />
    <Middle/>
    <Last/>
    </div>
    </div>
  )
}

export default App;
