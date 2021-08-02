import React from 'react'
import QuotesItems from './QuotesItems'

const QuotesList=({quotes,removeItem,editItem})=>{
    return(
        <div>
           {
               quotes.length===0?(
                    <div>
                        <h2>No quotes found</h2>
                        <p>Add your first Quotes</p>
                    </div>
               ) : (
                   <div>
                       <h1>My Quotes-{quotes.length}</h1>
                       {
                           quotes.map((quote)=>{
                               return  <QuotesItems key={quote.id} {...quote} removeItem={removeItem} editItem={editItem}/>
                           })
                       }
                   </div>
               )
           }  


        </div>
    )
}

export default QuotesList