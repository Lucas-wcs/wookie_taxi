import PropTypes from "prop-types";
import axios from "axios";
import { useState, useEffect } from "react";

function DriverCard({ driverName, driverVehicleUrl, state }) {
  const [vehicle, setVehicle] = useState(undefined);

  useEffect(() => {
    if (driverVehicleUrl) {
      axios.get(driverVehicleUrl).then((res) => {
        setVehicle(res.data);
      });
    }
  }, []);

  console.warn(state.passenger);

  return (
    vehicle &&
    vehicle.passengers === state.passenger && (
      <div className="driver-card">
        <div className="driverImgDiv">
          <img
            src={`src/public/images/characters/${driverName}.jpg`}
            alt="Avatar"
            className="driverImg"
          />
        </div>
        <div className="info-container">
          <div className="drivername-favorite">
            <h2>{driverName}</h2>
            <div className="isFavorite"> &nbsp;</div>
          </div>
          <div className="info-vehicleImage-button">
            <div className="card-information">
              <p>
                <strong>Vehicle name</strong> {vehicle.name}
              </p>
              <p>
                <strong>Vehicle model :</strong> {vehicle.model}
              </p>
              <p>
                <strong>Passengers :</strong> {vehicle.passengers}
              </p>
            </div>
            <div className="vehicleImage-button">
              <img
                src="src/public/images/starship/Snowspeeder.webp"
                alt="starship"
                className="starshipImg"
              />
              <button type="submit"> Réserver </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

DriverCard.propTypes = {
  driverName: PropTypes.string.isRequired,
  driverVehicleUrl: PropTypes.shape.isRequired,
  state: PropTypes.shape({ passenger: PropTypes.string.isRequired }).isRequired,
};

export default DriverCard;
