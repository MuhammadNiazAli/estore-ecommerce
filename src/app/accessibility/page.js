'use client';

import React from 'react';
import AccessibilityHero from '@/components/Accessibility/AccessibilityHero';
import AccessibilityCommitment from '@/components/Accessibility/AccessibilityCommitment';
import AssistiveTechSupport from '@/components/Accessibility/AssistiveTechSupport';
import KeyboardNavigation from '@/components/Accessibility/KeyboardNavigation';
import ScreenReaderSupport from '@/components/Accessibility/ScreenReaderSupport';
import ColorContrastScaling from '@/components/Accessibility/ColorContrastScaling';
import AccessibleDesign from '@/components/Accessibility/AccessibleDesign';
import AccessibilityFeedback from '@/components/Accessibility/AccessibilityFeedback';
import ComplianceStandards from '@/components/Accessibility/ComplianceStandards';
import TestingTools from '@/components/Accessibility/TestingTools';
import AccessibilityContact from '@/components/Accessibility/AccessibilityContact';
import AccessibilityStatementDownload from '@/components/Accessibility/AccessibilityStatementDownload';
import AccessibilityFAQs from '@/components/Accessibility/AccessibilityFAQs';

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-[#101828] text-white flex flex-col items-center justify-start px-4 py-15 lg:py-35">
      <AccessibilityHero />
      <AccessibilityCommitment />
      <AssistiveTechSupport />
      <KeyboardNavigation />
      <ScreenReaderSupport />
      <ColorContrastScaling />
      <AccessibleDesign />
      <AccessibilityFeedback />
      <ComplianceStandards />
      <TestingTools />
      <AccessibilityContact />
      <AccessibilityStatementDownload />
      <AccessibilityFAQs />
    </main>
  );
}
