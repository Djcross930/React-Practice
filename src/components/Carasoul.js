import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/06/Pixel-Cover.jpg"
          alt="First slide"
          width='100%'
          height='440px'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://preview.redd.it/a3ftzqi7ide71.png?auto=webp&s=7cc4389f7b7d621216c70cc9f1d43e57f76e3d0d"
          alt="Second slide"
          width='100%'
          height='440px'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://t4.ftcdn.net/jpg/02/59/16/15/360_F_259161577_CESOycx2KteeRGI7VUUBLDjz76x6MILO.jpg"
          alt="Third slide"
          width='100%'
          height='440px'
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;