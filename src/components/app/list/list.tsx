import { AnyCharacter, Card } from '../card/card';

type Props = {
  children: AnyCharacter[];
};

export function List({ children }: Props) {
  return (
    <div className="app-container">
      <ul className="characters-list row list-unstyled">
        {children.map((character: AnyCharacter) => (
          <Card character={character}></Card>
        ))}
      </ul>
    </div>
  );
}
