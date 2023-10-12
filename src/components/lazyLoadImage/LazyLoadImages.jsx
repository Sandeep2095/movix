import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyLoadImages = ({ src, className }) => {
	return (
		<LazyLoadImage
			className={className || ''}
			alt='LazyLoadImages'
			effect='blur'
			src={src}
		/>
	);
};

export default LazyLoadImages;
