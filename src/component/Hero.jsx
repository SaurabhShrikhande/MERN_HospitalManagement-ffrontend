import React from 'react'

export const Hero = (props) => {
  return (<>
    {/* <div>Hero</div> */}
    <div style={{display:"flex"}}>
        <div>
            <h1>{props.title}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quam quisquam autem dolore tenetur excepturi repudiandae ad voluptate error neque debitis, perspiciatis voluptatem nostrum earum suscipit voluptatibus voluptatum, obcaecati maxime?
            Nobis illo recusandae odit fugiat sequi odio temporibus sit dolores reiciendis? Voluptas illum velit, est a maiores similique autem, eius nobis quas eum dignissimos iure molestiae debitis omnis unde exercitationem!
            Cupiditate natus dolore temporibus ab officiis totam nesciunt quidem necessitatibus itaque, cumque ducimus illum, modi atque sequi quos veniam eligendi libero tempore? Reiciendis numquam officiis illum distinctio ea culpa id!
            Exercitationem facere ipsam quisquam excepturi. Impedit quia quibusdam libero explicabo maiores assumenda eligendi ex! Facilis libero ea saepe quas exercitationem obcaecati vitae laudantium. Corporis, ullam sapiente minus voluptate sequi quo.
            Blanditiis corporis quam quas eius praesentium eaque quia dolorem adipisci dicta explicabo temporibus rerum molestiae dolorum ipsum ipsam doloribus voluptates tempore exercitationem hic reprehenderit soluta facere qui, possimus a! Quasi.
            Minus, deserunt deleniti explicabo non sunt distinctio vero hic dolores! Voluptas placeat dignissimos voluptate, doloremque architecto labore laudantium amet fugiat perferendis quae. Nostrum, voluptatum doloremque eum quam sapiente dolorem suscipit.
            Sapiente voluptatibus aliquam ducimus similique iure consequatur itaque illum magni explicabo in blanditiis, cupiditate quisquam ipsam sunt assumenda esse iste voluptates labore placeat eum! Temporibus ducimus aperiam est voluptatum eligendi! </p>
        </div>
        <div>
            <img  src={props.imageUrl} alt='hero' />
            <span>
                {/* <img style={{ }} src="/Vector.png" alt='vector'/> */}
            </span>
        </div>
    </div>
    </>
  )
}
