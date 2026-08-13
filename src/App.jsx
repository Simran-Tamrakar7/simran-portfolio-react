import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Pillars } from './components/Pillars';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import Certifications from './components/Certifications';
import ResumeModal from './components/ResumeModal';
import ScrollToTop from './components/ScrollToTop';
import { Skills } from './components/Skills';
import { EducationExtra } from './components/EducationExtra';
import { CtaBanner } from './components/CtaBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { KeyImpact } from './components/KeyImpact';
import { InteractiveQASuite } from './components/InteractiveQASuite';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  useScrollReveal();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: '' });

  const showToast = (message) => {
    setToast({ visible: true, message });
    setTimeout(() => {
      setToast({ visible: false, message: '' });
    }, 3000);
  };

  const handleCopyEmail = (email, message) => {
    navigator.clipboard.writeText(email).then(() => {
      showToast(message);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <div className="app">
      <Toast visible={toast.visible} message={toast.message} />

      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <main>
        <Hero
          onCopyEmail={handleCopyEmail}
          onOpenResume={() => setIsResumeOpen(true)}
        />
        <About />
        <Pillars />
        <KeyImpact />
        <InteractiveQASuite />
        <Projects onOpenModal={(project) => setSelectedProject(project)} />
        <Experience />
        <Skills />
        <Certifications />
        <EducationExtra />
        <CtaBanner
          onOpenResume={() => setIsResumeOpen(true)}
          onShowToast={showToast}
        />
        <Contact onShowToast={showToast} />
      </main>

      <Footer />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ScrollToTop />
    </div>
  );
}
