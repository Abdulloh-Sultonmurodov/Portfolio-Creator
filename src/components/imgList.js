const ImageList = ({ item }) => {
  return (
    <li className="limage">
      <img src={item.img} alt="Projects image" width={486} height={305} />
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
