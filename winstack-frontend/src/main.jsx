import React from "react";
import { ReactDOM } from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import HPLoggedOut from './pages/HomePage/HPLoggedOut'
// import App from './App.jsx'
// import './index.css'



// function HomeTest(){
//   return (
//       <HPLoggedOut/>
//   );
// }
const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />,
    children: [
      { path: '/', element: <HPLoggedOut />}
    ],
  },
]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

// export default HomeTest;

