import "boxicons";

import { IconPlus } from "@tabler/icons-react";

function Home() {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center p-2 overflow-hidden">
        <div className="overflow-hidden relative w-18 h-9 space-x-3 px-2 py-5 flex items-center justify-between rounded-full bg-[#434343] rounded-7 transition-all ease-out duration-350 cursor-pointer select-none">
          <div className="w-8 h-8 bg-gray-200 rounded-full">
            <img
              src="src/assets/1.png"
              alt="Profile"
              className="w-full h-full rounded-full  object-cover"
            />
          </div>
          <div className="w-8 h-8 bg-green-500 flex items-center justify-center rounded-full">
            <IconPlus className="h-5 w-5 text-neutral-500 dark:text-neutral-300 hover:animate-spin" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
