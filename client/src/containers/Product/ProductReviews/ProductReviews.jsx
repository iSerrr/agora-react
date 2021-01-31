import React from 'react'

import './ProductReviews.scss'
import RatingBar from '../../../components/RatingBar/RatingBar'


const ProductReviews = ({reviews}) => {

    const getReviewsList = () => reviews.map((review)  => (
            <li
                key={review.id}
                className="reviews__item">
                <div className="reviews__avatar-box">
                    <img
                        src="/images/users/user001.jpg"
                        alt=""
                        className="reviews__avatar-img"
                    />
                </div>
                <div className="reviews__name-and-ratting">
                    <p className="reviews__name">{review.fullName}</p>
                    <RatingBar currentStars={review.star}/>
                </div>
                <div className="reviews__content">
                    <p className="reviews__text">
                        {review.text}
                    </p>
                    <p className="reviews__date">{review.date}</p>
                </div>
            </li>
        )
    )

    return (
        <div className="product-page-reviews reviews">
            <ul className="reviews__list">
                <h2 className="reviews__title">
                    All reviews <span className='blue'>{reviews.length}</span>
                </h2>
                {getReviewsList()}
            </ul>
        </div>
    )
}

export default ProductReviews