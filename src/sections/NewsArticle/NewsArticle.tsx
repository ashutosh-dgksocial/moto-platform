import { IoMdContact } from "react-icons/io";

const articles = [
  {
    id: 1,
    title: "The Future of Electric Cars: What to Expect in the Next Decade",
    image: "https://drivco-wp.b-cdn.net/wp-content/uploads/2023/09/blog-12-400x250.jpg",
    author: "Shafiqul",
    date: "September 24, 2023",
  },
  {
    id: 2,
    title: "How to Maintain Your Vehicle’s Resale Value: Expert Insights",
    image: "https://drivco-wp.b-cdn.net/wp-content/uploads/2023/09/blog-12-400x250.jpg",
    author: "Shafiqul",
    date: "September 26, 2023",
  },
  {
    id: 3,
    title: "SUV vs. Sedan Choosing the Right Vehicle for Your Lifestyle",
    image: "https://drivco-wp.b-cdn.net/wp-content/uploads/2023/09/blog-12-400x250.jpg",
    author: "Shafiqul",
    date: "October 1, 2023",
  },
];

const NewsArticle = () => {
  return (
    <div className="h-auto w-full bg-[#faf8fb] pb-6">
      <div className="container mx-auto px-6 ">
        <div className="flex flex-col">
          <div
            className="mt-12 text-[20px] font-medium text-[#46D993]"
            style={{ letterSpacing: "0.2em" }}
          >
            News & Article
          </div>
          <div className="text-[36px] text-black font-bold">
            The Latest News Car & Bids
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {articles.map((article) => (
            <div
              key={article.id}
              className="col-span-1 bg-white p-3 shadow-lg rounded-lg"
            >
              <div className="rounded-lg">
                <img
                  className="h-auto w-full object-cover"
                  src={article.image}
                  alt={article.title}
                />
              </div>
              <div className="px-4 text-[20px] font-medium mt-4">
                {article.title}
              </div>
              <div className="border-t border-gray-200 mt-2"></div>

              <div className="flex mt-4">
                <div>
                  <IoMdContact size={50} />
                </div>
                <div className="flex flex-col ml-2">
                  <div className="text-[16px] font-semibold">{article.author}</div>
                  <div className="text-[12px] text-[#5E5E5E]">
                    Posted On - {article.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
