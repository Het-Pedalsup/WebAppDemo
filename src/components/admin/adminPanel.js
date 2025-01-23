import React, { useState } from "react";
import Image from "../../assets/images/drawerImage.png";
import searchImage from "../../assets/images/search.png";
import notification from "../../assets/images/icon.png"

const AdminPanel = () => {
  const [handleValue, setHandleValue] = useState()

  return (
    <div className="main">
      <div style={{ display: "flex", flexDirection: "row" }}>
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
          <text
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
          </text>
          <p style={{ color: "#ffffff", height: 50, margin: 5 }}>Dashboard</p>
          <p style={{ color: "#ffffff", height: 50, fontSize: 14, margin: 5 }}>Products</p>
          <p style={{ color: "#ffffff", height: 50, fontSize: 14, margin: 5 }}>Favourites</p>
          <p style={{ color: "#ffffff", margin: 5, height: 50, fontSize: 14 }}>Inbox</p>
          <p style={{ color: "#ffffff", margin: 5, height: 50, fontSize: 14 }}>Order Lists</p>
          <p style={{ color: "#ffffff", margin: 5, height: 50, fontSize: 14 }}>Product Stocks</p>
          
          <div style={{
            alignSelf: "flex-start",
            marginLeft: 10,
            fontSize: 14,
          }}>
            <text style={{
              fontSize: 12,
              color: "#ffffff",
            }}>
              pages
            </text>
          </div>
          
          <p style={{ color: "#ffffff", margin: 5, height: 50, fontSize: 14 }}>Pricing</p>
          <p style={{ color: "#ffffff", margin: 5, height: 50, fontSize: 14 }}>Calender</p>
          <p style={{ color: "#ffffff", margin: 5, height: 50, fontSize: 14 }}>To-Do</p>
          <p style={{ color: "#ffffff", margin: 5, height: 50, fontSize: 14 }}>Contact</p>
          <p style={{ color: "#ffffff", margin: 5, height: 50, fontSize: 14 }}>Invoice</p>
          <p style={{ color: "#ffffff", margin: 5, height: 50, fontSize: 14 }}>UI Elements</p>
          <p style={{ color: "#ffffff", margin: 5, height: 50, fontSize: 14 }}>Team</p>
          <p style={{ color: "#ffffff", margin: 5, height: 50, fontSize: 14 }}>Table</p>
        </div>
        
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
              src={Image}
              alt="Italian Trulli"
              style={{ marginRight: 20 }}
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
                onChange={(value) => {
                  setHandleValue(value);
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
            <div style={{
              display: "flex",
              alignItems: "center",
            }}>
              <img
                src={notification}
                alt="Notification Icon"
                style={{
                  height: 20,
                  width: 20,
                  marginRight: 10,
                }}
              />
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