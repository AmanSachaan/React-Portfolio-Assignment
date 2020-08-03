import React from "react";


const Text = ({ text}) => {
  return (
    <a href={text}>
      {text}
    </a>
  );
};

export default Text;
