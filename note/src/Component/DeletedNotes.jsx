import React from 'react'

function DeletedNotes({deleted}) {
  return (
    <div>
        {deleted.map((ele,index)=>(
            <div key={index} className='conts'>
                <h1>{ele.title}</h1>
                <p>{ele.note}</p>

            </div>
        ))}
      
    </div>
  )
}

export default DeletedNotes
