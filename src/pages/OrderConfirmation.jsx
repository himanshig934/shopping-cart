import { CheckCircle } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const OrderConfirmation = ({ deliveryDetails }) => {
  return (
    <>
      <div className='container mx-auto md:ps-8 pt-12'>
        <div className='p-12 bg-gray-900 rounded-3xl shadow-2xl max-w-2xl mx-auto
      text-center mt-12 border-green-700 border text-white'>

          {/* check section */}
          <CheckCircle className='w-24 h-24 text-green-500 mx-auto mb-6 
        drop-shadow-lg text-green-500'/>
          <h2 className='text-4xl font-medium text-white'>Order Confirmed!</h2>
          <p className='py-4 text-gray-3000 mb-6 text-lg'>Your transaction is complete. A confirmation email has been
            sent to your account.
          </p>

          {/* delivery details */}
          <div className="bg-green-900/30 text-left border-green-700 border rounded-xl p-6 font-mono
          inline-block text-green-300 text-sm
          ">
            <p className='font-semibold text-lg mb-1'>
              {deliveryDetails?.name}
            </p>
            <p>{deliveryDetails?.address}</p>
            <p>{deliveryDetails?.city}, {deliveryDetails?.zip}</p>
          </div>

          <Link
            to='/'
            className=" mt-10 py-4 px-4 bg-orange-600 text-white font-extrabold text-xl rounded-full 
              shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center
               justify-center space-x-2 transform hover:ring-4 hover:ring-pink-600/50 uppercase tracking-wider" >
            <span>Continue shopping</span>
          </Link>

        </div>
      </div>
    </>
  )
}

export default OrderConfirmation




