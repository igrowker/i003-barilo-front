import { CustomButton } from "@/components/CustomButton";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { RiGroupLine } from "react-icons/ri";
import { Input } from "@/components/ui/input";
import snowImage from "@/assets/images/snow.webp";
import snowImage2 from "@/assets/images/snow2.webp";
import snowImage3 from "@/assets/images/snow3.webp";
import { Link } from "react-router-dom";
import ScrollToTopButton from "./ScrollToTopButton";
import { useTranslation } from 'react-i18next'
import SideNavBar from "./SideNavBar";
import Footer from "./Footer";

export default function LandingComponent() {
  const { t } = useTranslation()
  return (
    <>
    <SideNavBar/>
      <div className="">
        <main className="flex-1">
          <section className="w-full py-12 text-white md:py-24 lg:py-32 xl:py-36 bg-secondary-pink">
            <div className="container px-4 mx-auto md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl font-primary">
                  {t('landing.welcome.title')}
                </h1>
                <p className="mx-auto max-w-[900px] text-md md:text-2xl lg:text-base xl:text-xl font-secondary text-white">
                  {t('landing.welcome.text1')}
                </p>
                <p className="mx-auto max-w-[900px] text-md md:text-2xl lg:text-base xl:text-xl font-secondary text-white">
                {t('landing.welcome.text2')}
                </p>
                <div className="flex space-x-4">
                  <Link to="/login">
                    <CustomButton className="w-full bg-white text-secondary-pink hover:bg-secondary-purple">
                      {t('buttons.landing.login')}
                    </CustomButton>
                  </Link>
                  <Link to="/register">
                    <CustomButton className="text-white bg-transparent border border-white hover:bg-white hover:text-secondary-pink">
                      {t('buttons.landing.register')}
                    </CustomButton>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section
            id="characteristic"
            className="w-full py-12 bg-white md:py-24 lg:py-32"
          >
            <div className="container px-4 mx-auto md:px-6">
              <h2 className="mb-12 text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl text-primary-celeste font-primary">
                {t('landing.characteristics.title')}
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <FaRegPaperPlane className="mb-5 text-3xl text-primary-blue md:text-7xl" />
                  <h3 className="mb-2 text-xl font-bold primary-celeste">
                  {t('landing.characteristics.destination')}
                  </h3>
                  <p className="text-secondary-blue font-secondary">
                  {t('landing.characteristics.paragraphDestination')}
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FaRegCreditCard className="mb-5 text-3xl text-primary-blue md:text-7xl" />
                  <h3 className="mb-2 text-xl font-bold text-primary-celeste">
                    {t('landing.characteristics.plans')}
                  </h3>
                  <p className="text-secondary-blue font-secondary">
                  {t('landing.characteristics.paragraphPlans')}
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <RiGroupLine className="mb-5 text-3xl text-primary-blue md:text-7xl" />
                  <h3 className="mb-2 text-xl font-bold text-primary-celeste">
                  {t('landing.characteristics.groups')}
                  </h3>
                  <p className="text-secondary-blue font-secondary">
                  {t('landing.characteristics.paragraphGroups')}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            id="personalized"
            className="w-full py-12 md:py-24 lg:py-32 bg-secondary-celeste"
          >
            <div className="container px-4 mx-auto md:px-6">
              <h2 className="mb-12 text-3xl font-bold tracking-tighter text-center text-white sm:text-4xl md:text-5xl font-primary">
              {t('landing.customize.title')}
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl font-bold bg-white rounded-full text-primary-purple">
                    1
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                  {t('landing.customize.caption1')}
                  </h3>
                  <p className="text-white font-secondary">
                  {t('landing.customize.paragraph1')}
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl font-bold bg-white rounded-full text-primary-purple">
                    2
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                  {t('landing.customize.caption2')}
                  </h3>
                  <p className="text-white font-secondary">
                  {t('landing.customize.paragraph2')}
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl font-bold bg-white rounded-full text-primary-purple">
                    3
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                  {t('landing.customize.caption3')}
                  </h3>
                  <p className="text-white font-secondary">
                  {t('landing.customize.paragraph3')}
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl font-bold bg-white rounded-full text-primary-purple">
                    4
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                  {t('landing.customize.caption4')}
                  </h3>
                  <p className="text-white font-secondary">
                  {t('landing.customize.paragraph4')}
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl font-bold bg-white rounded-full text-primary-purple">
                    5
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                  {t('landing.customize.caption5')}
                  </h3>
                  <p className="text-white font-secondary">
                  {t('landing.customize.paragraph5')}
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl font-bold bg-white rounded-full text-primary-purple">
                    6
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                  {t('landing.customize.caption6')}
                  </h3>
                  <p className="text-white font-secondary">
                  {t('landing.customize.paragraph6')}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            id="experience"
            className="w-full py-12 bg-white md:py-24 lg:py-32"
          >
            <div className="container px-4 mx-auto md:px-6">
              <h2 className="mb-12 text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl text-primary-celeste font-primary">
                {t('landing.bariloExperience')}
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <img
                  src={snowImage}
                  alt="Grupo esquiando"
                  className="object-cover w-full transition-transform transform rounded-lg shadow-lg h-96 hover:scale-105 hover:shadow-xl"
                />
                <img
                  src={snowImage3}
                  alt="Amigos en la nieve"
                  className="object-cover w-full transition-transform transform rounded-lg shadow-lg h-96 hover:scale-105 hover:shadow-xl"
                />
                <img
                  src={snowImage2}
                  alt="Cartel de Bariloche"
                  className="object-cover w-full mx-auto transition-transform transform rounded-lg shadow-lg h-96 hover:scale-105 hover:shadow-xl md:col-span-2 lg:col-span-1"
                />
              </div>
            </div>
          </section>
          <section
            id="contact"
            className="w-full py-12 md:py-24 lg:py-32 bg-secondary-pink"
          >
            <div className="container px-4 mx-auto md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl font-primary">
                  {t('landing.contactUs.title')}
                </h2>
                <div className="w-full max-w-sm space-y-2">
                  <form className="flex flex-col gap-2 text-left">
                    <label
                      htmlFor="email"
                      className="text-white visually-hidden"
                    >
                      {t('landing.contactUs.label')}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t('landing.contactUs.inputPlaceholder')}
                      className="bg-white font-secondary focus:bg-white"
                    />
                    <CustomButton
                      type="submit"
                      className="w-full mt-3 bg-white text-secondary-pink hover:bg-secondary-purple"
                    >
                      {t('landing.contactUs.button')}
                    </CustomButton>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
        <ScrollToTopButton />
      </div>
      <Footer/>
    </>
  );
}
