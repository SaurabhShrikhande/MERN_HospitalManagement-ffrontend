import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Department = () => {

  const departmentsArray = [
    {
      name: "Pediatrics",
      imageUrl: "/departments/pedia.jpg",
    },
    {
      name: "Orthopedics",
      imageUrl: "/departments/ortho.jpg",
    },
    {
      name: "Cardiology",
      imageUrl: "/departments/cardio.jpg",
    },
    {
      name: "Neurology",
      imageUrl: "/departments/neuro.jpg",
    },
    {
      name: "Oncology",
      imageUrl: "/departments/onco.jpg",
    },
    {
      name: "Radiology",
      imageUrl: "/departments/radio.jpg",
    },
    {
      name: "Physical Therapy",
      imageUrl: "/departments/therapy.jpg",
    },
    {
      name: "Dermatology",
      imageUrl: "/departments/derma.jpg",
    },
    {
      name: "ENT",
      imageUrl: "/departments/ent.jpg",
    },
  ];

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4,
          slidesToSlide: 2 // optional, default 1.
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        }
      };

  return ( <>
    <div>Department</div>
    <div>
        <h2>Department</h2>

        <Carousel responsive={responsive} removeArrowOnDeviceType={[ "mobile"] } 
         infinite={true}
         autoPlay={responsive !== "mobile" ? true : false}
        //  autoPlaySpeed={1000}
         keyBoardControl={true}
         customTransition="all 5 ease"
        //  transitionDuration={500}
         >
        {
          departmentsArray.map((depart, idx)=> {
            return(
              <div key={idx}>
                <div>
                  <img style={{width:"400px" , height:"250px"}} src={depart.imageUrl} alt={depart.name} />
                     <h3>{depart.name}</h3> 
                </div>
              </div>
            
              )
          } )
        }
</Carousel>;
        
    </div>
    </>
  )
}
