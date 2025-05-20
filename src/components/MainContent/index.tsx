import React from 'react';
import { HeroSection } from './HeroSection';
import { StatsSection } from './StatsSection';
import { AboutSection } from './AboutSection';
import { EventsSection } from './EventsSection';
import { UpdatePanel } from './UpdatePanel';
import { AntiRaggingBanner } from './AntiRaggingBanner';

export const MainContent = () => {
  return (
    <main className="relative">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <EventsSection />
      <AntiRaggingBanner />
      <UpdatePanel />
    </main>
  );
};