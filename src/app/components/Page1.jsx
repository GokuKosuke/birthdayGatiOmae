"use client";

import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);


// // Lenisを初期化
// const lenis = new Lenis({
//     duration: 1.2, // スクロールの時間
//     easing: (t) => t, // イージング関数
//     orientation: 'vertical', // スクロール方向
//     gestureOrientation: 'vertical', // ジェスチャーの方向
// });

// // アニメーションフレームでスクロールを更新
// function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

const Page1 = () => {

    const homeRef = useRef(null);
    const productsRef = useRef(null);
    const contactRef = useRef(null);

    const [active, setActive] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    const underLine = (ref) => {
        if (active && active !== ref.current) {
            active.classList.remove("line");
        }
        if (ref.current) {
            ref.current.classList.add("line");
            setActive(ref.current);
        }
    }

    const addAndRemoveClass = (element) => {
        if (element) {
            // クラスが既に存在している場合でも、追加してリセットせずに繰り返す
            element.classList.add("circled");

            setTimeout(() => {
                element.classList.remove("circled");
            }, 300); // アニメーションが終わった後にクラスを削除
        }
    };

    const Hover = () => {
    
    }

    const btnHome = () => {
        if (homeRef.current) {
            addAndRemoveClass(homeRef.current.children[0]);
        }
        underLine(homeRef)
    };

    const btnProducts = () => {
        if (productsRef.current) {
            addAndRemoveClass(productsRef.current.children[0]);
        }
        underLine(productsRef)
    };

    const btnContact = () => {
        if (contactRef.current) {
            addAndRemoveClass(contactRef.current.children[0]);
        }
        underLine(contactRef)
    };



    const circleRef = useRef(null);
    const headerRef = useRef(null);
    const img1_1Ref = useRef(null);
    const img1_2Ref = useRef(null);
    const oiwaRef = useRef(null);
    const nowayRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to(circleRef.current, {
            width: 2400,
            height:  2300,
            scrollTrigger: {
                trigger: circleRef.current,
                start: '80% 10%',
                end: '+=300',
                scrub: true,
                // markers: true,
                onEnter: () => headerRef.current.classList.add("scrolled"),
                onLeaveBack: () => headerRef.current.classList.remove("scrolled")
            }
        })
        .to(img1_1Ref.current, {
            x: -300,
            rotate: -20,
            skewX: 2,
            scrollTrigger: {
                trigger: img1_1Ref.current,
                start: '50% 45%',
                end: '70% 100%',
                scrub: true,
                // markers: true
            }
        })
        .to(img1_2Ref.current, {
            x: 300,
            rotate: 20,
            skewX: -10,
            scrollTrigger: {
                trigger: img1_2Ref.current,
                start: '55% 45%',
                end: '70% 100%',
                scrub: true,
                // markers: true
            }
        }, "+=0.8")
        .to(oiwaRef.current, {
            rotate: 360,
            y: 1600,
            x: 200,
            scrollTrigger: {
                trigger: oiwaRef.current,
                start: "+=300 35%",
                end: '+=900 90%',
                // markers: true,
                scrub: true,
            }
        })
      
    })
    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: nowayRef.current,
                start: '40% 100%',
                end: 'bottom 50%',
                scrub: true,
                // markers: true,
            }
        })
        .fromTo(nowayRef.current,
            { x:-500, y: 500, rotate: 90, opacity: 0}, // 初期状態
            { x:0, y: 0, rotate: 0, opacity:1 } // 最終状態
        );
    });

  return (
        <div className="page1">
        <div className="circleContainer">
            <div ref={circleRef} className="circle"></div>
        </div>
        <div className="container">
            <div className="header" ref={headerRef}>
                <div ref={homeRef} className="home" onClick={btnHome}>HOME
                    <div className="minicircle"></div>
                </div>
                <div ref={productsRef} className="products" onClick={btnProducts}>PRODUCTS
                    <div className="minicircle"></div>
                </div>
                <div ref={contactRef} className="contact" onClick={btnContact}>CONTACT
                    <div className="minicircle"></div>
                </div>
            </div>
            <div className="content">
                <div className="section1">
                    <div ref={oiwaRef} className="oiwa">OIWA</div>
                    <div ref={img1_1Ref} className='img1'   onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <Image  className="img1-1" src="/brownwoman.jpg" width={400} height={300}></Image>
                        <div className={`mask1 ${isHovered ? 'hovered' : ''}`}>
                            <div className="mask1Content">
                                <div className="mask1h1">Take it easy.</div>
                                <div className="mask1P">don't worry guys. cuz everything is gonna be alright. if someone makes a fool of what you're doing, just laugh. He's just immature and ignorant of the World.  </div>
                            </div>
                        </div>
                        <div className="mask2">
                                <div className="mask2Content"><div className="mask2Text">please hover over me!</div></div>
                        </div>
                    </div>
                    <Image ref={img1_2Ref} className='img1-2' src="/riverbrown.jpg" width={600} height={200}></Image>
                </div>
                <div ref={nowayRef} className="section2">
                    <div className="h1">There's no way!!</div>
                    <Image className="img2" src="/plant.jpg" width={300} height={300}></Image>
                </div>
            </div>
        </div>

      </div>
  )
}

export default Page1
