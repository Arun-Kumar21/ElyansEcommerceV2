import React from 'react'

const loading = () => {
    return (
      <div>
        <div className='h-[100vh] w-full relative'>
              <div className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] '>
                  <div className='flex justify-center items-center'>
                      <div className='w-[20px] h-[20px] rounded-full 
                      bg-red-500 animate-ping mr-2'></div>
                      <div className='w-[20px] h-[20px] rounded-full bg-green-500 animate-ping delay-[1000] mr-2'></div>
                      <div className='w-[20px] h-[20px] rounded-full bg-blue-500 animate-ping mr-2'></div>
                  </div>
              </div>
        </div>
      </div>
    )
}

export default loading;