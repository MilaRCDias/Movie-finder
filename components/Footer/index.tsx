import Image from 'next/image';
import React from 'react';
import githubImg from '../../public/images/github-image.svg';

const Footer = (): JSX.Element => (
  <footer className="bg-grey h-40 flex justify-around border-t-4 border-purple-700	">
    <div className="m-16">
      <p>
        This project was develop with React (Next.js), <br /> and themoviedb.org
        api.
      </p>
      <p>2020 - {new Date().getUTCFullYear()}</p>
    </div>
    <div className="m-16">
      <p> See my GitHub: </p>
      <a
        href="https://github.com/MilaRCDias/movie-finder"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={githubImg} alt="github" className="w-[50px]" />
      </a>
    </div>
  </footer>
);

export default Footer;
