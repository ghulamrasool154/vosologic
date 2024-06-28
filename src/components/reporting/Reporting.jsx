import "./Reporting.css";
import { Voslogicimages } from "../../feature/Voslogicimages";
import { useState } from "react";
const Reporting = () => {
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
                  <div className="titleNdate">
                    <h4>Reporting</h4>
                  </div>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <div className="titleNdate">
                            <h4>The campaign</h4>
                            <p className="mb-0">date 12,2018</p>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          This is the first item's accordion body. It is shown
                          by default, until the collapse plugin adds
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <div className="titleNdate">
                            <h4>The campaign</h4>
                            <p className="mb-0">date 12,2018</p>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          This is the second item's accordion body. It is hidden
                          by default, until the collapse plugin
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <div className="titleNdate">
                            <h4>The campaign</h4>
                            <p className="mb-0">date 12,2018</p>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          This is the third item's accordion body. It is hidden
                          by default, until the collapse plugin
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <div className="titleNdate">
                    <h4>Reporting</h4>
                  </div>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <div className="titleNdate">
                            <h4>The campaign</h4>
                            <p className="mb-0">date 12,2018</p>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          This is the first item's accordion body. It is shown
                          by default, until the collapse plugin adds
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <div className="titleNdate">
                            <h4>The campaign</h4>
                            <p className="mb-0">date 12,2018</p>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          This is the second item's accordion body. It is hidden
                          by default, until the collapse plugin
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <div className="titleNdate">
                            <h4>The campaign</h4>
                            <p className="mb-0">date 12,2018</p>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          This is the third item's accordion body. It is hidden
                          by default, until the collapse plugin
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <div className="titleNdate">
                    <h4>Reporting</h4>
                  </div>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <div className="titleNdate">
                            <h4>The campaign</h4>
                            <p className="mb-0">date 12,2018</p>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          This is the first item's accordion body. It is shown
                          by default, until the collapse plugin adds
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <div className="titleNdate">
                            <h4>The campaign</h4>
                            <p className="mb-0">date 12,2018</p>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          This is the second item's accordion body. It is hidden
                          by default, until the collapse plugin
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <div className="titleNdate">
                            <h4>The campaign</h4>
                            <p className="mb-0">date 12,2018</p>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          This is the third item's accordion body. It is hidden
                          by default, until the collapse plugin
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <div className="titleNdate">
                    <h4>Reporting</h4>
                  </div>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <div className="titleNdate">
                            <h4>The campaign</h4>
                            <p className="mb-0">date 12,2018</p>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          This is the first item's accordion body. It is shown
                          by default, until the collapse plugin adds
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <div className="titleNdate">
                            <h4>The campaign</h4>
                            <p className="mb-0">date 12,2018</p>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          This is the second item's accordion body. It is hidden
                          by default, until the collapse plugin
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <div className="titleNdate">
                            <h4>The campaign</h4>
                            <p className="mb-0">date 12,2018</p>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          This is the third item's accordion body. It is hidden
                          by default, until the collapse plugin
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reporting;
