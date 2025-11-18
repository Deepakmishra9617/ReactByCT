function ProductList(props) {
    return (
            <div style={{ border: "2px solid green", width: "300px",textAlign: "center",backgroundColor:"lightgrey",}}>
                <img src={props.image} alt="" style={{objectFit:"cover", width: "100%", height: "180px",borderTopLeftRadius: "15px",borderTopRightRadius: "15px"}} />
               <p style={{ fontWeight: "bold", fontSize: "18px" }}>{props.price}</p>
               <h1>{props.topic}</h1>
                <p>{props.description}</p>
                <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
        <button style={{ backgroundColor: "#4CAF50", color: "white", border: "none", padding: "8px 12px", borderRadius: "5px", cursor: "pointer",marginBottom:"10px"}}>
          Check List
        </button>
        <button style={{ backgroundColor: "#2196F3", color: "white", border: "none", padding: "8px 12px", borderRadius: "5px", cursor: "pointer",marginBottom:"10px" }}>
          Buy
        </button>
      </div>
            </div>
    )
}
export default ProductList