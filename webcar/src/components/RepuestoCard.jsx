import { useContext } from "react";
import { CartContext }  from "../context/cartContext";
import { Link } from "react-router-dom";
import {Card, CardGroup} from "react-bootstrap";

const RepuestoCard = ({ disrepuesto }) => {
     const { addRepuestoToCart } = useContext(CartContext);
     const { repuesto, foto, precio, marcaAuto, id, autoParte } = disrepuesto;

return (
  <CardGroup>
      <Card>
        <Card.Img 
          variant="top" 
          src={foto} 
          // style={{width: '18rem'}}
        />
        <Card.Body>
          <Card.Title>{repuesto}</Card.Title>
          <Card.Text>
            {autoParte} - {marcaAuto}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted font-bold">S/. {precio}</small>
        </Card.Footer>
      </Card>      
    </CardGroup>
  )
} 
export default RepuestoCard;