import { useState } from 'react'

import './App.css'
import explorer from './data/folderData';
import Folder from './compoents/Folder';
import useTraverseTree from './hooks/use-traverse-tree';

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  // console.log(explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
  }

  return (
    <>
    {/* <Folder /> */}
    <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </>
  )
}

export default App
