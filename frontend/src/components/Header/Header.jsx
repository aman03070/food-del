import React, { useEffect, useRef, useState } from 'react'
import './Header.css'
import { assets } from '../../assets/assets'


const BannerScrollEffect = () => {
  const bannerRef = useRef(null);
  const oneRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (bannerRef.current) {
      bannerRef.current.style.right = scrollY * 3 + 'px';
    }
    if (oneRef.current) {
      oneRef.current.style.left = scrollY * 1.5 + 'px';
    }
  }, [scrollY]);
    return (
        <div className='header'>
            <section className='banner'>
                <img id='banner' ref={bannerRef} src={assets.banner_img} />
                <img id='one' ref={oneRef} src={assets.one_img} />
            </section>
            <div className='header-contents' id='text'>
                <h2>Order your essentials here!!</h2>
                <p>Browse a variety of products from your favorite campus stores, including groceries, meals, stationery, and medical supplies. Our mission is to bring convenience to every corner of GLA University, delivering what you need right to your door, quickly and efficiently.</p>
                <button><a href='#explore-menu'>View Menu</a></button>
            </div>
            
        </div>
    )
}

export default BannerScrollEffect;
