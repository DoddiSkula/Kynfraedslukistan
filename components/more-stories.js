import Container from "./container";
import PostPlug from "./post-plug";

export default function MoreStories({ posts }) {
  return (
    <section className="h-screen p-10">
      <Container>
        <article className="prose">
          <h2>Kennsluefni</h2>
        </article>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-8 lg:gap-x-4 gap-y-20 md:gap-y-32 mt-12">
          {posts.map((post) => (
            <PostPlug
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
