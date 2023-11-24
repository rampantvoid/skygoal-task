import React from "react";
import "./Booking.css";

const Booking = () => {
  let [starCount, setStarCount] = React.useState(1);
  let [roomCount, setRoomCount] = React.useState(1);

  const onStartAdd = (e) => {
    e.preventDefault();
    if (starCount < 5) {
      setStarCount(starCount + 1);
    }
  };
  const onStartRemove = (e) => {
    e.preventDefault();
    if (starCount > 1) {
      setStarCount(starCount - 1);
    }
  };
  const onRoomAdd = (e) => {
    e.preventDefault();
    if (roomCount < 5) {
      setRoomCount(roomCount + 1);
    }
  };
  const onRoomRemove = (e) => {
    e.preventDefault();
    if (roomCount > 1) {
      setRoomCount(roomCount - 1);
    }
  };
  return (
    <div className="booking-container">
      <div className="booking-wrapper">
        <img
          src="/assets/shapes/Subtract (3).svg"
          alt=""
          className="shape-14 shape"
        />
        {/* image part */}
        <div className="img-container">
          <img
            src="/assets/images/Group 167.png"
            alt=""
            className="booking-image"
          />
        </div>

        {/* form part */}
        <div className="form-container">
          <form action="" className="booking-form">
            <p
              style={{
                margin: "0px",
                fontFamily: "Roboto",
                fontSize: "32px",
                fontWeight: "900",
              }}
            >
              Book now
            </p>
            <p
              style={{
                color: "#282828",
                fontFamily: "Roboto",
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "26px",
                letterSpacing: "0.584px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit
            </p>

            <label htmlFor="city">City</label>
            <input
              type="text"
              placeholder="Enter City"
              id="city"
              className="city-input"
            />
            <div className="date-input">
              <div
                style={{ display: "flex", flexDirection: "column", flex: "1" }}
              >
                <label htmlFor="arrival">Arrival</label>
                <input type="date" id="arrival" />
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", flex: "1" }}
              >
                <label htmlFor="departure">Departure</label>
                <input type="date" id="departure" />
              </div>
            </div>

            <div className="extra-input">
              <div
                style={{ display: "flex", flexDirection: "column", flex: "1" }}
              >
                <label htmlFor="star">Star</label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    // padding: "20px",
                    height: "60px",
                    backgroundColor: "#F3F3F3",
                    borderRadius: "12px",
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "#EBEBEB",
                      height: "100%",
                      width: "30%",
                      borderTopLeftRadius: "12px",
                      borderBottomLeftRadius: "12px",
                      border: "none",
                      fontSize: "22px",
                      fontWeight: "500",
                    }}
                    onClick={onStartRemove}
                  >
                    -
                  </button>
                  <span
                    style={{
                      width: "50px",
                      textAlign: "center",
                      backgroundColor: "#F3F3F3",
                    }}
                  >
                    {starCount}
                  </span>
                  <button
                    style={{
                      backgroundColor: "#EBEBEB",
                      height: "100%",
                      width: "30%",
                      borderTopRightRadius: "12px",
                      borderBottomRightRadius: "12px",
                      border: "none",
                      fontSize: "22px",
                      fontWeight: "500",
                    }}
                    onClick={onStartAdd}
                  >
                    +
                  </button>
                </div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", flex: "1" }}
              >
                <label htmlFor="room">Room</label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    // padding: "20px",
                    height: "100%",
                    backgroundColor: "#F3F3F3",
                    borderRadius: "12px",
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "#EBEBEB",
                      height: "100%",
                      width: "30%",
                      borderTopLeftRadius: "12px",
                      borderBottomLeftRadius: "12px",
                      border: "none",
                      fontSize: "22px",
                      fontWeight: "500",
                    }}
                    onClick={onRoomRemove}
                  >
                    -
                  </button>
                  <span
                    style={{
                      width: "50px",
                      textAlign: "center",
                      backgroundColor: "#F3F3F3",
                    }}
                  >
                    {roomCount}
                  </span>
                  <button
                    style={{
                      backgroundColor: "#EBEBEB",
                      height: "100%",
                      width: "30%",
                      borderTopRightRadius: "12px",
                      borderBottomRightRadius: "12px",
                      border: "none",
                      fontSize: "22px",
                      fontWeight: "500",
                    }}
                    onClick={onRoomAdd}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <button className="submit">Book Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
