import React, { useEffect } from 'react'

const ProgressBar = () => {
    const [percentage , setPercentage] = React.useState(0);

    useEffect(() => {
        if(percentage < 100) {
            setTimeout(() => {
                setPercentage(percentage + 10);
            }, 1000);
        }else{
            setPercentage(0);
        }
    }, [percentage])


  return (
    <div>
      {/* create a progress bar here */}

    </div>
  )
}

export default ProgressBar
