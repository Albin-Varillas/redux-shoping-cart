import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../store/cartSlice"

export default function ProductItems() {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        async function getProducts() {
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json()
            console.log(data)
            setProducts(data)
        }
        getProducts()
    }, [])

    return (
        <div>
            <h1 className="text-3xl font-bold">view of products </h1>
            <div className="grid  gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product) => (
                    <div
                        onClick={() => {
                            dispatch(addToCart(product))
                        }}
                    >
                        <img
                            src={product.image}
                            alt=""
                            className="w-full h-52 object-contain"
                        />
                        {product.title}
                    </div>
                ))}
            </div>
        </div>
    )
}
