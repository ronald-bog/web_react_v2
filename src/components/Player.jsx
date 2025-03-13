import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export const Player = () => {
	const images = [
		{ original: '../../../assets/medianav/apps/player/player-1.jpg' },
		{ original: '../../../assets/medianav/apps/player/player-2.jpg' },
		{ original: '../../../assets/medianav/apps/player/player-3.jpg' },
		{ original: '../../../assets/medianav/apps/player/player-4.jpg' },
		{ original: '../../../assets/medianav/apps/player/player-5.jpg' },
		{ original: '../../../assets/medianav/apps/player/player-6.jpg' },
		{ original: '../../../assets/medianav/apps/player/player-7.jpg' },
		{ original: '../../../assets/medianav/apps/player/player-8.jpg' },
		{ original: '../../../assets/medianav/apps/player/player-9.jpg' },
		{ original: '../../../assets/medianav/apps/player/player-10.jpg' },
	];

	return (
		<>
			<div className='apps'>
				<div className='youtube'>
					<iframe
						src='https://www.youtube.com/embed/xl0r7lThiWw?si=AHAdomaLfOLwnroD'
						title='YouTube video player'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					></iframe>
				</div>

				<div className='card1'>
					<div className='title'>
						<h2>VIDEO PLAYER</h2>
					</div>

					<p>
						<li>
							✅ Software para reproducción de vídeo en Media Nav Evolution Y
							Media Nav Antiguos versiones 9.1.3 - 9.1.2 - 9.1.1 - 8.0.5 -7.0.5
							- 6.0.4 - 6.0.3 - 5.2.8 - 5.2.7.A - 5.2.7 - 4.1.0 - 4.0.6 - 4.0.5
							- 4.0.3 - 4.0.2.
						</li>
						<li>✅ Se instala directamente en Media Nav.</li>
						<li>
							✅ No afecta funciones del Sistema Media Nav, no cambia versión
							original, no afecta Garantía, Media Nav sigue original.
						</li>
						<li>✅ Soporte en Whatsapp, Celular o e-mail.</li>
						<li>✅ Versión Actual Natsoft: 9.0.</li>
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
						<li>▶️ Audio Activado automáticamente.</li>
						<li>
							▶️ Reproducción de Video, IGO 8*, Juegos, Paint, Información Media
							Nav, Notas, Fecha, Hora, Reloj Múltiple, Calendario, Visor Fotos,
							Calculadora y Cronometro, Reloj modo Standby.
						</li>
						<li>▶️ Indicador de fecha con calendario en Menu de Media Nav.</li>
						<li>▶️ Incluye desinstalador en un minuto.</li>
						<li>
							▶️ Personalización: Fondos de pantalla, Fondo Personalizado,
							Botones de operación, Icono de Inicio, Tamaño de Iconos, Color de
							Textos.
						</li>
						<li>
							▶️ Lenguajes: Español, Ingles, Francés, Italiano, Aleman y
							Portugues.
						</li>
						<li>
							⚠️ *Mapas de Igo8 tienen costo adicional, no se incluyen con el
							software Video Player.
						</li>
						<br />
						<br />
					</p>
				</div>
			</div>
		</>
	);
};
