import ProductList from "./Components/ProductList";
import Tomato from "./assets/Tomato.jpeg";
import Gobi from "./assets/Gobi.jpeg";
import Gajar from"./assets/Gajar.jpeg";
import alu from"./assets/alu.jpeg";
import pyaj from"./assets/pyaj.jpeg";
import SimlaMirch from"./assets/SimlaMirch.jpeg";

function App(){
  return(
    <div style={{ textAlign:"center",padding:"10px"}}>
      <h1 style={{ color: "green", marginBottom: "20px",display:"flex",justifyContent:"center",alignItems:"center" }}>Product List</h1>
     <div style={{ display: "grid",gridTemplateColumns: "repeat(3, 1fr)",gap: "20px", maxWidth: "1200px",margin: "0 auto",justifyItems: "center",}}>
      <ProductList price="RS 50/per KG" topic="Tomato" description="Sabji hai..." image={Tomato} style={{}}/> 
        <ProductList price="RS 40/per KG" topic="Gobi" description="yeh ek aur sabji hai" image={Gobi}/> 
          <ProductList price="RS 80/per KG" topic="Gajar" description="Gajar sabji nhi hai" image={Gajar} />
        <ProductList price="RS 20/per KG" topic="alu" description="Gajar sabji nhi hai" image={alu}/>
          <ProductList price="RS 30/per KG" topic="pyaj" description="Gajar sabji nhi hai" image={pyaj}/>
           <ProductList price="RS 35/per KG" topic="ShimlaMirch" description="Gajar sabji nhi hai" image={SimlaMirch}/>
          </div>

    </div>
  )
}
export default App;