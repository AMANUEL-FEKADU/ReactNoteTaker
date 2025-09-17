import React, { useState } from 'react'
import { use } from 'react'

function Notes({notes,setNotes,deleted,setDeleted}) {
    
    // const[deleted,setDeleted]=useState([])
      const [editIndex, setEditIndex] = useState(null) 
  const [editData, setEditData] = useState({ title: '', note: '' })

// function handleEdit(i){
//     setIsediting(true)
//      setNewdata({ index:i, data: notes[i].note});
// }
 function handleEdit(i) {
    setEditIndex(i)
    setEditData({ title: notes[i].title, note: notes[i].note }) // load that note into form
  }

function handleDelete(i){
 const noteddeleted=notes[i]
 setDeleted([...deleted,noteddeleted])
 setNotes(notes.filter((_,idx)=>idx!==i))


}

function handleUpdate() {
    const updatedNotes = [...notes]
    updatedNotes[editIndex] = editData
    setNotes(updatedNotes)
    setEditIndex(null) // exit edit mode
    setEditData({ title: '', note: '' })
  }

  function handleCancel() {
    setEditIndex(null) // exit edit mode without saving
    setEditData({ title: '', note: '' })
  }
  return (
    <div>
        
      <h1 className='adds'>Saved Notes</h1>
      <div >
        {notes.map((item,index)=>(
            <div key={index}> 
        {editIndex===index?(
             <div className='conts'>
                <input
                  type="text"
                  value={editData.title}
                  onChange={(e) =>
                    setEditData({ ...editData, title: e.target.value })
                  }
                />
                <textarea
                  value={editData.note}
                  onChange={(e) =>
                    setEditData({ ...editData, note: e.target.value })
                  }
                />
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
        ): (
            <div>
               <div className='conts'>
                <h1>{item.title} </h1>
               <p> {item.note}</p>
            
                </div>
                   <button className='edit' onClick={()=>handleEdit(index)}> edit</button>
               <button className='del' onClick={()=>handleDelete(index)}>delete</button>
            </div>
        )}

             </div>
        ))}

      </div>
    </div>
  )
}

export default Notes
