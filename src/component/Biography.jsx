import React from 'react'

export const Biography = (props) => {
  return (<>
    {/* <div>Biography</div> */}
      <div style={{display:"flex"}}>
        <div>
            <img src={props.imageUrl} alt="about.png" />
        </div>
        <div>
            <h1>Biaography</h1>
            <h3>Who we are?</h3>
             
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus at corporis itaque ullam, quis consectetur repudiandae, aliquid adipisci earum, facilis dolorem nostrum asperiores omnis maxime necessitatibus possimus commodi provident cumque.
               rspiciatis, labore quae nam cumque dolores est ut minima illo. Fuga dolorem beatae similique? Rerum distinctio eos earum repudiandae quos dolorem? Rem, repellendus! Veniam a possimus voluptas nobis aspernatur vel.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ut quibusdam reprehenderit quo laboriosam architecto ab earum consectetur, tempore id officia. Nostrum, labore voluptatem perferendis facilis amet blanditiis iste earum.
            Facere placeat nobis ad voluptatibus fuga, minus sequi excepturi quis exercitationem ipsam vitae sed, quas nulla nostrum commodi culpa quisquam doloremque blanditiis! Laborum tenetur optio culpa veniam nihil autem nobis.</p>
        </div>
      </div>
    </>
  )
}
