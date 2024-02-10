import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

import SignOutButton from "~/components/SignOutButton";
import { getServerAuthSession } from "~/server/auth";

const TopMenu = async () => {
  const session = await getServerAuthSession();

  return (
    <div className="bg-background flex h-14 w-full items-center justify-end gap-8 rounded-md border px-8 py-2">
      <Popover>
        <PopoverTrigger>
          <Avatar>
            <AvatarImage src={session.user.image as string | undefined} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-21">
          <SignOutButton />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default TopMenu;
