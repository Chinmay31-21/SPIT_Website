import React from 'react';
import { HeroSection } from './HeroSection';
import { StatsSection } from './StatsSection';
import { AboutSection } from './AboutSection';
import { StudentsSection } from './StudentsSection';
import { AchievementsSection } from './AchievementsSection';
import { EventsSection } from './EventsSection';
import { AlumniNetworkSection } from './AlumniNetworkSection';
import { RecruitersCarousel } from './RecruitersCarousel';
import { UpdatePanel } from './UpdatePanel';
import { AntiRaggingBanner } from './AntiRaggingBanner';


export const MainContent = () => {
  return (
    <main className="relative">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <StudentsSection />
      <AchievementsSection />
      <EventsSection />
      <AlumniNetworkSection />
      <RecruitersCarousel />
      <AntiRaggingBanner />
      <UpdatePanel />
    </main>
  );
};