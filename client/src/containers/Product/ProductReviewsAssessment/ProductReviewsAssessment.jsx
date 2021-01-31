import React, {Component} from 'react'

import './ProductReviewsAssessment.scss'

import RatingBar from '../../../components/RatingBar/RatingBar'

class ProductReviewsAssessment extends Component {

    createAssessmentsTemplate = (ratting) => {
        const res = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0
        }
        ratting.map(item => res[item] = res[item] + 1)
        return res
    }

    getAssessmentsList = (ratting) => {
        const total = ratting.length
        const assessmentsTemplate = this.createAssessmentsTemplate(ratting)
        let assessmentsList = []
        for (let key in assessmentsTemplate) {
            assessmentsList = [...assessmentsList,
                (
                    <li
                        key={key}
                        className="reviews-assessment__item">
                        <RatingBar currentStars={key}/>
                        <p className="reviews-assessment__percent">{Math.floor(assessmentsTemplate[key] && assessmentsTemplate[key] / total * 100)}%</p>
                        <p className="reviews-assessment__reviewers">{assessmentsTemplate[key]} Reviews</p>
                    </li>
                )]
        }
        return assessmentsList
    }

    render() {
        const {ratting} = this.props
        return (
            <ul className='reviews-assessment'>
                <h2 className="reviews-assessment__title">
                    Assessment Reviews
                </h2>
                {this.getAssessmentsList(ratting).reverse()}
                <button className='reviews-assessment__btn btn'>Add Review</button>
            </ul>
        )
    }
}

export default ProductReviewsAssessment