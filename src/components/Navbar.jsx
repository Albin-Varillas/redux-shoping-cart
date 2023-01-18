import React from "react"
import { useSelector } from "react-redux"

export default function Navbar() {
    const cart = useSelector((state) => state.cart.products)
    console.log(cart)
    return (
        <div className="bg-amber-100 px-4 py-8 flex justify-between">
            <h1 className="text-amber-800 font-bold text-xl">
                My shopping cart
            </h1>
            <div className="bg-red-500 relative w-20">
                Cart
                <div className="absolut text-xs w-5 h-5 bg-blue-500 rounded-full -top-2 -right-2">
                    {cart.length}
                </div>
            </div>
        </div>
    )
}
