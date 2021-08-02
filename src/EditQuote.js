import React from 'react'
import QuotesForm from './QuotesForm'

const EditQuote=({id,name,body,editItem,handleToggle})=>{

    const formSubmission = (formData)=>{
        //console.log('edit',formData)
        editItem(formData)
    }

    return(
        <div>
            <h2>Edit Quote</h2>
            <QuotesForm 
                id={id} 
                name={name} 
                body={body}
                formSubmission={formSubmission}
                handleToggle={handleToggle}
            />
        </div>
    )
}

export default EditQuote