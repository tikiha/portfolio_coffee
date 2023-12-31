import MainSwiper from "@/components/MainSwiper/MainSwiper";
import StickyContainer from "@/components/home/StickyContainer";
import OurServices from "@/components/home/OurServices";
import AboutUs from "@/components/home/AboutUs";
import News from "@/components/home/News";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="flex items-end justify-end mt-52 h-fit focus-in-expand max-md:mt-20">
        <div className="flex lg:items-end max-lg:flex-col pr-[10%] ">
          <h1 className="text-h2 font-medium lg:max-xl:text-5xl/normal tracking-wider font-gothic">
            すべては至福の
            <br />
            一杯のために。
          </h1>
          <span className="md:text-sm text-xs font-mont lg:-translate-y-1/4 ">
            ALL FOR
            <br />A BLISS CUP OF COFFEE
          </span>
        </div>
      </div>

      <MainSwiper className="md:mt-20 mt-10" />
      <StickyContainer className="md:mt-20 mt-10" />
      <OurServices className="mt-20" />
      <AboutUs className="" />
      <News className="mt-20" />
      <Footer className="mt-20" />
    </main>
  );
}
