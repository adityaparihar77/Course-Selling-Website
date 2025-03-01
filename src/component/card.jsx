
import CardGroup from 'react-bootstrap/CardGroup';

function Card(props) {
  return (
    <div className='CARD_CONATINER'>
        <img className='card_img' src={props.img} />
        <div>
          <p>{props.title}</p>
          <p>
            {props.content}
          </p>
        </div>
    </div>
  );
}

export default Card;