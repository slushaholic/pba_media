

export default function About() {
  return (
    <>
      <div id="team" className="section center dark:bg-gray-800 flex flex-col ">
        <div className="container xl:max-w-6xl mx-auto px-4">
          {/* section header */}
          <header className="text-center mx-auto mb-12">
            <h1 className="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">
              <span className="font-light">PBA</span> Team
            </h1>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 100 60"
              style={{ margin: "0 auto", height: 35 }}
              xmlSpace="preserve"
            >
              <circle
                cx="50.1"
                cy="30.4"
                r={5}
                className="stroke-primary"
                style={{ fill: "transparent", strokeWidth: 2, strokeMiterlimit: 10 }}
              />
              <line
                x1="55.1"
                y1="30.4"
                x2={100}
                y2="30.4"
                className="stroke-primary"
                style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
              />
              <line
                x1="45.1"
                y1="30.4"
                x2={0}
                y2="30.4"
                className="stroke-primary"
                style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
              />
            </svg>
          </header>
          {/* end section header */}
          {/* row */}
          <div className="flex flex-wrap flex-row -mx-4 justify-center">
            <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
              <div
                className="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationName: "fadeInUp"
                }}
              >
                {/* team block */}
                <div className="relative overflow-hidden px-6">
                  <img
                    src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png"
                    className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale"
                    alt="title image"
                  />
                </div>
                <div className="pt-6 text-center">
                  <p className="text-lg leading-normal font-bold mb-1">Thomas Sibert</p>
                  <p className="text-gray-500 leading-relaxed font-light">
                    Team Lead
                  </p>
                </div>
              </div>
              {/* end team block */}
            </div>
            <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
              {/* team block */}
              <div
                className="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp"
                }}
              >
                <div className="relative overflow-hidden px-6">
                  <img
                    src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar3.png"
                    className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale"
                    alt="title image"
                  />
                </div>
                <div className="pt-6 text-center">
                  <p className="text-lg leading-normal font-bold mb-1">Joshua Wise</p>
                  <p className="text-gray-500 leading-relaxed font-light">
                    Client Side
                  </p>
                </div>
              </div>
              {/* end team block */}
            </div>
            <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
              {/* team block */}
              <div
                className="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp"
                }}
              >
                <div className="relative overflow-hidden px-6">
                  <img
                    src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar2.png"
                    className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale"
                    alt="title image"
                  />
                </div>
                <div className="pt-6 text-center">
                  <p className="text-lg leading-normal font-bold mb-1">Gilbert Pelealu</p>
                  <p className="text-gray-500 leading-relaxed font-light">
                    Full Stack Dev
                  </p>
                </div>
              </div>
              {/* end team block */}
            </div>
            <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
              {/* team block */}
              <div
                className="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".5s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.5s",
                  animationName: "fadeInUp"
                }}
              >
                <div className="relative overflow-hidden px-6">
                  <img
                    src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar4.png"
                    className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale"
                    alt="title image"
                  />
                </div>
                <div className="pt-6 text-center">
                  <p className="text-lg leading-normal font-bold mb-1">Ethan Weldy</p>
                  <p className="text-gray-500 leading-relaxed font-light">
                    Database
                  </p>
                </div>
              </div>
              {/* end team block */}
            </div>
          </div>
          {/* end row */}
        </div>
      </div>

    </>
  )
}