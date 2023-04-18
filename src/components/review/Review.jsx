import React, { useEffect } from "react";

import { useState } from "react";
import styles from "./review.css";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const storedReviews = localStorage.getItem("reviews");
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const comment = form.comment.value;
    const newReview = { name, comment };
    setReviews([...reviews, newReview]);
    form.reset();
  };

  return (
    <div
      className="reviews"
      style={{ borderRadius: "0 0 20px 20px", display: "none" }}
    >
      <h2>О нас говорят:</h2>
      <ul className="reviews__list">
        {reviews.map((review, index) => (
          <li key={index} className="reviews__item">
            <h3 className="reviews__name">{review.name}</h3>
            <p className="reviews__comment">{review.comment}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddReview} className="reviews__form">
        <label htmlFor="name" className="reviews__label">
          Ваше имя:
        </label>
        <input
          placeholder="Введите имя"
          type="text"
          id="name"
          name="name"
          required
          className="reviews__input"
        />
        <label htmlFor="comment" className="reviews__label">
          Отзыв:
        </label>
        <textarea
          id="comment"
          name="comment"
          required
          className="reviews__input"
          placeholder="Оставьте отзыв"
        ></textarea>
        <button className="button-comment" type="submit">
          Оставить отзыв
        </button>
      </form>
    </div>
  );
}

export default Reviews;
