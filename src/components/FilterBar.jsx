import { useEffect,useState } from "react"
import { fetchAllProducts } from "../utils/api"

export default function FilterBar(){
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  

useEffect(()=>{
  setIsLoading(true);


  async function getData() {
    
    try{
      
      const data= await fetchAllProducts()
      setProduct(data);
    } catch(error){
      setError(error.message);
    }
    finally{
      setIsLoading(false)
    }
    
  }
    getData()

},[])


const categories = [... new Set (product.map(item=> item.category))]

    console.log(categories)



    return (
        <div>

                <form action="">

                        <select name="" id="">
                                <option value="">low to high</option>
                                <option value="">high to low</option>
                        </select>

                        <input type="text" />


                </form>

                        <ul>

                    {categories.map(item=>{
                        return<li>{item}</li>
                        
                    })}

                    </ul>

        </div>



    )




}