import React from "react";
import Card from "../Card";
import './style.css';

const Paintings = ({ paintings }) => {
  return (
    <section>
        <ul className="list">
            {paintings.map((painting, i) => {
                return <Card painting={painting} key={`article__${painting.id}`} />;
            })}
        </ul>
    </section>
  );
};

export default Paintings;
