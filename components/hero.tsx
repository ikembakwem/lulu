import { Container } from "./container";

/* eslint-disable @next/next/no-img-element */
export const Hero = () => {
  const divStyles = {
    backgroundImage:
      "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)",
  };
  return (
    <section>
      <div className="w-full relative min-h-[660px] pt-[74px]">
        <div className="absolute -z-10 top-0 left-0 h-full w-full">
          <div className="relative w-full h-full overflow-hidden">
            <img
              src="/assets/images/backdrop.jpeg"
              alt="Hero Image"
              className="w-auto sm:w-full h-full object-cover"
            />
          </div>
        </div>
        <Container>
          <div className="flex flex-col items-center justify-center p-6 pt-12 text-white text-center">
            <h1 className="text-4xl font-semibold">This is the Hero Heading</h1>
            <p className="mt-4 text-lg font-medium">
              This is the sub heading, lorem ipsum dolor citre I don&apos;t know
              what the hell it means
            </p>
            <div className="mt-6 w-full">
              <button className="bg-primary rounded h-12 w-full p-6 inline-flex items-center justify-center cursor-pointer">
                <span className="text-black text-lg font-bold leading-none">
                  CTA Button
                </span>
              </button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
