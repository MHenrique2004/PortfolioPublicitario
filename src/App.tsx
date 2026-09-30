import React, { useState } from 'react';
import { Header } from './components/Header';
import { BroadcastMarquee } from './components/BroadcastMarquee';
import { HeroSection } from './components/HeroSection';
import { EditorialProjectsIndex } from './components/EditorialProjectsIndex';
import { ProjectShowcaseGrid } from './components/ProjectShowcaseGrid';
import { AboutSection } from './components/AboutSection';
import { TechnicalArsenal } from './components/TechnicalArsenal';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { CaseStudyModal } from './components/CaseStudyModal';
import { ShowreelModal } from './components/ShowreelModal';
import { BriefingModal } from './components/BriefingModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { DirectorDossierModal } from './components/DirectorDossierModal';

import { INITIAL_IMAGE_SLOTS, PROJECTS_LIST } from './data/portfolioData';
import { ProjectItem } from './types/portfolio';

export default function App() {
  const heroImageUrl = INITIAL_IMAGE_SLOTS[0]?.defaultUrl || INITIAL_IMAGE_SLOTS[0]?.currentUrl;
  const portraitImageUrl = INITIAL_IMAGE_SLOTS[4]?.defaultUrl || INITIAL_IMAGE_SLOTS[4]?.currentUrl;

  // Modals state
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [isBriefingOpen, setIsBriefingOpen] = useState(false);
  const [isDossierOpen, setIsDossierOpen] = useState(false);

  // Lightbox state
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    url: '',
    title: '',
    metadata: ''
  });

  const handleInspectImage = (url: string, title: string, metadata: string) => {
    setLightbox({
      isOpen: true,
      url,
      title,
      metadata
    });
  };

  return (
    <div className="bg-[#f4f3f3] text-[#1a1c1c] min-h-screen flex flex-col font-['Inter'] relative selection:bg-black selection:text-white" id="top">
      {/* Fixed Header */}
      <Header
        onOpenAboutModal={() => setIsDossierOpen(true)}
        onOpenShowreel={() => setIsShowreelOpen(true)}
        activeSection=""
      />

      {/* Main Page Content */}
      <main className="w-full pt-16 flex-1 flex flex-col">
        {/* Technical Broadcast Marquee Ribbon */}
        <BroadcastMarquee />

        {/* Hero Section */}
        <HeroSection
          heroImageUrl={heroImageUrl}
          onOpenBriefing={() => setIsBriefingOpen(true)}
          onOpenShowreel={() => setIsShowreelOpen(true)}
          onInspectImage={handleInspectImage}
        />

        {/* Section 01: Editorial Projects Index & Showcase Cards */}
        <section className="w-full bg-black text-white py-16 px-5 md:px-10 flex flex-col gap-14" id="arquivo">
          <EditorialProjectsIndex
            projects={PROJECTS_LIST}
            onSelectProject={(proj) => setSelectedProject(proj)}
          />

          <ProjectShowcaseGrid
            projects={PROJECTS_LIST}
            onSelectProject={(proj) => setSelectedProject(proj)}
            onInspectImage={handleInspectImage}
          />
        </section>

        {/* Section 02: About Me & Technical Autorship */}
        <AboutSection
          portraitImageUrl={portraitImageUrl}
          onInspectImage={handleInspectImage}
        />

        {/* Section 03: Technical Arsenal & Software Stack */}
        <TechnicalArsenal />

        {/* Section 04: Agency & Set Experience Timeline */}
        <ExperienceTimeline />

        {/* Section 05: Direct Contact & WhatsApp Briefing */}
        <ContactSection onOpenBriefing={() => setIsBriefingOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <CaseStudyModal
        project={selectedProject}
        currentImageUrl={selectedProject ? selectedProject.stills[0] : ''}
        onClose={() => setSelectedProject(null)}
        onInspectImage={handleInspectImage}
        onOpenBriefing={() => setIsBriefingOpen(true)}
      />

      {/*
      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
        onOpenBriefing={() => setIsBriefingOpen(true)}
        heroImageUrl={heroImageUrl}
      />
      */}

      <BriefingModal
        isOpen={isBriefingOpen}
        onClose={() => setIsBriefingOpen(false)}
      />

      <DirectorDossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
        portraitUrl={portraitImageUrl}
        onOpenBriefing={() => setIsBriefingOpen(true)}
      />

      <ImageLightboxModal
        isOpen={lightbox.isOpen}
        onClose={() => setLightbox((prev) => ({ ...prev, isOpen: false }))}
        imageUrl={lightbox.url}
        title={lightbox.title}
        metadata={lightbox.metadata}
      />
    </div>
  );
}
