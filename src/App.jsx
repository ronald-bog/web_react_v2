import './styles.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { News } from './components/News';
import { Cursos } from './components/Cursos';
import { Videos } from './components/Videos';
import { Software } from './components/Software';
import { Head } from './components/Head';
import { Curso } from './components/Curso';
import { Code } from './components/Code';
import { Contact } from './components/Contact';
import { Medianav } from './components/Medianav';
import { Comprar } from './components/Comprar';
import { Apps } from './components/Apps';
import { Mediaskin } from './components/Mediaskin';
import { Multimedia } from './components/Multimedia';
import { Player } from './components/Player';
import { Converter } from './components/Converter';
import { Pet } from './components/Pet';
import { Softexcel } from './components/Softexcel';

export const App = () => {
  return (
    <>
      <Head />
      <Routes>
        <Route path="/" element={<Navigate to="/tecnologia" replace />} />
        <Route path='tecnologia' element={<News />} />
        <Route path='ciencia' element={<News />} />
        <Route path='cursos' element={<Cursos />} />
        <Route path='videos' element={<Videos />} />
        <Route path='code/:id' element={<Code />} />
        <Route path='software' element={<Software />} />
        <Route path='soft_excel' element={<Softexcel />} />
        <Route path='contact' element={<Contact />} />
        <Route path='pet' element={<Pet />} />
        <Route path='medianav' element={<Medianav />} />
        <Route path='comprar' element={<Comprar />} />
        <Route path='apps' element={<Apps />} />
        <Route path='mediaskin' element={<Mediaskin />} />
        <Route path='multimedia' element={<Multimedia />} />
        <Route path='player' element={<Player />} />
        <Route path='converter' element={<Converter />} />
        <Route path="/cursos/python" element={<Curso />} />
        <Route path="/cursos/javascript" element={<Curso />} />
        <Route path="/cursos/java" element={<Curso />} />
        <Route path="/cursos/angular" element={<Curso />} />
        <Route path="/cursos/html" element={<Curso />} />
        <Route path="/cursos/react" element={<Curso />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </>
  );
};