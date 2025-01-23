import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../assets/images/drawerImage.png";
import searchImage from "../../assets/images/search.png";
import notification from "../../assets/images/icon.png";

const AdminPanel = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const navigate = useNavigate(); // React Router navigation hook

  const handleNavBar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  const firstGroupItems = [
    "Dashboard",
    "Products",
    "Favourites",
    "Inbox",
    "Order List",
    "Product Stocks",
  ];

  const secondGroupItems = [
    "Pricing",
    "Calendar",
    "To-Do",
    "Contact",
    "Invoice",
    "UI Elements",
    "Team",
    "Table",
  ];

  const handleNavigation = (item) => {
    setSelectedItem(item);
    // Navigate based on item name
    const route = item.toLowerCase().replace(/\s+/g, "-"); // Convert name to URL-friendly path
    navigate(`/${route}`);
  };

  const renderSidebarItems = (items) =>
    items.map((item) => (
      <p
        key={item}
        onClick={() => handleNavigation(item)}
        style={{
          color: "#ffffff",
          height: 50,
          fontSize: 14,
          margin: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          backgroundColor: selectedItem === item ? "#4880FF" : "transparent",
          borderRadius: 10,
          cursor: "pointer",
        }}
      >
        {item}
      </p>
    ));

  return (
    <div className="main">
      <div style={{ display: "flex", flexDirection: "row" }}>
        {isNavbarOpen && (
          <div
            style={{
              backgroundColor: "#273142",
              width: 240,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              padding: 20,
            }}
            className="navbar"
          >
            <p
              style={{
                color: "#4880FF",
                fontFamily: "Nunito Sans",
                fontWeight: "bold",
                fontSize: 20,
                textAlign: "center",
                marginBottom: 20,
              }}
            >
              DashStack
            </p>

            {renderSidebarItems(firstGroupItems)}

            <div
              style={{
                alignSelf: "flex-start",
                marginLeft: 10,
                fontSize: 14,
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <p
                style={{
                  fontSize: 12,
                  color: "#ffffff",
                }}
              >
                Pages
              </p>
            </div>

            {renderSidebarItems(secondGroupItems)}
          </div>
        )}

        <div
          style={{
            backgroundColor: "#273142",
            height: 70,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            padding: "0 20px",
          }}
          className="header"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              onClick={handleNavBar}
              src={Image}
              alt="Navbar Icon"
              style={{ marginRight: 20, cursor: "pointer" }}
            />
            <div
              style={{
                backgroundColor: "#273142",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: 4,
                borderRadius: 18,
                width: 300,
                border: "2px solid #ccc",
              }}
            >
              <img
                src={searchImage}
                alt="Search Icon"
                style={{ marginRight: 10, height: 13, width: 15 }}
              />
              <input
                type="text"
                placeholder="Search"
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  fontFamily: "Nunito Sans",
                }}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
            className="notificationheader"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={notification}
                alt="Notification Icon"
                style={{
                  height: 20,
                  width: 20,
                  marginRight: 10,
                }}
              />
              <p
                style={{
                  color: "#ffffff",
                  margin: 0,
                  fontFamily: "Nunito Sans",
                  fontSize: 14,
                }}
              >
                Notifications
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
