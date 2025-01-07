import React from 'react';
import './index.css';
import App from './App';
import styled from "styled-components";
import { FcCalendar } from "react-icons/fc";
import { FaLocationDot } from "react-icons/fa6";
import { FcAlarmClock } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import PropTypes from 'prop-types';

const DivInfo = styled.div`
width:400px;
background-color:#fbe996;
border:2px solid orange;
margin:auto;
display:flex;
flex-direction:column;
`

export const Event = ({name, start, end, location, speaker}) => (
 <>
<DivInfo>
  <h2>{name}</h2>
  <p><FaLocationDot /> {location}</p>
  <p><FcBusinessman /> {speaker}</p>
  <p><FcCalendar /> {start}</p>
  <p><FcAlarmClock /> {end}</p>
 </DivInfo>
</>
)
Event.propTypes = {
  name: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
};

