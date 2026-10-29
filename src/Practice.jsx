import { useEffect, useState } from "react"
import { products } from "./Share/Constant/ProductData";
import axios from "axios";

export default function Practice() {

    const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function apiData() {

        try {
            setLoading(true);
            const res = await axios.get('https://dummyjson.com/carts')
            // const data = await resp.json()
            setCart(res.data.carts)

        } catch (err) {
            console.error("error is :", err.message);
            setError(err.message);
        }
        finally {
            setLoading(false);
            // setError(null);
        }
    }


    const product = cart?.flatMap(q => q.products)

    //   console.log(product);

    useEffect(() => {
        apiData()
    }, [])


    return (
        <>
            {/* 
            {loading && <p className="text-2xl text-red-700 text-center">
                Loading
            </p>}

            {error && <p className="text-2xl text-red-700 text-center">
                {error}
            </p>}


            <div className="grid w-full p-4 my-24">

                {product?.map((item, id) =>

                    <div key={`${id}-${item.id}`} className="border p-3">
                        <p className="">{item.title}</p>
                        <p className="">{item.price}</p>
                        <p className="">{item.quantity}</p>

                        <img src={item.thumbnail} alt="error" />
                    </div>
                )}
            </div> */}

            {/* Animated Background */}
            <div className="border-2 fixed inset-0 -z-10 overflow-hidden bg-[#f5f7f2]">

                <div className="absolute border-2 top-20 left-20
                w-80 h-80 bg-[#b8d8b0]/90 rounded-full
                 animate-fade-in">
                </div>

                <div className="absolute top-1/3 border-2 right-20
                 w-96 h-96 bg-[#8ebc91]/30 rounded-full
                 animate-float-delayed">
                </div>

                <div className="absolute border-2 bottom-0 left-0
                w-80 h-80 bg-[#dce9d5]/80 rounded-full
                 animate-float">
                </div>

            </div>

        </>
    )
}