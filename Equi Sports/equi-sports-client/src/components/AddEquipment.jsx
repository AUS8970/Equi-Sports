import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);
  // const [formData, setFormData] = useState({
  //   image: "",
  //   itemName: "",
  //   categoryName: "",
  //   description: "",
  //   price: "",
  //   rating: "",
  //   customization: "",
  //   processingTime: "",
  //   stockStatus: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const equipmentData = {
  //     ...formData,
  //     userEmail: user.email,
  //     userName: user.displayName,
  //   };

  //   try {
  //     const response = await fetch("http://localhost:4000/", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(equipmentData),
  //     });

  //     if (response.ok) {
  //       toast.success("Equipment added successfully!");
  //       setFormData({
  //         image: "",
  //         itemName: "",
  //         categoryName: "",
  //         description: "",
  //         price: "",
  //         rating: "",
  //         customization: "",
  //         processingTime: "",
  //         stockStatus: "",
  //       });
  //     } else {
  //       toast.error("Failed to add equipment.");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("An error occurred. Please try again.");
  //   }
  // };

  const handleAddEquipment = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const description = form.description.value;

    const newEquipment = {name, image, category, price, rating, customization, processingTime, stockStatus, description};
    console.log(newEquipment)

    // send data to the server
    fetch(`${import.meta.env.VITE_WEB_HOST_LINK}/product`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEquipment),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        console.log('Success!')
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Product Added Successfully!",
          confirmButtonText: 'Close'
        });
      }
    })
    .catch(error => console.error("Error:", error));
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-4/5 lg:w-2/3 p-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Equipment</h2>
        <form onSubmit={handleAddEquipment} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 text-black"
              required
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 text-black"
              required
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 text-black"
              required
            />
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 text-black"
              required
            />
            <input
              type="text"
              name="rating"
              placeholder="Rating"
              min="1"
              max="5"
              className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 text-black"
              required
            />
            <input
              type="text"
              name="customization"
              placeholder="Customization (e.g., bat with extra grip)"
              className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 text-black"
            />
            <input
              type="text"
              name="processingTime"
              placeholder="Processing Time (e.g., 3-5 days)"
              className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 text-black"
              required
            />
            <input
              type="text"
              name="stockStatus"
              placeholder="Stock Status (e.g., Available, Limited)"
              className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 text-black"
              required
            />
          </div>
          <textarea
            name="description"
            placeholder="Description"
            className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 text-black"
            required
          />
          <div className="flex gap-4 items-center justify-center">
            <input
              type="text"
              value={user?.displayName || ""}
              readOnly
              className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 text-black"
              placeholder="User Name"
            />
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 text-black"
              placeholder="User Email"
            />
          </div>
          <button type="submit" className="btn text-white border-orange-600 hover:border-orange-500 bg-orange-600 hover:bg-orange-500 w-full">
            Add Equipment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEquipment;
