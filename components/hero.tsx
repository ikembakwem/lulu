/* eslint-disable @next/next/no-img-element */
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
        <div></div>
      </div>
    </section>
  );
};
