export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-containerXs sm:max-w-containerSm md:max-w-containerMd lg:max-w-container xl:max-w-containerXl mx-auto">
      {children}
    </div>
  );
};
