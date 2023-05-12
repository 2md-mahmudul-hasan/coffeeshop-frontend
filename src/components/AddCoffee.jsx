import React from 'react';

const AddCoffee = () => {
  return (
    < div className="bg-[#121212] p-24">
      <div >
        <h2 className='text-center text-4xl font-bold'> add new coffee </h2>
        <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor asperiores reprehenderit totam eius numquam! Distinctio, earum deserunt odio incidunt atque adipisci. Maxime animi assumenda eveniet ratione, numquam id dolorum vel!</p>
      </div>
      <div className='flex'>
        <div className="form-control me-2 w-1/2">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <label className="input-group">
            <input type="text" placeholder="Enter coffee name " className="input input-bordered w-full" />
          </label>
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Chef</span>
          </label>
          <label className="input-group">
            <input type="text" placeholder="Enger chef name " className="input input-bordered w-full" />
          </label>
        </div>
      </div>
      <div className='flex'>
        <div className="form-control me-2 w-1/2">
          <label className="label">
            <span className="label-text">Supplier</span>
          </label>
          <label className="input-group">
            <input type="text" placeholder="Enter supplier name" className="input input-bordered w-full" />
          </label>
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Taste</span>
          </label>
          <label className="input-group">
            <input type="text" placeholder="Enter coffee taste" className="input input-bordered w-full" />
          </label>
        </div>
      </div>
      <div className='flex'>
        <div className="form-control me-2 w-1/2">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <label className="input-group">
            <input type="text" placeholder="Engter Category name " className="input input-bordered w-full" />
          </label>
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <label className="input-group">
            <input type="text" placeholder="Ener Details name " className="input input-bordered w-full" />
          </label>
        </div>
      </div>
      <div className='flex'>
        <div className="form-control me-2 w-full">
          <label className="label">
            <span className="label-text">Photo url</span>
          </label>
          <label className="input-group">
            <input type="text" placeholder="Photo url" className="input input-bordered w-full" />
          </label>
        </div>
      </div>

      <button className="text-center bg-gray-50 w-full p-4 my-5"> Add coffee</button>

    </div>
  );
};

export default AddCoffee;