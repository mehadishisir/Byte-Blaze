import { useLoaderData } from "react-router";
import placeholderImage from "../../img/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();
  console.log(blog);
  const { cover_image, title, tags, url, body_html } = blog;

  return (
    // <div className="  ">
    <div className="max-w-full mx-auto group border-2 border-gray-300  p-2 rounded border-opacity-30% hover:no-underline focus:no-underline dark:bg-gray-50">
      <img
        className="object-cover w-full rounded h-44 "
        src={cover_image || placeholderImage}
      />
      <div>
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed ">
          {tags &&
            tags.map((tag) => (
              <a
                key={tag}
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-1 rounded-sm hover:underline "
              >
                #{tag}
              </a>
            ))}
        </div>
      </div>
      <div className="space-y-2">
        <a
          target="_blank"
          href={url}
          className="text-2xl font-semibold group-hover:underline group-focus:underline"
        >
          {title}
        </a>
        <div>
          <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default Content;
