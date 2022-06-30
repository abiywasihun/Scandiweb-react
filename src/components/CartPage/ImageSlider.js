import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft,faAngleRight} from "@fortawesome/free-solid-svg-icons";

class ImageSlider extends PureComponent {
    state = {
        current: 0,
      }
       nextSlide = () => {
        const {image}=this.props
        const {current} = this.state;
        const length = image.length;
        this.setState({ current: current === length - 1 ? 0 : current + 1 });
      };
    
       prevSlide = () => {
        const {image}=this.props
        const {current} = this.state;
        const length = image.length;
        this.setState({ current: current === 0 ? length - 1 : current - 1 });
      };
    
    
  render() {

    const {image}=this.props
    const {current} = this.state;
    console.log(image)
    if (!Array.isArray(image) || image.length <= 0) {
        return null;
      }
    return (
        <section className='slider'>
      {image.length>1?(<div><FontAwesomeIcon icon={faAngleLeft} className='left-arrow' onClick={this.prevSlide}/>
            <FontAwesomeIcon icon={faAngleRight} className='right-arrow' onClick={this.nextSlide}/></div>):''}

      {image.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
                <div className="cart__images">
              <img src={slide} alt='travel image' className='image' />
              </div>
            )}
          </div>
        );
      })}
    </section>
    )
  }
}


export default ImageSlider