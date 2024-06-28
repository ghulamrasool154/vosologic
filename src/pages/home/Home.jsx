import React, { useRef, useState } from "react";
import { Voslogicimages } from "../../feature/Voslogicimages";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import HorizontalScroll from "react-scroll-horizontal";
import Reporting from "../../components/reporting/Reporting";

import "./Home.css";

const Home = () => {
  const [isgreen, setIsGreen] = useState(false);
  const videoRef = useRef();
  const child = { width: `55em`, height: `100%` };
  const parent = { width: `80em`, height: `100%` };
  const [video, setVideo] = useState(false);
  const handleVideoPlay = () => {
    setVideo(!video);
    console.log(videoRef);
    videoRef.current.play();
  };
  const handleVideoPause = () => {
    setVideo(!video);
    videoRef.current.pause();
  };
  const handleButton = () => {
    setIsGreen(!isgreen);
  };
  return (
    <>
      <section>
        <div className="main-wrapper">
    
          <section className="home_wrapper">
            <div className="container-xxl">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
                  <div className="propel_your">
                    <h2>
                      Propel your <br />
                      Business with <br />
                      <span className="headings">Volslogic</span>
                    </h2>
                    <p>
                      From SIP Trunking Ringless Voicemail Vos Logic Offers
                      State of the art telecommunictation to{" "}
                      <span className="company_discription">
                        companies worldwid!
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <img
                    src={Voslogicimages.homehero}
                    alt="img"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <section className="easy_config_section_main-wrapper">
            <div className="container-xxl">
              <div className="row configure_sectoion">
                <div className="col-lg-6 col-md-8">
                  <div className="">
                    <h4>
                      Easy Configuration
                      <br />
                      for anyone
                    </h4>
                    <p>
                      Our state of the art User Experience makes managing your
                      Ringless Voicemail and your SIP Trunks easier than ever
                      before!
                    </p>
                    <img
                      src={Voslogicimages.soundwave}
                      alt="soundwave"
                      className="sound_wave"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          </section>
        
          <section>
            <div className="container-xxl">
              <div className="row">
                <div className="col-lg-12">
                  <div className="reporting">
                    <h4>Real-Time Call Management and Reporting</h4>
                    <p>
                      Your time is valuable - never wait again. View, group,
                      filter, sort, manipulate, and export your data instantly
                      at unlimited scale.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                <Reporting/>
                </div>
              </div>
            </div>
          </section>
          <section className="why_choose_voslogic">
            <div className="container-xxl">
              <div className="row choose_voslogic">
                <div className="col-lg-12">
                  <h4>WHY CHOOSE VOSLOGIC?</h4>
                  <p>
                    State of the art Data Centers and Tier 1 Telecommunication
                    providers on our back end make us the most reliable solution
                    for your telecommunication needs.
                  </p>
                </div>
              </div>
            </div>
            <section className="voslogic_tabs_main_wrapper">
            <div className="container-xxl">
              <div className="row tabs_section">
                <div className="col-lg-12 position-relative">
                  <div className="tabs_inner">
                    <div className="">
                      <Tabs>
                        <TabList>
                          <Tab>
                            <div className="text-center ">
                              <img
                                src={Voslogicimages.artboard1}
                                className="img-fluid icon"
                                alt="icon"
                              />
                              <h5>
                                Global <br />
                                Presence
                              </h5>
                            </div>
                          </Tab>
                          <Tab>
                            <div className="text-center">
                              <img
                                src={Voslogicimages.artboard2}
                                className="img-fluid icon"
                                alt="icon"
                              />
                              <h5>
                                Fast & <br />
                                Optimized
                              </h5>
                            </div>
                          </Tab>
                          <Tab>
                            <div className="text-center">
                              <img
                                src={Voslogicimages.artboard3}
                                className="img-fluid icon"
                                alt="icon"
                              />
                              <h5>
                                Api Driven <br />
                                Platform
                              </h5>
                            </div>
                          </Tab>
                        </TabList>
                        <div className="tabs_content_dispcription1"></div>
                        <div className="content_section">
                          <TabPanel>
                            <div className="tabs_content_dispcription">
                              <h2>Global Presence</h2>
                              <p>
                                With access to worldwide routes connecting your
                              </p>
                              <p>calls is a breeze with Vos logic</p>
                            </div>
                          </TabPanel>
                          <TabPanel>
                            <div className="tabs_content_dispcription">
                              <h2>fast & Optimized</h2>
                              <p>
                                With access to worldwide routes connecting your
                              </p>
                              <p>calls is a breeze with Vos logic</p>
                            </div>
                          </TabPanel>
                          <TabPanel>
                            <div className="tabs_content_dispcription">
                              <h2>Api Drven Platfrom </h2>
                              <p>
                                With access to worldwide routes connecting your
                              </p>
                              <p>calls is a breeze with Vos logic</p>
                            </div>
                          </TabPanel>
                        </div>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section className="voslogic_mobile-tabs">
            <div className="container-xxl">
              <div className="row tabs_section2">
                <div className="col-md-12">
                  <Tabs>
                    <TabList>
                      <Tab>GLOBAL PRESENCE</Tab>
                      <Tab>Fast & optimized</Tab>
                      <Tab>Api driven platfrom</Tab>
                    </TabList>
                    <div className="tabs_content_dispcription2"></div>
                    <div className="main_tablet_based_tab_content_wrapper">
                      <TabPanel>
                        <div className="tablet_bases_tab_content">
                          <h2>GLOBAL PRESENCE</h2>
                          <p>With access to worldwide routes connecting your</p>
                          <p>calls is a breeze with Vos logic</p>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="tablet_bases_tab_content">
                          <h2>Fast & optimized</h2>
                          <p>With access to worldwide routes connecting your</p>
                          <p>calls is a breeze with Vos logic</p>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="tablet_bases_tab_content">
                          <h2>Api driven platfrom</h2>
                          <p>With access to worldwide routes connecting your</p>
                          <p>calls is a breeze with Vos logic</p>
                        </div>
                      </TabPanel>
                    </div>
                  </Tabs>
                </div>
           
           
            
      
              </div>
            


            </div>
          </section>
          <section className="vos_difference_Section">
            <div className="container-xxl">
              <div className="row">
                <div className="col-lg-12">
                  <div className="difference_section">
                    <h4>THE VOSLOGIC DIFFERENCE</h4>
                    <p>What sets us apart?</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </section>
          </section>
         
         
          
          <section className="scroll_slider">
            <div className="container-xxl">
              <div className="row difference_section">
                <div className="col-lg-12">
                  <div style={parent} className="parent_section">
                    <HorizontalScroll>
                      <div style={child} className="child_section">
                        <div className="Caro_main_wrapper  d-flex align-items-center">
                          <div className="icon_diff">
                            <img
                              src={Voslogicimages.datadrive}
                              alt="icon"
                              className="img-fluid"
                            />
                          </div>
                          <div className="detail">
                            <h2>Data Driven</h2>
                            <p>
                              We dynamically use outbound call routing to ensure
                              high connectivity rates.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div style={child} className="child_section">
                        <div className="Caro_main_wrapper d-flex align-items-center">
                          <div className="icon_diff">
                            <img
                              src={Voslogicimages.aviability}
                              alt="icon"
                              className="img-fluid"
                            />
                          </div>
                          <div className="detail">
                            <h2>99.999% Availabality </h2>
                            <p>
                              We dynamically use outbound call routing to ensure
                              high connectivity rates.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div style={child} className="child_section">
                        <div className="Caro_main_wrapper d-flex align-items-center">
                          <div className="icon_diff">
                            <img
                              src={Voslogicimages.aviability}
                              alt="icon"
                              className="img-fluid"
                            />
                          </div>
                          <div className="detail">
                            <h2>Data Driven</h2>
                            <p>
                              We dynamically use outbound call routing to ensure
                              high connectivity rates.
                            </p>
                          </div>
                        </div>
                      </div>
                    </HorizontalScroll>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="artifical_real_results">
            <div className="container-xxl">
              <div className="row human_ai_secton">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="artifical_video_section">
                    <h4>
                      Artificial <br /> Intelligence <br /> real results
                    </h4>
                    <p>
                      It’s not science fiction, it’s your competitive edge.
                      Vocodia’s Digital Intelligence Sales Agent (DISA) is an
                      advanced software AI that allows you to automate and
                      streamline your contact center operations
                    </p>
                  </div>
                  <div className="human_ai">
                    <h4>HUMAN OR AI?</h4>
                    <p>
                      Vocodia’s conversational AI is so lifelike that your
                      customers won’t realize they are speaking with a machine.
                      It’s that good.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="video_poster">
                    <video
                      id="video"
                      src="https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4"
                      poster={Voslogicimages.artifical}
                      ref={videoRef}
                    ></video>
                    {video ? (
                      <img
                        src={Voslogicimages.playicon}
                        alt="play icon"
                        onClick={handleVideoPlay}
                        className="img-fluid playicon"
                      />
                    ) : (
                      <img
                        src={Voslogicimages.playicon}
                        alt="pause icon"
                        onClick={handleVideoPause}
                        className="img-fluid playicon pause"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="hear_for_yourself">
            <div className="container-xxl">
              <div className="row reording_section">
                <div className="col-lg-12">
                  <div className="here_for_yourself_section">
                    <div className="your_self_inner_section">
                    <button
                      className={`button${isgreen ? "green" : "red"}`}
                      onClick={handleButton}
                    >
                      <li>Real Recording</li>
                    </button>
                    <h4>HEAR FOR YOURSELF.</h4>
                    <p className="yourself_discription">
                      The beauty of DISA’s conversational AI is how easy it is
                      to interact with. Most people don’t even realize they are
                      speaking to a machine. In fact, you may have already
                      spoken to DISA!
                    </p>
                    <p className="hello_bob">
                      “Hello Bob! How are you doing this afternoon?”
                    </p>
                    <img
                      src={Voslogicimages.soundwave}
                      alt="sound waves"
                      className="img-fluid hearing_waves_last_section"
                    />
                    <p className="hello_bob_recorded">
                      {" "}
                      “Hello Bob! How are you doing this afternoon?”
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

   
        </div>
      </section>
    </>
  );
};
export default Home;
