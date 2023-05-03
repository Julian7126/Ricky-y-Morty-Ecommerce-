import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/Root";
import ItemListContainer from "../conteiners/ItemListContainer";
 

const router =createBrowserRouter([
                {
                    path: "/",                   
                    element: <Root/>,
                    errorElement: <p>No Encontrado</p>,
                    children:[
                        {
                            path:"/",
                            element:<ItemListContainer/>

                        },
                        {
                            path:"/category/:categoryId",
                            element:<ItemListContainer/>
                        },
                        {
                            path:"/detail:id",
                            element: <h1>detalle</h1>

                        },
                    

                    ],


                    
                }



]);







const Router = () => {
    
  return (
  
  <RouterProvider router={router}/>
  
  )
};

export default Router;



