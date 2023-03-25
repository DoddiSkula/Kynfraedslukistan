import Container from "./container";

export default function Intro() {
  return (
    <Container>
      <section className="">
        <div className="grid max-w-screen-xl py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="text-6xl font-bold mb-10">Kynfræðslukennsla</h1>
            <p className="max-w-2xl text-gray-500 md:text-md lg:text-lg ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              condimentum metus vitae urna laoreet pulvinar. Duis vulputate,
              massa a facilisis.
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex h-72">
            <img src="/images/hero-img.svg" alt="hero" />
          </div>
        </div>
        <div className="container py-14 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2 md:w-full">
              <div className="flex border-2 rounded-xl border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col cursor-pointer  bg-white hover:shadow-lg hover:border-primary hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-primary bg-opacity-5 text-primary flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Kennsluefni
                  </h2>
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a className="mt-3 text-primary inline-flex items-center">
                    Allt kennsluefni
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2 md:w-full">
              <div className="flex border-2 rounded-xl border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col  cursor-pointer  bg-white hover:shadow-lg hover:border-secondary hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-secondary bg-opacity-5 text-secondary flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Verkefni
                  </h2>
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a className="mt-3 text-secondary inline-flex items-center">
                    Öll verkefni
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
