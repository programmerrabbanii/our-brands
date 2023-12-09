
const AddProduct = () => {
    const handlerUpdate= e=>{
        

        e.preventDefault();
        
        const name=e.target.name.value;
        const photourl=e.target.photourl.value;
        // const brand=e.target.brand.value;
        const prices=e.target.prices.value;
        const short=e.target.short.value;
        const rating=e.target.rating.value;
        const brand=e.target.brand.value;

        const totalUpdate={
            name,photourl,prices,short,rating, brand
        }
        console.log(totalUpdate)
        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                'content-type': 'applacation/json'
            },
            body:JSON.stringify(totalUpdate)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
        

    }
    
    return (

        
        <div className="mt-12  ">
            <h3 className="text-center uppercase text-2xl mb-11">add product</h3>
           
            <form onSubmit={handlerUpdate}>
              
                    <div className="max-w-2xl mx-auto">
                        <input className="border py-2 px-3 capitalize w-full mb-2" type="text" name="name"  placeholder="Name"/> <br />
                        <input className="border py-2 px-3 capitalize w-full mb-2"  type="text" name="photourl" placeholder="PhootURL" /> <br />

                      
                      <input className="border py-2 px-3 capitalize w-full mb-2" type="text" name="brand" placeholder="brand" />

                      <input className="border py-2 px-3 capitalize w-full mb-2"  type="text" name="prices" placeholder="Prices" /><br />
                      <input className="border py-2 px-3 capitalize w-full mb-2"  type="text" name="short" placeholder="short" /> <br />
                      <input className="border py-2 px-3 capitalize w-full mb-2"  type="text" name="rating" placeholder="rating" /> <br />
                      <input className="border bg-green-600  py-2 px-3 uppercase w-full mb-2"  type="submit" value="submit" />


                 </div>
              
            </form>

        </div>
    );
};

export default AddProduct;