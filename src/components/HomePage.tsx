import { FC } from "react";
import Card, { CardVariant } from "./Card";
import EventsExample from "./EventsExample";

const HomePage: FC = () => {

  return (
    <div>
      <EventsExample/>
      <Card onClick={(num) => console.log('Yes!!', num)} variant={CardVariant.primary} width="200px" height="200px">
        <button>fasdfsd</button>
        asdfasdf
      </Card>
    </div>
  )
};

export default HomePage;