function DisplayCard({ id, title, description, imageUrl, alt }) {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg" id={id}>
        <img className="w-full" src={imageUrl} alt={alt} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <div className="text-gray-700 text-base">{description}</div>
        </div>
      </div>
    </>
  );
}

export default DisplayCard;
