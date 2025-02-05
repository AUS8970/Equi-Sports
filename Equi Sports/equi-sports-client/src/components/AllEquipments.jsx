import React, { useState, useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { data, Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AllSportsEquipment = () => {
  const [equipments, setEquipments] = useState([]);
  const [filteredEquipments, setFilteredEquipments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch sports equipment from an API or mock data
    const fetchEquipments = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_WEB_HOST_LINK}/product`);
        const data = await response.json();
        setEquipments(data);
        setFilteredEquipments(data);
      } catch (error) {
        console.error("Error fetching equipment:", error);
      }
    };

    fetchEquipments();
  }, []);

  // Filter equipment based on search term
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = equipments.filter((item) =>
      item.name.toLowerCase().includes(term)
    );
    setFilteredEquipments(filtered);
  };

  const navigate = useNavigate();

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Do you want to delete the products?",
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#EA580C",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_WEB_HOST_LINK}/product/${_id}`, {
          method: 'DELETE',
          
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.deletedCount > 0 ){
            Swal.fire("Deleted!", "", "success");
          }
        });
      };
    });
  }

  return (
    <>
      <div className="min-h-screen p-6">
        <h1 className="text-3xl font-bold text-center mb-6"> All Sports Equipment </h1>

        {/* Search Input */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search equipment..."
            className="p-2 border border-gray-300 rounded w-full max-w-md"
          />
        </div>

        {/* Equipment List */}
        <div className="flex flex-col border-2 border-orange-600 bg-orange-600 text-white rounded-lg p-2">
          <div className="md:grid md:grid-cols-3 lg:grid-cols-4 bg-orange-600 gap-3 justify-between items-center py-2 px-4 rounded-t-md font-bold hidden">
            <p className="hidden md:flex"> Name </p>
            <p className="hidden lg:flex"> Category </p>
            <p className="hidden md:flex"> Price </p>
            <p className="hidden md:flex"> Action </p>
          </div>
          {filteredEquipments.length > 0 ? (
            filteredEquipments.map((equipment) => (
              <div key={equipment._id} className="grid md:grid-cols-3 lg:grid-cols-4 bg-orange-500 hover:bg-orange-700 gap-1 md:gap-3 justify-between items-center p-4 text-left border-y-4 border-orange-600 rounded-lg">
                <h1 className="text-md font-bold flex gap-1"> <span className="flex md:hidden"> Name: </span> {equipment.name} </h1>
                <h2 className="text-sm flex gap-1 md:hidden lg:flex"> <span className="flex md:hidden"> Category: </span> {equipment.category} </h2>
                <p className="flex gap-1"> <span className="flex md:hidden"> Price: </span> ${equipment.price} </p>
                <div className="flex gap-3">
                  <Link
                    to={`/update-equipment/${equipment._id}`}
                    className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded h-fit"
                  > 
                    <CiEdit /> 
                  </Link>
                  <Link 
                    to={`/details-equipment/${equipment._id}`}
                    className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded h-fit"
                  > 
                    <FaRegEye /> 
                  </Link>
                  <button 
                    onClick={() => handleDelete(equipment._id)} 
                    className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded h-fit"
                  > 
                    <MdOutlineDelete />
                  </button>
                </div>
              </div>
            ))) : (
              <p className="text-center col-span-full">No equipment found.</p>
            )
          }
        </div>
      </div>
    </>
  );
};

export default AllSportsEquipment;