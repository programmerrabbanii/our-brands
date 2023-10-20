
const AddProduct = () => {
    return (
        <div className="mt-12  ">
            <h3 className="text-center uppercase text-2xl mb-11">add product</h3>
           
            <form>
                <div>
                    <div className="max-w-2xl mx-auto">
                        <input className="border py-2 px-3 capitalize w-full mb-2" type="text" name="name"  placeholder="Name"/> <br />
                        <input className="border py-2 px-3 capitalize w-full mb-2"  type="text" name="photourl" placeholder="PhootURL" /> <br />
                      <input className="border py-2 px-3 capitalize w-full mb-2"  type="text" name="brand "  placeholder="brand name"/> <br />
                      <input className="border py-2 px-3 capitalize w-full mb-2"  type="text" name="prices" placeholder="Prices" /><br />
                      <input className="border py-2 px-3 capitalize w-full mb-2"  type="text" name="short" placeholder="short" /> <br />
                      <input className="border py-2 px-3 capitalize w-full mb-2"  type="text" name="rating" placeholder="rating" /> <br />
                      <input className="border bg-green-600  py-2 px-3 uppercase w-full mb-2"  type="submit" value="submit" />


                 </div>
                </div>
            </form>

        </div>
    );
};

export default AddProduct;