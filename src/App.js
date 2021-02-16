//import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import './styles/responsive.css'

// import './styles/js/bootstrap.min'
// import './styles/js/all'
// import './styles/js/custom'
// import './styles/js/modernizer'

import Header from './components/header'
import Banner from './components/banner'
import About from './components/about'
import TodaySpecial from './components/todaySpecial'


function App() {
  return (
    <div className="App">
  <Header />
  <Banner />
  <About />
  <TodaySpecial />
    </div>
  );
}

export default App;
