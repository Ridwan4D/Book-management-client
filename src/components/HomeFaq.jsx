const HomeFaq = () => {
  return (
    <div>
      <div className="text-center my-10">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          FAQ
        </h1>

        <p className="mx-auto mt-4 text-gray-500 md:px-20">
          Welcome to our FAQ section! Here, you will find answers to commonly
          asked questions about our book library website. Whether you are
          wondering how to borrow books, renew your loans, or suggest a new
          purchase, we have got you covered. If you don not find the answer you
          are looking for, feel free to reach out to our friendly support team
          for further assistance.
        </p>
      </div>
      <div className="space-y-2">
        <div className="collapse collapse-plus bg-orange-400 text-white">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            How do I borrow books from the library?
          </div>
          <div className="collapse-content">
            <p>
              Borrowing books from our library is easy! Simply sign up for an
              account on our website, browse our extensive collection, and click
              on the book you'd like to borrow. Follow the prompts to complete
              the borrowing process. You can borrow books for a specified
              period, and they will automatically be returned on the due date.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-orange-400 text-white">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Can I renew my borrowed books?
          </div>
          <div className="collapse-content">
            <p>
              Yes, you can! If you need more time with a book, you can renew it
              as long as no one else has placed a hold on it. Log in to your
              account, go to your borrowed items, and select the option to
              renew. If the book is eligible for renewal, the due date will be
              extended, giving you more time to enjoy your reading.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-orange-400 text-white">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            What if I can not find a specific book in the libraries collection?
          </div>
          <div className="collapse-content">
            <p>
              {" "}
              If you can not find a particular book in our collection, do not
              worry! You can suggest it for purchase through our website. Simply
              navigate to the 'Suggest a Purchase" section and fill out the form
              with the details of the book you did like to see added to our
              library. While we can not guarantee that all suggestions will be
              purchased, we value your input and will consider each suggestion
              carefully.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFaq;
