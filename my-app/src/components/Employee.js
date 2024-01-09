function Employee(props){

    return (
        <>
            <div className="flex flex-nowrap flex-row rounded-xl drop-shadow border-4 gap-3 p-5 pb-0">
                <img className="w-[150px] h-[150px] aspect-square rounded-full border-1 border-black" src={props.image?props.image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
                <div className="text-center font-sans p-5">
                    <h1 className="font-bold text-center underline underline-offset-2 text-xl mb-5">{props.name?props.name:"Employee"}</h1>
                    <p className="mt-3 mb-5"><span className="inline-block mr-5">Age: {props.age?props.age:"NA"}</span><span className="inline-block ml-5">DOB: {props.dob?props.dob:"NA"}</span></p>
                    <p className="mb-5">Role: {props.role?props.role:"NA"}</p>
                    <button className="bg-blue-700 text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button>
                </div>
            </div>


        </>
    )
}

export default Employee;