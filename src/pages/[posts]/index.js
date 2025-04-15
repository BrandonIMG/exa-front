import { PageLayout } from "@/layouts/PageLayout";
import { singlePost } from "@/api/singlePost";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import PostsHome from "@/components/Posts/Posts";
import { ENV } from "@/utils/constants";

const singlePostCtr = new singlePost();

export default function LaRecompexa() {
  const [post, setPost] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return; // evita ejecutar si aún no está el ID

    const fetchPost = async () => {
      try {
        const response = await singlePostCtr.getSingelPost(id);
        setPost(response.data);
      } catch (error) {
        console.error("Error al obtener el post:", error);
      }
    };

    fetchPost();
  }, [id]); // <- importante

  return (
    <PageLayout>
        <div className="my-5 container-xl"> 
            {!post ? (
                <p>Cargando...</p>
            ) : (
                <article className="d-flex flex-column justify-content-center post-container">
                <h1 className="display-3 fw-bold text-center mb-5">{post[0]?.title}</h1>
                <img src={`${ENV.SERVER_HOST}${post[0].thumbnail.url}`} className="post-thubnail"/>
                <p dangerouslySetInnerHTML={{ __html: post[0]?.content }} />
                </article>
            )}
        </div>
        <div className="container-xl">
          <h3>Te podría interesar</h3>
          <PostsHome sort="desc" limit="4"></PostsHome>
        </div>

    </PageLayout>
  );
}
