import { FC,useState } from "react"
import "./slide.css"
import Gomas from "../img/gomas.png"
import slide1 from "../img/slide4.jpg"
import slide from "../img/slide2.jpg"
import slide2 from "../img/slide3.jpg"
import { EyeOutline } from "react-ionicons" 
import { Carousel } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card_productos } from "../filter/card_productos"


export const Slide:FC = () => {
   const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex:any) => {
     setIndex(selectedIndex);
     
   };

   
    return(
      <>
      <Carousel className="carrousel" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={slide} alt="First slide" />
        <Carousel.Caption>
        <div className="strong-contenedor">
          <div className="strong2">
              <h3>STRONG <br/> GRIP</h3>
              <h2>BEST CONTROLLING PERFORMANCE</h2>
          </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
 
      <Carousel.Item>
        <img className="d-block w-100" src={slide2} alt="First slide" />
        <Carousel.Caption>
        <div className="strong-contenedor">
          <div className="strong">
              <h3>TRUCK TYRES</h3>
              <h2>Extremely mileage, Exceptional resistance,<br/> And outstanding performance stability.</h2>

              <p></p>
          </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img className="d-block w-100" src={slide1} alt="First slide" />
        <Carousel.Caption>
          <div className="strong-contenedor">
          <div className="strong3">
              <h3>ENERGY SAVING<br/> FULL SAVING</h3>
              <h2>QUIET AND CCOMFORTABLE</h2>
          </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 

    <Card_productos  datos={""} />

    </>
    )
    
}