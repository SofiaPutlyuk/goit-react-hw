import React from "react";
import './App.css';
import events from './upcoming-events.json'
import ReactDOM from 'react-dom/client';
import { PageBoard } from './PageBoard.js';
import reportWebVitals from './reportWebVitals';
export const App = () => (
  <>
  <PageBoard event = {events}/>
  </>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

 <App />

);
reportWebVitals();
