import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { data } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {
        data.map((book) => {
          return <Book key={book.id} book={book} />;
        })
        /* <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos officia
          nesciunt, quod nulla porro eos explicabo repellat et nihil illo nemo
          dicta perferendis, libero ad?
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      /> */
      }
    </section>
  );
}

/* const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <p>{author}</p>
       {props.children}
    </article>
  );
}; */

ReactDom.render(<BookList />, document.getElementById("root"));
