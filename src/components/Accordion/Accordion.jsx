import P from 'prop-types';
import * as Styled from './styles';
import React, { useState, useRef } from 'react';
import { BiUpArrow, BiDownArrow } from 'react-icons/bi';

export const Accordion = ({
  title,
  total,
  minutes,
  totalMinutes,
  subTitle,
}) => {
  const checkBox = useRef();
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const handleClick = () => (!open ? setOpen(true) : setOpen(false));
  const handleChange = () => {
    if (checkBox.current.checked) {
      setProgress(progress + 1);
    } else {
      setProgress(progress - 1);
    }
  };
  return (
    <Styled.Container>
      <div onClick={handleClick} className="accordion-container">
        <div className="accordion-text">
          <h3>{title}</h3>
          <div className="accordion-progress">
            <p>
              {progress}/{total} | {totalMinutes}m
            </p>
          </div>
        </div>
        <div onClick={handleClick} className="accordion-arrow">
          {!open ? <BiDownArrow /> : <BiUpArrow />}
        </div>
      </div>
      <div
        onClick={() => alert('hugo')}
        className={!open ? 'accordion-content-disable' : 'accordion-content'}
      >
        <input ref={checkBox} onChange={handleChange} type="checkbox" />
        <div className="accordion-content-text">
          <h5>{subTitle}</h5>
          <div className="accordion-progress">
            <p>{minutes}m</p>
          </div>
        </div>
      </div>
    </Styled.Container>
  );
};

Accordion.propTypes = {
  subTitle: P.string.isRequired,
  title: P.string.isRequired,
  progress: P.string.isRequired,
  total: P.number.isRequired,
  minutes: P.number.isRequired,
  totalMinutes: P.number.isRequired,
};
