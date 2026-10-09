import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/page-header";
import ReadyToHaveChat from "@/components/ready-to-have-chat";
import ProblemsWeSolve from "@/components/services-components/problemswesolve";
import ProcessSection from "@/components/services-components/processsection";
import Services from "@/components/services-components/services";
import WhatWeDo from "@/components/services-components/whatwedo";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Software and AI, built to work together."
        subtitle="We build the systems that run your business, and the AI that makes them sharper — as one connected practice, not two separate vendors."
      />
      <WhatWeDo />
      <ProblemsWeSolve />
      <Services />
      <ProcessSection />
      <ReadyToHaveChat />
      <Footer />
    </>
  );
}
