import { CgMouse } from "react-icons/cg";
import { Typewriter } from 'react-simple-typewriter'

const Header = () => {
  return (
    <div
      id="header"
      className="relative flex items-center justify-center h-screen"
    >
      <div className="relative flex-col flex items-center justify-center h-screen">
        <h1
          className="text-6xl text-white font-bold"
          style={{
            fontFamily: "Kode Mono",
          }}
        >
          John Doe
        </h1>

        <p
          className="text-2xl text-gray-300 mt-4"
          style={{
            fontFamily: "Kode Mono",
          }}
          id="typewriter"
        >
          <Typewriter
            words={['Web Developer', 'UI/UX Designer', 'Content Creator']}
            loop={0}
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
      </div>

      <a
        href="#about"
        className="text-white absolute bottom-10 animate-bounce text-4xl"
      >
        <CgMouse />
      </a>
    </div>
  );
};

export default Header;
