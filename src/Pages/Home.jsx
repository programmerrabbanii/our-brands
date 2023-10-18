import { useLoaderData } from "react-router-dom";
import DisplayBand from "../Components/DisplayBand/DisplayBand";

const Home = () => {
    const barnds=useLoaderData()
   
   
    return (
        <div>
           


           <div>

           <div className="">
            <h4 className="text-center font-semibold uppercase py-6 text-5xl"> why cooes us</h4>
  <div className="hero-content flex-col gap-14 p-14 lg:flex-row">
   <div className="flex-1">
   <img src="https://i.ibb.co/0FKd7dG/2015-Honda-Civic-Concept-official-image-rear-three-quarter-900x600-370x214.jpg" className=" w-full rounded-lg shadow-2xl" />
   </div>
    <div className="flex-1">
      <h1 className="text-5xl font-bold">Mercedes-Benz!</h1>
      <p className="py-6 text-lg">Our band has a name in this world our band meet many demand in the market our band is wanted by everyone our band is very valuable brand this band is spread all over the world and will go far in future..</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>  
</div>
{/* car band section  */}


<div>

</div>

<div className="">
    {
        barnds.map(barnd=> <DisplayBand key={barnd.id} barnd={barnd}></DisplayBand>)
    }
</div>
            
        </div>
    );
};

export default Home;