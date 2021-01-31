import React from 'react'


const createImgAnimation = (props) => {
    const imgUrl = props.img
    const size = props.size

    const renderLi = () => {
        let arr = [];
        let axeY = 0;
        let animDelay = 0
        const stepDelay = 50
        const step = 100 / (size - 1)
        for (let i = 0; i < size; i++) {
            let axeX = 0;
            for (let j = 0; j < size; j++) {
                arr = [...arr, {x: axeX, y: axeY, delay: animDelay}]
                axeX += step
                animDelay = Math.floor(Math.random() * 1000)
            }
            axeY += step
        }

        return arr.map((axe, index) => (
                <li
                    className='img-item'
                    key={index}
                    style={{
                    backgroundSize: `${size * 100}%`,
                    backgroundPosition: `${axe.x}% ${axe.y}%`,
                    backgroundImage: `url(${imgUrl})`,
                    width: `${100 / size}%`,
                    height: `${100 / size}%`,
                    animationDelay: `${axe.delay}ms`,
                }}/>
            ))
    }

    return (
        <div className='img-wrapper'>
            <img style={{
                opacity: '0',
                width: '100%'
            }}
                 src={imgUrl}
                 alt='01'
                 className='img-sizer'/>
            <ul className='img-box'>
                {renderLi()}
            </ul>

        </div>
    )

}
export default createImgAnimation