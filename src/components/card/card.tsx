import { /* Category, */ Fighter } from '../models/character';
import { King } from '../models/character';
import { Squire } from '../models/character';
import { Adviser } from '../models/character';
import '../../main.css';
export type AnyCharacter = Fighter | King | Adviser | Squire;

type Props = {
  character: AnyCharacter;
};
export function Card({ character }: Props) {
  const makeExtraData = (item: AnyCharacter) => {
    if ('reignYears' in item) {
      return <li>Años de reinado: {item.reignYears}</li>;
    } else if ('weapon' in item) {
      return (
        <>
          <li>Arma: {item.weapon}</li>
          <li>Destreza: {item.skillLevel}</li>
        </>
      );
    } else if ('adviseTo' in item) {
      return <li>Sirve a: {item.adviseTo.name}</li>;
    } else {
      return (
        <>
          <li>Peloteo: {item.servesLevel}</li>
          <li>Asesora a: ${item.servesTo.name}</li>
        </>
      );
    }
  };

  // function makEmoji(category: Category) {
  //   switch (category) {
  //     case 'king':
  //       return '👑';
  //     case 'fighter':
  //       return '🗡';
  //     case 'adviser':
  //       return '🎓';
  //     default:
  //       return '🛡';
  //   }
  // }

  return (
    <li className="character col">
      <div className="card character__card">
        <img
          src={`${character.name.toLowerCase()}.jpg`}
          alt={character.name + character.family}
          className={'character__picture' + character.isAlive && 'card-img-top'}
        />
        <div className="card-body">
          <h2 className="character__name card-title h4">
            {character.name + character.family}
          </h2>
          <div className="character__info">
            <ul className="list-unstyled">
              <li>Edad: {character.age + 'años'}</li>
              <li>
                Estado: {character.isAlive}
                <i className="fas fa-thumbs-up">
                  <i className="fas fa-thumbs-down"></i>
                </i>
              </li>
            </ul>
          </div>
          <div className="character__overlay">
            <ul className="list-unstyled">{makeExtraData(character)}</ul>
            <div className="character__actions">
              <button className="character__action btn talk">habla</button>
              <button className="character__action btn dead">muere</button>
            </div>
          </div>
        </div>
        {/* /* <i className="emoji">{makEmoji(character.category)}</i> */} 
      </div>
      ;
    </li>
  );
}
