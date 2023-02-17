// Write your code here

import Slider from 'react-slick'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import PlaneItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const setting = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="bg-img">
      <h1 className="heading">PLANETS</h1>
      <div className="slide-container" data-testid="planets">
        <Slider {...setting}>
          {planetsList.map(echValue => (
            <PlaneItem itemDetails={echValue} key={echValue.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
