const Fruit = ({ name, emoji, price }) => {
  return (
    <>
      {/* {emoji} {name} {price} */}
      {price > 6 ? (
        <li>
          {emoji} {name} {price}
        </li>
      ) : (
        ""
      )}
    </>
  );
};

export default Fruit;
