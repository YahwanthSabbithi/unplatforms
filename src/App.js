import './App.css';
import Left from './components/Left/Left'
import Feed from './components/feed/Feed'
import Right from './components/Right/Right'
function App() {
  return (
    <div className="main">
      <Left/>
      <Feed/>
      <Right/>
    </div>
  );
}

export default App;
