import Image from 'next/image';
import CeoSection from './components/CeoSection';
import HeroPage from './components/HeroSection';
import ExpertiseSection from './components/ExpertiseSection';
import StorySection from './components/StorySection';
import MissionValuesSection from './components/MissionValuesSection';

export default function Home() {
  return (
    <div className='min-h-screen bg-white overflow-x-hidden'>
      <HeroPage />
      <ExpertiseSection />
      <StorySection />

      <CeoSection />
      <MissionValuesSection />
    </div>
  );
}
