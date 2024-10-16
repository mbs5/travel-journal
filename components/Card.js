import React from "react"


export default function Card(props) {
    
    return (
        <div className="card">

            <div className="card-cover">
                <img src={props.imageUrl} />
            </div>

            <div className="card-info">
                <div className="location">
                    <i class="fas fa-map-marker-alt"></i>
                    <p className="location">{props.location}</p>
                    <a className="link" href= {props.googleMapsUrl}>View on Google Maps</a>
                </div>
                
                <h2>{props.title}</h2>
                
                <p>{props.startDate} - {props.endDate}</p>


                <p>{props.description}</p>
                
            </div>

        </div>

    )
}