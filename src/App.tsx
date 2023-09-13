import { IoIosCall } from "react-icons/Io";

const App = () => {
  return (
    <div className="font-serif w-full h-screen bg-gray-400 flex justify-center items-center flex-col">
      <div className="min-w-[800px] rounded-md border flex flex-col">
        <div className="pl-7">
          <div className="mt-6 text-white font-semibold text-2xl ">
            Get in touch{" "}
          </div>
          <div className="text-sm text-white mt-[10px]">
            Want to get in touch? We'd love to hear from you. Here's <br /> how
            you can reach us
          </div>
        </div>
        <div className="mt-[40px] w-full h-auto flex justify-center">
          <div className="w-[95%] h-[250px] flex justify-between">
            <div className="w-[48%] h-full bg-purple-500 rounded-md  flex flex-col">
              <div className="w-full min-h-[60px] flex justify-center items-center  bg-white  flex-col">
                <div>
                  <IoIosCall className="text-4xl" />
                </div>
                <div className="text-[12px] mt-[5px]">Talk to Sales</div>
              </div>
              <div className="flex ">
                <div className="align-text-[center]">intrested in all sports software? just pick up the phone to chat with a member of our sales team.</div>
              </div>
            </div>
            {/* <div  className="w-[48%] h-full bg-purple-500 rounded-md">Right</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
