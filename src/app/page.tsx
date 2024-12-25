import { BackgroundBeams } from "@/components/ui/background-beams";
import { Form, UpcomingFairs } from "@/components/contact";
import ImageGallery from "@/components/ImageGallery";
import { Scene as AboutUsScene } from "@/components/about-us";
import { Scene as HeroScene } from "@/components/hero";

const Page = () => {
  return (
    <main>
      <section className="relative h-screen w-screen">
        <HeroScene />
      </section>

      <section className="relative h-screen w-screen">
        <AboutUsScene />
      </section>

      <section className="container mx-auto p-8">
        <div className="flex flex-col items-end mb-8">
          <h2 className="text-6xl font-extrabold bg-gradient-to-r from-pastelPink via-pastelBlue to-pastelBeige text-transparent bg-clip-text animate-gradient-flow">
            Gallery
          </h2>
          <ImageGallery />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row justify-between items-center w-full">
        <div
          className="visme_d"
          data-title="Form Test"
          data-url="pvpjmkgo-form-test"
          data-domain="forms"
          data-full-page="false"
          data-min-height="500px"
          data-form-id="101973"
        />
        <Form src="https://static-bundles.visme.co/forms/vismeforms-embed.js" />
        <UpcomingFairs />
      </section>

      {/* Footer */}
      <section className="p-14">
        <div className="flex flex-row justify-between items-center mb-2">
          <p className=" font-mono text-sm font-bold">All Rights Reserved</p>
          <p className=" font-mono text-sm font-bold">
            Opal&apos;s Jewels and Gems 2024
          </p>
        </div>
      </section>
      <BackgroundBeams className="z-[-2]" />
    </main>
  );
};

export default Page;
