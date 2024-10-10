import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faGem, faTools, faUsers } from '@fortawesome/free-solid-svg-icons';

const AboutCompany = () => {
  const features = [
    { icon: faIndustry, text: 'Manufactura de piedras de afilar de alta calidad.' },
    { icon: faGem, text: 'Uso de materias primas seleccionadas.' },
    { icon: faTools, text: 'Proceso de producción innovador.' },
    { icon: faUsers, text: 'Equipo profesional altamente capacitado.' },
  ];

  return (
    <section className="bg-gray-50 p-8 rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
        Sobre Nosotros
      </h2>
      <p className="text-gray-700 text-center mb-6">
        En La Diamantina, nos dedicamos a la fabricación de piedras de afilar de la más alta calidad, garantizando un producto que cumple con los más altos estándares de la industria. Nuestra experiencia y compromiso con la excelencia nos posicionan como líderes en el mercado.
      </p>

      <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        ¿Qué Hacemos?
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow transition-transform duration-300 transform hover:scale-105">
            <FontAwesomeIcon icon={feature.icon} className="text-blue-500 text-2xl mr-3" />
            <span className="text-lg text-gray-700">{feature.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutCompany;