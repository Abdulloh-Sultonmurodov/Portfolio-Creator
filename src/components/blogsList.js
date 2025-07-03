const BlogsList = ({ item }) => {
  return (
    <li>
      <p>{item.content}</p>
      <h4>{item.title}</h4>
      <a href="#">
        {item.href}
        {item.icon}
      </a>
    </li>
  );
};
export default BlogsList;
