
const DisplayBand = ({barnd}) => {
    const {id, images,title,description,price}= barnd
    return (
        <div>
            <div className=" rounded-lg bg-base-100 shadow-xl">
  <figure><img className="h-60" src={images} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title"></h2>
    <p>{title}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"> Show  Deteles</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default DisplayBand;