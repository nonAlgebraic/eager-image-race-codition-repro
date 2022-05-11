import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

// markup
const IndexPage = () => {
  /**
   * set up a state-updating button, to provide proof that the page as a whole
   * is not stalled despite the 50K divs, and that the image placeholder bug is real.
   */
  const [rand, setRand] = React.useState(Math.random());

  return (
    <>
      <StaticImage
        loading="eager"
        src="../images/icon.png"
        placeholder="blurred"
      />
      <button onClick={() => setRand(Math.random())}>
        if the page is fine, clicking me will change this number: {rand}{" "}
      </button>
      {Array(50000)
        .fill(null)
        .map(() => (
          <div />
        ))}
    </>
  );
};

export default IndexPage;
