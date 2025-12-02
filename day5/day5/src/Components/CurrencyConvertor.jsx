import React from 'react'
import { useState } from 'react'

function CurrencyConvertor() {

   const [amount, setAmount] = useState(1);
  const [from , setFrom] = useState("USD")
  const [to ,setTo ] = useState("INR")
  const[loading,setLoading] = useState(false)
  const [error , setError] = useState(false)
  const [result, setResult] = useState(null)

const convert= async(e)=>{
    e.preventDefault()
    setLoading (true);
    setError ("")
    setResult(null)
    try {
        let res = await fetch (
             `https://api.exchangerate-api.com/v4/latest/${from}`
        )


        let data = await res.json();
        if(!data.rates[to]){
            setError("Invalid Currency Code")
        }
        else {
            let value = amount * data.rates[to];
            setResult(value);
        }
console.log(data)
    }
    catch(error){
        console.log(error)
    }
    
setLoading(false)
     
}


  return (
    <div className='container d-flex flex-column justify-content-center align-items-center min-vh-100 w-50 '>
      <h2 className='text-primary fw-bold mb-4'>Currency Convertor</h2>
      <form className='p-4 bg-white shadow rounded w-100' style={{maxWidth:"400px"}}
       
       onSubmit={convert}
      
      >
        <input type="number" className='form-control mb-3'   value={amount} onChange={(e) => setAmount(e.target.value)} />
        <select name="" id=""  className='form-select mb-3' value={from} onChange={(e)=>setFrom(e.target.value)}>
            <option value="USD">USD</option>
             <option value="INR">INR</option>
             <option value="EUR">EUR</option>
        </select>

        <select name="" id="" className='form-select mb-3' value={to} onChange={(e)=>setTo(e.target.value)}>
            <option value="USD">USD</option>
             <option value="INR">INR</option>
             <option value="EUR">EUR</option>
        </select>
<button className='btn btn-primary w-100'>Convert</button>

      </form>

      {loading && <p className='text-secondary'> Loading...</p>}
      {error && <p className='text-danger'>{error}</p>}
      {result && <h3 className="text-success fw-semibold mt-4">{amount} {from} = {result}

</h3>}
    </div>
  )
}

export default CurrencyConvertor
