import instance from "../utils/axios";
import { useEffect, useState } from "react"

const Users = () => {

    const[users, setUsers] = useState([]);

    const getUsers = ()=> {
        const api = "users";
        instance.get(api)
        .then((response) => setUsers(response.data))
        .catch(err => console.log(err))
    }
    useEffect(()=>{
        getUsers();
    }, [])

  return (
    <div>
        {users.length == 0 ? <h1
                                className="text-5xl flex items-center justify-center min-h-[42.5rem]"
                             >
                                Loading....
                            </h1> : 
                            
                            users.map( (user)=> {
                                return <h1 
                                            className="px-2 py-3 bg-pink-500 mb-2 mt-3 w-1/2 mx-auto text-center capitalize font-bold text-xl"
                                            key={user.id}
                                        >
                                            {user.username}
                                        </h1>
                            } )
}
    </div>
  )
}

export default Users