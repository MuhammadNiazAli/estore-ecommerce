'use client';

import React from 'react';

// Components
import SizeGuideHero from '@/components/SizeGuide/SizeGuideHero';
import SizeGuideTable from '@/components/SizeGuide/SizeGuideTable';
import SizeGuideHowToMeasure from '@/components/SizeGuide/SizeGuideHowToMeasure';
import SizeGuideTips from '@/components/SizeGuide/SizeGuideTips';
import SizeGuideFAQ from '@/components/SizeGuide/SizeGuideFAQ';
import SizeGuideComparison from '@/components/SizeGuide/SizeGuideComparison';
import SizeGuideModelInfo from '@/components/SizeGuide/SizeGuideModelInfo';
import SizeGuideInteractive from '@/components/SizeGuide/SizeGuideInteractive';
import SizeGuideBanner from '@/components/SizeGuide/SizeGuideBanner';
import SizeGuideFooter from '@/components/SizeGuide/SizeGuideFooter';

const SizeGuidePage = () => {
  return (
    <main className="min-h-screen bg-[#101828] text-white flex flex-col items-center justify-start px-4 py-12 lg:py-20 space-y-10">

      <SizeGuideHero />
      <SizeGuideTable />
      <SizeGuideHowToMeasure />
      <SizeGuideTips />
      <SizeGuideFAQ />
      <SizeGuideComparison />
      <SizeGuideModelInfo />
      <SizeGuideInteractive />
      <SizeGuideBanner />
      <SizeGuideFooter />

    </main>
  );
};

export default SizeGuidePage;
