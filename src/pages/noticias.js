import { useState } from "react";
import { PageLayout } from "@/layouts/PageLayout";
import PostsHome from "@/components/Posts/Posts";

export default function Noticias() {
  const [page, setPage] = useState(1);

  return (
    <PageLayout>
      <div className="mt-5">
        <h1 className="fw-bold display-3 text-center">Noticias</h1>
        <PostsHome
          sort="desc"
          limit={4}
          page={page}
          onPageChange={setPage}
        />
      </div>
    </PageLayout>
  );
}
