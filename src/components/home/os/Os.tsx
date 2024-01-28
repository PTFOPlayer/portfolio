import React from "react";
import "./os.scss";

export default function Os() {
  const [isTuxJumping, setTuxJumping] = React.useState(false);
  const [isWindowsGlitch, setWindowsGlitch] = React.useState(false);

  return (
    <>
      <div className="os">
        <h1>
          Why
          <p
            className="linux"
            onMouseEnter={() => {
              setTuxJumping(true);
            }}
            onMouseLeave={() => {
              setTuxJumping(false);
            }}
          >
            {isTuxJumping ? (
              <i className="fab fa-linux jump" />
            ) : (
              <i className="fab fa-linux" />
            )}
            Linux
          </p>
          over
          <p
            className="windows"
            onMouseEnter={() => {
              setWindowsGlitch(true);
            }}
            onMouseLeave={() => {
              setWindowsGlitch(false);
            }}
          >
            {isWindowsGlitch ? (
              <>
                <i className="fa-brands fa-windows glitch" />
                <span className="glitch">Windows</span>
              </>
            ) : (
              <>
                <i className="fa-brands fa-windows" />
                <>Windows</>
              </>
            )}
          </p>
          ?
        </h1>
        <p>Explanation why I choose linux over windows for programming </p>
      </div>
      <div className="osexp">
        <p>
          To put it quickly, Linux is simply more stable. When developing an
          app, stability is critical for me, and when my system randomly throws
          a blue screen of death when an app crashes it is just not a good
          system for developers. Okay, linux may have some problems like gpu
          drivers issues (going deeper into that later) but it is still much
          more stalbe than Windows. Windows instability has preaty simple root,
          when you are developing something proprietary for something
          proprietary you just can't make it work 100% stable. But with Linux,
          when you make something open source or even proprietary you can make
          it 100% stalbe.
        </p>
        <br />
        <p>
          Going deeper into OS choice, why <p className="fedora">Fedora</p>?
          Because I wanted something that had a high level of hardware
          compatibility and a large package repository. DNF has a lot of
          packages available, is fast and Delta RPM saves some download time
          when doing large updates. I ditched nvidia GPU's entierly so now I can
          fully enjoy modern wayland compositors that Fedora offers by default.
        </p>
      </div>
    </>
  );
}
