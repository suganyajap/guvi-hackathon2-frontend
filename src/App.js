import React from "react";
import './App.css';
import {Route,Switch} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useHistory} from "react-router-dom";
import { Home } from "./Home";
import { EditProduct } from "./EditProduct";
import { ProductList } from "./ProductList";
import { CreateProduct } from "./CreateProduct";
import { ContactUs } from "./ContactUs";
import { NotFound } from "./NotFound";

export default function App() {
  const history=useHistory();
  return (
    
     <div className="App">
       <AppBar position="static" style={{marginBottom:"24px"}}>
     <Toolbar variant="dence">
      <Button
       variant="text"
       color="inherit"
       onClick={()=>history.push("/")}
       >Home</Button>
       <Button
       variant="text"
       color="inherit"
       onClick={()=>history.push("/products")}
       >Products</Button>
       <Button
       variant="text"
       color="inherit"
       onClick={()=>history.push("/create-product")}
       >CreateProduct</Button>
       <Button
       variant="text"
       color="inherit"
       onClick={()=>history.push("/contact")}
       >ContactUs</Button>
       
     </Toolbar>
       </AppBar>
       <Switch>
          <Route exact path="/">
           <Home />
           </Route>
           <Route path="/products/edit/:id">
           <EditProduct  />
           </Route>
           <Route path="/products">
           <ProductList />
           </Route>
           <Route path="/create-product">
           <CreateProduct  />
           </Route>
           <Route path="/contact">
           <ContactUs />
           </Route>
           <Route path="**">
           <NotFound />
           </Route>
           
        </Switch>
   </div>
 
    
  );
}


