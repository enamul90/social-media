import authorStore from "@/store/authorStore.js";

const ImageGallery = () => {
  const { imageGallery } = authorStore();

  if (imageGallery === null) {
    return (
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-gray-300 h-60 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105"
            ></div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {imageGallery?.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-xl cursor-pointer border border-gray-200 hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={img}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-60 object-cover rounded-lg transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default ImageGallery;
