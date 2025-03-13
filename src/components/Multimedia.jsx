import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export const Multimedia = () => {
	const images = [
		{ original: '../../../assets/medianav/apps/multimedia/multimedia-1.jpg' },
		{ original: '../../../assets/medianav/apps/multimedia/multimedia-2.jpg' },
		{ original: '../../../assets/medianav/apps/multimedia/multimedia-3.jpg' },
		{ original: '../../../assets/medianav/apps/multimedia/multimedia-4.jpg' },
		{ original: '../../../assets/medianav/apps/multimedia/multimedia-5.jpg' },
	];

	return (
		<>
			<div className='apps'>
				<div className='youtube'>
					<iframe
						src='https://www.youtube.com/embed/YufMWvNyuq8?si=iQK-UkwvWoPG2lQa'
						title='YouTube video player'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					></iframe>
				</div>

				<div className='card1'>
					<div className='title'>
						<h2>MULTIMEDIA</h2>
					</div>

					<p>
						<li>
							✅ Software para reproducción de video en la función Multimedia de
							Media Nav Evolution 9.1.3.
						</li>
						<li>
							✅ Se incluye actualizador 9.1.3 para versiones 9.1.2 - 9.1.1 -
							8.0.5 - 7.0.5 - 6.0.4 - 6.0.3 - 5.2.8 - 5.2.7.A - 5.2.7.
						</li>
						<li>✅ Se instala directamente en Media Nav.</li>
						<li>
							✅ No afecta funciones del Sistema Media Nav, no afecta Garantía,
							Media Nav sigue original.
						</li>
						<li>✅ Soporte en Whatsapp o e-mail.</li>
					</p>
				</div>

				<div className='slider'>
					<ImageGallery
						items={images}
						showPlayButton={false}
						showFullscreenButton={false}
						showThumbnails={false}
						showBullets={true}
						autoPlay={true}
						slideInterval={3000}
						slideDuration={1000}
					/>
				</div>

				<div className='card2'>
					<div className='title'>
						<h2>Compatibilidad</h2>
					</div>
					<p>
						<li>▶️ Audio Activado automáticamente.</li>
						<li>▶️ Sistemas Media Nav Version 9.1.3.</li>
						<li>▶️ Incluye Actualizador 9.1.3.</li>
						<br />
						<br />
					</p>
				</div>
			</div>
		</>
	);
};
