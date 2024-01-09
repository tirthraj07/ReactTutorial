function Employee(props){

    return (
        <>
            <h1>Welcome {props.name?props.name:"Employee"}</h1>
            <p>Role: {props.role?props.role:"No Role"}</p>
        </>
    )
}

export default Employee;