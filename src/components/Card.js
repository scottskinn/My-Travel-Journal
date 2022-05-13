
export default function Card(props) {
    return(
        <div className="card">
                <img className="card--img" src={props.item.img} alt="" />
            <div className="card--stats">
                <div className="card--location">
                    <span className="card-icon">
                        <i class="fa-solid fa-location-arrow"></i>
                    </span>
                    <h5 className="country">{props.item.location}</h5>
                    <a href={`google.com/maps/${props.item.location}/`} className="gray google" target={"_blank"}>
                        View on Google Maps
                    </a>
                </div>
                <h2 className="card--city">{props.item.city}</h2>
                <h5 className="card--dates">{props.item.dates}</h5>
                <p className="card--comments">
                    {props.item.comments}
                </p>
            </div>
        </div>
    )
}