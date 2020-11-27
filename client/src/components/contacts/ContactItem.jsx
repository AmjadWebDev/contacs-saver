import React from "react";
import PropTypes from "prop-types";

const ContactItem = ({ name, id, email, type, phone }) => {
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span style={{ float: "right" }} className={"badge " + (type === "professional" ? " badge-success" : " badge-primary")}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open" />
            {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone" />
            {phone}
          </li>
        )}
      </ul>
      <p>
        <buttun className="btn btn-dark btn-sm">Edit</buttun>
        <buttun className="btn btn-danger btn-sm">Delete</buttun>
      </p>
    </div>
  );
};

ContactItem.prototype = {
  contact: PropTypes.object.isRequired,
};
export default ContactItem;
