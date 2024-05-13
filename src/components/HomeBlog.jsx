const HomeBlog = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              From the blog
            </h1>

            <p className="mx-auto mt-4 text-gray-500">
              Dive into a treasure trove of literary delights with our blog
              section. Here, we share captivating insights, book reviews, author
              interviews, and literary recommendations to ignite your passion
              for reading. Join us on a journey through the enchanting realms of
              fiction, the intriguing corridors of history, and the inspiring
              depths of non-fiction.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            <div>
              <img
                className="relative z-10 object-cover w-full rounded-md h-96"
                src="https://i.ibb.co/kH0Q1Ms/istockphoto-1092170968-612x612.jpg"
                alt=""
              />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a
                  href="#"
                  className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                >
                  Exploring History: A Journey Through Time
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  Step into the fascinating world of history with our collection
                  of captivating books. From ancient civilizations to modern
                  revolutions, our library offers a treasure trove of insights
                  into the past.
                </p>

                <p className="mt-3 text-sm text-blue-500">21 October 2019</p>
              </div>
            </div>

            <div>
              <img
                className="relative z-10 object-cover w-full rounded-md h-96"
                src="https://i.ibb.co/Ydy6sRv/photo-1610116306796-6fea9f4fae38.jpg"
                alt=""
              />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a
                  href="#"
                  className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                >
                  Immerse Yourself: Dive into the World of Fiction with Our
                  Novel Collection
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  Looking for an escape from the ordinary? Dive into the
                  captivating world of fiction with our diverse collection of
                  novels....
                </p>

                <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBlog;
