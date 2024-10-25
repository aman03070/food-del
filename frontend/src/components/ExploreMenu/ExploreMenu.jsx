import React, { useContext } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'

export const CircleIndicator = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.path
      d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
      style={{ pathLength: scrollYProgress }}
    />
  )
}

const ExploreMenu = ({category,setCategory}) => {

  const {menu_list} = useContext(StoreContext);
  
  return (
    <div className='explore-menu' id='explore-menu'>
      
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Choose from over <b>50</b> products across <b>5+</b>categories, including groceries, meals, stationery, and medical supplies. We collaborate with <b>6+</b> campus shops to bring everything you need right to your doorstep.

Our mission is to provide fast and reliable delivery to every corner of GLA University, ensuring you have what you need in <b>30 minutes or less.</b> With <b>24/7 availability</b>, your essentials are just a few clicks away.

Join <b>30+</b> satisfied students and experience the convenience of on-campus delivery, making your life at GLA University smoother, one order at a time!</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>  
                    <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
