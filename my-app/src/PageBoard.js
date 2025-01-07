import { Event } from "./index.js"
import styled from "styled-components";
const MainText = styled.div`
background-color:skyblue;
width:100%;
height:50px;
border:1px solid blue;
margin:auto;
text-align:center;
`
const Text = styled.p`
font-weight:bold;
color:black;
`
const MainDiv = styled.div`
width:max-content;
display: grid;
grid-template-columns: repeat(4, 1fr);
background-color:lightsteelblue;
border:2px solid lavender;
margin-top:40px;
gap:30px;
padding:40px;
`
export const PageBoard = ({event}) => (
    <>
    <MainText>
    <Text>24th Core Worlds Coalition  Conference</Text>
   </MainText>
     <MainDiv>
  {event.map((events,index) => (
  <Event name = {events.name} key={index}
  start={events.time.start}
  location={events.location}
  end={events.time.end}
  speaker ={events.speaker}
  />
  ))}
  </MainDiv>
  </>

  )