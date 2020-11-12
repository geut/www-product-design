import React, { Component, Fragment } from "react";

import { name, url, description } from "../site.json";
import Meta from "../components/meta";
import Navigation from "../components/navigation";
import Hero from "../components/hero";
import Intro from "../components/intro";
//import Contributors from "../components/contributors";
import Sponsors from "../components/sponsors";
import Footer from "../components/footer";

class Index extends Component {
  render() {
    const { posts } = this.props;

    //const snippets = posts.filter(inCategory("snippets"));

    return (
      <Fragment>
        <Meta title={name} url={url} description={description} />
        <div className="container">
          <header>
            <Navigation />
            <Hero />
          </header>
          <Intro snippets={[]} />

          <Sponsors />
          <Footer gutter />
          <style jsx>{`
            .container {
              --main-color: var(--geut500);
              --main-contrast-color: var(--grey100);
              background: radial-gradient(
                ellipse at 50% 0%,
                var(--geut-blue),
                var(--geut-purple)
              );
            }
          `}</style>
        </div>
      </Fragment>
    );
  }
}

export default Index;
