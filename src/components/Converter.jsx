import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export const Converter = () => {
	const images = [
		{ original: '../../../assets/medianav/apps/converter/converter-1.jpg' },
		{ original: '../../../assets/medianav/apps/converter/converter-2.jpg' },
	];

	return (
		<>
			<div className='apps'>
				<div className='youtube'>
					<iframe
						src='https://www.youtube.com/embed/AtBwQ1LjlZI?si=OjX8Rk_9RDNvv04P'
						title='YouTube video player'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					></iframe>
				</div>

				<div className='card1'>
					<div className='title'>
						<h2>CONVERTER - CARACTERISTICAS</h2>
					</div>

					<p>
						<li>
							✅ Software para conversión de Video. Orientado a usuarios de
							Software para dispositivos Media Nav de vehículos Renault y Dacia.
						</li>
						<li>
							✅ El proceso es muy rápido. Ejemplo: Un vídeo de 5 minutos de
							duración se convertirá en aproximadamente 1 minuto.
						</li>
						<li>
							✅ Formato de Salida. Optimizado para dispositivos Media Nav de
							vehículos Renault y Dacia en formato MP4.
						</li>
						<li>
							✅ Vídeos Livianos. Una característica importante es el peso del
							archivo resultante, Converter produce vídeos de Excelente Calidad
							para Media Nav y peso liviano.
						</li>
						<li>
							✅ Facilidad y Rapidez. El software fue desarrollado para
							brindarle al usuario, la posibilidad de convertir videos de una
							forma sencilla, ágil, rápida, sin complicaciones.
						</li>
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
						<h2>Especificaciones</h2>
					</div>
					<p>
						<li>▶️ Sistema Operativo: Windows 7, 8, 8.1, 10, 11.</li>
						<li>▶️ Arquitectura del Sistema: 64 bits.</li>
						<li>▶️ Memoria Ram: 1 GB</li>
						<li>▶️ Espacio en Disco: 200 MB.</li>
						<li>▶️ Tiempo de Instalación: 1 minuto</li>
						<li>
							▶️ Recomendaciones de Instalación: Permisos de Administrador,
							Configurar restricciones de Antivirus.
						</li>
						<li>▶️ Serial valido para un dispositivo.</li>
						<li>▶️ Desinstalador incorporado.</li>
						<br />
						<br />
					</p>
				</div>
			</div>
		</>
	);
};
