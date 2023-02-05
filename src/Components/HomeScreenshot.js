import React from 'react'
import './HomeScreenshot.css'
import ImgAsset from '../public'
export default function HomeScreenshot () {
	return (
		<div className='HomeScreenshot_HomeScreenshot'>
			<div className='SubHeader1'>
				<span className='GainFullControl'>Gain Full<br/>Control</span>
				<img className='Line1' src = {ImgAsset.HomeScreenshot_Line1} />
				<img className='Line2' src = {ImgAsset.HomeScreenshot_Line2} />
			</div>
			<span className='PlatformsEasytouseonEachPlatform'>Platforms<br/>Easy to use on<br/>Each Platform</span>
			<span className='CommunityWebelieveinthepowerofCommunity'>Community<br/>We believe in the power of<br/>Community</span>
			<div className='HeroContent'>
				<div className='Frame12'>
					<img className='mobileinhand1' src = {ImgAsset.HomeScreenshot_mobileinhand1} />
					<img className='Ellipse1' src = {ImgAsset.HomeScreenshot_Ellipse1} />
				</div>
			</div>
			<div className='Frame11'>
				<span className='ShortenLinksWithaClick'>Shorten Links<br/>With a Click</span>
				<span className='Pasteinanylongurlmakeitsharabletrackableandcustomizablewithjustafewclicks'>Paste in any long url, make it sharable, trackable and customizable with just a few clicks.</span>
				<div className='Frame7'>
					<div className='Frame6'>
						<span className='Shorten'>Shorten</span>
						<div className='icons8compress2'>
							<img className='Vector' src = {ImgAsset.HomeScreenshot_Vector} />
							<img className='Vector_1' src = {ImgAsset.HomeScreenshot_Vector_1} />
							<img className='Vector_2' src = {ImgAsset.HomeScreenshot_Vector_2} />
							<img className='Vector_3' src = {ImgAsset.HomeScreenshot_Vector_3} />
						</div>
					</div>
					<span className='httpsreactjsorg'>https://reactjs.org</span>
				</div>
				<span className='NewFeaturesComingSoon'>New Features Coming Soon ↓</span>
			</div>
			<span className='Pckdcomeswithallthefeaturesequallyavailableoneachdevice'>Pckd comes with all the features, equally available on each device.</span>
			<span className='EveryonelovestheeasytouseandcompletelyopensourceLinkshortenr'>Everyone loves the easy to use, and completely open source Link shortenr</span>
			<div className='Navbar'>
				<div className='Frame3'>
					<div className='Frame2'>
						<div className='Rectangle1'/>
						<div className='icons8link1'>
							<img className='Vector_4' src = {ImgAsset.HomeScreenshot_Vector_4} />
							<img className='Vector_5' src = {ImgAsset.HomeScreenshot_Vector_5} />
						</div>
					</div>
					<span className='PatiURLShortener'>PatiURL Shortener</span>
				</div>
				<div className='Frame4'>
					<div className='Frame6_1'>
						<span className='About'>About</span>
					</div>
				</div>
			</div>
		</div>
	)
}