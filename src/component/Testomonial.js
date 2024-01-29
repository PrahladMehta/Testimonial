import { ImQuotesLeft,ImQuotesRight} from "react-icons/im";
import {FaGreaterThan,FaLessThan} from "react-icons/fa";

function Testomonial(props){

      const data=props.review;

      const Increment=props.Increment;
      const Decrement=props.Decrement;
      const Random=props.Random;
      return(
            <div className="w-[600px] h-auto bg-white p-10 mt-10 rounded-lg hover:shadow-lg transition-all duration-200 relative">

            
                  <img src={data.image} className="rounded-full w-[100px] shadow-[6px_-6px_#A855F7] absolute top-[-50px] " alt="Image"></img>
          

            <div className="text-center">
                  <h1 className="text-2xl font-bold mt-1">{data.name}</h1>
                  <p className="text-purple-400 leading-3">{data.job}</p>
                  <ImQuotesLeft className="text-purple-500 mt-6 mb-4 mx-auto"> </ImQuotesLeft>
                  <p className="font-normal">
                        {data.text}
                  </p>
                  <ImQuotesRight className="text-purple-500 mb-6 mt-4 mx-auto"></ImQuotesRight>
               
                  <div className="text-xl" >
                  <button onClick={Decrement} className="text-purple-500 mr-3">
                  <FaLessThan/>
                  </button>
                  <button onClick={Increment} className="text-purple-500 ml-3">
                 
                  <FaGreaterThan/>
                  </button>
                  </div>

                  <button  onClick={Random} className="bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-md px-8 py-2 mt-4">Random review</button>

            </div>



            </div>

      );

}

export default Testomonial;

