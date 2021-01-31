import React, {Component} from 'react';

import './ProductDescription.scss'
import RatingBar from '../../../components/RatingBar/RatingBar'

class ProductDescription extends Component {

    get getColors() {
        return this.props.product.options.colors.map((color, index) => (
            <li
                key={color}
                style={{backgroundColor: color}}
                className="colors__item"
                onClick={() => this.props.onChangeColor(index)}
            />
        ))
    }

    get getSizes() {
        return this.props.product.options.sizes.map((size) => (
            <li
                key={size}
                className="sizes__item"
            >
                {size}
            </li>
        ))
    }

    render() {
        const product = this.props.product
        return (
            <div className="product-description">
                <div className="product-description__row product-description__style">
                    {product.style}
                </div>
                <div className="product-description__row product-description__title">
                    {product.title}
                </div>
                <div className="product-description__row reviews">
                    <RatingBar currentStars={this.props.ratting.avarageRatting}/>
                    <p className="reviews__desc">{this.props.ratting.allRatings || 0} reviews</p>
                </div>
                <div className="product-description__row options">
                    <div className="colors">
                        <p className="options__title">COLORS:</p>
                        <ul className="colors__list">
                            {this.getColors}
                        </ul>
                    </div>
                    <div className="sizes">
                        <p className="options__title">Size:</p>
                        <ul className="sizes__list">
                            {this.getSizes}
                        </ul>
                    </div>
                </div>
                <div className="product-description__row order-info">
                    <p className="order-info__price">{product.price}</p>
                    <p className="order-info__old-rice">350$</p>
                    <div className="order-info__quantity">
                        <input
                            type="text"
                            defaultValue={1}
                            className="order-info__quantity-input"/>
                    </div>
                    <button className="order-info__btn-add">Buy</button>
                </div>
            </div>
        );
    }
}

export default ProductDescription;