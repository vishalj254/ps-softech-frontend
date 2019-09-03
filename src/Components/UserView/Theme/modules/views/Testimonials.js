// import React from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
// import { getData, BaseUrl } from '../../../../FetchServices';
// import Slider from "react-slick";

 
// export default function DemoCarousel() {
//     const [employee,setEmployee]=React.useState([])
//     React.useEffect(()=>{
//         readAllEmployee()
//     },[])
//     const readAllEmployee=async()=>{
//         let list=await getData('EmployeeProfile/displayall')
//         setEmployee(list)
//     }


//         return (<div>
//             <Carousel infiniteLoop>
                
//                     {employee.map(item=>(
//                     <div>
//                     <img src={`${BaseUrl}/images/${item.photo}`} width='500' height='500'/>
//                     <p className="legend">{item.name}</p>
//                     <p className="legend">{item.name}</p>
//                     <p className="legend">{item.name}</p>
//                     </div>
//                     ))}
                   
//             </Carousel>
//           </div>
//         );
//     }


    import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getData, BaseUrl } from '../../../../FetchServices';
 
export default function DemoCarousel(props) {
    const [employee,setEmployee]=React.useState([])
    React.useEffect(()=>{
        readAllEmployee()
    },[])
    const readAllEmployee=async()=>{
        let list=await getData('EmployeeProfile/displayall')
        setEmployee(list)
    }
    return (
        <div>
        {employee.map(item=>(<div>
                    <div>
                    <img src={`${BaseUrl}/images/${item.photo}`} width='50%' height='50%'/>
                    <p className="legend">{item.name}</p>
                    </div>
                    <div class="carousel-inner">
                    <div class="item carousel-item active">
                        <div class="img-box"><img src={`${BaseUrl}/images/${item.photo}`} alt=""/></div>
                        <p class="testimonial">{item.skills}</p>
                        <p class="overview"><b>{item.name}</b>, {item.designation}</p>
                    </div>
                </div>
                </div>
        ))}
        </div>
        
    )
}