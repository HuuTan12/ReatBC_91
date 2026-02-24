
import { createRoot } from 'react-dom/client'
import {HeaderHome} from './components/HeaderHome'
import HomePage from './Page/HomePage'
import DataBiding from './Page/DataBiding'
import HandleEvent from './Page/HandleEvent'
import RenderCondition from './Page/RenderCondition'



createRoot(document.getElementById('root')).render(

  <div>
    {/* <HomePage /> */}
    {/* <DataBiding /> */}

    {/* <HandleEvent /> */}
    <RenderCondition />

    
  </div>
)
