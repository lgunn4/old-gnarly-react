import React, {useState} from "react";
import Card from "../Card";
import './style.css';
import {ButtonGroup, ToggleButton} from "react-bootstrap";

const Paintings = ({ paintings }) => {
    const [filteredPaintings, setFilteredPaintings] = useState(paintings.filter(painting => !painting.sold));
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'For Sale', value: '1' },
        { name: 'Sold', value: '2' },
        { name: 'All', value: '3' },
    ];

    const changeRadio = (radioValue) => {
        setRadioValue(radioValue);

        if (radioValue === '1') {
            setFilteredPaintings(paintings.filter(painting => !painting.sold));
        } else if (radioValue === '2') {
            setFilteredPaintings(paintings.filter(painting => painting.sold));
        } else {
            setFilteredPaintings(paintings);
        }
    };


    return (
    <section>
        <div className="buttonToggle">
        <ButtonGroup toggle>
            {radios.map((radio, idx) => (
                <ToggleButton
                    key={idx}
                    type="radio"
                    variant="dark"
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => changeRadio(e.currentTarget.value)}
                >
                    {radio.name}
                </ToggleButton>
            ))}
        </ButtonGroup>
        </div>
        <br />
        <ul className="list">
            {filteredPaintings.map((painting) => {
                return <Card painting={painting} key={`article__${painting.id}`} />;
            })}
        </ul>
    </section>
  );
};

export default Paintings;
