import React from 'react'
import { useCart } from '../context/CartContext'
import { MapPin, Package, Zap } from 'lucide-react'
import OrderConfirmation from '../pages/OrderConfirmation'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Checkout = () => {

  const { cartTotal, clearCart, cart } = useCart();
  const [isConfirmed, setIsConfirmed] = useState(false)


  const [deliveryDetails, setdeliveryDetails] = useState({
    name: "",
    address: "",
    city: "",
    zip: ""
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setdeliveryDetails(prev => ({ ...prev, [name]: value }))
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    clearCart();
    setIsConfirmed(true);

  }

  if (isConfirmed)
    return <OrderConfirmation deliveryDetails={deliveryDetails} />


  return (
    <>
      <div className="container max-w-7xl m-auto px-4 md:px-8 pt-8">
        <h2 className='font-bold text-5xl text-white mb-10 tracking-tight'>Finalize Order</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          <div className='lg:col-span-2 p-8 bg-gray-900 rounded-2xl
                           shadow-2xl border-gray-800 '>

            <h3 className='flex items-center text-orange-400 text-2xl font-bold border-b border-gray-700 pb-4 space-x-4'>
              <MapPin className='text-orange-500 w-7 h-7' />
              <span> Shipping Information</span>
            </h3>

            <form onSubmit={handlesubmit} className='space-y-6'>

              {Object.keys(deliveryDetails).map((key) => (

                <div key={key}>
                  <label htmlFor={key} className='block text-gray-300 capitalize tracking-wide pt-4 text-[18px] text-sm font-semibold'>
                    {key === "zip" ? "pin Code" : key}
                  </label>

                  <input type={key === "zip" ? "number" : "text"}
                    id={key}
                    name={key}
                    value={deliveryDetails[key]}
                    required
                    onChange={handleChange}
                    className='mt-1 block w-full px-5 py-3 border border-gray-700
                               rounded-xl shadow-inner text-white bg-gray-800 placeholder:gray-500'
                  />
                </div>
              ))}


              <div className='pt-4'>
                <button type='submit'
                  to='/'
                  className="w-full py-4 bg-orange-600 text-white font-extrabold text-xl rounded-full 
              shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center
               justify-center space-x-2 transform hover:ring-4 hover:ring-pink-600/50 uppercase tracking-wider" >
                  <span> ₹ Pay and Confirm Order (₹{cartTotal.toFixed(2)})</span>
                </button>
              </div>

            </form>

          </div>


          <div className="lg:col-span-1 p-8 bg-gray-900 rounded-2xl shadow-2xl border-1-4 sticky top-20 h-fit border border-gray-800">
            <h3 className="text-3xl font-bold text-white mb-5 border-b border-y-gray-700 pb-3 flex items-center space-x-2">
             
                <Package className="w-6 h-6 text-orange-400"/>
                <span>Summary</span>
                </h3>
 
            
            <div className="space-y-4 text-gray-400">
              {cart.map((item)=>{
                return(
              <div key={item.id} 
              className='flex justify-between text-base border-b
              border-gray-800 pb-2
              '>
   
             <span className='trucate text-gray-300'>{item.name}</span>
             <span className='trucate text-orange-300'>₹{(item.price*item.quantity).toFixed(2)}</span>

              </div>
                )
              })}
            </div>


            <div className="mt-4 space-y-4 text-gray-400">
             <div className="flex justify-between text-xl">
                <span>Subtotal :</span>
                <span className="font-semibold text-white">
                  ₹{cartTotal.toFixed(2)}
                </span>
              </div>
               
              <div className="flex justify-between text-xl">
                <span>Shipping :</span>
                <span className="font-semibold text-green-400">Free</span>
              </div>

              <div className="flex justify-between pt-6 border-t border-gray-700">
                <span className="text-2xl font-medium text-white">
                  Total Due:
                </span>
                <span className="text-2xl font-extrabold text-orange-400">
                  ₹{cartTotal.toFixed(2)}
                </span>
              </div>

            </div>

            <Link
              to='/'
              className="w-full mt-8 py-4 bg-orange-600 text-white font-extrabold text-xl rounded-full 
              shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center
               justify-center space-x-2 transform hover:ring-4 hover:ring-pink-600/50 uppercase tracking-wider" >
              <Zap className="w-6 h-6" />
              <span>Proceed Securely</span>
            </Link>

            <p className="text-xs text-gray-500 text-center mt-4">All transactions are encrypted and secure.</p>
          </div>


        </div>
      </div>
    </>
  )
}

export default Checkout


