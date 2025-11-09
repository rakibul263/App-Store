import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function Review() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState("");

  const handleSubmit = () => {
    if (!review.trim()) return alert("Write something!");
    const savedReviews =
      JSON.parse(localStorage.getItem(`reviews-${id}`)) || [];
    const updatedReviews = [...savedReviews, review];
    localStorage.setItem(`reviews-${id}`, JSON.stringify(updatedReviews));
    navigate(`/appDetails/${id}`);
  };

  return (
    <div className="max-w-lg mx-auto mt-16 bg-white p-6 shadow-xl rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Write a Review</h2>

      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        className="w-full border p-3 rounded-lg h-32 focus:outline-blue-500"
        placeholder="Write your experience..."
      ></textarea>

      <button
        onClick={handleSubmit}
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
      >
        Submit Review
      </button>
    </div>
  );
}
