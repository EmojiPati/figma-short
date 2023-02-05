import React from 'react'
import './Property1Nodejs.css'
import ImgAsset from '../public'
export default function Property1Nodejs (props) {
	return (
		<div className={`Property1Nodejs_Property1Nodejs ${props.className}`}>
			<img className='image4' src = {ImgAsset.Property1Nodejs_image4} />
		</div>
	)
}