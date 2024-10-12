import { useEffect, useState } from "react"

function Counter() {
    
    const [count, setCount] = useState(0)
    const [large, setlarge] = useState("This is large data")
    
    const increment = ()=> {
        setCount(count+1);
    }
    const largeData = ()=> {
        setlarge("Large data has been changed");
    }

    useEffect(()=> {
        console.log("Counter is created");

        return ()=> console.log("Counter is Deleted");
    }, [large])

    return (
    <div className="mt-24 flex flex-col items-center justify-between  h-96">
        <div className="flex items-center justify-center flex-col gap-1 ">
            <span className="text-2xl">
                {count}
            </span>
            <br />
            <button 
                onClick={increment}
                className="rounded-full px-4 py-2 bg-green-500"
            >
                    Increment
            </button>
        </div>
        <div className="flex items-center justify-center flex-col gap-1 ">
            <span className="text-2xl">
                {large}
            </span>
            <br />
            <button 
                onClick={largeData}
                className="rounded-full px-4 py-2 bg-blue-500"
            >
                change large data
            </button>
        </div>
    </div>
  )
}

export default Counter