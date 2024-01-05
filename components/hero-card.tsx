/* eslint-disable @next/next/no-img-element */

import { Button } from "./button";

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
        <Button label={data.cta} />
      </div>
    </div>
  );
};
