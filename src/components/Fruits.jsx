import Fruit from "./Fruit";
import data from "./data";

const Fruits = () => {
  //   const fruitsList = ["Apple", "Mango", "Banana", "Orange", "Pinapple"];

  return (
    <div>
      <ul>
        {data.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
          />
        ))}
      </ul>
    </div>
  );
};

export default Fruits;
