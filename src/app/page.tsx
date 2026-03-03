"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import AboutMetric from '@/components/sections/about/AboutMetric';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Sparkles, Briefcase, Zap, Users, TrendingUp, Award, Mail } from 'lucide-react';

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
          brandName="Christian Friis"
          navItems={[
            { name: "Work", id: "portfolio" },
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          bottomLeftText="Web Designer"
          bottomRightText="friischristian35@gmail.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Web Design That Captivates"
          description="I create stunning, user-centric websites that blend beautiful design with seamless functionality. Let's transform your vision into a digital experience that converts."
          tag="Professional Designer"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "animated-grid" }}
          buttons={[
            { text: "View My Work", href: "#portfolio" },
            { text: "Get Started", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          carouselItems={[
            {
              id: "1",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-stunning-modern-e-commerce-website-des-1772566668134-fb1e4245.png",              imageAlt: "E-commerce website design"
            },
            {
              id: "2",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-sleek-corporate-website-design-for-a-t-1772566668876-f9cb2e3c.png",              imageAlt: "Corporate website design"
            },
            {
              id: "3",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-creative-agency-website-design-with-bo-1772566669671-c480d904.png",              imageAlt: "Creative agency website"
            },
            {
              id: "4",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-sophisticated-saas-platform-landing-pa-1772566668752-9737873c.png",              imageAlt: "SaaS platform design"
            },
            {
              id: "5",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-vibrant-fashion-brand-website-design-w-1772566668475-3b90a44d.png",              imageAlt: "Fashion brand website"
            },
            {
              id: "6",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-professional-consulting-firm-website-d-1772566668764-39fb77be.png",              imageAlt: "Consulting website design"
            }
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <ProductCardOne
          title="Featured Work"
          description="A selection of my recent web design projects showcasing diverse industries and design approaches."
          tag="Portfolio"
          tagIcon={Briefcase}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",              name: "E-Commerce Platform",              price: "2023",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-stunning-modern-e-commerce-website-des-1772566668134-fb1e4245.png",              imageAlt: "E-commerce platform design"
            },
            {
              id: "2",              name: "Corporate Website",              price: "2023",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-sleek-corporate-website-design-for-a-t-1772566668876-f9cb2e3c.png",              imageAlt: "Corporate website design"
            },
            {
              id: "3",              name: "Creative Agency Site",              price: "2024",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-creative-agency-website-design-with-bo-1772566669671-c480d904.png",              imageAlt: "Creative agency website"
            },
            {
              id: "4",              name: "SaaS Platform",              price: "2024",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-sophisticated-saas-platform-landing-pa-1772566668752-9737873c.png",              imageAlt: "SaaS platform design"
            },
            {
              id: "5",              name: "Fashion Brand",              price: "2023",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-vibrant-fashion-brand-website-design-w-1772566668475-3b90a44d.png",              imageAlt: "Fashion brand website"
            },
            {
              id: "6",              name: "Consulting Firm",              price: "2024",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-professional-consulting-firm-website-d-1772566668764-39fb77be.png",              imageAlt: "Consulting website design"
            }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardNineteen
          title="My Services"
          description="End-to-end web design solutions tailored to your business goals and brand identity."
          tag="What I Offer"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              tag: "Design",              title: "Web Design",              subtitle: "Beautiful, intuitive interfaces that engage users.",              description: "I create custom web designs that reflect your brand identity and captivate your audience. From concept to execution, every pixel is carefully crafted for optimal user experience and visual impact.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-modern-designer-s-workspace-with-a-cle-1772566667699-d70c5a04.png",              imageAlt: "Web design workspace"
            },
            {
              id: 2,
              tag: "Development",              title: "Responsive Development",              subtitle: "Websites that work seamlessly across all devices.",              description: "Responsive design ensures your website looks and functions flawlessly on desktop, tablet, and mobile. I use modern technologies and best practices to deliver fast, secure, and SEO-optimized websites.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/a-sleek-corporate-website-design-for-a-t-1772566668876-f9cb2e3c.png",              imageAlt: "Responsive development"
            },
            {
              id: 3,
              tag: "Optimization",              title: "Performance & SEO",              subtitle: "Optimized for search engines and user engagement.",              description: "I optimize websites for speed, accessibility, and search engine visibility. Strategic SEO implementation ensures your site reaches the right audience and ranks well on search results."
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="I'm a passionate web designer dedicated to creating digital experiences that inspire and convert. With expertise in modern web design trends, user experience, and digital strategy, I help brands establish a powerful online presence."
          useInvertedBackground={false}
          metrics={[
            { icon: Zap, label: "Projects Completed", value: "50+" },
            { icon: Users, label: "Happy Clients", value: "30+" },
            { icon: TrendingUp, label: "Years Experience", value: "5+" },
            { icon: Award, label: "Design Awards", value: "8" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="Christian's web design expertise transformed our online presence. His attention to detail, creative vision, and collaborative approach made the entire process smooth and enjoyable. Our website has become a powerful business asset."
          rating={5}
          author="Sarah Mitchell, CEO - TechFlow"
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
          avatars={[
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/professional-headshot-portrait-of-a-busi-1772566666692-7dbdb570.png", alt: "Sarah Mitchell" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/professional-headshot-portrait-of-a-crea-1772566668076-76e214eb.png", alt: "John Davis" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/professional-headshot-portrait-of-a-fema-1772566667828-5111d03b.png", alt: "Emily Rodriguez" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARjvloGcZpCaedVgrm6Muh5Upq/professional-headshot-portrait-of-a-male-1772566668212-bf31db96.png", alt: "Michael Chen" }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Let's Work Together"
          tagIcon={Mail}
          tagAnimation="slide-up"
          title="Ready to Elevate Your Online Presence?"
          description="Let's collaborate to create a website that not only looks stunning but also drives results. I'm excited to bring your vision to life."
          buttons={[
            { text: "Contact Me", href: "mailto:friischristian35@gmail.com" },
            { text: "Call: +49 176 61169654", href: "tel:+49176611696541" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "animated-grid" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Christian Friis"
          columns={[
            {
              items: [
                { label: "Work", href: "#portfolio" },
                { label: "Services", href: "#services" },
                { label: "About", href: "#about" }
              ]
            },
            {
              items: [
                { label: "Email", href: "mailto:friischristian35@gmail.com" },
                { label: "Phone", href: "tel:+49176611696541" },
                { label: "LinkedIn", href: "#" }
              ]
            },
            {
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Impressum", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
