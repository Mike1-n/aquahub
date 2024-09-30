// src/components/Staff.js
import React, { useState, useEffect } from 'react';
import './Staff.css';
import { supabase } from '../../backend/client.js';

const Staff = () => {
  const [staff, setStaff] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');

  useEffect(() => {
    const fetchStaff = async () => {
      const { data, error } = await supabase
        .from('staff') // Ensure this matches your Supabase table name
        .select('*');

      if (error) {
        console.error('Error fetching staff data:', error);
      } else {
        console.log('Fetched staff data:', data); // Log the fetched data
        setStaff(data);
      }
    };

    fetchStaff();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  const filteredStaff = staff.filter(member => {
    const roleMatch = selectedRole === 'All' || member.role === selectedRole;
    const searchMatch = member.first_name.toLowerCase().includes(search.toLowerCase()) || member.last_name.toLowerCase().includes(search.toLowerCase());
    return roleMatch && searchMatch;
  });

  const handleAddStaff = () => {
    console.log('Add staff logic here');
  };

  const handleToggleStaffStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'Active' ? 'Inactive' : 'Active'; // Toggle the status

    const { error } = await supabase
      .from('staff')
      .update({ status: newStatus })
      .match({ id });

    if (error) {
      console.error('Error updating staff status:', error);
    } else {
      setStaff(staff.map(member => 
        member.id === id ? { ...member, status: newStatus } : member
      ));
    }
  };

  const handleRemoveStaff = async (id) => {
    const { error } = await supabase
      .from('staff')
      .delete()
      .match({ id });

    if (error) {
      console.error('Error removing staff member:', error);
    } else {
      setStaff(staff.filter(member => member.id !== id));
    }
  };

  return (
    <div className="main">
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1>Staff Management</h1>
        <input
          type="text"
          placeholder="Search staff..."
          value={search}
          onChange={handleSearch}
          style={{ marginLeft: "auto" }}
        />
      </div>
      <section>
        <div className="role-buttons">
          <button onClick={() => handleRoleChange("All")}>All</button>
          <button onClick={() => handleRoleChange("Technician")}>
            Technician
          </button>
          <button onClick={() => handleRoleChange("Supervisor")}>
            Supervisor
          </button>
          <button onClick={() => handleRoleChange("Service Manager")}>
            Service Manager
          </button>
          <button onClick={() => handleRoleChange("Finance Manager")}>
            Finance Manager
          </button>
          <button onClick={() => handleRoleChange("Driver")}>Driver</button>
          <button className="add" onClick={handleAddStaff}>
            Add Staff
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStaff.map((member) => (
              <tr
                key={member.id}
                className={`status-${member.status.toLowerCase()}`}
              >
                <td>{`${member.first_name} ${member.last_name}`}</td>
                <td>{member.role}</td>
                <td>{member.status}</td>
                <td>
                  <button
                    className={
                      member.status === "Active" ? "deactivate" : "activate"
                    }
                    onClick={() =>
                      handleToggleStaffStatus(member.id, member.status)
                    }
                  >
                    {member.status === "Active" ? "Deactivate" : "Activate"}
                  </button>
                  <button
                    className="remove"
                    onClick={() => handleRemoveStaff(member.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Staff;
