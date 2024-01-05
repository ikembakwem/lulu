export const Button = ({ label }: { label: string }) => {
  return (
    <button className="inline-flex items-center justify-center cursor-pointer px-6 font-semibold text-sm leading-none uppercase min-w-[64px] rounded text-abyssalNightfall bg-primary h-10 md:w-full">
      <span>{label}</span>
    </button>
  );
};
