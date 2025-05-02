type BorderWrapperProps = {
    children: React.ReactNode;
    className?: string;
  };

  export default function BorderWrapper({ children, className = '' }: BorderWrapperProps) {
    return (
      <div className={`rounded-2xl p-[2px] animate-border-gradient ${className}`}>
        <div className="bg-black rounded-2xl p-6 h-full">
          {children}
        </div>
      </div>
    );
  }

