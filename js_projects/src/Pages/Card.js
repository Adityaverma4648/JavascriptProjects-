import '../Component.css';

const Card = (props) =>{
    return (
        <div className="card" style={{overflow:"hidden"}}>
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