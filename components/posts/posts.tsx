import React from "react";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";

/**
 * The posts component has had it's styling removed, as it's currently
 * unused. This way it's classNames don't end up in the output CSS.
 * To re-add them, see:
 * https://github.com/tinacms/tina-cloud-starter/blob/main/components/posts/posts.tsx
 */

export const Posts = ({ data }) => {
  return <>
    {data.map((postData) => {
      const post = postData.node;
      return (
        (<Link
          key={post._sys.filename}
          href={`/post/` + post._sys.filename}
          passHref
          className="">

          <h3
            className={``}
          >
            {post._values.title}{" "}
            <span className="">

            </span>
          </h3>
          <div className="">
            <TinaMarkdown content={post._values.excerpt} />
          </div>
          <div className="">
            <div className="">
              <img
                className=""
                src={post?.author?.avatar}
                alt={post?.author?.name}
              />
            </div>
            <p className="">
              {post?.author?.name}
            </p>
            <span className="">
              —
            </span>
            <p className="">
              {post.date}
            </p>
          </div>

        </Link>)
      );
    })}
  </>;
};
