const ServiceList = ({ item }) => {
  return (
    <li>
      <img src={item.img} alt="Services image" width={70} height={70} />
      <h3>{item.title}</h3>
      <p>{item.content}</p>
      <ul className="service-span-list">
        <li>
          <p>
            <span></span>
            {item.liContent1}
          </p>
        </li>
        <li>
          <p>
            <span></span>
            {item.liContent2}
          </p>
        </li>
        <li>
          <p>
            <span></span>
            {item.liContent3}
          </p>
        </li>
      </ul>
    </li>
  );
};

export default ServiceList;
