import { useEffect, useRef } from 'react';

const About = () => {
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);
  const learningRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('skill-card')) {
              const level = entry.target.querySelector('.skill-level-fill');
              if (level) {
                level.classList.add('animate-width');
              }
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    [...skillRefs.current, ...learningRefs.current].forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'PHP', level: 85, icon: '/icons/php.svg' },
    { name: 'HTML/CSS', level: 90, icon: '/icons/html.svg' },
    { name: 'Tailwind CSS', level: 85, icon: '/icons/tailwind.svg' },
    { name: 'Bootstrap', level: 85, icon: '/icons/bootstrap.svg' },
    { name: 'Windows', level: 85, icon: '/icons/windows.svg' },
    { name: 'Linux', level: 80, icon: '/icons/linux.svg' },
    { name: 'Python', level: 75, icon: '/icons/python.svg' },
    { name: 'PhpMyAdmin', level: 80, icon: '/icons/phpmyadmin.svg' }
  ];

  const learningSkills = [
    { name: 'JavaScript', icon: '/icons/javascript.svg' },
    { name: 'React', icon: '/icons/react.svg' },
    { name: 'Node.js', icon: '/icons/nodejs.svg' },
    { name: 'Next.js', icon: '/icons/nextjs.svg' },
    { name: 'Docker', icon: '/icons/docker.svg' }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-text">À Propos de Moi</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8 text-lg">
            Étudiant en BTS SIO SLAM, je suis à la recherche d'une alternance pour ma deuxième année, avec une expérience en développement web et une passion pour les technologies émergentes. Je m'intéresse particulièrement au développement full-stack et à l'amélioration continue de mes compétences. 
          </p>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Compétences Techniques</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Mes compétences techniques acquises au fil des projets et formations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={el => skillRefs.current[index] = el}
              className="skill-card flex flex-col items-center justify-center p-4"
            >
              <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-3" />
              <h3 className="text-lg font-semibold text-center">{skill.name}</h3>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Technologies en cours d'apprentissage</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-12">
            Les technologies que j'explore actuellement pour élargir mes compétences
          </p>

          <div className="learning-section">
            {learningSkills.map((skill, index) => (
              <div
                key={index}
                ref={el => learningRefs.current[index] = el}
                className="learning-card fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="learning-icon">
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
                  <span className="learning-pulse">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-center mt-4">{skill.name}</h3>
                <p className="text-sm text-gray-400 text-center mt-2">En cours</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
