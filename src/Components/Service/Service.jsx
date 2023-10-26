const Service = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-[256px]" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <div className="card-actions justify-between">
            <p className="text-[#FF3811] text-lg font-semibold">
              Price: ${price}
            </p>
            <button className=" text-[#FF3811] text-2xl font-bold">→</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
