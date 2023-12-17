import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import Footer from './Footer';

import {Switch,Route,Redirect} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

const App = ()=>{
    return (
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/"/>
        </Switch>
        <Footer />
        </>
    )
}
export default App;



// import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// const App = ()=>{
//     return (
//         <>
//             <div className='container mx-auto'>
//                 <h1 className='text-center'>Wellcome</h1>
//                 <br />
//                 <div className='text-center'>
//                 <div className="card" style={{width: "18rem"}}>
//   <img src="https://picsum.photos/seed/picsum/200/150" className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="/" className="btn btn-success">Go somewhere</a>
//   </div>
// </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default App;



// import React from 'react';
// import { Route,Switch, Redirect } from 'react-router-dom';
// import About from './About';
// import Contact from './Contact';
// import Service from './Service';
// // import Error from './Error';
// import Menu from './Menu';
// import User from './Usar';
// import Search from './Search';

// const App = ()=>{

// const Name = ()=>{
//     return <h1>This is NAME page</h1>
// }

// return (
//     <>
//     <Menu />
// //     <Switch>
//         <Route exact path="/" component={()=><About name='about'/>}/>
//         <Route exact path='/service'  render={()=><Service name='service'/>}/>
//         <Route exact path='/search'  render={()=><Search name='search'/>}/>
//         <Route exact path='/contact'  component={Contact}/>
//         <Route path='/contact/name'  component={Name}/>
//         <Route path='/user/:fname/:lname'  component={User}/>
        // {/* <Route component={Error}/> */}
        // <Redirect to="/"/>
    // </Switch>
        
//     </>
// )
// }
// export default App;







// import React, { useEffect, useState } from 'react';
// const App = ()=>{
//     const [num,setnum] = useState(0);
// useEffect(()=>{
//     document.title=`you clicked me ${num} times`;
// })
//     return <button onClick={()=>{
//         setnum(num+1)
//     }}>Click Me {num}</button>
// }
// export default App;