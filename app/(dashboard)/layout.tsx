import { AppSideBar } from "@/components/app-sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppSideBar>
      <div className="flex flex-1">
        <div className="p-2 md:p-10 border border-pumpkin-200 dark:border-pumpkin-700 bg-pumpkin-50 dark:bg-pumpkin-900 flex flex-col gap-2 flex-1 w-full h-full">
          {children}
        </div>
      </div>
    </AppSideBar>
  );
};

export default DashboardLayout;
