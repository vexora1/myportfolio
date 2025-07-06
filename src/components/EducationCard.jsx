const EducationCard = ({ education, isLast }) => {
  return (
    <div className="flex flex-col gap-1 relative">
      {!isLast && <div className="absolute w-1 h-[120%] bg-blue-500 ml-2 transform -translate-x-1/2 mt-2" />}

      <div className="flex items-center">
        <span className="w-4 h-4 bg-blue-500 rounded-full inline-block mr-2" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {education.degree}
        </h3>
      </div>

      <p className="text-gray-700 dark:text-gray-300 ml-6">
        {education.institution}
      </p>
      <p className="text-gray-500 dark:text-gray-400 text-sm ml-6">
        {education.year}
      </p>
    </div>
  );
};

export default EducationCard;
