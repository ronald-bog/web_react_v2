import { Link } from 'react-router-dom';

export const Apps = () => {
	return (
		<>
			<div className='medianav'>
				<div className='card'>
					<Link className='link' to='/mediaskin'>
						<img
							className='img'
							src={'../../../assets/medianav/apps/mediaskin.jpg'}
							width='640'
							height='360'
							alt='MEDIASKIN'
							loading='lazy'
						/>
						<h2>MEDIASKIN</h2>
					</Link>
				</div>

				<div className='card'>
					<Link className='link' to='/multimedia'>
						<img
							className='img'
							src={'../../../assets/medianav/apps/multimedia.jpg'}
							width='640'
							height='360'
							alt='MULTIMEDIA'
							loading='lazy'
						/>
						<h2>MULTIMEDIA</h2>
					</Link>
				</div>

				<div className='card'>
					<Link className='link' to='/player'>
						<img
							className='img'
							src={'../../../assets/medianav/apps/player.jpg'}
							width='640'
							height='360'
							alt='VIDEO PLAYER'
							loading='lazy'
						/>
						<h2>VIDEO PLAYER</h2>
					</Link>
				</div>
				<div className='card'>
					<Link className='link' to='/converter'>
						<img
							className='img'
							src={'../../../assets/medianav/apps/converter.jpg'}
							width='640'
							height='360'
							alt='CONVERTER'
							loading='lazy'
						/>
						<h2>CONVERTER</h2>
					</Link>
				</div>
			</div>
		</>
	);
};
