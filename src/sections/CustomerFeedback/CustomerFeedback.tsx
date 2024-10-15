import { AiFillStar } from "react-icons/ai";
import CommentCard from "../../components/CommentCard";

const CustomerFeedback = () => {
  return (
    <>
      <div className="h-[100vh] w-full bg-[#faf8fb]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col">
            <div
              className="mt-12 text-[20px] font-medium text-[#46D993]"
              style={{ letterSpacing: "0.2em" }}
            >
              Customer Feedback
            </div>
            <div className="text-[36px] font-bold text-black">
              What Our Customers Are Saying
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4">
            {/* 1/4th Column */}
            <div className=" border  rounded-lg  md:col-span-1 ">
              <div className="px-8 py-8">
        <div className="mt-14 justify-center flex ">
          <img className="object-cover "  src="https://drivco-wp.b-cdn.net/wp-content/uploads/2023/09/google-logo.svg"></img>
        </div>
        <div className="flex justify-center">
          <AiFillStar size={20} color="#de9621"/>
          <AiFillStar size={20} color="#de9621"/>
          <AiFillStar size={20} color="#de9621"/>
          <AiFillStar size={20} color="#de9621"/>
          <AiFillStar size={20} color="#de9621"/>

        </div>
        <div className="text-[16px] flex justify-center ">Based on 1580 Reviews</div>


        <div className="border-t border-gray-300 mt-14"></div>
        <div className="mt-14 justify-center flex ">
          <img className="object-cover "  src="https://drivco-wp.b-cdn.net/wp-content/uploads/2023/09/google-logo.svg"></img>
        </div>
        <div className="flex justify-center">
          <AiFillStar size={20} color="#de9621"/>
          <AiFillStar size={20} color="#de9621"/>
          <AiFillStar size={20} color="#de9621"/>
          <AiFillStar size={20} color="#de9621"/>
          <AiFillStar size={20} color="#de9621"/>

        </div>
        <div className="text-[16px] flex justify-center ">Based on 1580 Reviews</div>


        </div>

            </div>
                
            {/* 3/4th Column */}
            <div className=" md:col-span-3 ">
            <div className="flex space-x-6">
                <CommentCard
                  rating={5}
                  image="https://drivco-wp.b-cdn.net/wp-content/uploads/2023/09/google-logo.svg"
                  description="Drivco-Agency customer feedback is an invau-able source of literature from 45 BC, making it over 2000 years old."
                  Name="Gaurav"
                />

               <CommentCard
                  rating={3}
                  image="https://drivco-wp.b-cdn.net/wp-content/uploads/2023/09/google-logo.svg"
                  description="Drivco-Agency customer feedback is an invau-able source of literature from 45 BC, making it over 2000 years old."
                  Name="Ashutosh"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerFeedback;
