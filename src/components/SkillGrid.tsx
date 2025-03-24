interface Skill {
  name: string;
  icon: string;
  level?: number;
  category: string;
}

interface SkillGridProps {
  skills: Skill[];
  title: string;
  isLearning?: boolean;
}

const SkillGrid = ({ skills, title, isLearning = false }: SkillGridProps) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        {title}
      </h3>
      <div className={`grid ${isLearning ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-2 lg:grid-cols-4'} gap-6`}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative bg-gray-50 dark:bg-gray-600 rounded-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="flex flex-col items-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 mb-4 transform transition-transform group-hover:scale-110"
              />
              <span className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                {skill.name}
              </span>
              <span className="text-xs text-indigo-600 dark:text-indigo-400 mb-3">
                {skill.category}
              </span>
              {!isLearning && skill.level && (
                <div className="w-full bg-gray-200 dark:bg-gray-500 rounded-full h-1.5 mb-1 overflow-hidden">
                  <div
                    className="bg-indigo-600 h-1.5 rounded-full transition-all duration-500 ease-out group-hover:bg-indigo-500"
                    style={{
                      width: `${skill.level}%`,
                      transition: 'width 1s ease-in-out'
                    }}
                  />
                </div>
              )}
              {!isLearning && skill.level && (
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  {skill.level}%
                </span>
              )}
            </div>
            {isLearning && (
              <div className="absolute -top-1 -right-1">
                <span className="flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillGrid;
