// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import './Home.css';

// import Photos Home import
import Photos1 from './img/1.jpg';
import Photos2 from './img/2.avif';
import Photos3 from './img/3.avif';
import test from './img/test.webp';
import author from './img/author.webp';

// react icons import
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXFill } from 'react-icons/ri';
import { RiLinkedinFill } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";


// React Router import
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';







export default function Home() {

       const [data,setData] = useState([])

       const today = new Date();
       const date = `${today.getUTCFullYear}-${today.getUTCMonth}-${today.getUTCDay}`
       const apiKey = process.env.NEWS_API_KEY; // for vercel

       // f562d9407ed74d169e764ab44dd7800a

       async function getNewsArticle(){
              let response = await axios.get(`https://newsapi.org/v2/everything?q=random&from=${date}&sortBy=publishedAt&apiKey=${apiKey}`);

              setData(response.data.articles)              
       }

       useEffect(function(){
              getNewsArticle();
       },[])

       return (
       <>
              <Slide></Slide>
              <main className='flex items-start justify-between'>              
              <Aside></Aside>
              <section id="articles" className='w-[100%] lg:w-[70%]'>
                     <Article data={data}></Article>
              </section>
              </main>
       </>
       )
}


// 1- components Slide Home Website
function Slide(){
       return (
              <Swiper className="slider | mySwiper" loop={true} modules={[Autoplay]} autoplay={{delay: 3000, }}>
              
              {/* item slide one */}
              <SwiperSlide className="slide">
                     <img src={Photos1} alt="Anglia Max with breaking news" />
                     <div className="layer | flex flex-col justify-center">
                            <h1>Anglia Max with breaking news</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corporis quisquam,
                                   porro harum asperiores cupiditate non voluptates dicta accusantium? Laboriosam magnam
                                   quae labore pariatur, odio sed error facilis inventore sequi.</p>
                     </div>
              </SwiperSlide>

              {/* item slide two */}
              <SwiperSlide className="slide">
                     <img src={Photos2} alt="Podcast what is happening in the world" />
                     <div className="layer | flex flex-col justify-center">
                            <h1>Podcast what is happening in the world</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corporis quisquam,
                                   porro harum asperiores cupiditate non voluptates dicta accusantium? Laboriosam magnam
                                   quae labore pariatur, odio sed error facilis inventore sequi.</p>
                     </div>
              </SwiperSlide>

              {/* item slide three */}
              <SwiperSlide className="slide">
                     <img src={Photos3} alt="Latest tennis ball News" />
                     <div className="layer | flex flex-col justify-center">
                            <h1>Latest tennis ball News</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corporis quisquam,
                                   porro harum asperiores cupiditate non voluptates dicta accusantium? Laboriosam magnam
                                   quae labore pariatur, odio sed error facilis inventore sequi.</p>
                     </div>
              </SwiperSlide>
              </Swiper>
       )
}



// 2- components Article Random Home Website
function Article({data}){
       console.log(data);
       
       return (
       <>
              {data.map(function(article){
                     return (

                            <article key={article.source.name}>
                            {/* author part */}
                            <div className="author | flex items-center justify-start">
                                   <img src={author} alt="author article" width={40} />
                                   <div className="info">
                                          <span className="name-author">{article.author !== null ? article.author : 'Unidentified Author'}</span>
                                          <span className="date-post">{article.publishedAt}</span>
                                   </div>
                            </div>
       
                            {/* title & img part */}
                            <div className="title-and-img">
                                   {/* <h2>Sunday Snapshot: Vance continues to feel the scratch of "childless cat ladies"</h2> */}
                                   <h2>{article.title}</h2>
                                   <div className="img"><img src={article.urlToImage} alt={article.title} /></div>
                            </div>
       
                            {/* Content Article */}
                            <div className="content">
                                   <p className="description">{article.description}</p>
                                   <p className="content-article">{article.content}</p>
                            </div>
       
                            {/* Footer Article */}
                            <div className="footer | flex items-center justify-between">
                                   <Link to=''>Read More</Link>
                                   <div className="social | flex items-center justify-center">
                                          <Link to=''><TiSocialFacebook size={15} /></Link>
                                          <Link to=''><RiTwitterXFill size={15} /></Link>
                                          <Link to=''><RiLinkedinFill size={15}  /></Link>
                                          <Link to=''><IoMailOutline size={15} /></Link>
                                   </div>
                            </div>
       
                            </article>
          
                     )


              })}
       </>
       )
}


// 3- components Aside Random Home Website
function Aside(){
       return (
              <aside className='hidden lg:w-[30%] lg:block'>
                     <h2>Latest stories</h2>

                     <div className="item">
                            <Link><p>"It'll be fixed": Trump tells Christians they won't have to vote again</p></Link>
                            <span className='date'>10 hours ago - Politics & Policy</span>
                     </div>

                     <div className="item">
                            <Link><p>Paris Olympics opening ceremony watched by nearly 29M</p></Link>
                            <span className='date'>10 hours ago - Business</span>
                     </div>

                     <div className="item">
                            <Link><p>Simone Biles leads Team USA in qualifying, despite calf pain</p></Link>
                            <span className='date'>11 hours ago - Sports</span>
                     </div>

                     <div className="item">
                            <Link><p>An inside look at the Olympic Village for the Paris Olympics</p></Link>
                            <span className='date'>11 hours ago - World</span>
                     </div>

                     <div className="item">
                            <Link><p>Pro-Harris activism tests Trump's support among white women</p></Link>
                            <span className='date'>13 hours ago - Politics & Policy</span>
                     </div>

                     <div className="item">
                            <Link><p>Trump promises American crypto "going to the moon"</p></Link>
                            <span className='date'>Jul 27, 2024 - Economy</span>
                     </div>

                     <div className="item">
                            <Link><p>Trump's promises to bitcoin conference: "fire" SEC chair, build "strategic bitcoin stockpile"</p></Link>
                            <span className='date'>Jul 27, 2024 - Economy</span>
                     </div>

                     <div className="item">
                            <Link><p>Katie Ledecky earns bronze in first event at Paris Olympic Games</p></Link>
                            <span className='date'>Jul 27, 2024 - World</span>
                     </div>
                     
              </aside>
       )
}