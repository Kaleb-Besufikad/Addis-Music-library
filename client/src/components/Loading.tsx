import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/animations/Square Loader.json'

function Loading({size}: {size: number}) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderer: 'svg'
    }
    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={size* 25}
                width={size* 25}
            />
        </div>
    )
}

export default Loading;