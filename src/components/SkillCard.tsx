interface SkillCardProps {
  icon: string;
  name: string;
  level: number;
}

const SkillCard = ({ icon, name, level }: SkillCardProps) => {
  return (
    <div className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img src={icon} alt={name} className="w-12 h-12" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {name}
          </h3>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div
              className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-out group-hover:bg-indigo-500"
              style={{ width: `${level}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
