/* eslint-disable @next/next/no-img-element */

import { Container } from "./container";
import { HeroCard } from "./hero-card";

export const Hero = () => {
  return (
    <section>
      <div className="w-full bg-backdropGradient flex flex-col items-center bg-top bg-cover relative pt-[72px] min-h-[660px]">
        <div className="bg-backdropImageGradient">
          <img
            src="/assets/images/backdrop.jpeg"
            alt="Movies wall"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <div className="z-[2]">
          <Container>
            <div className="p-10">
              <div className="grid grid-cols-2 gap-x-4 mt-4">
                <HeroCard />
                <HeroCard />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};
