import "./Compareus.css";
import Slidercustomforcompare from "./Slidercustomforcompare/Slidercustomforcompare";
import Faq from "../../components/faq/Faq";
import { Voslogicimages } from "../../feature/Voslogicimages";
const Compareus = () => {
  return (
    <>
      <section className="compare--us--bg">
        <section className="Compareus--page">
          <div className="container-xxl p-0">
            <div className="row">
              <div className="col-12">
                <h2 className="section---title--comp  compare---tittleeeee------01">
                  COMPARE US WHERE WE STAND{" "}
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Slidercustomforcompare />
              </div>
            </div>
          </div>
        </section>
        <section className="compare--us---bggg">
          <div className="container-xxl p-0">
            <div className="row">
              <div className="col">
                <div className="overlay---compare--us"></div>
              </div>
            </div>
          </div>
        </section>
        <div className="container-xxl companiesss--logo">
          <div className="row  companiesss--wrapperr">
            <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
              <img src={Voslogicimages.brigth} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <img src={Voslogicimages.vocodia} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <img
                src={Voslogicimages.callmarker}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <img
                src={Voslogicimages.loogolarge}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row companiesss--wrapperr--2">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <span className="icon---comp">
                <i className="fa-solid fa-check"></i>
              </span>
            </div>
            <div className="col-lg-3  col-md-4 col-sm-6 col-12">
              <span className="icon---comp">
                <i className="fa-solid fa-check"></i>
              </span>
            </div>
            <div className="col-lg-3  col-md-4 col-sm-6 col-12">
              <span className="icon---comp">
                <i className="fa-solid fa-check"></i>
              </span>
            </div>
            <div className="col-lg-3  col-md-4 col-sm-6 col-12">
              <span className="icon---comp">
                <i className="fa-solid fa-check"></i>
              </span>
            </div>
          </div>
        </div>
      </section>
      <Faq />
    </>
  );
};

export default Compareus;
