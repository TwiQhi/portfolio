import { useState, FormEvent } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Ajoutez ici la logique d'envoi du formulaire
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Contact</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration
          </p>
        </div>

        <div className="contact-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Me contacter</h3>
              <div className="space-y-6">
                <a
                  href="mailto:votre.email@example.com"
                  className="flex items-center space-x-4 project-link"
                >
                  <FaEnvelope className="text-2xl" />
                  <span>marius.bhme@gmail.com</span>
                </a>
                <a
                  href="https://github.com/TwiQhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 project-link"
                >
                  <FaGithub className="text-2xl" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/marius-bonhomme/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 project-link"
                >
                  <FaLinkedin className="text-2xl" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="votre.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Votre message"
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                <span className="relative z-10">Envoyer le message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
