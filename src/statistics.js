import React from 'react';
import "./index.css";
export const Statistics = ({stats}) => (
    <section className="statistics">
    <h2 className="title">Upload stats</h2>
    <ul className="stat-list">
  {stats.map((info,index) => (
      <li className="item" key={index}>
      <span className="label">{info.label}</span>
      <span className="percentage">{info.percentage}</span>
    </li>
  ))}
 </ul>
    </section>


)