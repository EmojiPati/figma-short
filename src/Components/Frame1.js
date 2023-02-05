import React from 'react'
import './Frame1.css'
import ImgAsset from '../public'
export default function Frame1 () {
	return (
		<div className='Frame1_Frame1'>
			<div className='Frame2'>
				<div className='Rectangle1'/>
				<div className='icons8link1'>
					<img className='Vector' src = {ImgAsset.Frame1_Vector} />
					<img className='Vector_1' src = {ImgAsset.Frame1_Vector_1} />
				</div>
			</div>
		</div>
	)
}