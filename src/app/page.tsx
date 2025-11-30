import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Mission } from "@/components/Mission";
import { Compliance } from "@/components/Compliance";
import { ServiceAreas } from "@/components/ServiceAreas";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { getLocalBusinessSchema, getOrganizationSchema } from "@/lib/structured-data";

export default function Home() {
  const localBusinessSchema = getLocalBusinessSchema();
  const organizationSchema = getOrganizationSchema();

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <ThemeToggle />
      <main>
        <Hero />
        <Services />
        <Mission />
        <Compliance />
        <ServiceAreas />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
