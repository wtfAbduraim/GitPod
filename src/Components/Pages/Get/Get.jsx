import "../Remo/Remo.scss";
import "./Get.scss";
import Img1 from "../../Image/Get-1.svg";
import Img2 from "../../Image/Get-2.svg";
import Img3 from "../../Image/Get-3.svg";
import Img4 from "../../Image/Get-4.svg";


function Get() {
  return (
    <section className="get">
      <div className="container_2">
        <h3 className="remo__heading">Get started now</h3>

        <ul className="get__list">
          <li className="get__item">
            <h4 className="get__heading">Connect Git repository</h4>
            <p className="get__text">
              Select a Git provider to start with an existing project from any
              Git context.
            </p>
            <button className="get__btn">
              <img src={Img1} alt="logo" width={28} height={28} /> Continue with
              GitLab
            </button>{" "}
            <br />
            <button className="get__btn btn_2">
              <img src={Img2} alt="logo" width={28} height={28} /> Continue with
              GitHub
            </button>{" "}
            <br />
            <button className="get__btn btn_3">
              <img src={Img3} alt="logo" width={28} height={28} /> Continue with
              Bitbucket
            </button>
            <p className="get__text_2">
              Or prefix any GitLab, GitHub or Bitbucket URL with
            </p>
            <a href="#" className="get__end">
              gitpod.io/#
            </a>
          </li>

          <li className="get__item info_2">
            <h4 className="get__heading">Launch an example workspace</h4>
            <p className="get__text">Dive into one of our example workspaces</p>

            <div className="get__info">
              <img className="get__img" src={Img4} alt="" />
              <p className="get__nick">Node or TypeScript</p>
              <button className="get__buttons">Launch workspace</button>
            </div>

            <div className="get__info">
              <img className="get__img" src={Img4} alt="" />
              <p className="get__nick">Python</p>
              <button className="get__buttons">Launch workspace</button>
            </div>

            <div className="get__info">
              <img className="get__img" src={Img4} alt="" />
              <p className="get__nick">Go</p>
              <button className="get__buttons">Launch workspace</button>
            </div>

            <div className="get__info">
              <img className="get__img" src={Img4} alt="" />
              <p className="get__nick">Rust</p>
              <button className="get__buttons">Launch workspace</button>
            </div>

            <div className="get__info">
              <img className="get__img" src={Img4} alt="" />
              <p className="get__nick">Java</p>
              <button className="get__buttons">Launch workspace</button>
            </div>

            <div className="get__info">
              <img className="get__img" src={Img4} alt="" />
              <p className="get__nick">Svelte</p>
              <button className="get__buttons">Launch workspace</button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Get;
