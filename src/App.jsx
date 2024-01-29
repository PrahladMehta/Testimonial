import data from "./data.js";
import Testomonial from "./component/Testomonial.js"
import {useState} from "react";

function App() {

  const review=data;

  const [index,setIndex]= useState(0);

  function Increment(){

       if(index+1<review.length){
        
        setIndex(index+1);
       }else{
        setIndex(0);
       }
  }

  function Decrement(){

       if(index-1<0){
        setIndex(review.length-1);
       }else{
        setIndex(index-1);
       }
  }

  function Random(){
      
        let random=Math.floor(Math.random()*review.length);
        setIndex(random);
  }
   
  return (


   <div className="w-[100vw] h-[100vh] overflow-hidden bg-gray-200 flex justify-center items-center">

   
   <div className="h-auto w-auto">

      <div>
        <h1 className="text-center text-3xl font-bold ">Our Testimonials</h1>
        <div className="bg-purple-500 w-[130px] h-1 rounded-sm m-auto mt-1"></div>
      </div>

      <Testomonial review={review[index]} Increment={Increment}  Decrement={Decrement} Random={Random}></Testomonial>
    
      </div>
     
   </div>
  );
}

export default App;
