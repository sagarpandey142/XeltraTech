import React, { useEffect, useRef, useState } from "react";
import "./PortfolioContent.css";
import "./webportfolio.css";
import "./webseo.css";

import AnimatedContent from "../SingleComponents/AnimatedContent";

import masonpe1 from "./images/masonpe1.png";
import masonpe2 from "./images/masonpe2.png";
import masonpe3 from "./images/masonpe3.png";

import green1 from "./images/green1.png";
import green2 from "./images/green2.png";
import green3 from "./images/green3.png";

import rigpah1 from "./images/rigpah1.png";
import rigpah2 from "./images/rigpah2.png";
import rigpah3 from "./images/rigpah3.png";

import takeaway1 from "./images/takeaway1.png";
import takeaway2 from "./images/takeaway2.png";
import takeaway3 from "./images/takeaway3.png";

import oriental1 from "./images/oriental1.png";
import oriental2 from "./images/oriental2.png";
import oriental3 from "./images/oriental3.png";

import dogcity1 from "./images/dogcity1.png";
import dogcity2 from "./images/dogcity2.png";
import dogcity3 from "./images/dogcity3.png";

import icap1 from "./images/icap1.png";
import icap2 from "./images/icap2.png";
import icap3 from "./images/icap3.png";

import hirepay1 from "./images/hirepay1.png";
import hirepay2 from "./images/hirepay2.png";
import hirepay3 from "./images/hirepay3.png";

import ics1 from "./images/ics1.png";
import ics2 from "./images/ics2.png";
import ics3 from "./images/ics3.png";

import gurbani1 from "./images/gurbani1.png";
import gurbani2 from "./images/gurbani2.png";
import gurbani3 from "./images/gurbani3.png";

import Pick1 from "./images/Pick1.png";
import Pick2 from "./images/Pick2.png";
import Pick3 from "./images/Pick3.png";

import talk1 from "./images/talk1.png";
import talk2 from "./images/talk2.png";
import talk3 from "./images/talk3.png";

import pfy1 from "./images/pfy1.png";
import pfy2 from "./images/pfy2.png";
import pfy3 from "./images/pfy3.png";

// website portfolio photos start
import laptop from "./images/laptop.png";
import e2go from "./images/e2go.png";
import surphyweb from "./images/surphyweb.png";
import rigpahweb from "./images/rigpahweb.png";
import greenweb from "./images/greenweb.png";
import uneedwatweb from "./images/uneedwatweb.png";
import watchesweb from "./images/watchesweb.png";
import fruitweb from "./images/fruitweb.png";

function PortfolioContent() {
  const projectRefs = useRef([]);
  const [activeCategory, setActiveCategory] = useState("All"); // Default is "All"

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    projectRefs.current.forEach((project) => {
      if (project) observer.observe(project);
    });

    return () => {
      projectRefs.current.forEach((project) => {
        if (project) observer.unobserve(project);
      });
    };
  }, []);
  return (
    <div className="portfolioContent-body">
      <div className="portfolioContent-box">
        <div className="portfolioContent-heading">
          {["All", "Apps", "Website", "Seo"].map((category) => (
            <div
              key={category}
              className={`portfolioContent-heading1 ${
                activeCategory === category ? "active-category" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>
        {/* apps portfolio start */}
        <div
  className={`portfolioContent-info ${
    activeCategory === "Seo" || activeCategory === "Website" ? "!hidden" : "visible"
  }`}
>
          <AnimatedContent>
            <div
              ref={(el) => projectRefs.current.push(el)}
              className="portfolioContent-project-body-masonpe hover:bg-[#9a9af177] w-screen transition-colors duration-300"
            >
              <div className="portfolio-project-box-image" loading="lazy">
                <img className="portfolio-project-box-image1" src={masonpe1} />
                <img className="portfolio-project-box-image2" src={masonpe2} />
                <img className="portfolio-project-box-image3" src={masonpe3} />
              </div>
              <div className="portfolio-project-box-desc">
                <div className="portfolio-project-box-desc-heading">
                  Mason pe.
                </div>
                <div className="portfolio-project-box-desc-para">
                  Lorem ipsum dolor sit amet consectetur. Pellentesque lorem
                  nulla sed eget et maecenas diam. In at ligula lorem diam sem
                  duis. Consectetur enim nam faucibus lacus. At tempor placerat
                  sapien egestas.Lorem ipsum dolor sit amet consectetur.
                  Pellentesque lorem nulla sed eget et maecenas diam. In at
                  ligula lorem diam sem duis. Consectetur enim nam faucibus
                  lacus. At tempor placerat sapien egestas.Lorem ipsum dolor sit
                  amet consectetur. Pellentesque lorem nulla sed eget et
                  maecenas diam. In at ligula lorem diam sem duis. Consectetur
                  enim nam faucibus lacus. At tempor placerat sapien egestas.
                  ipsum dolor sit amet consectetur. Pellentesque lorem nulla sed
                  eget et maecenas diam. In at ligula lorem diam sem duis.
                  Consectetur enim nam faucibus lacus. At tempor placerat sapien
                  egestas.
                </div>
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent>
            <div
              ref={(el) => projectRefs.current.push(el)}
              className="portfolioContent-project-body-greenchilli hover:bg-[#9af19a77] w-screen transition-colors duration-300"
            >
              <div className="portfolio-project-box-image" loading="lazy">
                <img className="portfolio-project-box-image1" src={green1} />
                <img className="portfolio-project-box-image2" src={green2} />
                <img className="portfolio-project-box-image3" src={green3} />
              </div>
              <div className="portfolio-project-box-desc">
                <div className="portfolio-project-box-desc-heading">
                  Green Chili
                </div>
                <div className="portfolio-project-box-desc-para">
                  The GreenChili was founded long back in Canada. With
                  innovative thoughts, dream of serving Indian food to Canadians
                  and Indians residing there saw light of the day. The name
                  GreenChili translates quite literally as sophisticated
                  flavours and this is the ethos behind the innovative menu.
                  With an emphasis on refined yet creative Indian cuisine, the
                  menu incorporates both traditional classic favourites and
                  original new dishes that apply eastern flavours with a western
                  twist. Coming to our introduction the food we serve speaks for
                  ourselves. The variety of food is so vast that if you come
                  everyday and order a different cuisine you can have 365 days
                  occupied. Speaking of food We offer creative dishes from
                  various regions of India Every item on our menu is prepared
                  with authentic Indian herbs and spice and prepared in our
                  kitchen with extreme care to ensure that you are served
                  consistently good meals.
                </div>
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent>
            <div
              ref={(el) => projectRefs.current.push(el)}
              className="portfolioContent-project-body-rigpah hover:bg-[#9af1c577] w-screen transition-colors duration-300"
            >
              <div className="portfolio-project-box-image" loading="lazy">
                <img className="portfolio-project-box-image1" src={rigpah1} />
                <img className="portfolio-project-box-image2" src={rigpah2} />
                <img className="portfolio-project-box-image3" src={rigpah3} />
              </div>
              <div className="portfolio-project-box-desc">
                <div className="portfolio-project-box-desc-heading">Rigpah</div>
                <div className="portfolio-project-box-desc-para">
                  Rigpah is a gateway to a contemporary way of learning. By
                  using a virtual learning environment (VLE), learning is not
                  limited to one location, but rather can be taken on the go to
                  be utilized anywhere. The services provided on the website
                  create a fun and interactive learning experience; which in
                  turn helps boost the productivity of the end-user. With
                  Rigpah, people can learn anywhere and anytime. The 21st
                  century is here and we are living it now; time is becoming
                  more scarce as everyone’s time is consumed in their day to day
                  life’s schedule not allowing many to take their learning curve
                  a step further. Rigpah is a way to solve this problem;
                  allowing our clients to learn at their own pace.
                </div>
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent>
            <div
              ref={(el) => projectRefs.current.push(el)}
              className="portfolioContent-project-body-takeaway hover:bg-[#baf19a77] w-screen transition-colors duration-300"
            >
              <div className="portfolio-project-box-image" loading="lazy">
                <img className="portfolio-project-box-image1" src={takeaway1} />
                <img className="portfolio-project-box-image2" src={takeaway2} />
                <img className="portfolio-project-box-image3" src={takeaway3} />
              </div>
              <div className="portfolio-project-box-desc">
                <div className="portfolio-project-box-desc-heading">
                  Takeway Knight
                </div>
                <div className="portfolio-project-box-desc-para">
                  Takeaway Knight: The food ordering app with great discounts
                  and a Eco-Friendly delivery service. No Pollution - No
                  Emission – Save Your Future When you use the Takeaway Knight
                  food ordering app , these are the amazing benefit’s you get
                  over any other food ordering appsTakeaway knight is committed
                  to reducing carbon emission in towns and cities we all love,
                  work and live in. By using takeaway knight app you are helping
                  to reduce the pollution in the environment you and your family
                  live in. LET’S GO POLLUTION FREE – EVERY STEP YOU TAKE BEGINS
                  A FUTURE JOURNEY! By changing the apps you use on a regular
                  basis that’s damaging the environment you can help save your
                  future. Apps like Deliveroo, Just eat and UberEATS who deliver
                  millions of food every day and night using thousands of petrol
                  and diesel vehicles.
                </div>
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent>
            <div
              ref={(el) => projectRefs.current.push(el)}
              className="portfolioContent-project-body-oriental hover:bg-[#9af19a77] w-screen transition-colors duration-300"
            >
              <div className="portfolio-project-box-image" loading="lazy">
                <img className="portfolio-project-box-image1" src={oriental1} />
                <img className="portfolio-project-box-image2" src={oriental2} />
                <img className="portfolio-project-box-image3" src={oriental3} />
              </div>
              <div className="portfolio-project-box-desc">
                <div className="portfolio-project-box-desc-heading">
                  Oriental CPV
                </div>
                <div className="portfolio-project-box-desc-para">
                  Contact Point Verification is an application developed for
                  staff and Public, 1)To do KYC verification of proprietorship
                  accounts. Application is designed in such a way, it captures
                  all the mandatory fields along with Geo co-ordinates and
                  photographs of the location. 2) After filling up the required
                  details , user submit the application , which will be send to
                  branch email id in PDF format. 3)Branch shall take printout of
                  the visit record and taken signature of visiting official.
                  This will be kept with account opening form and used as second
                  KYC document for proprietorship firm"
                </div>
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent>
            <div
              ref={(el) => projectRefs.current.push(el)}
              className="portfolioContent-project-body-dogcity hover:bg-[#9af1c577] w-screen transition-colors duration-300"
            >
              <div className="portfolio-project-box-image" loading="lazy">
                <img className="portfolio-project-box-image1" src={dogcity1} />
                <img className="portfolio-project-box-image2" src={dogcity2} />
                <img className="portfolio-project-box-image3" src={dogcity3} />
              </div>
              <div className="portfolio-project-box-desc">
                <div className="portfolio-project-box-desc-heading">
                  DogCity
                </div>
                <div className="portfolio-project-box-desc-para">
                  DogCity is a must-have app for dog owners in the UK,
                  especially in London, looking for dog-friendly places and
                  activities. It helps users discover cafes, restaurants, parks,
                  and shops where their furry friends are welcome, making it
                  easier to enjoy the city together. The app also connects dog
                  owners with a like-minded community, providing updates on
                  local events, pet services, and the latest news on dog care.
                  Whether you're searching for the perfect brunch spot with your
                  pup or looking to meet other dog lovers, DogCity makes every
                  outing more enjoyable and stress-free.
                </div>
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent>
            <div
              ref={(el) => projectRefs.current.push(el)}
              className="portfolioContent-project-body-icap hover:bg-[#9ae0f177] w-screen transition-colors duration-300"
            >
              <div className="portfolio-project-box-image" loading="lazy">
                <img className="portfolio-project-box-image1" src={icap1} />
                <img className="portfolio-project-box-image2" src={icap2} />
                <img className="portfolio-project-box-image3" src={icap3} />
              </div>
              <div className="portfolio-project-box-desc">
                <div className="portfolio-project-box-desc-heading">ICap</div>
                <div className="portfolio-project-box-desc-para">
                  The app enables users to scan and discover nearby Bluetooth
                  Low Energy (BLE), iBeacon, and Eddystone devices, providing
                  essential information such as UUID and RSSI. It allows
                  browsing of services and characteristics, as well as
                  registering for notifications and indications. Additionally,
                  the app supports advanced firmware library algorithms,
                  including motion-sensor data fusion, activity recognition, and
                  pedometer functionality. Built on the BlueST SDK library and
                  implementing the BlueST protocol, it ensures seamless data
                  export via Bluetooth® Low Energy, making it a powerful tool
                  for BLE device interaction and analysis.
                </div>
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent>
            <div
              ref={(el) => projectRefs.current.push(el)}
              className="portfolioContent-project-body-hirepay hover:bg-[#a5a5a577] w-screen transition-colors duration-300"
            >
              <div className="portfolio-project-box-image" loading="lazy">
                <img className="portfolio-project-box-image1" src={hirepay1} />
                <img className="portfolio-project-box-image2" src={hirepay2} />
                <img className="portfolio-project-box-image3" src={hirepay3} />
              </div>
              <div className="portfolio-project-box-desc">
                <div className="portfolio-project-box-desc-heading">
                  HirePay
                </div>
                <div className="portfolio-project-box-desc-para">
                  Hire pay was created to connect everyday people in the
                  community that need a service completed with a person who
                  needs on the spot cash . Hire pay is worked by a team of men
                  and women all of whom are related or have been friends for a
                  long time. We thought that it would be great to be able to
                  provide a platform for that struggling father or mother that
                  just got paid but still didn't make enough money to pay the
                  rent, to be able to make that last $100 he needed in a matter
                  of a few hours to pay his rent . This way he doesn't have to
                  go out to get a second job, between working , having only one
                  car , picking the kids up from school, taking them to sports,
                  life just doesn't allow him to get a second job. Hire pay
                  allows him to make money on his schedule or free time all
                  while helping someone in the community getting their chores
                  done or providing a service . The app is for everyone over 18
                  years of age to use , or with parental consent. Its free to
                  download, and completely free to use .
                </div>
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent>
            <div
              ref={(el) => projectRefs.current.push(el)}
              className="portfolioContent-project-body-ics hover:bg-[#31519677] w-screen transition-colors duration-300"
            >
              <div className="portfolio-project-box-image" loading="lazy">
                <img className="portfolio-project-box-image1" src={ics1} />
                <img className="portfolio-project-box-image2" src={ics2} />
                <img className="portfolio-project-box-image3" src={ics3} />
              </div>
              <div className="portfolio-project-box-desc">
                <div className="portfolio-project-box-desc-heading">
                  I Can Stay
                </div>
                <div className="portfolio-project-box-desc-para">
                  not a regular hotel or a vacation booking site. We wish to
                  fulfil aspirations of millions of Indians to stay in a Luxury
                  Hotel. We provide a unique offer for stays in branded luxury
                  hotels, across India. It's a unique concept, launched for the
                  first time, anywhere in the world. We offer "One India One
                  Price" for staying in a Luxury Hotel any time of the year
                  without seasonal jumps in hotel prices. No comparison|No
                  bargain hunting| No compromise!
                </div>
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent>
            <div
              ref={(el) => projectRefs.current.push(el)}
              className="portfolioContent-project-body-gurbani hover:bg-[#dd672277] w-screen transition-colors duration-300"
            >
              <div className="portfolio-project-box-image" loading="lazy">
                <img className="portfolio-project-box-image1" src={gurbani1} />
                <img className="portfolio-project-box-image2" src={gurbani2} />
                <img className="portfolio-project-box-image3" src={gurbani3} />
              </div>
              <div className="portfolio-project-box-desc">
                <div className="portfolio-project-box-desc-heading">
                  I Can Stay
                </div>
                <div className="portfolio-project-box-desc-para">
                  Gurbani Nitnem iPhone app allows users to listen to and read
                  morning and evening Sikh prayers with ease. Featuring a simple
                  start screen, it lets users quickly select any prayer in
                  Gurmukhi, English, or Devanagari. The app supports offline
                  audio playback, background listening, and a convenient volume
                  control slider. Users can also customize their reading
                  experience by adjusting font size and choosing from a
                  beautiful selection of color themes, making it a seamless and
                  personalized way to engage with Gurbani.
                </div>
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent>
            <div
              ref={(el) => projectRefs.current.push(el)}
              className="portfolioContent-project-body-pick hover:bg-[#ebc2ab77] w-screen transition-colors duration-300"
            >
              <div className="portfolio-project-box-image" loading="lazy">
                <img className="portfolio-project-box-image1" src={Pick1} />
                <img className="portfolio-project-box-image2" src={Pick2} />
                <img className="portfolio-project-box-image3" src={Pick3} />
              </div>
              <div className="portfolio-project-box-desc">
                <div className="portfolio-project-box-desc-heading">
                  Pick Daily
                </div>
                <div className="portfolio-project-box-desc-para">
                  Development in Progress
                </div>
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent>
            <div
              ref={(el) => projectRefs.current.push(el)}
              className="portfolioContent-project-body-talk hover:bg-[#3546e25b] w-screen transition-colors duration-300"
            >
              <div className="portfolio-project-box-image" loading="lazy">
                <img className="portfolio-project-box-image1" src={talk1} />
                <img className="portfolio-project-box-image2" src={talk2} />
                <img className="portfolio-project-box-image3" src={talk3} />
              </div>
              <div className="portfolio-project-box-desc">
                <div className="portfolio-project-box-desc-heading">
                  Talk Mia
                </div>
                <div className="portfolio-project-box-desc-para">
                  Development in Progress
                </div>
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent>
            <div
              ref={(el) => projectRefs.current.push(el)}
              className="portfolioContent-project-body-pfy hover:bg-[#0000005b] w-screen transition-colors duration-300"
            >
              <div className="portfolio-project-box-image" loading="lazy">
                <img className="portfolio-project-box-image1" src={pfy1} />
                <img className="portfolio-project-box-image2" src={pfy2} />
                <img className="portfolio-project-box-image3" src={pfy3} />
              </div>
              <div className="portfolio-project-box-desc">
                <div className="portfolio-project-box-desc-heading">
                  PFY :: Photo Film for You
                </div>
                <div className="portfolio-project-box-desc-para">
                  Development in Progress
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>
        {/* apps portfolio end */}

        {/* website portfolio start */}
        <div
  className={`webportfolio-body ${
    activeCategory === "Seo" || activeCategory === "Apps" ? "!hidden" : "visible"
  }`}
>
          <div className="webportfolio-box-e2go">
            <div className="webportfolio-box-e2go-image">
              <img src={laptop} />
              <div className="webportfolio-box-e2go-image-scroll">
                <img src={e2go} />
              </div>
            </div>
            <div className="webportfolio-box-e2go-content">
              <div className="webportfolio-box-e2go-content-heading">E2Go</div>
              <div className="webportfolio-box-e2go-content-para">
                Express Logistic & Transport
              </div>
              <div className="webportfolio-box-e2go-content-desc">
                E2GO is the newest section in Outsourcing Service provided,
                branded, and licensed under Thaumazo Solutions Philippines (TSP)
                founded in the City of Malolos, Philippines established in 2009
                with duly registered Sales Office in Makati City Philippines
                under TSP. Specializing in creating the best platform for
                services under Logistics and Courier Services that creates value
                proposition to emerging industries of E-Commerce. Service is
                provided with the highest value for money shipper and recipient.
                This most ideal approach provides best definition for Cost
                Efficient and yet Effective Service. The heart of the partners
                defines the way they value the effort of start-up entrepreneurs
                doing E-Commerce Business of this generation.
              </div>
            </div>
          </div>

          <div className="webportfolio-box-surphy">
            <div className="webportfolio-box-e2go-image">
              <img src={laptop} />
              <div className="webportfolio-box-e2go-image-scroll">
                <img src={surphyweb} />
              </div>
            </div>
            <div className="webportfolio-box-e2go-content">
              <div className="webportfolio-box-e2go-content-heading">
                Surphy
              </div>
              <div className="webportfolio-box-e2go-content-para">
                Hospital and Medical with Appointment Booking.
              </div>
              <div className="webportfolio-box-e2go-content-desc">
                Surphy provides a common platform for both healthcare seekers
                and healthcare providers which allow free flow of information.
                Be it simply a search for a general physician for the common
                cold or it is a search of a hospital for the planning of any
                elective surgery, Surphy help you by providing all the necessary
                information needed to plan any type of treatment before actually
                undergoing that treatment at the place of your choice. Surphy
                provides you the best possible price of most of the healthcare
                services available in the country. Surphy helps you to compare
                different hospitals in terms of facilities available, the team
                of doctors, the pricing of different treatment packages, etc so
                that you can take a well-informed decision.
              </div>
            </div>
          </div>

          <div className="webportfolio-box-rigpah">
            <div className="webportfolio-box-e2go-image">
              <img src={laptop} />
              <div className="webportfolio-box-e2go-image-scroll">
                <img src={rigpahweb} />
              </div>
            </div>
            <div className="webportfolio-box-e2go-content">
              <div className="webportfolio-box-e2go-content-heading">
                Rigpah
              </div>
              <div className="webportfolio-box-e2go-content-para">
                Gateway To Knowledge
              </div>
              <div className="webportfolio-box-e2go-content-desc">
                Rigpah is a gateway to a contemporary way of learning. By using
                a virtual learning environment (VLE), learning is not limited to
                one location, but rather can be taken on the go to be utilized
                anywhere. The services provided on the website create a fun and
                interactive learning experience; which in turn helps boost the
                productivity of the end-user. With Rigpah, people can learn
                anywhere and anytime. The 21st century is here and we are living
                it now; time is becoming more scarce as everyone’s time is
                consumed in their day to day life’s schedule not allowing many
                to take their learning curve a step further. Rigpah is a way to
                solve this problem; allowing our clients to learn at their own
                pace.  
              </div>
            </div>
          </div>

          <div className="webportfolio-box-greenchili">
            <div className="webportfolio-box-e2go-image">
              <img src={laptop} />
              <div className="webportfolio-box-e2go-image-scroll">
                <img src={greenweb} />
              </div>
            </div>
            <div className="webportfolio-box-e2go-content">
              <div className="webportfolio-box-e2go-content-heading">
                Green Chili
              </div>
              <div className="webportfolio-box-e2go-content-para">
                Food Order and Booking
              </div>
              <div className="webportfolio-box-e2go-content-desc">
                The GreenChili was founded long back in Canada. With innovative
                thoughts, dream of serving Indian food to Canadians and Indians
                residing there saw light of the day. The name GreenChili
                translates quite literally as sophisticated flavours and this is
                the ethos behind the innovative menu. With an emphasis on
                refined yet creative Indian cuisine, the menu incorporates both
                traditional classic favourites and original new dishes that
                apply eastern flavours with a western twist. Coming to our
                introduction the food we serve speaks for ourselves. The variety
                of food is so vast that if you come everyday and order a
                different cuisine you can have 365 days occupied. Speaking of
                food We offer creative dishes from various regions of India
                Every item on our menu is prepared with authentic Indian herbs
                and spice and prepared in our kitchen with extreme care to
                ensure that you are served consistently good meals  
              </div>
            </div>
          </div>

          <div className="webportfolio-box-uneedwat">
            <div className="webportfolio-box-e2go-image">
              <img src={laptop} />
              <div className="webportfolio-box-e2go-image-scroll">
                <img src={uneedwatweb} />
              </div>
            </div>
            <div className="webportfolio-box-e2go-content">
              <div className="webportfolio-box-e2go-content-heading">
                Uneedwat
              </div>
              <div className="webportfolio-box-e2go-content-para">
                Ecommerce | Online Shoping
              </div>
              <div className="webportfolio-box-e2go-content-desc">
                Development in Progress
              </div>
            </div>
          </div>

          <div className="webportfolio-box-watches">
            <div className="webportfolio-box-e2go-image">
              <img src={laptop} />
              <div className="webportfolio-box-e2go-image-scroll">
                <img src={watchesweb} />
              </div>
            </div>
            <div className="webportfolio-box-e2go-content">
              <div className="webportfolio-box-e2go-content-heading">
                Best Quality Watches
              </div>
              <div className="webportfolio-box-e2go-content-para">Watches</div>
              <div className="webportfolio-box-e2go-content-desc">
                Development under process
              </div>
            </div>
          </div>

          <div className="webportfolio-box-fruit">
            <div className="webportfolio-box-e2go-image">
              <img src={laptop} />
              <div className="webportfolio-box-e2go-image-scroll">
                <img src={fruitweb} />
              </div>
            </div>
            <div className="webportfolio-box-e2go-content">
              <div className="webportfolio-box-e2go-content-heading">
                Forbidden Fruit
              </div>
              <div className="webportfolio-box-e2go-content-para">
                18+ Social Site
              </div>
              <div className="webportfolio-box-e2go-content-desc">
                Development under process
              </div>
            </div>
          </div>
        </div>
        {/* website portfolio end */}
        {/* seo portfolio start */}
        <div
  className={`seoportfolio-body ${
    activeCategory === "Seo" || activeCategory === "All" ? "visible" : "!hidden"
  }`}
>

            <div className="seoportfolio-box">
              <div className="seoportfolio-box-top">www.vocalcure.com (USA - Google.com)</div>
              <div className="seoportfolio-box-bottom">
                <div className="seoportfolio-box-bottom-left">
                  <div className="seoportfolio-box-bottom-left-header">Keywords</div>
                  <div className="seoportfolio-box-bottom-left-content">
                    <div className="seoportfolio-box-bottom-left-content-desc">superior vocal health</div>
                    <div className="seoportfolio-box-bottom-left-content-desc">vocal immune</div>
                    <div className="seoportfolio-box-bottom-left-content-desc">superior vocal health sinus cleanse</div>
                    <div className="seoportfolio-box-bottom-left-content-desc">olive leaf extract sinus</div>
                    <div className="seoportfolio-box-bottom-left-content-desc">olive leaf extract for sinus infection</div>
                    <div className="seoportfolio-box-bottom-left-content-desc">superior vocal health vocal rescue</div>
                    <div className="seoportfolio-box-bottom-left-content-desc">throat saver spray</div>
                  </div>
                </div>
                <div className="seoportfolio-box-bottom-right">
                  <div className="seoportfolio-box-bottom-right-header">Rank</div>
                  <div className="seoportfolio-box-bottom-right-content">
                    <div className="seoportfolio-box-bottom-right-content-desc">1</div>
                    <div className="seoportfolio-box-bottom-right-content-desc">1</div>
                    <div className="seoportfolio-box-bottom-right-content-desc">3</div>
                    <div className="seoportfolio-box-bottom-right-content-desc">3</div>
                    <div className="seoportfolio-box-bottom-right-content-desc">4</div>
                    <div className="seoportfolio-box-bottom-right-content-desc">4</div>
                    <div className="seoportfolio-box-bottom-right-content-desc">6</div>
                  </div>

                </div>
              </div>
            </div>

            <div className="seoportfolio-box">
              <div className="seoportfolio-box-top">www.annietiang.com ( Singapore - Google.com.sg )</div>
              <div className="seoportfolio-box-bottom">
                <div className="seoportfolio-box-bottom-left">
                  <div className="seoportfolio-box-bottom-left-header">Keywords</div>
                  <div className="seoportfolio-box-bottom-left-content">
                    <div className="seoportfolio-box-bottom-left-content-desc">TCM Slip Disc Singapore</div>
                    <div className="seoportfolio-box-bottom-left-content-desc">tcm women's health singaporee</div>
                    <div className="seoportfolio-box-bottom-left-content-desc">Best Cupping in Singapore</div>
                    <div className="seoportfolio-box-bottom-left-content-desc">best tcm tuina singapore</div>
                    <div className="seoportfolio-box-bottom-left-content-desc">TCM Gynecology Singapore</div>
                    <div className="seoportfolio-box-bottom-left-content-desc">Best Chinese Doctor in Singapore</div>
                    <div className="seoportfolio-box-bottom-left-content-desc">Best TCM in Singapore</div>
                  </div>
                </div>
                <div className="seoportfolio-box-bottom-right">
                  <div className="seoportfolio-box-bottom-right-header">Rank</div>
                  <div className="seoportfolio-box-bottom-right-content">
                    <div className="seoportfolio-box-bottom-right-content-desc">2</div>
                    <div className="seoportfolio-box-bottom-right-content-desc">3</div>
                    <div className="seoportfolio-box-bottom-right-content-desc">6</div>
                    <div className="seoportfolio-box-bottom-right-content-desc">7</div>
                    <div className="seoportfolio-box-bottom-right-content-desc">8</div>
                    <div className="seoportfolio-box-bottom-right-content-desc">8</div>
                    <div className="seoportfolio-box-bottom-right-content-desc">8</div>
                  </div>

                </div>
              </div>
            </div>

            <div className="seoportfolio-box">
              <div className="seoportfolio-box-top">www.annietiang.com ( Singapore - Google.com.sg )</div>
              <div className="seoportfolio-box-bottom">
                <div className="seoportfolio-box-bottom-left">
                  <div className="seoportfolio-box-bottom-left-header">Keywords</div>
                  <div className="seoportfolio-box-bottom-left-content">
                    <div className="seoportfolio-box-bottom-left-content-desc">新加坡最佳中医诊所</div>
                    <div className="seoportfolio-box-bottom-left-content-desc">新加坡最好中医</div>
                    <div className="seoportfolio-box-bottom-left-content-desc">中医整脊新加坡</div>
                    <div className="seoportfolio-box-bottom-left-content-desc">不孕症新加坡</div>
                    <div className="seoportfolio-box-bottom-left-content-desc">中医减肥新加坡</div>
                  </div>
                </div>
                <div className="seoportfolio-box-bottom-right">
                  <div className="seoportfolio-box-bottom-right-header">Rank</div>
                  <div className="seoportfolio-box-bottom-right-content">
                    <div className="seoportfolio-box-bottom-right-content-desc">2</div>
                    <div className="seoportfolio-box-bottom-right-content-desc">3</div>
                    <div className="seoportfolio-box-bottom-right-content-desc">6</div>
                    <div className="seoportfolio-box-bottom-right-content-desc">7</div>
                    <div className="seoportfolio-box-bottom-right-content-desc">8</div>
                  </div>

                </div>
              </div>
            </div>

            <div className="seoportfolio-box">
              <div className="seoportfolio-box-top">www.cleosbarkery.com ( USA - Google.com )</div>
              <div className="seoportfolio-box-bottom">
                <div className="seoportfolio-box-bottom-left">
                  <div className="seoportfolio-box-bottom-left-header">Keywords</div>
                  <div className="seoportfolio-box-bottom-left-content">
                    <div className="seoportfolio-box-bottom-left-content-desc">Dog Birthday Cake NYC</div>
                    <div className="seoportfolio-box-bottom-left-content-desc">Dog Cakes NYC</div>
                    <div className="seoportfolio-box-bottom-left-content-desc">Birthday Cake for Dogs NYC</div>
                    <div className="seoportfolio-box-bottom-left-content-desc">Dog Cupcakes NYC</div>
                    <div className="seoportfolio-box-bottom-left-content-desc">Dog Bakery New York</div>
                    <div className="seoportfolio-box-bottom-left-content-desc">Dog Bakery Rochester NY</div>
                  </div>
                </div>
                <div className="seoportfolio-box-bottom-right">
                  <div className="seoportfolio-box-bottom-right-header">Rank</div>
                  <div className="seoportfolio-box-bottom-right-content">
                    <div className="seoportfolio-box-bottom-right-content-desc">5</div>
                    <div className="seoportfolio-box-bottom-right-content-desc">5</div>
                    <div className="seoportfolio-box-bottom-right-content-desc">5</div>
                    <div className="seoportfolio-box-bottom-right-content-desc">7</div>
                    <div className="seoportfolio-box-bottom-right-content-desc">7</div>
                    <div className="seoportfolio-box-bottom-right-content-desc">10</div>
                  </div>

                </div>
              </div>
            </div>

            <div className="seoportfolio-box">
              <div className="seoportfolio-box-top">www.gabehoward.com ( USA - Google.com )</div>
              <div className="seoportfolio-box-bottom">
                <div className="seoportfolio-box-bottom-left">
                  <div className="seoportfolio-box-bottom-left-header">Keywords</div>
                  <div className="seoportfolio-box-bottom-left-content">
                    <div className="seoportfolio-box-bottom-left-content-desc">Mental Illness Activist</div>
                    <div className="seoportfolio-box-bottom-left-content-desc">Mental Health Activist</div>
                    <div className="seoportfolio-box-bottom-left-content-desc">Mental Illness Writer</div>
                  </div>
                </div>
                <div className="seoportfolio-box-bottom-right">
                  <div className="seoportfolio-box-bottom-right-header">Rank</div>
                  <div className="seoportfolio-box-bottom-right-content">
                    <div className="seoportfolio-box-bottom-right-content-desc">4</div>
                    <div className="seoportfolio-box-bottom-right-content-desc">6</div>
                    <div className="seoportfolio-box-bottom-right-content-desc">20</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="seoportfolio-box">
              <div className="seoportfolio-box-top">www.topmark.top ( Italy - Google.it )</div>
              <div className="seoportfolio-box-bottom">
                <div className="seoportfolio-box-bottom-left">
                  <div className="seoportfolio-box-bottom-left-header">Keywords</div>
                  <div className="seoportfolio-box-bottom-left-content">
                    <div className="seoportfolio-box-bottom-left-content-desc">Progettazione Packaging Milano</div>
                    <div className="seoportfolio-box-bottom-left-content-desc">Realizzazione packaging Milano</div>
                    <div className="seoportfolio-box-bottom-left-content-desc">Studio grafico Napoli</div>
                    <div className="seoportfolio-box-bottom-left-content-desc">Studio grafico Bari</div>
                  </div>
                </div>
                <div className="seoportfolio-box-bottom-right">
                  <div className="seoportfolio-box-bottom-right-header">Rank</div>
                  <div className="seoportfolio-box-bottom-right-content">
                    <div className="seoportfolio-box-bottom-right-content-desc">4</div>
                    <div className="seoportfolio-box-bottom-right-content-desc">5</div>
                    <div className="seoportfolio-box-bottom-right-content-desc">7</div>
                    <div className="seoportfolio-box-bottom-right-content-desc">20</div>
                  </div>
                </div>
              </div>
            </div>

            

        </div>
        {/* seo portfolio end */}
      </div>
    </div>
    
  );
}

export default PortfolioContent;



