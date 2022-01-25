import React from "react";
import axios from "axios"

class Test extends React.Component {
    state={
        title:'',
        datas:[]
    };
    componentDidMount=()=>
    {
        this.getData();

    }
    getData=()=>{
        axios.get("http://localhost:3001/posts")
        .then((response)=>{
           const d=response.data;
            this.setState({datas:d});
            console.log("Data has been received")
            console.log(this.state.datas)

        })
        .catch(()=>
        {
            console.log("Error")

        })
        
 



      
        

        }
        displayData=(posts)=>
        {
            return posts.map((post,index)=>
            (
                <div key={index}>
                    <h1>{post.image}</h1>
                </div>

            ))

        }

  
    render(){
        return(
            <>
                <h1>Hiii</h1>
                {this.displayData(this.state.datas)}
          
               
              
            </>
        );
    }
}

export default Test;