import React from "react";
import './Project.css';
import projectImage from "./myimg.png"; // Import your image here

const Project = () => {
  return (
    <section className="project-section">
      <div className="project-text">
        <h2>E-Commerce Website</h2>
        <p>
          <strong>Technologies Used:</strong> React.js, Node.js, MongoDB
        </p>
        <ul>
          <li>
            Developed a dynamic e-commerce website using React.js to handle various product categories such as clothes, mobiles, etc., creating reusable components for different product listings and details.
          </li>
          <li>
            Implemented user authentication features, including sign-up and sign-in pages, utilizing secure password storage with hashing and token-based authentication (JWT).
          </li>
          <li>
            Integrated "Add to Cart" and "Checkout" functionalities, allowing users to add products to their cart, manage items, and proceed with order checkout.
          </li>
          <li>
            Developed RESTful APIs using Node.js and Express to handle product data, user information, and cart management.
          </li>
          <li>
            Utilized MongoDB as the database to store user data, product details, and order history.
          </li>
          <li>
            Ensured smooth communication between frontend and backend using asynchronous API calls (Axios) for product retrieval, cart updates, and order processing.
          </li>
        </ul>
      </div>
      <div className="project-image">
        <img src={projectImage} alt="Project" />
      </div>
    </section>
  );
};

export default Project;
