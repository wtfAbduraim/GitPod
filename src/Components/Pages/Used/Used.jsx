import "./Used.scss";
import "../Remo/Remo.scss";
import User1 from "../../Image/Used-user1.png";
import User2 from "../../Image/Used-user2.png";
import User3 from "../../Image/Used-user3.png";
import Brend1 from "../../Image/brend-1.svg";
import Brend2 from "../../Image/brend-2.svg";
import Brend3 from "../../Image/brend-3.svg";
import Brend4 from "../../Image/brend-4.svg";
import Brend5 from "../../Image/brend-5.svg";
import Brend6 from "../../Image/brend-6.svg";
import Brend7 from "../../Image/brend-7.svg";
import Brend8 from "../../Image/brend-8.svg";
import Brend9 from "../../Image/brend-9.svg";
import Brend10 from "../../Image/brend-10.svg";
import Brend11 from "../../Image/brend-11.svg";
import Brend12 from "../../Image/brend-12.svg";

function Dev() {
  return (
    <section className="used">
      <div className="container_2">
        <h3 className="remo__heading">Used by 400,000+ developers.</h3>

        <ul className="used__list">
          <li className="used__item">
            <h5 className="used__heading">GitPod is incredibly cool.</h5>
            <p className="used__text">
              In my opinion, this is a big step in open source software
              contribution. I'm excited to see where we go from here.
            </p>
            <div className="used__flex">
              <img src={User1} alt="user" width={48} height={48} />
              <div className="used__flex-2">
                <h4 className="used__nick">Ben Halpern</h4>
                <p className="used__comment">
                  Creator and Co-founder{" "}
                  <span className="used__span">@forem</span> and{" "}
                  <span className="used__span">@ThePracticalDev</span>
                </p>
              </div>
            </div>
          </li>

          <li className="used__item">
            <p className="used__text">
              Look at any PR (pull request) in a full coding environment where
              you can edit, build, and test the PR code, by just prepending
              "gitpod.io#" to the PR URL. Super useful for reviewing/testing
              stuff without having to check it out locally!
            </p>
            <div className="used__flex">
              <img src={User2} alt="user" width={48} height={48} />
              <div className="used__flex-2">
                <h4 className="used__nick">Michael Friedrich</h4>
                <p className="used__comment">
                  Developer Evangelist{" "}
                  <span className="used__span">@GitLab</span>
                </p>
              </div>
            </div>
          </li>

          <li className="used__item">
            <p className="used__text">
              Let's say we were overwhelmed how smooth @gitpod workspaces
              creation & own Docker image for workspaces worked.
            </p>
            <h5 className="used__heading">
              Plus, installing @code extensions from the store and integrating
              @gitlab CI. That blew my mind entirely, and that is hard ;
            </h5>
            <div className="used__flex">
              <img src={User3} alt="user" width={48} height={48} />
              <div className="used__flex-2">
                <h4 className="used__nick">Julius Volz</h4>
                <p className="used__comment">
                  Creator <span className="used__span">@PrometheusIO</span>
                </p>
              </div>
            </div>
          </li>

          <li className="used__item">
            <p className="used__text">
              Let's say we were overwhelmed how smooth @gitpod workspaces
              creation & own Docker image for workspaces worked.
            </p>
            <h5 className="used__heading">
              Plus, installing @code extensions from the store and integrating
              @gitlab CI. That blew my mind entirely, and that is hard ;
            </h5>
            <div className="used__flex">
              <img src={User3} alt="user" width={48} height={48} />
              <div className="used__flex-2">
                <h4 className="used__nick">Julius Volz</h4>
                <p className="used__comment">
                  Creator <span className="used__span">@PrometheusIO</span>
                </p>
              </div>
            </div>
          </li>
        </ul>

        <ul className="used__inner">
          <li className="used__brend">
            <img src={Brend1} alt="brend" width={76} height={23} />
          </li>

          <li className="used__brend">
            <img src={Brend2} alt="brend" width={76} height={23} />
          </li>

          <li className="used__brend">
            <img src={Brend3} alt="brend" width={76} height={23} />
          </li>

          <li className="used__brend">
            <img src={Brend4} alt="brend" width={76} height={23} />
          </li>

          <li className="used__brend">
            <img src={Brend5} alt="brend" width={76} height={23} />
          </li>

          <li className="used__brend">
            <img src={Brend6} alt="brend" width={76} height={23} />
          </li>

          <li className="used__brend">
            <img src={Brend7} alt="brend" width={76} height={23} />
          </li>

          <li className="used__brend">
            <img src={Brend8} alt="brend" width={76} height={23} />
          </li>

          <li className="used__brend">
            <img src={Brend9} alt="brend" width={76} height={23} />
          </li>

          <li className="used__brend">
            <img src={Brend10} alt="brend" width={76} height={23} />
          </li>

          <li className="used__brend">
            <img src={Brend11} alt="brend" width={76} height={23} />
          </li>

          <li className="used__brend">
            <img src={Brend12} alt="brend" width={76} height={23} />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Dev;
