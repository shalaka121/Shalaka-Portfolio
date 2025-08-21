// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';


// import { Pagination } from 'swiper/modules';
// import data from '../../data/index.json';

// export default function MySkills() {
//   return (
//     <section className="skills--section" id="mySkills">
//       <div className="skills--section--content">
//       <div className="portfolio--container">
//         <p className="section--title">My Skills</p>
//         <h2 className="skills--section--heading">My Expertise</h2>
//       </div>

//       <Swiper
//         modules={[Pagination]}
//         spaceBetween={30}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         className="skills--swiper"
//       >
//         {data?.skills?.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//             <div className="skills--section--card">
//               <div className="skills--section--card--content">
//               <div className="skills--section--header">
//                 <div className="skills--section--img">
//                   <img src={item.src} alt={item.title} />
//                 </div>
//                 <h3 className="skills--section--title">{item.title}</h3>
//               </div>

//               {item.stackIcons ? (
//                 <div className="stack--icons">
//                   {item.stackIcons.map((icon, i) => (
//                     <img
//                       key={i}
//                       src={icon}
//                       alt="tech"
//                       title={icon.split("/").pop().split(".")[0]}
//                     />
//                   ))}
//                 </div>
//               ) : (
//                 <p className="skills--section--description">{item.description}</p>
//               )}
//             </div>

//             </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       </div>
//     </section>
//   );
// }
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import data from '../../data/index.json';


export default function MySkills() {
  return (
<section className="skills--section" id="mySkills">
  <div className="portfolio--container">
    {/* <p className="section--title">My Skills</p> */}
    <h2 className="skills--section--heading">My Expertise</h2>
  </div>

  <div className="skills--cards--container">
    {data?.skills?.map((item, index) => (
      <div key={index} className="skills--section--card animated-card">
        <div className="skills--section--card--content">
          <div className="skills--section--header">
            <div className="skills--section--img">
              <img src={item.src} alt={item.title} />
            </div>
            <h3 className="skills--section--title">{item.title}</h3>
          </div>

          <div className="stack--icons">
            {item.stackIcons?.map((icon, i) => (
              <div className="icon--wrapper" key={i}>
                <img src={icon} alt="tech" />
                <span className="tooltip" >
                  {icon.split("/").pop().split(".")[0]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

  );
}
