import { useEffect } from "react"

const Contact = () => {

    useEffect( ()=> 
                { console.log("Contact component is created")
                  return ()=> console.log("Contact component is Deleted");
                }
             )

  return (
    <div
        className="bg-yellow-500 h-screen text-black font-bold text-5xl"
    >
        Contact
    </div>
  )
}

export default Contact