interface TitleHeaderProps {
  title: string;
  icon: React.JSX.Element | React.ReactNode;
}

export const TitleHeader = ({ title, icon }: TitleHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4 bg-pumpkin-400 rounded">
      <div className="flex items-center space-x-2">
        {icon}
        <p className="font-semibold text-pumpkin-900">{title}</p>
      </div>
    </div>
  );
};
