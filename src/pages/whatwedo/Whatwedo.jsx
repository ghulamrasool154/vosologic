import "./Whatwedo.css";
import { Voslogicimages } from "../../feature/Voslogicimages";
import Faq from "../../components/faq/Faq";
import hss from "../../assets/images/what-22--k.png";
const Whatwedo = () => {
  return (
    <>
      <section className="whatwedo--page">
        <div className="container-xxl">
          <div className="row">
            <div className="col-xxl-5 col-lg-7 col-md-7 col-sm-12">
              <div className="w--page--left">
                <h2 className="main--title--what--">what</h2>
                <h2 className="main--title--w--do">we do</h2>
                <p>
                  From SIP Trunking to Ringless Voicemail Vos Logic offers state
                  of the art telecommunications to companies worldwide!
                </p>
              </div>
            </div>
            <div className="col-xxl-7 col-lg-5">
              <div className="w--page--right--image">
                <img src={hss} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="row automate--section">
            <div className="col-lg-7 col-md-7">
              <div className="content--sect">
                <h3 className="what--we--do---title"> Automated Call QA</h3>
                <p className="what--we--do---discription">
                  Our in house speech to text system mitigates the need to do
                  quality assurance by hand on your calls, our portal enables
                  clients to have their calls from our system or outside systems
                  automatically transcribed and reviewed for quality assurance,
                  if anything out of the ordinary is found the call can
                  automatically be flagged for manual review and an appropriate
                  department or team member is able to rectify the situation
                  from there! Starting at .01/ minute you can qa 1 hour for less
                  than 60 cents!
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-5">
              <div className="img--section">
                <img
                  src={Voslogicimages.automate}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ringless--section">
        <div className="container-xxl">
          <div className="row justify-content-between">
            <div className="col-lg-5 col-md-5">
              <div className="img--section">
                <img src={Voslogicimages.ring} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 col-md-7">
              <div className="content--sect">
                <h2 className="what--we--do---title">Ringless Voicemail</h2>
                <p className="what--we--do---discription">
                  “Ringless” may be a stretch but using two phone calls to leave
                  a pre recorded message into a customers voicemail. One of the
                  unique features of Vos Logic is our ability to detect
                  voicemails faster than our competitors alongside the ability
                  to custom route caller id calls and voicemail calls to two
                  different destinations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="predictive--section">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-7 col-md-7">
              <div className="content--sect">
                <h3 className="what--we--do---title"> Predictive Dialer</h3>
                <p className="what--we--do---discription">
                  Most dialers use old open source technology such as vici dial,
                  we wrote our dialer from scratch using our in house answering
                  machine detection, we’re able to automatically categorize 95%
                  of non human answers! Additionally, we can automatically leave
                  a voicemail to users who do not answer the phone on your
                  behalf with zero agent interference necessary. One of the
                  other great benefits of vos logics predictive dialer is our
                  points of presence with hundreds of servers and servers
                  geographically close to all countries choppy calls and latency
                  issues are a thing of the past!
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-5">
              <div className="img--section">
                <img
                  src={Voslogicimages.predictive}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ivr--section">
        <div className="container-xxl">
          <div className="row justify-content-between">
            <div className="col-lg-5 col-md-5">
              <div className="img--section">
                <img src={Voslogicimages.ivr} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 col-md-7">
              <div className="content--sect">
                <h2 className="what--we--do---title">IVR</h2>
                <p className="what--we--do---discription">
                  Voice broadcasting is an easy process on vos logic from
                  selecting survey audio alongside opt in and opt out options.
                  In addition to automatically utilizing IVR’s vos logics voice
                  broadcasting platform can also leave automated voicemails to
                  users who fail to answer their phone, increasing your contact
                  rates!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="aiboot--section">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-7 col-md-7">
              <div className="content--sect">
                <h3 className="what--we--do---title"> AI Bot</h3>
                <p className="what--we--do---discription">
                  Our in house speech to text and natural language understanding
                  makes our bots the most cost effective on the market, but
                  additionally bridges the gap between man and machine, reducing
                  the need for man power due to state of the art AI offshore
                  openers may become a thing of the past with the ability to
                  handle hundreds of thousands of simultaneous calls.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-5">
              <div className="img--section">
                <img src={Voslogicimages.aribot} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="call--section">
        <div className="container-xxl">
          <div className="row justify-content-between">
            <div className="col-lg-5 col-md-5">
              <div className="img--section">
                <img src={Voslogicimages.called} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 col-md-7">
              <div className="content--sect">
                <h2 className="what--we--do---title">Caller ID Reputation</h2>
                <p className="what--we--do---discription">
                  With caller id becoming a very important role when it comes to
                  out reach, vos logics caller id reputation system makes it
                  easy to monitor and manage your phone numbers and make sure
                  they’re not being flagged by consumers phone companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Faq />
    </>
  );
};

export default Whatwedo;
