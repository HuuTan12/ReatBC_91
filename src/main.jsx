
import { createRoot } from 'react-dom/client'
import {HeaderHome} from './components/HeaderHome'
import HomePage from './Page/HomePage'
import DataBiding from './Page/DataBiding'
import HandleEvent from './Page/HandleEvent'
import RenderCondition from './Page/RenderCondition'
import ChangeNumber from './Page/StateDemo/ChangeNumber'
import StyleComponentDemo from './Page/StyleComponent/StyleComponentDemo';
import ChangeFontSize from './Page/StateDemo/ChangeFontSize'
//import css cho toàn ứng dụng
import './assets/css/index.css'
import CarDemo from './Page/StateDemo/CarDemo'
import TinderClone from './Page/StateDemo/TinderClone'
import PropDemo from './Page/Props/PropDemo'
import CardDemo from './Page/Props/CardDemo'




createRoot(document.getElementById('root')).render(

  <div>
    {/* <HomePage /> */}
    {/* <DataBiding /> */}

    {/* <HandleEvent /> */}
    {/* <RenderCondition /> */}
    {/* <ChangeNumber /> */}
    {/* <StyleComponentDemo /> */}
    {/* <ChangeFontSize /> */}
    {/* <CarDemo /> */}
    {/* <TinderClone /> */}
    <PropDemo />
    


    
  </div>
)
