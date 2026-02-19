import Score from './Score';

function Learner(props) {
    return (
        <div>
            <h2>{props.learner.name}</h2>
            <p>{props.learner.bio}</p>
            {props.learner.scores.map((score, index)=>(
           <Score key={index} score={score}/>
            ))}
        </div>
    );
    
}
export default Learner;