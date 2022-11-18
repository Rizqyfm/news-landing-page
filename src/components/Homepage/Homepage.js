import React from "react";
import "../index.css";
import hero from "../assets/images/image-web-3-desktop.jpg";
import heroPhone from "../assets/images/image-web-3-mobile.jpg";
import computer from "../assets/images/image-retro-pcs.jpg";
import keyboard from "../assets/images/image-top-laptops.jpg";
import game from "../assets/images/image-gaming-growth.jpg";

function Homepage() {
  return (
    <main className="wrapper">
      <section className="upperSection">
        <section className="leftUpper">
          <img className="heroImg" src={hero} alt="web 3"></img>
          <img className="heroPhone" src={heroPhone} alt="web 3"></img>
          <article className="headline">
            <h1 className="headlineTitle">The Bright Future of Web 3.0?</h1>
            <section className="textContent">
              <p className="text">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button type="button" className="cta">
                READ MORE
              </button>
            </section>
          </article>
        </section>
        <section className="rightUpper">
          <section className="rightContent">
            <h2 className="subHeadline">New</h2>
            <article className="sideNews">
              <h3 className="smallHeadline">Hydrogen VS Electric Cars</h3>
              <p className="sideText">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </article>
            <hr className="line"></hr>
            <article className="sideNews sideNewsBtm">
              <h3 className="smallHeadline">The Downsides of AI</h3>
              <p className="sideText">
                Artistry What are the possible adverse effects of on-demand AI
                image generation?
              </p>
            </article>
            <hr className="line"></hr>
            <article className="sideNewsBtm">
              <h3 className="smallHeadline">Is VC Funding Drying Up?</h3>
              <p className="sideText">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </article>
          </section>
        </section>
      </section>

      <section className="lowerSection">
        <article className="news">
          <img className="smallImg" src={computer} alt=""></img>
          <div className="newsContent">
            <h3 className="smallerHeadline">01</h3>
            <h4 className="tinyHeadline">Reviving Retro PCs</h4>
            <p className="smallText">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </article>
        <article className="news">
          <img className="smallImg" src={keyboard} alt=""></img>
          <div className="newsContent">
            <h3 className="smallerHeadline">02</h3>
            <h4 className="tinyHeadline">Top 10 Laptops of 2022</h4>
            <p className="smallText">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </article>
        <article className="news">
          <img className="smallImg" src={game} alt=""></img>
          <div className="newsContent">
            <h3 className="smallerHeadline">03</h3>
            <h4 className="tinyHeadline">The Growth of Gaming</h4>
            <p className="smallText">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Homepage;
