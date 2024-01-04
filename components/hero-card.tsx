/* eslint-disable @next/next/no-img-element */

export type HeroCardData = {
  title: string;
  imgUrl: string;
  info: string;
  cta: string;
};

type Props = {
  data: HeroCardData;
  imgWidth?: "not-full" | "full";
};

export const HeroCard = ({ data, imgWidth = "full" }: Props) => {
  return (
    <div className="text-center flex flex-col items-center">
      <div className="pb-3">
        <h3 className="text-xs font-semibold leading-none uppercase text-radiantJade">
          {data.title}
        </h3>
      </div>
      <div
        className={`${
          imgWidth === "not-full" ? "w-[60%]" : ""
        } flex grow justify-center min-h-[46px] p-[3px]`}
      >
        <img src={data.imgUrl} alt="" className="object-contain" />
      </div>
      <p className="text-lg md:text-2xl font-medium leading-tight mt-2 text-white">
        {data.info}
      </p>
      <div className="mt-6 w-full max-w-full">
        <button className="inline-flex items-center justify-center cursor-pointer px-6 font-semibold text-sm leading-none uppercase min-w-[64px] rounded text-abyssalNightfall bg-primary h-10 md:w-full">
          <span>{data.cta}</span>
        </button>
      </div>
    </div>
  );
};
