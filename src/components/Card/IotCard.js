import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const Card = ({ CardArea, CardLoc, CardCategory, CardTitle, CardContent, CardContent2 }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="d-flex justify-content-between">
          <span>{CardArea}</span>
          <span>{CardLoc}</span>
        </div>
      </div>
      <div className="card-body">
        <h4 className="card-title">{CardTitle}</h4>
        <span className="badge bg-info">{CardCategory}</span>
        <p>
          Total quantity <span className="badge bg-success">{CardContent}</span>
        </p>
        <p>
          Current quantity <span className="badge bg-warning">{CardContent2}</span>
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  CardArea: PropTypes.string.isRequired,
  CardLoc: PropTypes.string.isRequired,
  CardCategory: PropTypes.string.isRequired,
  CardTitle: PropTypes.string.isRequired,
  CardContent: PropTypes.number.isRequired,
  CardContent2: PropTypes.number.isRequired,
};

Card.defaultProps = {
  CardArea: "Default Area",
  CardLoc: "Default Location",
  CardCategory: "Default Category",
  CardTitle: "Default Title",
  CardContent: 0,
  CardContent2: 0,
};

export default Card;

// Example usage:
// ReactDOM.render(
//   <Card
//     CardArea="Warehouse A"
//     CardLoc="Nairobi"
//     CardCategory="Electronics"
//     CardTitle="Stock Overview"
//     CardContent={100}
//     CardContent2={50}
//   />,
//   document.getElementById("root")
// );

/* Add the CSS styles */
const styles = `
.card {
  border-top: 2px solid #0766AD;
  border-bottom: 2px solid #0766AD;
  border-left: 5px solid #0766AD;
}
.card:hover {
  /* Add hover effects if needed */
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
