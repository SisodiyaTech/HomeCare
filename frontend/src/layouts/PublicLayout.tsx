import Navbar from "@/components/common/Navbar";
import Footer from "@/components/public/Footer";
import HomePage from "@/pages/public/HomePage";

const PublicLayout = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
};

export default PublicLayout;
