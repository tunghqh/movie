import {BrowserRouter} from 'react-router-dom'
import Router from './config/Router';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
