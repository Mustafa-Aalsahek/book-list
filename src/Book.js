import React from "react";

const Book = (props) => {
  const { img, title, author } = props.book;

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <p>{author}</p>
      {/* {props.children} */}
    </article>
  );
};

export default Book;
