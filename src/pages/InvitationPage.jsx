import { Box } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import OurStorySection from '../components/OurStorySection';
import EventDetailsSection from '../components/EventDetailsSection';
import LocationSection from '../components/LocationSection';
import DressCodeSection from '../components/DressCodeSection';
import EntourageSection from '../components/EntourageSection';
import RSVPSection from '../components/RSVPSection';
import GiftSection from '../components/GiftSection';
import FAQSection from '../components/FAQSection';
import GalleryBannerSection from '../components/GalleryBannerSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

function InvitationPage() {
  return (
    <Box bg="sage.50" minH="100vh">
      <Navbar />
      <HeroSection />
      <OurStorySection />
      <EventDetailsSection />
      <LocationSection />
      <DressCodeSection />
      <EntourageSection />
      <GalleryBannerSection />
      <GiftSection />
      <RSVPSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </Box>
  );
}

export default InvitationPage;
