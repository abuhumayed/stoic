const Hello = ({ name, message, emoji, seatNumbers }) => {
  return (
    <div>
      <h1>
        {message}
        {emoji}
        {name}
      </h1>
      <h2>Your Seat Number is {seatNumbers}</h2>
    </div>
  );
};

export default Hello;
