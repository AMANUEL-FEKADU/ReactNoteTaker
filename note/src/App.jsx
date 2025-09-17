import React, { useState } from 'react';
import {Routes} from 'react-router-dom'
import { Route } from 'react-router-dom';
import Home from './Component/Home';
import Addnotes from './Component/Addnotes';
import Navbar from './Component/Navbar';
import Notes from './Component/Notes';
import DeletedNotes from './Component/DeletedNotes';

function App() {
const [notes,setNotes]=useState([])
const [deleted,setDeleted]=useState([])
  return (
    

  <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Addnotes" element={<Addnotes 
          notes={notes} 
           setNotes={setNotes}/>} />
          <Route
          path="/Notes"
          element={<Notes notes={notes} setNotes={setNotes} deleted={deleted} setDeleted={setDeleted}/>}
        />
        <Route path='/DeletedNotes' element={<DeletedNotes
        deleted={deleted}/>}
        />
        </Routes>
    </>
    
  );
  
}

export default App;
