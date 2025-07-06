import EducationCard from "./EducationCard";

const educationData = [
  {
    degree: "Master of Science in Software Engineering",
    institution: "Y University",
    year: "2024 - Present",
  },
  {
    degree: "Computer Science Diploma",
    institution: "X University",
    year: "2018 - 2020",
  },
  {
    degree: "High School Diploma",
    institution: "X High School",
    year: "2016 - 2020",
  },
];

const About = () => {
  return (
    <div
      id="about"
      className="relative flex items-center justify-center h-screen"
    >
      <div className="relative flex-col flex items-center justify-center h-screen">
        <h1 className="text-6xl text-blue-500 font-bold">About Me</h1>

        <div className="flex flex-row items-center justify-center mt-4 px-24">
          <div className="flex flex-col items-center justify-center flex-1">
            <p className="text-xl text-gray-300 mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              doloremque libero amet dignissimos similique alias ex id quam, eum
              totam maxime quod numquam aspernatur qui voluptates dicta
              molestias necessitatibus ipsa. Iure facere nam sed, nostrum
              dolorum beatae placeat voluptate minus officia id eveniet maiores.
              Sit quam quibusdam nostrum vero culpa ipsum autem temporibus
              dolorum, in minus voluptates rerum aliquam. Laborum!
            </p>
          </div>

          <div className="w-1 h-[90%] bg-zinc-600 mx-4"></div>

          <div className="flex flex-col items-center justify-center flex-1">
            <h2 className="text-3xl text-white font-bold">Education</h2>

            <div className="mt-4 flex flex-col gap-4">
              {educationData.map((item, index) => (
                <EducationCard
                  key={index}
                  education={item}
                  isLast={index === educationData.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
