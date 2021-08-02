import React, {useState} from 'react'
import EditQuote from './EditQuote'

const QuotesItems=({id,name,body,removeItem,editItem})=>{
    const [toggle,setToggle]= useState(false)
    const handleRemove=()=>{
        const confirmRemove= window.confirm('Are you sure?')
       // console.log(confirmRemove)
        if(confirmRemove){
            removeItem(id)
        }
    } 
    const handleToggle=()=>{
        const result=!toggle
        setToggle(result)
    }
    return (
        <div>
            {toggle?
            <div>
                <EditQuote 
                    id={id} 
                    name={name} 
                    body={body}
                    editItem={editItem}
                    handleToggle={handleToggle}
                />
                <button onClick={handleToggle}>cancel</button>
            </div>
             :(
                <div>
                    <blockquote>{body} - {name}</blockquote>

                    <button onClick={handleToggle}>edit</button>
                    <button onClick={handleRemove}>remove</button>
                </div>
            )}
           
        </div>
    )

}

export default QuotesItems