import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/animations/Square Loader.json';
import {Title} from "./SongCard/style";

function Loading({ size }: { size: number }) {
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowMessage(true);
        }, 10000); // Show message after 10 seconds

        return () => clearTimeout(timeout);
    }, []); // Run only on component mount

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderer: 'svg'
    };

    return (
        <div>
            {showMessage ? (
                <Title>No Songs Found! Please Try Again</Title>
            ) : (
                <Lottie
                    options={defaultOptions}
                    height={size * 25}
                    width={size * 25}
                />
            )}
        </div>
    );
}

export default Loading;
