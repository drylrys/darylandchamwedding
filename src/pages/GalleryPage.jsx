import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import GallerySection from "../components/GallerySection";
import Footer from "../components/Footer";

function GalleryPage() {
  return (
    <Box bg="sage.50" minH="100vh">
      <Navbar />
      <GallerySection />
      <Footer />
    </Box>
  );
}

export default GalleryPage;
