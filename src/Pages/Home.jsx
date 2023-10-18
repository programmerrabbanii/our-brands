import { useLoaderData } from "react-router-dom";
import DisplayBand from "../Components/DisplayBand/DisplayBand";

const Home = () => {
    const barnds=useLoaderData()
   
   
    return (
        <div>
           


           <div>

           <div className="">
            <h4 className="text-center font-semibold uppercase py-6 text-5xl"> why Choice us</h4>
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

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-14 gap-10">
    {
        barnds.map(barnd=> <DisplayBand key={barnd.id} barnd={barnd}></DisplayBand>)
    }
</div>
     <div>
        <h3 className="text-center text-4xl py-8 font-semibold first:" >RECENT POSTS</h3>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-11 p-14 ">
     <div className=" bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/2MrBbTc/vehicles-images-4-370x214.webp" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">2017 Mercedes-AMG C63 Coupe</h2>
    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It </p>
   
  </div>
</div>

<div className=" bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/MMCz8TN/2015-Honda-Civic-Concept-official-image-rear-three-quarter-900x600-370x214.webp" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">2015 BMW M3 vs. 2015 Mercedes-AMG</h2>
    <p>It is a long established fact that a reader will be distracted by the </p>
   
  </div>
</div>



<div className=" bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/wrgwfTg/toyota-tacoma-370x214.webp" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">These ten amazing cars are being sold</h2>
    <p>Tristique feugiat ligulaetiam tellus volutpatetiam, orci magna mi. Convalliscurabitur </p>
    
  </div>
</div>

<div className=" bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/XF2PV9p/2011-Lamborghini-Gallardo-LP550-2-Spyder-Profile-370x214.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">2015 BMW M3 vs. 2015 Mercedes-AMG</h2>
    <p>Turpisnullam aliquamvivamus magnis dui purus mus, purusetiam adipiscing </p>
    
  </div>
</div>
     </div>

     <div>
            <h3 className=" text-4xl py-11 text-center">EXCELLENT WORKERS</h3>
        </div>
     <div  className="grid grid-cols-1 md:grid-2 
     lg:grid-cols-2 gap-8 p-14 mt-11">
        
     <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/vVRykpq/worker-03.png" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">DAVID MARTIN</h2>
    <h3>MACHANIC EXPERT</h3>
    <h4>PHONE:+61 123 456 789</h4>
    <p>EMAIL: EXAMPLE@INFO.COM</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Show More</button>
    </div>
  </div>
</div>

<div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/nzTQ7m2/worker-01.png" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">ROCK LANCER</h2>
    <p>CHIEF MACHANIC</p>
    <h5>PHONE:+61 123 456 789</h5>
    <p>EMAIL: EXAMPLE@INFO.COM</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Show more</button>
    </div>
  </div>
</div>
     </div>
            
        </div>
    );
};

export default Home;