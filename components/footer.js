import React, { Component } from "react";
import Link from "nextein/link";

import { Anchor } from "elems";

import Github from "./icons/github";
import Npm from "./icons/npm";
import Twitter from "./icons/twitter";

export default class Footer extends Component {
  render() {
    const { children, gutter = false } = this.props;
    return (
      <footer className="columns">
        {children}
        <div className="info rows">
          <div>
            <div className="brand">YOUR PRODUCT LOGO</div>
            <div className="copyright">
              Copyright &copy; 2020 - {new Date().getFullYear()} GEUT
            </div>
          </div>
          <div className="social rows">
            <Link href="https://twitter.com/geutstudio">
              <a target="_blank" rel="noopener noreferrer">
                <Twitter width="19" alt="Twitter" />
              </a>
            </Link>
            <Link href="https://www.npmjs.com/package/GEUT_PRODUCT">
              <a target="_blank" rel="noopener noreferrer">
                <Npm width="35" style={{ marginTop: "5px" }} alt="npm" />
              </a>
            </Link>
          </div>
        </div>
        <div className="built">
          Built with <span>♥︎</span> by{" "}
          <Anchor href="https://github.com/geut/your_product">
            /<span>GEUT</span>
          </Anchor>
        </div>
        <style jsx>{`
          footer {
            ${gutter ? `padding: 0 calc(var(--spacing) * 4);` : ""}
            padding-top: calc(var(--spacing) * 6);
            min-height: 30vh;
            color: var(--main-color);
            justify-content: flex-end;
          }

          footer :global(svg) {
            fill: var(--main-color);
            margin: 0 var(--spacing);
          }

          .info {
            justify-content: space-between;
            min-height: 10vh;
            align-items: flex-start;
          }

          .brand {
            margin-left: -5px;
            font-size: 1.5em;
            font-weight: bold;
          }

          .copyright {
            font-size: 0.9em;
            line-height: 2em;
          }

          .social {
            align-items: center;
          }

          .built {
            align-self: center;
            padding: calc(var(--spacing) * 3);
            font-size: 0.85em;
            text-align: center;
          }

          .built span {
            font-weight: bold;
            color: var(--action-color);
          }
        `}</style>
      </footer>
    );
  }
}
