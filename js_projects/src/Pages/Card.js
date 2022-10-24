import '../Component.css'

const Card = (props) =>{
    return (
        <div className="card">
            <img src={props.image} alt={props.name} />
             <h5>
                {props.name}
             </h5>
             <p>
                {props.desc}
             </p>
        </div>
        
    )
}


export default Card;