import { IoIosCall, IoIosChatbubbles } from "react-icons/Io";

const App = () => {
  return (
    <div className="font-serif w-full h-screen bg-[#2f3e4d] flex justify-center items-center flex-col">
      <div className="min-w-[870px] rounded-md border flex flex-col bg-[#3E5A74]">
        <div className="pl-7">
          <div className="mt-6 text-white font-semibold text-2xl ">
            Get in touch{" "}
          </div>
          <div className="text-sm text-white mt-[10px]">
            Want to get in touch? We'd love to hear from you. Here's <br /> how
            you can reach us
            
          </div>
        </div>
        <div className="mt-[40px] w-full h-auto flex justify-center bg-white">
          <div className="w-[95%] h-[250px] flex justify-between mt-[-25px]">
            <div className="max-w-[400px] h-full bg-white shadow-xl rounded-[4px]  flex flex-col">
              <div className="w-full min-h-[60px] flex justify-center items-center flex-col">
                <div className="px-2 py-1 bg-gray-300 rounded-md mt-1  ">
                  <IoIosCall className="text-4xl " />
                </div>
                <div className="text-[12px] mt-[5px] font-bold">
                  Talk to Sales
                </div>
              </div>
              <div className="flex ">
                <div className="w-full text-center mt-1 ">
                  intrested in all sports software? just pick up the phone to
                  chat with a member of our sales team.
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="mt-3 items-center flex font-mono">
                  +234987654321
                </div>
                <div className="mt-[20px] font-mono ">
                  View all global numbers
                </div>
              </div>
            </div>
            <div className="max-w-[400px] h-full bg-white shadow-xl rounded-[4px]  flex flex-col">
              <div className="w-full min-h-[60px] flex justify-center items-center flex-col">
                <div className="px-2 py-1 bg-gray-300 rounded-md mt-1  ">
                  <IoIosChatbubbles className="text-4xl " />
                </div>
                <div className="text-[12px] mt-[5px] font-bold">
                  Contact Customer Care
                </div>
              </div>
              <div className="flex ">
                <div className="w-full text-center mt-1 ">
                  Sometimes you need a little help from your freinds. Or a
                  HubSpot support rep. Don't worry...we're here for you.
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="mt-[20px]">
                  <button className="px-3 py-2 bg-orange-400 rounded-[4px] text-white">Contact Support</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
