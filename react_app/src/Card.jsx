import cherish from "./assets/cherish.jpg";

function Card(){

    return(
        <div className="card">
            <img className="card-image" src={cherish} alt="Irene Bae" />
            <h2 className="card-title">Bae Joo-hyun</h2>
            <p className="card-description">
               She is beautiful, gorgeous, charming, and stunning
            </p>    
        </div>
    )

}

export default Card;

