import React,{useState,useEffect} from 'react'
import QuotesList from './QuotesList'
import AddQuote from './AddQuote'

const QuotesContainer=()=>{
    const [quotes, setQuotes]=useState([])

    useEffect(()=>{
       //console.log( localStorage.getItem('quotes') )
        const result=JSON.parse(localStorage.getItem('quotes')) || []
        setQuotes(result)
    },[])

    useEffect(()=>{
        localStorage.setItem('quotes',JSON.stringify(quotes))
    },[quotes])

    const addItem=(quote)=>{
        const result=[quote,...quotes]
        setQuotes(result)
    }

    const removeItem=(id)=>{
        const result=quotes.filter((quote)=>{
            return quote.id!=id
        })
        setQuotes(result)
    }

    const editItem=(quote)=>{
        //console.log('quote',quote)

        const result=quotes.map((q)=>{
            if(q.id===quote.id){
                return{...q,...quote}
            }
            else{
                return {...q}
            }
        })
        setQuotes(result)
    }
    return(
        <div>
            
            <QuotesList 
                quotes={quotes} 
                removeItem={removeItem} 
                editItem={editItem}
            />
            <AddQuote addItem={addItem}/>
            
        </div>
    )
}

export default QuotesContainer