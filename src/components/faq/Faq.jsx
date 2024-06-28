import "./Faq.css";
import { Voslogicimages } from "../../feature/Voslogicimages";
import { useState } from "react";
const Faq = () => {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const handelToggle = () => {
    setToggle(!toggle);
    setToggle2(false);
    setToggle3(false);
    setToggle4(false);
  };
  const handelToggle2 = () => {
    setToggle(false);
    setToggle2(!toggle2);
    setToggle3(false);
    setToggle4(false);
  };
  const handelToggle3 = () => {
    setToggle(false);
    setToggle2(false);
    setToggle3(!toggle3);
    setToggle4(false);
  };
  const handelToggle4 = () => {
    setToggle(false);
    setToggle2(false);
    setToggle3(false);
    setToggle4(!toggle4);
  };

  return (
    <section className="faq--page">
      <div className="container-xxl">
        <div className="row">
          <div className="col">
            <h2 className="section---title">Frequently Asked Questions</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="responive----box---">
              {toggle && (
                <div className={"inner--box--"}>
                  <h3>DO YOU HAVE TIERED PRICING OR CUSTOM PLANS? (1) </h3>
                  <p>
                    Absolutely! We provide custom pricing and tiered plans. If
                    you are planning on using Ringba to power your entire
                    business, we’ve got your back.
                  </p>
                </div>
              )}
              {toggle2 && (
                <div className={"inner--box--"}>
                  <h3>DO YOU HAVE TIERED PRICING OR CUSTOM PLANS? (2)</h3>
                  <p>
                    Absolutely! We provide custom pricing and tiered plans. If
                    you are planning on using Ringba to power your entire
                    business, we’ve got your back.
                  </p>
                </div>
              )}
              {toggle3 && (
                <div className={"inner--box--"}>
                  <h3>DO YOU HAVE TIERED PRICING OR CUSTOM PLANS? (3) </h3>
                  <p>
                    Absolutely! We provide custom pricing and tiered plans. If
                    you are planning on using Ringba to power your entire
                    business, we’ve got your back.
                  </p>
                </div>
              )}
              {toggle4 && (
                <div className={"inner--box--"}>
                  <h3>DO YOU HAVE TIERED PRICING OR CUSTOM PLANS? (4)</h3>
                  <p>
                    Absolutely! We provide custom pricing and tiered plans. If
                    you are planning on using Ringba to power your entire
                    business, we’ve got your back.
                  </p>
                </div>
              )}
              <div className="mobile--responsive">
                <img
                  src={Voslogicimages.faqimg}
                  alt="faq"
                  className="img-fluid"
                />

                <div className="mobile--responsive--imges">
                  <img
                    src={Voslogicimages.faq1}
                    alt="faq"
                    className="img-fluid mobile--responsive--1 "
                    onClick={handelToggle}
                  />
                  <img
                    src={Voslogicimages.faq2}
                    alt="faq"
                    className="img-fluid mobile--responsive--2"
                    onClick={handelToggle2}
                  />
                  <img
                    src={Voslogicimages.faq2}
                    alt="faq"
                    className="img-fluid mobile--responsive--3"
                    onClick={handelToggle3}
                  />
                  <img
                    src={Voslogicimages.faq2}
                    alt="faq"
                    className="img-fluid mobile--responsive--4"
                    onClick={handelToggle4}
                  />
                </div>
              </div>
            </div>

            <div className="faq_section">
              <img
                src={Voslogicimages.faqimg}
                alt="faq"
                className="img-fluid"
              />

              <div className={`box--faq--section box--faq--1`}>
                <img
                  src={Voslogicimages.faq1}
                  alt="faq"
                  className="img-fluid"
                  onClick={handelToggle}
                />

                <div className={toggle ? "inner--box" : "inner--box hidden"}>
                  <h3>DO YOU HAVE TIERED PRICING OR CUSTOM PLANS?</h3>
                  <p>
                    Absolutely! We provide custom pricing and tiered plans. If
                    you are planning on using Ringba to power your entire
                    business, we’ve got your back.
                  </p>
                </div>
              </div>
              <div className={`box--faq--section box--faq--2`}>
                <img
                  src={Voslogicimages.faq2}
                  alt="faq"
                  className="img-fluid"
                  onClick={handelToggle2}
                />

                <div className={toggle2 ? "inner--box" : "inner--box hidden"}>
                  <h3>DO YOU HAVE TIERED PRICING OR CUSTOM PLANS?</h3>
                  <p>
                    Absolutely! We provide custom pricing and tiered plans. If
                    you are planning on using Ringba to power your entire
                    business, we’ve got your back.
                  </p>
                </div>
              </div>
              <div className={`box--faq--section box--faq--3`}>
                <img
                  src={Voslogicimages.faq2}
                  alt="faq"
                  className="img-fluid"
                  onClick={handelToggle3}
                />

                <div className={toggle3 ? "inner--box" : "inner--box hidden"}>
                  <h3>DO YOU HAVE TIERED PRICING OR CUSTOM PLANS?</h3>
                  <p>
                    Absolutely! We provide custom pricing and tiered plans. If
                    you are planning on using Ringba to power your entire
                    business, we’ve got your back.
                  </p>
                </div>
              </div>
              <div className={`box--faq--section box--faq--4`}>
                <img
                  src={Voslogicimages.faq2}
                  alt="faq"
                  className="img-fluid"
                  onClick={handelToggle4}
                />

                <div className={toggle4 ? "inner--box" : "inner--box hidden"}>
                  <h3>DO YOU HAVE TIERED PRICING OR CUSTOM PLANS?</h3>
                  <p>
                    Absolutely! We provide custom pricing and tiered plans. If
                    you are planning on using Ringba to power your entire
                    business, we’ve got your back.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
