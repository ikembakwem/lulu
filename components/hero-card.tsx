/* eslint-disable @next/next/no-img-element */

export type HeroCardData = {
  title: string;
  imgUrl: string;
  info: string;
  cta: string;
};

type Props = {
  data: HeroCardData;
};

export const HeroCard = ({ data }: Props) => {
  return (
    <div className="text-center flex flex-col items-center">
      <div className="pb-3">
        <h3 className="text-xs font-semibold leading-none uppercase text-radiantJade">
          {data.title}
        </h3>
      </div>
      <div className="flex justify-center min-h-[46px] p-[3px]">
        <img src={data.imgUrl} alt="" className="object-contain" />
      </div>
      <p className="text-lg font-medium leading-tight mt-2 text-white">
        {data.info}
      </p>
      <div className="mt-6">
        <button className="inline-flex items-center justify-center cursor-pointer px-6 font-semibold text-sm leading-none uppercase min-w-[64px] rounded text-abyssalNightfall bg-primary h-10">
          <span className="w-full">{data.cta}</span>
        </button>
      </div>
    </div>
  );
};
