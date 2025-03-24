import Projects from '../components/Projects';
import Contact from '../components/Contact';
import About from '../components/About';
import ParticlesBackground from '../components/ParticlesBackground';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParticlesBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Bienvenue sur mon Portfolio
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 animate-fade-in-delay">
            Étudiant en BTS SIO SLAM passionné par le développement web
          </p>
          <div className="flex justify-center space-x-6 animate-fade-in-delay-2">
            <a
              href="#projects"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Me contacter
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-600 dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-800">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-800">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
