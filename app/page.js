import { MobNav, TabNav } from "@/components";
import {
  LeftNavigation,
  MainSection,
  MobileMainSection,
  RightSection,
  TopSection,
} from "@/sections";

export default function Home() {
  return (
    <>
      <div className="hidden lg:block">
        <Desktop />
      </div>
      <div className="hidden lg:hidden sm:block">
        <Tablet />
      </div>
      <div className="lg:hidden md:hidden sm:hidden">
        <Mobile />
      </div>
    </>
  );
}

function Mobile() {
  return (
    <div className="flex flex-col bg-back p-6 gap-3 w-full h-screen ">
      <div className=" w-full">
        <MobNav />
        <MobileMainSection />
      </div>
    </div>
  );
}

function Tablet() {
  return (
    <div className="flex flex-row bg-back p-6 gap-3 w-full h-screen ">
      <div className=" w-28">
        <LeftNavigation />
      </div>
      <div className=" w-full">
        <TabNav />
        <MainSection />
      </div>
    </div>
  );
}

function Desktop() {
  return (
    <div className="flex flex-row bg-back p-6 gap-3 w-full h-screen ">
      <div className=" w-28">
        <LeftNavigation />
      </div>
      <div className=" w-full">
        <TopSection />
        <div className="flex flex-row gap-2">
          <div className="w-full">
            <MainSection />
          </div>
          <div className="w-80">
            <RightSection />
          </div>
        </div>
      </div>
    </div>
  );
}
