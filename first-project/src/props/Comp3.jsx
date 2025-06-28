const Comp3=(props)=>{
    console.log(props)  //{details: {…}}
    let{details}=props  //destructing
    console.log(details)  //{fname: 'Riya', favhobby: 'Travelling', favPart: 'hills/Mountains'}
    let{fname,favhobby,favPart}=details  //!destructing of an object
    return(
        <>
        <h2>Hello i am {fname} i love {favhobby} and my favourite places to visit is {favPart} side</h2>
        </>
    )
}

export default Comp3