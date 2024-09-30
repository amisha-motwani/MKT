import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import { React} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "react-vertical-timeline-component/style.min.css";

import AppRoutes from './Routes.jsx';
import './App.css';
import "./CustomizedCSS/CustomisedCSS.scss";
import 'react-quill/dist/quill.snow.css'; // Add this to your main file

// kkk

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <AppRoutes/>
    </>
  )
}

export default App
