// components/Sidebar.js
"use client"
import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>×</button>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <a href="#">Link 4</a>
      </div>
      <div className="button-container">
        <button className="open-btn" onClick={toggleSidebar}>
          {isOpen ? "Close Sidebar" : "Open Sidebar"}
        </button>
      </div>
      <style jsx>{`
        .sidebar {
          height: 100%;
          width: 0;
          position: fixed;
          top: 0;
          right: 0;
          background-color: #111;
          overflow-x: hidden;
          transition: 0.5s;
          padding-top: 60px;
          z-index: 1000;
        }
        
        .sidebar.open {
          width: 250px;
        }
        
        .sidebar a {
          padding: 10px 15px;
          text-decoration: none;
          font-size: 20px;
          color: #818181;
          display: block;
          transition: 0.3s;
        }
        
        .sidebar a:hover {
          color: #f1f1f1;
        }
        
        .sidebar .close-btn {
          position: absolute;
          top: 0;
          right: 25px;
          font-size: 36px;
          margin-left: 50px;
        }
        
        .button-container {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1100;
        }
        
        .open-btn {
          background-color: #111;
          color: white;
          border: none;
          cursor: pointer;
          padding: 10px 20px;
          font-size: 16px;
          border-radius: 5px;
          outline: none;
        }
      `}</style>
    </>
  );
};

export default Sidebar;
