import React from "react";
import "./index.css";
import hero from "./assets/images/image-web-3-desktop.jpg";
import computer from "./assets/images/image-retro-pcs.jpg";
import keyboard from "./assets/images/image-top-laptops.jpg";
import game from "./assets/images/image-gaming-growth.jpg";

function Homepage() {
  return (
    <main className="wrapper">
      <section className="upperSection">
        <section className="leftUpper">
          <img className="heroImg" src={hero} alt="web 3"></img>
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
          <h2 className="subHeadline">New</h2>
          <article className="news">
            <h3 className="smallHeadline">Hydrogen VS Electric Cars</h3>
            <p className="textContent">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </article>
          <article className="news">
            <h3 className="smallHeadline">The Downsides of AI</h3>
            <p className="textContent">
              Artistry What are the possible adverse effects of on-demand AI
              image generation?{" "}
            </p>
          </article>
          <article className="news">
            <h3 className="smallHeadline">Is VC Funding Drying Up?</h3>
            <p className="textContent">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </article>
        </section>
      </section>

      <section className="lowerSection">
        <article className="news">
          <img className="logo" src={computer} alt=""></img>
          <h3 className="smallHeadline">01</h3>
          <h4 className="tinyHeadline">Reviving Retro PCs</h4>
          <p className="textContent">
            What happens when old PCs are given modern upgrades?
          </p>
        </article>
        <article className="news">
          <img className="logo" src={keyboard} alt=""></img>
          <h3 className="smallHeadline">02</h3>
          <h4 className="tinyHeadline">Top 10 Laptops of 2022</h4>
          <p className="textContent">
            Our best picks for various needs and budgets.
          </p>
        </article>
        <article className="news">
          <img className="logo" src={game} alt=""></img>
          <h3 className="smallHeadline">03</h3>
          <h4 className="tinyHeadline">The Growth of Gaming</h4>
          <p className="textContent">
            How the pandemic has sparked fresh opportunities.
          </p>
        </article>
      </section>
    </main>
  );
}

export default Homepage;
