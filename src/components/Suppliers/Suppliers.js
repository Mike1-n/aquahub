import React, { useState, useEffect } from 'react';
import './Suppliers.css';
import { supabase } from '../../backend/client.js';

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([]);

  const fetchSuppliers = async () => {
    const { data, error } = await supabase.from("suppliers").select();
    if (error) {
      console.log(error);
    } else {
      setSuppliers(data);
    }
  };

  // Fetch suppliers when the component mounts
  useEffect(() => {
    fetchSuppliers();
  }, []);

  // Log suppliers data when it changes
  useEffect(() => {
    console.log(suppliers); // Debug to check supplier data structure
  }, [suppliers]);

  // Function to get the style based on the item status
  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return { backgroundColor: '#f8caa6' }; // Faded orange for pending
      case 'delivered':
        return { backgroundColor: '#d4edda' }; // Faded green for delivered
      case 'returned':
        return { backgroundColor: '#f8d7da' }; // Faded red for returned
      default:
        return {}; // Default style for any other status
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Company Name</th>
          <th>Contact Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Item Name</th>
          <th>Quantity</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {suppliers.map((supplier) => (
          supplier.items_ordered.map((item, index) => (
            <tr key={`${supplier.id}-${index}`}>
              {index === 0 && (
                <>
                  <td rowSpan={supplier.items_ordered.length}>{supplier.company_name}</td>
                  <td rowSpan={supplier.items_ordered.length}>{supplier.contact_name}</td>
                  <td rowSpan={supplier.items_ordered.length}>{supplier.email}</td>
                  <td rowSpan={supplier.items_ordered.length}>{supplier.phone_number}</td>
                </>
              )}
              {/* Apply styles only to these specific columns */}
              <td style={getStatusStyle(item.status)}>{item.name}</td>
              <td style={getStatusStyle(item.status)}>{item.quantity}</td>
              <td style={getStatusStyle(item.status)}>{item.status}</td>
              {index === 0 && (
                <td rowSpan={supplier.items_ordered.length}>
                  <button style={{ background: "green", borderRadius: "10px" }}>Activate</button>
                  <button style={{ background: "red", borderRadius: "10px" }}>Deactivate</button>
                </td>
              )}
            </tr>
          ))
        ))}
      </tbody>
    </table>
  );
};

export default Suppliers;
