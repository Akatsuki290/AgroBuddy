import { Fade } from "react-awesome-reveal";
import './App.css';
import Header  from './component/Header';
import Banner from "./component/Banner";
import Menu from "./component/Menu";
function App() {
  return (
    <div className="App">
     <Header/>
     <Banner/>
     <Fade>
     <Menu/>
    </Fade>

    </div>
  );
}

export default App;
