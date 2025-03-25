import React, { useEffect, useRef } from "react";
import "./PortfolioContent.css";

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

function PortfolioContent() {
  const projectRefs = useRef([]);

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
          <div className="portfolioContent-heading1">All</div>
          <div className="portfolioContent-heading1">Apps</div>
          <div className="portfolioContent-heading1">Website</div>
          <div className="portfolioContent-heading1">Seo</div>
        </div>

        <div className="portfolioContent-info ">
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
      </div>
    </div>
  );
}

export default PortfolioContent;
