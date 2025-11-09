import React from "react";

const Slider = () => {
  return (
    <div className="carousel carousel-end rounded-box space-x-4 mt-10">
      {[
        "https://cdn.dribbble.com/userupload/34404051/file/original-0aa716cfb76b2556016ae38efb4e4283.png?resize=752x&vertical=center",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRGdlj7OWsk_HxZYuCdL9cQBcaKR_lVo0qw&s",
        "https://cdn.setapp.com/blog/images/istat-menus-preview-image-340x135@2x.png",
        "https://cdn.dribbble.com/userupload/3536701/file/original-7b5a2878802bf6e0fdae64c4f9658330.png?resize=400x0",
        "https://i.pinimg.com/736x/67/3a/78/673a7808387f139aec45795798c0d6ee.jpg",
        "https://i.pinimg.com/originals/0e/e7/11/0ee71135292998499491a9fb54280a36.jpg",
        "https://cdn.dribbble.com/userupload/10867806/file/original-4062891ad1a2cd5e4452dba3e25bd68e.png?format=webp&resize=400x300&vertical=center",
        "https://i.pinimg.com/originals/6c/ce/99/6cce99c372b85e0b0cdf72eb749bbf2d.png",
        "https://i.pinimg.com/originals/62/05/b2/6205b25fdd8949ae4a30303b0806c7ed.png",
      ].map((url, index) => (
        <div key={index} className="carousel-item">
          <img
            src={url}
            alt={`Slide ${index + 1}`}
            className="w-64 h-40 object-cover rounded-lg shadow-md"
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;
