import React, { useState } from "react";

const CreateListing = () => {
  const [fromData, setFromData] = useState({
    type: "rent",
    name: "",
    bedroome: 1,
    bathroome: 1,
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offes: false,
    regularPrice: 0,
    discountedPrice: 0,
  });

  // Destructuring fromData
  const {
    type,
    name,
    bedroome,
    bathroome,
    parking,
    furnished,
    address,
    description,
    offes,
    regularPrice,
    discountedPrice,
  } = fromData;

  const handleOnClick = () => {};
  const handleOnChange = () => {};

  return (
    <div className="max-w-md mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-6">Create a Listing</h1>

      <form>
        <div className="sale_rent">
          <p className="text-lg font-semibold">Sell / Rent</p>
          <div className="flex gap-6 mt-2">
            <button
              type="button"
              name="sale"
              id="sale"
              value={type}
              onClick={handleOnClick}
              className={`font-medium text-sm uppercase shadow-md rounded hover:shadow-lg transition duration-150 ease-in-out w-full px-7 py-3 ${
                type === "rent"
                  ? "bg-white text-black"
                  : "bg-green-700 text-white"
              }`}
            >
              Sale
            </button>
            <button
              type="button"
              name="rent"
              id="rent"
              value={type}
              onClick={handleOnClick}
              className={`font-medium text-sm uppercase shadow-md rounded hover:shadow-lg transition duration-150 ease-in-out w-full px-7 py-3 ${
                type === "sale"
                  ? "bg-white text-black"
                  : "bg-green-700 text-white"
              }`}
            >
              Rent
            </button>
          </div>
        </div>

        <div className="name">
          <p className="text-lg font-semibold mt-6 mb-2">Name</p>
          <input
            onChange={handleOnChange}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={name}
            className="w-full px-4 py-3 text-xl text-gray-700 border border-gray-300 rounded focus:border-slate-600 "
          />
        </div>

        <div className="beds_baths flex gap-6">
          <div className="">
            <p className="text-lg font-semibold mt-6 mb-2">Beds</p>
            <input
              type="number"
              id="beds"
              name="beds"
              onChange={handleOnChange}
              value={bedroome}
              className="w-full px-4 py-3 text-xl text-gray-700 border border-gray-300 rounded focus:border-slate-600 text-center"
            />
          </div>
          <div className="">
            <p className="text-lg font-semibold mt-6 mb-2">Baths</p>
            <input
              type="number"
              id="baths"
              name="baths"
              onChange={handleOnChange}
              value={bathroome}
              className="w-full px-4 py-3 text-xl text-gray-700 border border-gray-300 rounded focus:border-slate-600 text-center"
            />
          </div>
        </div>

        <div className="parking_spot">
          <p className="text-lg font-semibold mt-6 mb-2">Parking Spot</p>
          <div className="flex gap-6">
            <button
              type="button"
              name="parking"
              id="parking"
              value={true}
              onClick={handleOnClick}
              className={`font-medium text-sm uppercase shadow-md rounded hover:shadow-lg transition duration-150 ease-in-out w-full px-7 py-3 ${
                !parking ? "bg-white text-black" : "bg-green-700 text-white"
              }`}
            >
              Yes
            </button>
            <button
              type="button"
              name="parking"
              id="parking"
              value={false}
              onClick={handleOnClick}
              className={`font-medium text-sm uppercase shadow-md rounded hover:shadow-lg transition duration-150 ease-in-out w-full px-7 py-3 ${
                parking ? "bg-white text-black" : "bg-green-700 text-white"
              }`}
            >
              No
            </button>
          </div>
        </div>

        <div className="furnished">
          <p className="text-lg font-semibold mt-6 mb-2">Furnished</p>
          <div className="flex gap-6">
            <button
              type="button"
              name="furnished"
              id="furnished"
              value={true}
              onClick={handleOnClick}
              className={`font-medium text-sm uppercase shadow-md rounded hover:shadow-lg transition duration-150 ease-in-out w-full px-7 py-3 ${
                !furnished ? "bg-white text-black" : "bg-green-700 text-white"
              }`}
            >
              Yes
            </button>
            <button
              type="button"
              name="furnished"
              id="furnished"
              value={false}
              onClick={handleOnClick}
              className={`font-medium text-sm uppercase shadow-md rounded hover:shadow-lg transition duration-150 ease-in-out w-full px-7 py-3 ${
                furnished ? "bg-white text-black" : "bg-green-700 text-white"
              }`}
            >
              No
            </button>
          </div>
        </div>

        <div className="adress">
          <p className="text-lg font-semibold mt-6 mb-2">Adress</p>
          <textarea
            onChange={handleOnChange}
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            value={address}
            className="w-full px-4 py-3 text-xl text-gray-700 border border-gray-300 rounded focus:border-slate-600 "
          />
        </div>

        <div className="description">
          <p className="text-lg font-semibold mt-6 mb-2">Description</p>
          <textarea
            onChange={handleOnChange}
            type="text"
            name="description"
            id="description"
            placeholder="Description"
            value={description}
            className="w-full px-4 py-3 text-xl text-gray-700 border border-gray-300 rounded focus:border-slate-600 "
          />
        </div>

        <div className="offes">
          <p className="text-lg font-semibold mt-6 mb-2">Offes</p>
          <div className="flex gap-6">
            <button
              type="button"
              name="offes"
              id="offes"
              value={true}
              onClick={handleOnClick}
              className={`font-medium text-sm uppercase shadow-md rounded hover:shadow-lg transition duration-150 ease-in-out w-full px-7 py-3 ${
                !offes ? "bg-white text-black" : "bg-green-700 text-white"
              }`}
            >
              Yes
            </button>
            <button
              type="button"
              name="offes"
              id="offes"
              value={false}
              onClick={handleOnClick}
              className={`font-medium text-sm uppercase shadow-md rounded hover:shadow-lg transition duration-150 ease-in-out w-full px-7 py-3 ${
                offes ? "bg-white text-black" : "bg-green-700 text-white"
              }`}
            >
              No
            </button>
          </div>
        </div>

        <div className="regularPrice">
          <p className="text-lg font-semibold mt-6 mb-2">Regular Price</p>
          <div className="flex gap-6 items-center">
            <input
              type="number"
              id="regular_Price"
              name="regular_Price"
              onChange={handleOnChange}
              value={regularPrice}
              className="w-1/2 px-4 py-3 text-xl text-gray-700 border border-gray-300 rounded focus:border-slate-600 text-center"
            />
            <div>{type === "rent" && <div>$ / Month</div>}</div>
          </div>
        </div>

        <div className="discountedPrice">
          {offes && (
            <div>
              <p className="text-lg font-semibold mt-6 mb-2">
                Discounted Price
              </p>
              <input
                type="number"
                id="discounted_price"
                name="discounted_price"
                onChange={handleOnChange}
                value={discountedPrice}
                className="w-1/2 px-4 py-3 text-xl text-gray-700 border border-gray-300 rounded focus:border-slate-600 text-center"
              />
            </div>
          )}
        </div>

        <div className="images">
          <p className="text-lg font-semibold mt-6 mb-2">Images</p>
          <p className="text-gray-600 mb-2">
            The first will be the cover (Max 6)
          </p>
          <input
            type="file"
            name="images"
            id="images"
            onChange={handleOnChange}
            accept=".jpg, .png, .jpeg"
            multiple
            className="w-full px-3 py-2 border  border-gray-300 rounded"
          />
        </div>

        <button
          type="button"
          className="w-full bg-green-700 hover:bg-green-800 transition duration-300 ease-in-out px-4 py-3 rounded my-6 text-white text-lg shadow-md hover:shadow-lg font-medium"
        >
          Create Listing
        </button>
      </form>
    </div>
  );
};

export default CreateListing;
