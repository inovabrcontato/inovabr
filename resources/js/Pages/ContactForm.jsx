import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
// import RecaptchaComponent from './RecaptchaComponent'
import {useState, useEffect} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js?render=6LfZiIIrAAAAAOxPTZiXGOeIPlydkGpboRxnLo-T';
        script.async = true;
        script.defer = true;
    
        document.body.appendChild(script);
    
        // Limpiar el script al desmontar el componente
        return () => {
          document.body.removeChild(script);
        };
    }, []);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Aplicar trim solo si hay valor
        const cleanValue = (name === 'email') ? value.trim() : value;
        setFormData(prev => ({ ...prev, [name]: cleanValue }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!window.grecaptcha) {
            toast.error('reCAPTCHA no está listo.', {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: 'colored',
                icon: '📧',
            });
            return;
        }

        // TU CLAVE DE RECAPTCHA V3
        const siteKey = '6LfZiIIrAAAAAOxPTZiXGOeIPlydkGpboRxnLo-T'; 

        try {

            await grecaptcha.execute(siteKey, {action: 'submit'}).then(async function(token) {
                // Add your logic to submit to your backend server here.
                const captcha = await axios.post('http://inovabr.test/verify', {token : token, name: formData.name.trim(), email: formData.email.trim(), message: formData.message.trim()}, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if(!captcha.data.success)
                {
                    toast.error( captcha.data.message);
                    return;
                }

                toast.success(captcha.data.message, {
                    position: 'top-center',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: 'colored',
                    icon: '📧',
                });
                
            });

        } catch (error) {
            console.error('Error al enviar:', error);
            toast.error('Ah ocurrido un error.');
            // También podrías mostrar un mensaje de error
        } finally {
            formData.name    = '';
            formData.email   = '';
            formData.message = '';
            setIsSubmitting(false);
        }
    };

    return (
        
        <div class="min-h-screen flex flex-col">
            {/* <WhatsApp
                phoneNumber="5553999763097"
                message="Hola, ¿cómo puedo ayudarte?"
            /> */}
            <Navbar />
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 h-3/4">
                    <section className="md:col-span-4 py-12 px-4">
                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 justify-center">
                            {/* Você está pronto para levar seu negócio para o próximo nível? */}
                            <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md space-y-6 transform transition-transform duration-300 ease-in-out shadow-md hover:-translate-y-2 hover:shadow-2xl hover:rotate-[0.0deg] hover:shadow-indigoCustom">
                                {/* Primera fila: Nombre y Email */}
                                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                                    <h1 className="text-lg font-bold text-indigo-800 mb-2">Você está pronto para levar seu negócio para o próximo nível?</h1>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Nombre:</label>
                                        <input
                                            type="text"
                                            name="name"
                                            disabled={isSubmitting}
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Email:</label>
                                        <input
                                            type="text"
                                            name="email"
                                            disabled={isSubmitting}
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </div>

                                {/* Segunda fila: Comentario */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Comentario:</label>
                                    <textarea
                                    name="message"
                                    rows="4"
                                    disabled={isSubmitting}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                {/* Botón Enviar */}
                                <div>
                                    <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center ${
                                        isSubmitting ? 'bg-[#2D328D]/70 cursor-not-allowed' : 'bg-[#2D328D] hover:bg-[#1f2268]'
                                    }`}
                                    >
                                    {isSubmitting ? (
                                        <>
                                        <span>Enviando</span>
                                        <svg
                                            className="animate-spin h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 010 16z"
                                            ></path>
                                        </svg>
                                        </>
                                    ) : (
                                        'Enviar Mensaje'
                                    )}
                                    </button>
                                </div>
                                </form>
                        </div>
                    </section>
            </div>
            <Footer />
            <ToastContainer />
        </div>
    )
}

