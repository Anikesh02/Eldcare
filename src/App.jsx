import './App.css';
import Layout from './layout/Layout';
import Home from './pages/Home';
import { SpeedInsights } from "@vercel/speed-insights/react"
import React from 'react';

function App() {

  React.useEffect(() => {
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='https://cdn.matomo.cloud/eldcarevercelapp.matomo.cloud/container_GJPYXTlG.js'; s.parentNode.insertBefore(g,s);
   }, [])
 
  return(
    
    
      <Layout/>
    
  ) 
 
}

export default App





