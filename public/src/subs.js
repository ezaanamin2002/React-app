import React,{useState} from 'react';
function Submit()
{
    const [filedata,setfiledata]=useState();
    const fileChangeHandler=(e)=>
    {

        setfiledata(e.target.files[0]);
    };
    const onsubmithandler=(e)=>
    {
        e.preventDefault();
        const data=new FormData()
        data.append("image",filedata)
        fetch("http://localhost:3001/single",{
        
        method:"POST",
        body:data,
    })
    .then((result)=>
    {
        console.log("Sucessfully")
    })
    .catch((err)=>
    {
     console.log(err)
    })
    }
    return(
<>
<h1>Hiii</h1>
<form onSubmit={onsubmithandler}>
    <input type="file" onChange={fileChangeHandler}/>
<button type='submit'>Submit</button>
</form> 
</>

    );

}
export default Submit;