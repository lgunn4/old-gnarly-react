import React from "react";
import Card from "../Card";

const Paintings = ({ paintings }) => {
    console.log(paintings);
  return (
    <div>
        <ul>
            {paintings.map((painting, i) => {
                return <Card painting={painting} key={`article__${painting.id}`} />;
            })}
        </ul>
      </div>
  );
};

export default Paintings;
