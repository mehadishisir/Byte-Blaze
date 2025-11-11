import { Link } from "react-router";
import placeholderImage from "../../../img/404.jpg";
const Blog = ({ blog }) => {
  const { title, published_at, description, social_image, id } = blog;
  return (
    <Link
      to={`/blogs/${id}`}
      className="max-w-sm mx-auto group border-2 hover:scale-105 border-primary hover:border-secondary rounded border-opacity-30% transition hover:no-underline focus:no-underline dark:bg-gray-50"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded dark:bg-gray-500"
        src={social_image || placeholderImage}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline  group-focus:underline">
          {title}
        </h3>
        <span className="text-xs dark:text-gray-600">{published_at}</span>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default Blog;
