import React, {useEffect, useState} from 'react'

import Timer from './timer'
import datadefault from '../../data'

import ImgAnimation from './imgAnimation'

import './Slider.scss'
import './imgAnimation.scss'

const Slider = props => {

    const [products, setProducts] = useState([])
    const [stateCurrentSlide, setCurrentSlide] = useState(0)
    const [classAnimationEl, setClassAnimationEl] = useState('')

    const slideAutoPlayTimer = new Timer(() => switchSlide(changeCurrentValue('INCREMENT')), props.autoPlayInterval)

    useEffect(() => {
        setProducts(datadefault)
    }, [])

    useEffect(() => {
        if (products.length !== 0) slideAutoPlayTimer.start()
    },)

    const getSlideImgUrl = () => {
        return `/images/product/${products[stateCurrentSlide].id}/${products[stateCurrentSlide].options.colors[0]}/slide.webp`
    }

    const switchSlide = (currentSlide) => {
        slideAutoPlayTimer.stop()
        setClassAnimationEl('hide')
        // setTimeout(() => {
        //     this.setState({currentSlide: currentSlide});
        // }, 500)
        setTimeout(() => {
            setCurrentSlide(currentSlide)
            setClassAnimationEl('show')
            slideAutoPlayTimer.start()
        }, 1000)
    }

    const changeCurrentValue = action => {
        let currentSlide = stateCurrentSlide
        const productsLength = products.length

        if (action === 'INCREMENT') currentSlide++
        if (action === 'DECREMENT') currentSlide--

        currentSlide = (currentSlide >= productsLength) ? 0 : (currentSlide <= -1) ? productsLength - 1 : currentSlide
        return currentSlide
    }

    const prevSlide = () => switchSlide(changeCurrentValue('DECREMENT'))
    const nextSlide = () => switchSlide(changeCurrentValue('INCREMENT'))
    const getSelectedSlide = event => {
        if (event.target.tagName !== 'LI') return
        switchSlide(+event.target.id)
    }


    return (
        <>
            <div className={`slider ${classAnimationEl}`}>
                <div className="slider__conteiner">
                    <div className="slider__row">
                        <div className="slider__desc">New collections<p>Spring</p></div>
                        <button className="slider__btn-more">More info</button>
                    </div>
                    <div className="slider__row">
                        <div
                            onMouseOver={() => slideAutoPlayTimer.stop()}
                            onMouseOut={() => slideAutoPlayTimer.start()}
                            className={`slider__img-box`}>
                            {products.length === 0 ? null : (
                                <>
                                    <ImgAnimation img={getSlideImgUrl()} size={10}/>
                                    {/*<img*/}
                                    {/*    src={this.getSlideImgUrl}*/}
                                    {/*    alt="01"*/}

                                    {/*    className="slider__img"*/}
                                    {/*/>*/}
                                </>
                            )}
                        </div>
                    </div>
                    <div className="slider__row">
                        <div className="slider__label">new</div>
                        <ul
                            className="slider__nav-dots"
                            onClick={getSelectedSlide}
                        >
                            {products.map((item, index) => (
                                    <li
                                        id={index}
                                        key={index}
                                        className={`slider__nav-dot ${index === stateCurrentSlide ? 'active' : null}`}
                                    />
                                )
                            )}

                        </ul>
                    </div>
                </div>

                <div
                    className="slider__nav">
                    <div className="slider__title">SNKPS OF <br/> THE WEEK</div>
                    <button
                        className="slider__nav-btn slider__nav-btn--prev"
                        onClick={prevSlide}

                    >&lt;</button>
                    <button
                        className="slider__nav-btn slider__nav-btn--next"
                        onClick={nextSlide}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </>
    )

}

export default Slider