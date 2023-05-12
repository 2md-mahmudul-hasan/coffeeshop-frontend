import React from 'react';
import Swal from 'sweetalert2'
const AddCoffee = () => {

  const handleAddCoffee = (e) => {
    e.preventDefault()
    console.log('add coffee')
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const Photo_url = form.Photo_url.value;
    const chefData = {
      name, chef, supplier, taste, category, details, Photo_url
    }

    fetch('http://localhost:5000/coffee', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(chefData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Coffee added',
            text: 'successfully data added',
          })
        }
      })
    console.log(chefData)
  }



  return (
    < form onSubmit={handleAddCoffee} className="bg-[#121212] p-24">
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
            <input name="name" type="text" placeholder="Enter coffee name " className="input input-bordered w-full" />
          </label>
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Chef</span>
          </label>
          <label className="input-group">
            <input name="chef" type="text" placeholder="Enger chef name " className="input input-bordered w-full" />
          </label>
        </div>
      </div>
      <div className='flex'>
        <div className="form-control me-2 w-1/2">
          <label className="label">
            <span className="label-text">Supplier</span>
          </label>
          <label className="input-group">
            <input name="supplier" type="text" placeholder="Enter supplier name" className="input input-bordered w-full" />
          </label>
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Taste</span>
          </label>
          <label className="input-group">
            <input name="taste" type="text" placeholder="Enter coffee taste" className="input input-bordered w-full" />
          </label>
        </div>
      </div>
      <div className='flex'>
        <div className="form-control me-2 w-1/2">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <label className="input-group">
            <input name="category" type="text" placeholder="Engter Category name " className="input input-bordered w-full" />
          </label>
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <label className="input-group">
            <input name="details" type="text" placeholder="Ener Details name " className="input input-bordered w-full" />
          </label>
        </div>
      </div>
      <div className='flex'>
        <div className="form-control me-2 w-full">
          <label className="label">
            <span className="label-text">Photo url</span>
          </label>
          <label className="input-group">
            <input name="Photo_url" type="text" placeholder="Photo url" className="input input-bordered w-full" />
          </label>
        </div>
      </div>

      <button className="text-center bg-gray-50 w-full p-4 my-5"> Add coffee</button>

    </form>
  );
};

export default AddCoffee;