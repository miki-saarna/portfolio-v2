import { JSX } from 'react';
import HeroBanner from './hero';
import Bio from './bio/index';

function Home(): JSX.Element {
  return (
    <div>
      <HeroBanner />
      <Bio />
    </div>
  );
}

export default Home;
