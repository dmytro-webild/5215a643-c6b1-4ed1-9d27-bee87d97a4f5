"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Sparkles, Briefcase, Zap, Mail, Code, Rocket, CheckCircle } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="mediumSmall"
      sizing="largeSmallSizeMediumTitles"
      background="grid"
      cardStyle="gradient-mesh"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="Peter Friis"
          navItems={[
            { name: "Arbeiten", id: "portfolio" },
            { name: "Dienstleistungen", id: "services" },
            { name: "Bereitstellung", id: "deployment" },
            { name: "Kontakt", id: "contact" }
          ]}
          bottomLeftText="Webdesigner"
          bottomRightText="friisp@gmail.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Webdesign, das fesselt"
          description="Ich erstelle atemberaubende, benutzerorientierte Websites, die schönes Design mit nahtloser Funktionalität verbinden. Lassen Sie uns Ihre Vision in ein digitales Erlebnis umwandeln, das konvertiert."
          tag="Professioneller Designer"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "animated-grid" }}
          buttons={[
            { text: "Meine Arbeiten ansehen", href: "#portfolio" },
            { text: "Erste Schritte", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          carouselItems={[
            {
              id: "1",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-stunning-modern-e-commerce-website-des-1772566668134-fb1e4245.png?_wi=1",              imageAlt: "E-Commerce-Website-Design"
            },
            {
              id: "2",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-sleek-corporate-website-design-for-a-t-1772566668876-f9cb2e3c.png?_wi=1",              imageAlt: "Unternehmenswebsite-Design"
            },
            {
              id: "3",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-creative-agency-website-design-with-bo-1772566669671-c480d904.png?_wi=1",              imageAlt: "Website der Kreativagentur"
            },
            {
              id: "4",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-sophisticated-saas-platform-landing-pa-1772566668752-9737873c.png?_wi=1",              imageAlt: "SaaS-Plattform-Design"
            },
            {
              id: "5",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-vibrant-fashion-brand-website-design-w-1772566668475-3b90a44d.png?_wi=1",              imageAlt: "Modemarken-Website"
            },
            {
              id: "6",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-professional-consulting-firm-website-d-1772566668764-39fb77be.png?_wi=1",              imageAlt: "Consulting-Website-Design"
            }
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <ProductCardOne
          title="Ausgewählte Arbeiten"
          description="Eine Auswahl meiner neuesten Webdesign-Projekte, die verschiedene Branchen und Design-Ansätze zeigen."
          tag="Portfolio"
          tagIcon={Briefcase}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",              name: "E-Commerce-Plattform",              price: "2023",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-stunning-modern-e-commerce-website-des-1772566668134-fb1e4245.png?_wi=2",              imageAlt: "E-Commerce-Plattform-Design"
            },
            {
              id: "2",              name: "Unternehmenswebsite",              price: "2023",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-sleek-corporate-website-design-for-a-t-1772566668876-f9cb2e3c.png?_wi=2",              imageAlt: "Unternehmenswebsite-Design"
            },
            {
              id: "3",              name: "Website einer Kreativagentur",              price: "2024",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-creative-agency-website-design-with-bo-1772566669671-c480d904.png?_wi=2",              imageAlt: "Website einer Kreativagentur"
            },
            {
              id: "4",              name: "SaaS-Plattform",              price: "2024",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-sophisticated-saas-platform-landing-pa-1772566668752-9737873c.png?_wi=2",              imageAlt: "SaaS-Plattform-Design"
            },
            {
              id: "5",              name: "Modemarke",              price: "2023",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-vibrant-fashion-brand-website-design-w-1772566668475-3b90a44d.png?_wi=2",              imageAlt: "Modemarken-Website"
            },
            {
              id: "6",              name: "Unternehmensberatung",              price: "2024",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-professional-consulting-firm-website-d-1772566668764-39fb77be.png?_wi=2",              imageAlt: "Consulting-Website-Design"
            }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardNineteen
          title="Meine Dienstleistungen"
          description="End-to-End-Webdesign-Lösungen, zugeschnitten auf Ihre Geschäftsziele und Markenidentität."
          tag="Was ich anbiete"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              tag: "Design",              title: "Webdesign",              subtitle: "Schöne, intuitive Schnittstellen, die Benutzer einbeziehen.",              description: "Ich erstelle maßgeschneiderte Webdesigns, die Ihre Markenidentität widerspiegeln und Ihr Publikum fesseln. Von Konzept bis Ausführung wird jedes Pixel sorgfältig für optimale Benutzererfahrung und visuellen Einfluss gestaltet.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-modern-designer-s-workspace-with-a-cle-1772566667699-d70c5a04.png?_wi=1",              imageAlt: "Webdesign-Arbeitsplatz"
            },
            {
              id: 2,
              tag: "Entwicklung",              title: "Responsive Entwicklung",              subtitle: "Websites, die auf allen Geräten nahtlos funktionieren.",              description: "Responsive Design stellt sicher, dass Ihre Website auf Desktop, Tablet und Mobilgerät perfekt aussieht und funktioniert. Ich verwende moderne Technologien und bewährte Verfahren, um schnelle, sichere und SEO-optimierte Websites bereitzustellen.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-sleek-corporate-website-design-for-a-t-1772566668876-f9cb2e3c.png?_wi=3",              imageAlt: "Responsive Entwicklung"
            },
            {
              id: 3,
              tag: "Optimierung",              title: "Leistung & SEO",              subtitle: "Optimiert für Suchmaschinen und Benutzerengagement.",              description: "Ich optimiere Websites für Geschwindigkeit, Zugänglichkeit und Sichtbarkeit in Suchmaschinen. Die strategische SEO-Implementierung stellt sicher, dass Ihre Website die richtige Zielgruppe erreicht und in Suchergebnissen gut abschneidet."
            }
          ]}
        />
      </div>

      <div id="deployment" data-section="deployment">
        <FeatureCardNineteen
          title="So stellen Sie Ihre Website bereit"
          description="Mehrere Bereitstellungsoptionen, um Ihre Website schnell und zuverlässig online zu stellen."
          tag="Bereitstellungsleitfaden"
          tagIcon={Rocket}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              tag: "Empfohlen",              title: "Auf Vercel bereitstellen",              subtitle: "Schnellste Möglichkeit, Next.js-Projekte bereitzustellen.",              description: "1. Verschieben Sie Ihren Code zu GitHub\n2. Melden Sie sich auf vercel.com an\n3. Verbinden Sie Ihr Repository\n4. Vercel erkennt Next.js automatisch und stellt bereit\n5. Ihre Website ist sofort live mit automatischem SSL und CDN",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-modern-designer-s-workspace-with-a-cle-1772566667699-d70c5a04.png?_wi=2",              imageAlt: "Vercel-Bereitstellung"
            },
            {
              id: 2,
              tag: "Alternative",              title: "Auf Netlify bereitstellen",              subtitle: "Großartige Alternative mit einfacher GitHub-Integration.",              description: "1. Verschieben Sie Code zu GitHub\n2. Melden Sie sich auf netlify.com an\n3. Wählen Sie 'Neue Website aus Git'\n4. Build-Befehl: npm run build\n5. Veröffentlichungsverzeichnis: .next/standalone\n6. Bereitstellen und Domäne erhalten",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-sleek-corporate-website-design-for-a-t-1772566668876-f9cb2e3c.png?_wi=3",              imageAlt: "Netlify-Bereitstellung"
            },
            {
              id: 3,
              tag: "Self-Hosted",              title: "Mit Docker bereitstellen",              subtitle: "Stellen Sie überall mit Containerisierung bereit.",              description: "1. Erstellen Sie eine Dockerfile im Projektstammverzeichnis\n2. Build-Image: docker build -t myapp .\n3. Führen Sie aus: docker run -p 3000:3000 myapp\n4. Verschieben Sie zu Docker Hub\n5. Stellen Sie auf AWS ECS, Google Cloud oder DigitalOcean bereit"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Lassen Sie uns zusammenarbeiten"
          tagIcon={Mail}
          tagAnimation="slide-up"
          title="Bereit, Ihre Online-Präsenz zu verbessern?"
          description="Lassen Sie uns zusammenarbeiten, um eine Website zu schaffen, die nicht nur atemberaubend aussieht, sondern auch Ergebnisse liefert. Ich freue mich darauf, Ihre Vision zum Leben zu erwecken."
          buttons={[
            { text: "Kontaktieren Sie mich", href: "mailto:friisp@gmail.com" },
            { text: "Anrufen: +49 179 2355413", href: "tel:+49176611696541" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "animated-grid" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Peter Friis"
          columns={[
            {
              items: [
                { label: "Arbeiten", href: "#portfolio" },
                { label: "Dienstleistungen", href: "#services" },
                { label: "Bereitstellung", href: "#deployment" }
              ]
            },
            {
              items: [
                { label: "E-Mail", href: "mailto:friisp@gmail.com" },
                { label: "Telefon", href: "tel:+49176611696541" },
                { label: "LinkedIn", href: "#" }
              ]
            },
            {
              items: [
                { label: "Datenschutzrichtlinie", href: "#" },
                { label: "Nutzungsbedingungen", href: "#" },
                { label: "Impressum", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
