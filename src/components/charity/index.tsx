import { useEffect } from "react";
import CharityHero from "components/charity/hero";
import CharityForm from "components/charity/form";
import Footer from "components/common/footer";

export default function Charity() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CharityHero />
      <CharityForm />
      <Footer />
    </>
  );
}
