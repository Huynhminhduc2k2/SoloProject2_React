import React from 'react';

export default function Card(props) {
  console.log(props.item);

  return (
    <div>
      <div className="card">
        <img className="card--img" src={props.item.imageUrl} alt="" />
        <div className="card--context">
          <div className="card--location">
            <img className='card--location--img' src="./images/locationIcon.png" alt="location icon" />
            <p className='card--location--title'>{props.item.location}</p>
            <a className='card--location--url' href={props.item.googleMapsUrl}>View on Google Maps</a>
          </div>

          <div>
            <h1>{props.item.title}</h1>
            <h3 className='card--date'>
              {props.item.startDate} - {props.item.endDate}
            </h3>
            <p>{props.item.description}</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}
