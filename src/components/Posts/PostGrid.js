import { useState, useEffect } from "react";
import { Posts } from "@/api/posts";
import Link from "next/link";
import { map } from "lodash";
import { ENV } from "@/utils/constants";
import 'animate.css';

const postsCtrl = new Posts();

export default function PostsGrid({ sort = "desc", pageSize = 4, page = 1, onPageChange }) {
  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await postsCtrl.getPosts(sort, pageSize, page);
        setPosts(response.data);
        setPagination(response.meta?.pagination);
      } catch (error) {
        console.error("Error al obtener los posts:", error);
      }
    })();
  }, [sort, pageSize, page]);

   useEffect(() => {
      // Activa la animación cuando el componente monta
      setAnimate(true);
    }, []);

  return (
    <div className={`container-fluid mt-5 ${animate ? 'animate__animated animate__fadeInLeft' : ''}`}>
      <div className="grid-post-home">
        {posts &&
          map(posts, (post) => (
            <div key={post.id} className="card">
              <img
                src={`${ENV.SERVER_HOST}${post.thumbnail.url}`}
                className="card-img-top"
                alt={post.title}
              />
              <div className="card-body">
                <Link
                  href={`${post.url}?id=${post.id}`}
                  target="_blank"
                  className="card-title"
                >
                  {post.title}
                </Link>
                <Link
                  href={`${post.url}?id=${post.id}`}
                  className="btn btn-primary btn-post"
                >
                  Leer más
                </Link>
              </div>
            </div>
          ))}
      </div>

      {/* PAGINACIÓN solo si se pasa la prop */}
      {onPageChange && pagination && (
        <div className="d-flex justify-content-center mt-4 gap-3">
          <button
            className="btn btn-outline-secondary fs-3 border-primary"
            onClick={() => onPageChange(page - 1)}
            disabled={page <= 1}
          >
            Anterior
          </button>
          <span className="align-self-center fs-4">Página {page}</span>
          <button
            className="btn btn-outline-secondary fs-3 border-primary text-dark"
            onClick={() => onPageChange(page + 1)}
            disabled={page >= pagination.pageCount}
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
}
