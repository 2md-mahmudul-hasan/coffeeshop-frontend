

const CoffeeCard = ({ coffee }) => {
  console.log(coffee)
  const { name, chef, supplier, taste, category, details, Photo_url } = coffee;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure><img src={Photo_url} alt="Movie" /></figure>
      <div className="card-body  grid grid-cols-2">
        <div>
          <h2 className="card-title">New movie is released!</h2>
          <p>{details}</p>
        </div>
        <div className="btn-group btn-group-vertical">
          <button className="btn btn-active">Button</button>
          <button className="btn">Button</button>
          <button className="btn">Button</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;