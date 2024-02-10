import SideMenu from "~/components/SideMenu";
import TopMenu from "~/components/TopMenu";

const PageLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-secondary flex h-full w-full gap-5">
      <SideMenu />
      <div className="flex w-full flex-col">
        <TopMenu />
        <div className="mx-auto h-full flex-1">{children}</div>
      </div>
    </div>
  );
};

export default PageLayout;
