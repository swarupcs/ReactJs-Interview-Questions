import { useState } from 'react'

import './App.css'
import explorer from './data/folderData';
import Folder from './compoents/Folder';

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  console.log(explorer);

  return (
    <>
    {/* <Folder /> */}
    <Folder explorer={explorerData} />
    </>
  )
}

export default App
