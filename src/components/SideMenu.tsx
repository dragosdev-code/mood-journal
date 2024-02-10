import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

const SideMenu = () => {
  return (
    <menu className="flex h-full w-52 flex-col items-center justify-between rounded-md border">
      <div className="flex w-full flex-col items-center">
        <span className="text-primary my-8 text-xl font-bold">LOGO</span>

        <div className="text-foreground mt-8 flex w-11/12 flex-col space-y-10">
          <Button variant="outline">
            <Link href="/analytics">Analytics</Link>
          </Button>
          <Button variant="outline">
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <Button variant="outline">
            <Link href="/reports">Reports</Link>
          </Button>
        </div>
      </div>
      <div className="my-8">
        <ThemeToggle />
      </div>
    </menu>
  );
};

export default SideMenu;
