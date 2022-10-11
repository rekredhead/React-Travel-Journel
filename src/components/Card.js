export default function Card(props) {
    let {image, country, site, startDate, endDate, description} = props;
    const locationLink = site.split(" ").join("+");
    return(
        <div className="card">
            <div className="cardCover">
                <img src={`./images/${image}.png`} alt={site}/>
            </div>
            <div className="cardInfo">
                <div className="locationInfo">
                    <div>
                        <img src="./images/loc-marker.png" alt=""/>
                        <p>{country.toUpperCase()}</p>
                    </div>
                    <a href={`https://www.google.com/maps/place/${locationLink}`}>View in Google Maps</a>
                </div>
                <h3>{site}</h3>
                <h6>{startDate} - {endDate}</h6>
                <p className="description">
                    {description}
                </p>
            </div>
        </div>
    );
}