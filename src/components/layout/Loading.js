import React from 'react'

const Loading = () => {
   return (
      <div className="text-center mt-4">
            <div className="spinner-border text-primary" role="status" style={{width: '3rem', height: '3rem'}}>
               <span className="sr-only">Loading...</span>
            </div>
      </div>
   )
}

export default Loading;
