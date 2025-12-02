import React from "react";
import "./AddBooks.css";

function AddBooks() {
  return (
    <div className="addbooks-wrapper">
      <form className="addbooks-card">

        <h3>Add Book</h3>

        <label>Book Name:</label>
        <input type="text" name="book" placeholder="Book Name" />

        <label>Book Image URL:</label>
        <input type="url" name="image" placeholder="Book Image URL" />

        <label>Author Name:</label>
        <input type="text" name="author" placeholder="Author Name" />

        <label>Book Description:</label>
        <input type="text" className="desc" name="description" placeholder="Book Description" />

        <label>Book Price:</label>
        <input type="number" name="price" placeholder="Book Price" />

        <label>Category:</label>
        <input type="text" name="category" placeholder="Category" />

        <button className="add-btn" type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBooks;
