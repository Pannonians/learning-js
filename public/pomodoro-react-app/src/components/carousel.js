import Carousel from 'react-bootstrap/Carousel'
import image from './img/preferences.png'

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          style={{height: 380, width: 850, marginLeft: 80}}
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--_yYlhybf--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dq00shcbvsje5lfulaom.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
   
        <Carousel.Caption style={{color: 'GrayText'}}>Checkout our settings page and adjust your timer to your needs!</Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;