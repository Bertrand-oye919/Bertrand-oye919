import { WavyBackground } from '/Law Firm/Landing Page/WaveBackround.tsx';
import React from 'react';
import { WavyBackground } from './WavyBackground.tsx';

const YourComponent = () => {
    return (
        <div>
            <WavyBackground
                colors={['#38bdf8', '#818cf8', '#c084fc', '#e879f9', '#22d3ee']}
                waveWidth={50}
                backgroundFill="black"
                blur={10}
                speed="fast"
                waveOpacity={0.5}
                containerClassName="your-container-class"
                className="your-class"
            >
                {/* Your content here */}
            </WavyBackground>
        </div>
    );
};

export default YourComponent;
