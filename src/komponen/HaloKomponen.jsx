
import React from 'react'; //perlu mengimport library ini untuk membaca tag react-nya
// Video #5
import './HaloKomponen.css';

// function HelloComponent(){
//   return <p>Hello Functional Component</p>
// }
//standar stateless component ES6 seperti dibawah ini
const HaloKomponen = () => { 
    return <p className='text-p'>Hello Functional Component</p>
}
export default HaloKomponen; //agar component yg kita buat bisa di pake dimana saja maka perlu utk mengexport
// end-Video #5