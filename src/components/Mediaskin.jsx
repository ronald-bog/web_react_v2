import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export const Mediaskin = () => {
	const images = [
		{ original: '../../../assets/medianav/apps/mediaskin/mediaskin-1.jpg' },
		{ original: '../../../assets/medianav/apps/mediaskin/mediaskin-2.jpg' },
		{ original: '../../../assets/medianav/apps/mediaskin/mediaskin-3.jpg' },
		{ original: '../../../assets/medianav/apps/mediaskin/mediaskin-4.jpg' },
		{ original: '../../../assets/medianav/apps/mediaskin/mediaskin-5.jpg' },
		{ original: '../../../assets/medianav/apps/mediaskin/mediaskin-6.jpg' },
		{ original: '../../../assets/medianav/apps/mediaskin/mediaskin-7.jpg' },
		{ original: '../../../assets/medianav/apps/mediaskin/mediaskin-8.jpg' },
		{ original: '../../../assets/medianav/apps/mediaskin/mediaskin-9.jpg' },
		{ original: '../../../assets/medianav/apps/mediaskin/mediaskin-10.jpg' },
	];

	return (
		<>
			<div className='apps'>
				<div className='youtube'>
					<iframe
						src='https://www.youtube.com/embed/WF0UyVkUl6Y?si=VoVXvYDsgM8164ew'
						title='YouTube video player'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					></iframe>
				</div>

				<div className='card1'>
					<div className='title'>
						<h2>MEDIASKIN</h2>
					</div>

					<p>
						<li>
							✅ Software para reproducción de video, otras aplicaciones y
							funciones en Media Nav Evolution versiones 9.1.3 - 9.1.2 - 9.1.1 -
							8.0.5 -7.0.5 - 6.0.4 - 6.0.3 - 5.2.8 - 5.2.7.A - 5.2.7.
						</li>
						<li>✅ Instalación sencilla en 10 minutos.</li>
						<li>✅ Se instala directamente en Media Nav.</li>
						<li>
							✅ No afecta funciones del Sistema Media Nav, no cambia versión
							original, no afecta Garantía, Media Nav sigue original.
						</li>
						<li>✅ Versión Actual Mediaskin: 10.0.</li>
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
						<h2>Funciones</h2>
					</div>
					<p>
						<li>
							▶️ Reproducción de Video, IGO 8*, Juegos, Información de Media
							Nav, Hora, Fecha, Calendario, Video, Fotos, Calculadora,
							Cronometro, Medidor de velocidad, Indicador de Rumbo, Altímetro,
							Latitud, longitud, reinicio del sistema.
						</li>
						<li>▶️ Audio Activado automáticamente.</li>
						<li>▶️ Incluye desinstalador en un minuto.</li>
						<li>▶️ Contiene 10 Skins.</li>
						<li>▶️ Personalización Icono de Inicio: 10 Opciones.</li>
						<li>
							⚠️ Mapas de Igo8 tienen costo adicional, no se incluyen con el
							software Mediaskin.
						</li>
						<br />
						<br />
					</p>
				</div>
			</div>
		</>
	);
};
