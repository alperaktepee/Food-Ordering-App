import React from 'react'
import Title from '../../components/layout/ui/Title'
import Image from 'next/image'
const index = () => {
  return (
    <div>
    <div className="flex items-center lg:flex-row flex-col justify-between">
      <div className="w-full flex-1">
        <div className="overflow-x-auto">
          <table className="text-sm w-full text-center text-gray-500">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700">
              <tr>
                <th scope="col" className="py-3 px-6">
              ORDER ID
                </th>
                <th scope="col" className="py-3 px-6">
               CUSTOMER
                </th>
                <th scope="col" className="py-3 px-6">
          ADDRESS
                </th>
                <th scope="col" className="py-3 px-6">
                  TOTAL
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="relative bg-secondary text-gray-400">
                <td className="py-4 px-6 flex items-center justify-center whitespace-nowrap font-medium">
                 456345878933
                </td>
                <td className="py-4 px-6 whitespace-nowrap font-medium">
                  <span>Alper Aktepe</span>
                </td>
                <td className="py-4 px-6 whitespace-nowrap font-medium">
                  <span>Manisa</span>
                </td>
                <td className="py-4 px-6 whitespace-nowrap font-medium">
                  <span>$65</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
    <div className='bg-primary flex justify-between lg:px-52 sm:p-10 p-2'>
        <div className='flex flex-col items-center'>
            <Image width={40} height={40} src="/images/paid.png" alt="" />
        <span>Payment</span>
        </div>
        <div className='flex flex-col items-center'>
        <Image width={40} height={40} src="/images/bake.png" alt="" />
        <span>Preparing</span>
        </div>
        <div className='flex flex-col items-center'>
        <Image width={40} height={40} src="/images/bike.png" alt="" />
        <span>On the way</span>
        </div>
        <div className='flex flex-col items-center'>
        <Image width={40} height={40} src="/images/delivered.png" alt="" />
        <span>Delivered</span>
        </div>

    </div>
  </div>
  )
}

export default index