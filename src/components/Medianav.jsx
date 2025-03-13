import { Link } from 'react-router-dom';

export const Medianav = () => {
	return (
		<>
			<div className='medianav'>
				<div className='card'>
					<Link className='link' to='/apps'>
						<img
							className='img'
							src={`../../../assets/medianav/apps.jpg`}
							width='640'
							height='360'
							alt='Reproducción de Video y otras Aplicacione'
							loading='lazy'
						/>
						<h2>▶️ Reproducción de Video y otras Aplicaciones.</h2>
					</Link>
				</div>

				<div className='card'>
					<Link className='link' to='/contact'>
						<img
							className='img'
							src={`../../../assets/medianav/mapas.jpg`}
							width='640'
							height='360'
							alt='Actualización Mapas GPS'
							loading='lazy'
						/>
						<h2>🌍 Actualización Mapas GPS.</h2>
					</Link>
				</div>

				<div className='card'>
					<Link className='link' to='/contact'>
						<img
							className='img'
							src={`../../../assets/medianav/tool.jpg`}
							width='640'
							height='360'
							alt='Reparación Connect diag tool y bloqueo Logo'
							loading='lazy'
						/>
						<h2>🔧 Reparación Connect diag tool y bloqueo Logo.</h2>
					</Link>
				</div>
				<div className='card'>
					<Link className='link' to='/contact'>
						<img
							className='img'
							src={`../../../assets/medianav/upload.jpg`}
							width='640'
							height='360'
							alt='Actualización y Downgrade Versión'
							loading='lazy'
						/>
						<h2>⤴️ Actualización y Downgrade Versión.</h2>
					</Link>
				</div>
				<div className='card'>
					<Link className='link' to='/contact'>
						<img
							className='img'
							src={`../../../assets/medianav/eco.jpg`}
							width='640'
							height='360'
							alt='Activación Cámara Reversa y Función ECO'
							loading='lazy'
						/>
						<h2>⚙️ Activación Cámara Reversa y Función ECO.</h2>
					</Link>
				</div>
			</div>
		</>
	);
};
