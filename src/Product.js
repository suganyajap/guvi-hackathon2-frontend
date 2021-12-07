import { Card, CardActions, CardContent } from "@mui/material";
import Button from '@mui/material/Button';

export function Product({ name ,picture,price,deleteButton,editButton}){
    return(
            <Card className="product-container">
            <img className="product-pic" src={picture} alt={name} />
            <CardContent>
            <h3>{name}</h3>
            <p>₹ {price}</p>
            <Button variant="contained">Add to Cart</Button>
            <CardActions>
                {deleteButton} {editButton}
            </CardActions>
            </CardContent>

            </Card>
    );
};