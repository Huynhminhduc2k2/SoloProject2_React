import React from 'react';
import './styles.css';
import NavBar from './components/NavBar';
import Card from './components/Card';
import data from './data.js';

export default function App() {
  const cards = data.map((item) => {
    return (
      <div>
        <Card 
          item = {item}
        />
      </div>
    );
  });

  return (
    <div>
      <NavBar />
      <section className="card--list">{cards}</section>
    </div>
  );
}
