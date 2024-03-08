import { JSX } from 'react';
import HeroBanner from './hero/index';
import Bio from './bio/index';
import Projects from './projects/index';

function Home(): JSX.Element {
  return (
    <div>
      <HeroBanner />
      <Bio />
      <Projects />
    </div>
  );
}

export default Home;
