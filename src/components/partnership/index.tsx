import { useEffect } from "react";
import PartnershipHero from "components/partnership/hero";
import PartnershipForm from "components/partnership/form";
import Footer from "components/common/footer";

export default function Partnership() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PartnershipHero />
      <PartnershipForm />
      <Footer />
    </>
  );
}
