import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { api } from '../services/api';

export const Contact = () => {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [asunto, setAsunto] = useState('');
    const [mensaje, setMensaje] = useState('');


    const [isFocused, setIsFocused] = useState(false);

    const validateEmailExtension = (email) => {
        const extensionRegex = /\.([a-zA-Z]{2,})$/;
        return extensionRegex.test(email);
    };

    async function contact(){
        let contact = {
            nombre,
            apellido,
            email,
            asunto,
            mensaje
        };

        try {
            await api.contact(contact);
            Swal.fire({
                icon: 'success',
                title: "Mensaje Enviado",
                text: "Gracias por su mensaje. Lo revisaremos y le responderemos a la brevedad.",
                timer: 5000,
            });
            setNombre('');
            setApellido('');
            setEmail('');
            setAsunto('');
            setMensaje('');
        } catch (error) {
            Swal.fire({
                title: "No fue posible enviar su mensaje.",
                text: "Por favor reintente.",
                icon: "error",
                timer: 5000,
            });
            navigate('/contact');
        }
    }

    return (
        <>
            <div>
                <div className="encabezado-contact">
                    <p>
                        Gracias por ponerse en contacto con nosotros. Valoramos la comunicación con nuestros usuarios y estamos emocionados
                        de poder ayudarte en lo que necesites. Tu opinión y tus preguntas son importantes para nosotros, y estamos
                        comprometidos a brindarte el mejor servicio posible.
                        <br />
                        <br />
                        Por favor, completa el formulario a continuación con tus datos y una breve descripción de cómo podemos asistirte.
                        Nuestro equipo de soporte estará encantado de responder a tus preguntas, resolver cualquier inquietud o
                        proporcionarte la información que requieres. Nos esforzaremos por responder a tu solicitud a la mayor brevedad.
                    </p>
                </div>
                <div className="form-contact">
                    <form className="contacto" onSubmit={(e) => { e.preventDefault(); contact(); }}>
                        <div className="fila">
                            <input className="name" value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" placeholder="Nombre" onBlur={() => setIsFocused(true)} />
                        </div>
                        {isFocused && !nombre && (<span className="alertVal">Por favor escriba un nombre.</span>)}
                        <div className="fila">
                            <input className="last" value={apellido} onChange={(e) => setApellido(e.target.value)} type="text" placeholder="Apellido" />
                        </div>
                        <div className="fila">
                            <input className="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Correo electrónico" onBlur={() => setIsFocused(true)}  />
                        </div>
                        {isFocused && !validateEmailExtension(email) && (<span className="alertVal">Por favor escriba un correo valido.</span>)}
                        <div className="fila">
                            <select className="asunto" value={asunto} onChange={(e) => setAsunto(e.target.value)}>
                                <option value="" disabled>Selecciona un asunto</option>
                                <option>Cursos</option>
                                <option>Medianav</option>
                                <option>Comentario</option>
                                <option>Sugerencia</option>
                                <option>Otro</option>
                            </select>
                        </div>
                        <div className="fila">
                            <textarea rows="6" cols="80" value={mensaje} onChange={(e) => setMensaje(e.target.value)} placeholder="Escribe aquí tu mensaje"></textarea>
                        </div>
                        {/* Valida mensaje, luego muestra el span si es necesario */}
                        <div className="fila">
                            <button
                                disabled={!nombre || !validateEmailExtension(email) || !mensaje || !asunto}
                                type="submit"
                                className="btn btn-primary" onClick={() => setIsFocused(false)}>
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    );
}