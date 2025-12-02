import React, {useState } from 'react'
import Axios from 'axios'

function CountryInfo() {
   const [country,setCountry] = useState("");
   const [data , setData] = useState(null);
   const [loading , setLoading] = useState(false);
   const [error, setError] = useState("");

   const fetchCountry = async() =>{
    if (!country){
        setError("Please enter a Country Name")
        return
    }
    setLoading(true);

    setError("");
    setData(null);
try {let response = await  Axios.get(`https://restcountries.com/v3.1/name/${country}?fullText=true`);
console.log(response);
console.log(response.data[0]);

setData (response.data[0]);


} catch (error) {
    console.log(error, "error is fetching Data");
    setError("country is not found")
} finally {
    setLoading(false);
}
   }


  return (
//     <div className='flex flex-col items-center mt-10 p-4'>
   
//         <h1 className='text-2xl font-bold mb-6 text-blue-500'>CountryInfo</h1>
//              <div className='flex gap-5'>
//          <input type="text" placeholder='Enter country Name'  className='border border-gray px-4 py-2' value={country} onChange={(e)=> setCountry(e.target.value)} />
//          <button className=' bg-blue-500 px-5 py-2   font-medium  text-white hover:bg-blue-600' onClick={fetchCountry}>Search</button>

//     </div>
//       {loading && <p className='text-gray-500 mt-2'> Loading....</p>}
//       {error && <p className='text-red-800 font-semi-bold mt-3 '>{error} </p>}

//       {data && (
//         <div className='mt-6 bg white shadow -md rounded-2xl p-5' >
//             <img src ={data.flags.png} alt={data.flags.alt}/>
//             <h3>{data.name.common}</h3>
//             <p>
//                 <span>Capital : </span>
//                 {data.capital[0]}
//             </p>
//             <p>
//                  <span> Region: </span>
//                  {data.region}
//             </p>
//             <p>
//                 <span> Population: </span>
//                 {data.population}
//                 </p>

//                 <p>
//                     <span>Currency: </span>
//                     {Object.values(data.currencies)[0].name}
//                 </p>
//              </div>
//       )}

//    </div>
<div className="min-h-screen flex justify-center items-start py-16 px-5 
                bg-gradient-to-br from-indigo-500 via-blue-400 to-cyan-300">

  <div className="w-full max-w-2xl">

  
    <h1 className="text-5xl font-extrabold text-white drop-shadow-lg text-center mb-14 tracking-wide">
      Country Explorer 🌍
    </h1>

    <div className="bg-white/20 backdrop-blur-2xl border border-white/30 
                    shadow-2xl rounded-3xl p-6 mb-10
                    hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]
                    transition-all duration-500">

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search for any country..."
          className="flex-1 px-5 py-3 rounded-2xl bg-white/40 text-gray-900 
                     font-medium shadow-inner 
                     focus:ring-4 focus:ring-blue-300 outline-none 
                     placeholder-gray-600"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />

        <button
          className="px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 
                     text-white font-semibold shadow-lg 
                     hover:scale-105 hover:shadow-2xl 
                     active:scale-95 transition-all"
          onClick={fetchCountry}
        >
          Search
        </button>
      </div>

      {loading && (
        <p className="text-white font-semibold mt-4 animate-pulse">
          Fetching data...
        </p>
      )}
      {error && (
        <p className="text-red-700 font-semibold mt-4 bg-white/70 px-4 py-2 rounded-xl">
          {error}
        </p>
      )}
    </div>

    {data && (
      <div className="bg-white/30 backdrop-blur-2xl border border-white/40 
                      shadow-2xl rounded-3xl p-8 text-center animate-fadeUp
                      hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]
                      transition-all duration-500">

    
        <img
          src={data.flags.png}
          alt={data.flags.alt}
          className="w-full h-64 object-cover rounded-2xl shadow-xl mb-6 
                     border border-white/40"
        />


        <h2 className="text-4xl font-bold text-gray-900 mb-6 drop-shadow-md">
          {data.name.common}
        </h2>

        <div className="grid grid-cols-2 gap-5 text-left text-gray-900 text-lg">

          <p className="bg-white/60 p-4 rounded-2xl shadow-md font-semibold">
            🏛 Capital: <span className="font-normal">{data.capital[0]}</span>
          </p>

          <p className="bg-white/60 p-4 rounded-2xl shadow-md font-semibold">
            🌐 Region: <span className="font-normal">{data.region}</span>
          </p>

          <p className="bg-white/60 p-4 rounded-2xl shadow-md font-semibold">
            👥 Population:{" "}
            <span className="font-normal">{data.population.toLocaleString()}</span>
          </p>

          <p className="bg-white/60 p-4 rounded-2xl shadow-md font-semibold">
            💰 Currency:{" "}
            <span className="font-normal">{Object.values(data.currencies)[0].name}</span>
          </p>

        </div>
      </div>
    )}
  </div>
</div>

  )
}

export default CountryInfo

// https://restcountries.com/v3.1/name/${country}?fullText=true
