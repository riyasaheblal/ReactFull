const Team=(props)=>{
    console.log(props);    //{}
                           // Team.jsx:2 {children: 'Mechnacial'}
                           // Team.jsx:2 {children: 'Civil'}
    
    return(
        <>
        //children is inbult features
        <h2>{props.children}</h2>
        </>
    )
}
export default Team