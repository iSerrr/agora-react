import React, {Component} from 'react';

import './ProductSlider.scss'

class ProductSlider extends Component {
    state = {
        currentSlide: 0,
        currentWrapperWidth: null,
    }

    componentDidMount() {
        this.setState({currentWrapperWidth: this.wrapperDiv.clientWidth - 100})
        window.addEventListener('resize', (event) => this.setState({currentWrapperWidth: this.wrapperDiv.clientWidth - 100}))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.product.id === this.props.product.id) return
        this.setState({ currentSlide: 0});
    }

    changeSlide = (event) => {
        if (event.target.tagName !== 'IMG') return
        this.setState({currentSlide: +event.target.id});
    }

    get getCurrentSlideForPX() {
        const currentSlide = this.state.currentSlide
        return -currentSlide * this.state.currentWrapperWidth
    }

    get getMainImgSlider() {
        let mainImgList = []
        const quantImgs = this.props.product.quanImg
        for (let i = 0; i < quantImgs; i++) {
            mainImgList = [...mainImgList,
                <img
                    key={i}
                    src={this.getImgUrl(i)}
                    alt=""
                    className="product-slider__img"/>]
        }
        return mainImgList
    }

    get getNavImg() {
        let mainImgList = []
        const quantImgs = this.props.product.quanImg
        for (let i = 0; i < quantImgs; i++) {
            mainImgList = [...mainImgList,
                <li key={i}
                    className="product-slider__nav-item">
                    <img
                        id={i}
                        src={this.getImgUrl(i)} alt=""
                        className="product-slider__img"/>
                </li>]
        }
        return mainImgList
    }

    getImgUrl = (num) => `/images/product/${this.props.product.id}/${this.props.product.variant}/${num + 1}.webp`

    render() {
        return (
            <div
                ref={(ref) => this.wrapperDiv = ref}
                style={{height: `${this.state.currentWrapperWidth}px`}}
                className="product-slider__wrapper">
                <div className="product-slider__conteiner">
                    <div
                        style={{transform: `translateX(${this.getCurrentSlideForPX}px`}}
                        className="product-slider__img-box">
                        {this.getMainImgSlider}
                    </div>

                </div>
                <ul
                    onClick={this.changeSlide}
                    className="product-slider__nav-list">
                    {this.getNavImg}
                </ul>
            </div>
        );
    }
}

export default ProductSlider;