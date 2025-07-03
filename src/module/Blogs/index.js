import { ArrowRight } from "../../assets/icons";
import BlogsList from "../../components/blogsList";

import "./blogs.css";
function Blogs() {
  const blogs = [
    {
      id: 1,
      content: "April 16, 2021 .6 mins",
      title: "Design tips for designers, that cover everything you need",
      href: "Read the article",
      icon: <ArrowRight />,
    },
    {
      id: 2,
      content: "April 16, 2021 .6 mins",
      title: "How to build rapport with your web design clients",
      href: "Read the article",
      icon: <ArrowRight />,
    },
    {
      id: 3,
      content: "April 16, 2021 .6 mins",
      title: "Top 6 free website mockup tools 2021",
      href: "Read the article",
      icon: <ArrowRight />,
    },
    {
      id: 4,
      content: "April 16, 2021 .6 mins",
      title: "Logo design trends to avoid in 2021",
      href: "Read the article",
      icon: <ArrowRight />,
    },
    {
      id: 5,
      content: "April 16, 2021 .6 mins",
      title: "22 best UI design tools",
      href: "Read the article",
      icon: <ArrowRight />,
    },
  ];
  return (
    <section className="blogs">
      <div className="container blogs-wrapper">
        <div className="blogs-left-wrapper">
          <strong>Blogs</strong>
          <h3>Latest Blogs</h3>
          <a href="#">
            View all
            <ArrowRight />
          </a>
        </div>
        <div className="blogs-right-wrapper">
          <ul className="blogs-right-ul">
            {blogs.map((item) => (
              <BlogsList key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
