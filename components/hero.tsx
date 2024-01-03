/* eslint-disable @next/next/no-img-element */

import { Container } from "./container";
import { HeroCardData, HeroCard } from "./hero-card";

const cardsData: HeroCardData[] = [
  {
    title: "DISNEY BUNDLE DUO BASIC",
    imgUrl: "/assets/images/hulu-plus-disney.png",
    info: "Both with ads, for $9.99/month.",
    cta: "GET THEM BOTH",
  },
  {
    title: "DISNEY BUNDLE TRIO BASIC",
    imgUrl: "/assets/images/hulu-plus-espn.png",
    info: "All with ads, for $14.99/month.",
    cta: "GET ALL THREE",
  },
];

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
            <div className="p-4 sm:p-10">
              <div className="grid grid-cols-2 gap-x-4 mt-4">
                <HeroCard data={cardsData[0]} />
                <HeroCard data={cardsData[1]} />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};
