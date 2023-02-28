import React from "react";

const Signin=()=>{
    return(<>
        <div className="max-w-2xl mx-auto rounded-2xl shadow-lg">
            <form className="p-4 md:p-">
                <p className="w-full py-2">
                    Username
                </p>
                <input type='text'  className="py-2 px-3 w-full rounded focus:outline-none border-2 border-gray-200"/>
                <p className="w-full py-2">
                   fullname
                </p>
                <input type='text'  className="py-2 px-3 w-full rounded focus:outline-none border-2 border-gray-200"/>
                <p className="w-full py-2">
                   email
                </p>
                <input type='text'  className="py-2 px-3 w-full rounded focus:outline-none border-2 border-gray-200"/>
            </form>
          
        </div>


    </>)
}

export default Signin