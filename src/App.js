import './App.css';
import Left from './components/Left/Left'
import Feed from './components/feed/Feed'
import Right from './components/Right/Right'
import Top from './components/Topbar/Top.jsx'
function App() {
  return (
    <div>
      <Top/>
      <div className="main">
        <Left/>
        <Feed/>
        <hr className='vr'/>
        <Right/>
      </div>
    </div>
  );
}

export default App;
