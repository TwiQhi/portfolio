import { useEffect, useRef } from 'react';

const Timeline = () => {
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const timelineEvents = [
    {
      title: 'Formation BTS SIO SLAM',
      period: '2024 - 2026',
      description: 'Formation approfondie en développement d\'applications',
      gradient: 'gradient-purple'
    },
    {
      title: 'Projets Personnels',
      period: '2024',
      description: 'Développement de projets web avec React et Node.js',
      gradient: 'gradient-indigo'
    },
    {
      title: 'Stage en Entreprise',
      period: 'À venir',
      description: 'Stage prévu dans une entreprise de développement web',
      gradient: 'gradient-pink'
    },
    {
      title: 'Veille Technologique',
      period: 'En continu',
      description: 'Apprentissage continu des nouvelles technologies',
      gradient: 'gradient-purple'
    }
  ];

  return (
    <section id="timeline" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Mon Parcours</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Les étapes clés de mon parcours professionnel et académique
          </p>
        </div>

        <div className="timeline-section">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              ref={el => timelineRefs.current[index] = el}
              className="timeline-card fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className={`timeline-dot ${event.gradient}`} />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <span className="text-sm text-gray-400">{event.period}</span>
                  </div>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
