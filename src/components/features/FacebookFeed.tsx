interface FacebookFeedProps {
  pageUrl?: string;
  width?: number;
  height?: number;
}

function FacebookFeed({
  pageUrl = 'https://www.facebook.com/profile.php?id=100092857989783',
  width = 340,
  height = 500
}: FacebookFeedProps) {
  // Encode the page URL for use in the iframe src
  const encodedUrl = encodeURIComponent(pageUrl);
  const iframeSrc = `https://www.facebook.com/plugins/page.php?href=${encodedUrl}&tabs=timeline&width=${width}&height=${height}&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true`;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-sm uppercase font-semibold tracking-widest text-brand-blue mb-3">
            Stay Connected
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Latest Updates
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-600 mx-auto">
            Follow us on Facebook for the latest news, events, and messages from Pastor Stevens.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-[340px] bg-gray-50 rounded-xl overflow-hidden shadow-md">
            <iframe
              src={iframeSrc}
              width={width}
              height={height}
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Community House of Prayer Facebook Feed"
              className="w-full"
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href={pageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-brand-blue text-white font-semibold rounded-full hover:bg-blue-900 transition-colors"
          >
            Follow Us on Facebook
          </a>
        </div>
      </div>
    </section>
  );
}

export default FacebookFeed;
