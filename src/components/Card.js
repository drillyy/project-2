import location_pin from "../images/location_pin.png";

export default function Card(props) {
  return (
    <div className="card">
      <img
        className="card--image"
        src={props.place.imageUrl}
        alt={props.place.title}
      />
      <div className="card--text">
        <div className="card--location">
          <img className="location-pin" src={location_pin} alt="location pin" />
          <p className="card--place">{props.place.location}</p>
          <a className="card--googlemaps" href={props.place.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1 className="card--title">{props.place.title}</h1>
        <p className="card--dates">{`${props.place.startDate} - ${props.place.endDate}`}</p>
        <p className="card--description">{props.place.description}</p>
      </div>
    </div>
  );
}
