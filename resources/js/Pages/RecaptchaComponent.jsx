import React, { useEffect } from 'react';

const RecaptchaComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    // script.src = 'https://www.google.com/recaptcha/api.js?render=6LfZiIIrAAAAAOxPTZiXGOeIPlydkGpboRxnLo-T';
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    // Limpiar el script al desmontar el componente
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Aquí puedes colocar tu widget reCAPTCHA */}
      {/* <div className="g-recaptcha" data-sitekey="6LfZiIIrAAAAAOxPTZiXGOeIPlydkGpboRxnLo-T"></div> */}
    </div>
  );
};

export default RecaptchaComponent;