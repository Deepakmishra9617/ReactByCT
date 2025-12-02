
import React, { Component } from 'react'
import Updating from './Components/Updating'
import Unmounting from './Components/Unmounting'
import Comp1 from './Components/Comp1'
import CountryInfo from './Components/CountryInfo'
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <Updating  userName="Prince Chutiya" /> */}
//         <Unmounting/>
//       </div>
//     )
//   }
// }


// export default class App extends Component {



//   state = {
//     showComp :true
//   }

//   toggle =()=>{
//     this.setState({showComp:!this.state.showComp})
//   }


//   render() {
//     return (
//       <div>
//         <button onClick={this.toggle}>{this.state.showComp ? "Unmount" : "Mount"}</button>
//         {this.state.showComp && <Unmounting/>}
//       </div>
//     )
//   }
// }



function App() {
  return (
    <div>
      {/* <Comp1/> */}
      <CountryInfo/>
    </div>
  )
}

export default App