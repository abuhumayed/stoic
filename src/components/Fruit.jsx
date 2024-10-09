const Fruit = ({ name, emoji, price, soldout }) => {
  return (
    <>
      {/* {emoji} {name} {price} */}

      <li>
        {emoji} {name} {price} {soldout ? "sold out" : ""}
      </li>
    </>
  );
};

export default Fruit;
