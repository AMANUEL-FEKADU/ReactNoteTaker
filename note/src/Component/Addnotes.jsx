import React, { useState } from 'react'

function Addnotes({notes,setNotes}) {
const [note,setNote]=useState({title:'',note:''})

 function handleChange(e) {
    const { name, value } = e.target
    setNote(prev => ({ ...prev, [name]: value }))
  }

  function addnote(){
    setNotes(prev=>([...prev,note]))
    setNote({title:'',note:''})
  }
  return (
    <>
    <h1 className='adds'>Add notes</h1>
   <div className='main'>
        <div className='cont'>
            
            
                <input type="text" name='title'placeholder='title'  value={note.title} onChange={handleChange}/>
               
            <textarea id=" " name='note' placeholder='write your note here...' value={note.note} onChange={handleChange}>

                
            
            </textarea>
            <button className='add Buttons' onClick={addnote} >add Notes</button>
        
        </div>
      </div>
        
  
    </>
  )
}

export default Addnotes
