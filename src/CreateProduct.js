import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory} from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { API_URL } from './global_constants';


export function CreateProduct() {
  const history =useHistory();

  const formValidationSchema = yup.object({
    name: yup
    .string()
    .required("why not fill this name?😯"),

    picture: yup
    .string()
    .min(4,"need bigger poster 😕")
    .required("why not fill this picture?😯"),

    price: yup
    .number()  
    .required("why not fill this price?😯")



    });
  const { handleSubmit,values,handleChange,handleBlur,errors,touched } =
    useFormik({
        initialValues:
        {
          name:"",
          picture:"",
          price:""
        },
       validationSchema:formValidationSchema,
        onSubmit:(newProduct)=>{
            console.log("onSubmit",newProduct);
            createProduct(newProduct);
        },
    });
 

  const createProduct = (newProduct) => {
    

    fetch(`${API_URL}/products`,
          {
            method:"POST",
            body:JSON.stringify(newProduct),
            headers:{'Content-Type':'application/json'}
        }).then(()=>history.push("/products"));
  };
  return (
    <form onSubmit={handleSubmit} className="add-product-form">
    <TextField
      value={values.name}
      id="name"
      name="name"
      // type="text"
      onChange={handleChange}
      onBlur={handleBlur}
      label="Name"
      variant="standard"
      error={errors.name && touched.name}
      helperText={errors.name && touched.name ? errors.name : ""} />
      

    <TextField
      value={values.picture}
      id="picture"
      name="picture"
      // type="text"
      onChange={handleChange}
      onBlur={handleBlur}
      label="picture"
      variant="standard"
      error={errors.picture && touched.picture}
      helperText={errors.picture && touched.picture ? errors.picture : ""} />
      
      <TextField
      value={values.price}
      id="price"
      name="price"
      // type="text"
      onChange={handleChange}
      onBlur={handleBlur}
      label="price"
      variant="standard"
      error={errors.price && touched.price }
      helperText={errors.price && touched.price ? errors.price : ""} />
      

       

    <Button type="submit" variant="outlined">create Product</Button>
    </form>
  
  
);
  }