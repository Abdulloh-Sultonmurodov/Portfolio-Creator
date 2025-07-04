const ImageList = ({ item }) => {
  return (
    <li>
      <img src={item.img} alt="Projects image" />
      <div>
        <strong>{item.strong}</strong>
        <h3>{item.title}</h3>
        <a href="#">
          {item.page}
          {item.icon}
        </a>
      </div>
    </li>
  );
};

export default ImageList;
