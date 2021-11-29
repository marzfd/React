const Guarantee = ({
  img,
  title,
  description,
}) => {
  return (
    <div className="item">
      <img src={img}  height="80" width="100" alt="guarantee" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Guarantee;