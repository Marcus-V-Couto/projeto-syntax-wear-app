interface OverlayProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  className?: string
}

export const Overlay = ({ children, title, subtitle, className }: OverlayProps) => {
  return (
    <div className={`absolute w-full text-center ${className}`}>
      <div className="text-white flex flex-col items-center w-[388px]">
        <h2 className="text-x1 font-medium leading-normal tracking-wider mb-2.5">
          {title}
        </h2>
        <h1 className="text-2x1 leading-9 tracking-widest mb-10">{subtitle}</h1>
        <div className="flex gap-3.5">{children}</div>
      </div>
    </div>
  );
};