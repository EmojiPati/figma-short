import React from 'react'
import './Property1React.css'
import ImgAsset from '../public'
export default function Property1React (props) {
	return (
		<div className={`Property1React_Property1React ${props.className}`}>
			<img className='image2' src = {ImgAsset.Property1React_image2} />
		</div>
	)
}