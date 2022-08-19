import React, { Component ,useState,useEffect} from 'react';
import { useParams,useSearchParams } from 'react-router-dom';
import qs from 'query-string';
var tempId ="";
// const AboutFun = (props)=>{
//     let {id} = useParams();
//     let [searchParams] = useSearchParams(); 
//     tempId = searchParams;
//     const res = qs.parse(props.qs)
//     console.log(searchParams)
//     return(
//         <div>{`About ${typeof res}`}</div>
//     );
// }
// class About extends Component{
//     constructor(){
//         super();
//     }
//     state = {
//         id:0,
//         qs:""
//     }
//     componentDidMount(){
//         const [searchParams] = useSearchParams();
//         console.log(searchParams.get('name'))
//     }
//     render(){ 
        
//        return(
//         <div>
//          <h1>{this.state.qs}</h1>
//         </div>
        
//         );
//     }
// }
const About = (props)=>{
    let [name,setName] = useState('PETER')
    useEffect(()=>{
        console.log("mount")
        setTimeout(()=>{
            setName('KHALIL')
        },3000)
        // return ()=>{
        //     <h1>{setName}</h1>
        // }
    })
    let [searchParams] = useSearchParams();
    console.log(searchParams.get('name'))
    return(
        <div>
            {searchParams.get('name')}
            <h1>{name}</h1>
        </div>
    );
}
export default About;