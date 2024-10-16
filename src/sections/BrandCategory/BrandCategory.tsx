type Props = {};

const BrandCategory = (props: Props) => {
  return (
    <div className="bg-white">
      <div className="mx-auto my-28 max-w-screen-2xl md:px-32 px-4">
        <div className="grid grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="relative flex min-h-[180px] flex-col items-center justify-center gap-4 rounded-xl p-6 overflow-hidden transition-all duration-300 group cursor-pointer bg-[#faf8fb]"
            >
              {/* Gradient Image */}
              <div
                className="cursor-pointer absolute inset-0 bg-cover bg-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{
                  backgroundImage: 'url(images/gradient.png)',
                }}
              />
              <div className="flex w-full justify-center relative z-10">
                <img
                  src={"images/audi.svg"}
                  alt={`Brand Icon ${index + 1}`}
                  className="h-auto w-full max-w-[50px] object-contain"
                />
              </div>
              <div className="flex w-full justify-center relative z-10">
                <img
                  src={"images/car.svg"}
                  alt={`Brand Icon ${index + 1}`}
                  className="h-auto w-full max-w-[100px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center text-center">
          <p className="mr-2">There has 30+ Brand Category Available</p>
          <button className="transform rounded-full border-2 border-[#bff2dc] bg-white px-6 py-1 font-bold text-[#bff2dc] transition duration-300 ease-in-out hover:scale-105 hover:bg-[#bff2dc] hover:text-white">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandCategory;