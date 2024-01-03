/* eslint-disable @next/next/no-img-element */

export const HeroCard = () => {
  return (
    <div className="text-center flex flex-col items-center">
      <div className="pb-2">
        <h3 className="text-xs font-semibold leading-none uppercase pb-2 text-radiantJade">
          DISNEY BUNDLE DUO BASIC
        </h3>
      </div>
      <div className="flex justify-center h-12 pb-2">
        <img
          src="/assets/images/hulu-plus-disney.png"
          className="w-3/5 h-auto align-middle"
          alt=""
        />
      </div>
      <p className="text-lg font-medium leading-tight mt-2 text-white">
        Both with ads, for $9.99/month.
      </p>
      <div className="mt-6">
        <button className="inline-flex items-center justify-center cursor-pointer px-6 font-semibold text-sm leading-none uppercase min-w-[64px] rounded text-abyssalNightfall bg-primary h-10">
          <span className="w-full">GET THEM BOTH</span>
        </button>
      </div>
    </div>
  );
};
