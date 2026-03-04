import { Link } from "react-router-dom";

export default function Blog() {
  const posts = [
    {
      slug: "retail-rollout-spain-guide",
      title: "How to Execute a Retail Rollout in Spain Without Delays",
      excerpt:
        "A practical guide for international brands planning multi-city retail deployments in Spain. Key risks, timelines, and execution structure.",
      category: "Retail Rollouts",
      date: "March 2026",
    },
    {
      slug: "installation-partner-spain",
      title: "Why International Brands Need a Local Installation Partner in Spain",
      excerpt:
        "Understanding the operational, legal, and logistical factors that impact retail and exhibition installations across Spanish cities.",
      category: "Operational Execution",
      date: "March 2026",
    },
    {
      slug: "exhibition-stand-installation-spain-guide",
      title: "Exhibition Stand Installation in Spain: What Agencies Must Know",
      excerpt:
        "Technical considerations, venue coordination, and on-site risk management for trade fairs and temporary activations.",
      category: "Exhibition & Stands",
      date: "March 2026",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-16 max-w-5xl">
      {/* Page Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Retail & Installation Execution Insights
        </h1>
        <p className="text-lg text-gray-600">
          Operational guidance for brands and agencies executing retail
          rollouts, store installations, and exhibition projects in Spain.
        </p>
      </header>

      {/* Blog List */}
      <section className="space-y-10">
        {posts.map((post, index) => (
          <article
            key={index}
            className="border-b pb-8 hover:opacity-90 transition"
          >
            <div className="text-sm text-gray-500 mb-2">
              {post.category} · {post.date}
            </div>

            <h2 className="text-2xl font-semibold mb-3">
              <Link to={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>

            <p className="text-gray-700 mb-4">{post.excerpt}</p>

            <Link
              to={`/blog/${post.slug}`}
              className="text-black font-medium hover:underline"
            >
              Read Article →
            </Link>
          </article>
        ))}
      </section>

      {/* Strategic CTA */}
      <section className="mt-16 p-8 bg-gray-100 rounded-xl">
        <h3 className="text-2xl font-semibold mb-4">
          Planning a Retail Rollout or Installation in Spain?
        </h3>
        <p className="text-gray-700 mb-6">
          MoveOps supports international brands and agencies with structured
          white-label and direct execution services across Spain.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg"
        >
          Discuss Your Project
        </Link>
      </section>
    </div>
  );
}