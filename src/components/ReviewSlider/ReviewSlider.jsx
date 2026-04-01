// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Autoplay, Navigation } from 'swiper/modules';

import "./ReviewSlider.css"

const ReviewSlider = () => {
    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: '.next',
                    prevEl: '.prev',
                }}
                modules={[EffectCards, Autoplay, Navigation]}
                className="reviewSlider"
            >
                <SwiperSlide>
                    <div className="review-slide">
                        <div className="review-slide-top">
                            <div className="review-slide-top-left">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-fill"></i>
                                <i className="ri-star-line"></i>
                            </div>
                            <div className="review-slide-top-right">
                                <i className="ri-double-quotes-l"></i>
                            </div>
                        </div>
                        <div className="review-slide-center">
                            <p>“I had notes scattered everywhere. Their team helped shape them into a structured book. Watching it appear online felt incredible.”</p>
                        </div>
                        <div className="review-slide-bottom">
                            <div className="review-slide-bottom-left">
                                {/* <img src="../asset/assets/images/review1.webp" alt=""> */}
                                <img src="../src/assets/images/review1.webp" alt="" />
                            </div>
                            <div className="review-slide-bottom-right">
                                <h4>Amanda R.</h4>
                                <p>Book Author</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review-slide">
                        <div className="review-slide-top">
                            <div className="review-slide-top-left">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-fill"></i>
                                <i className="ri-star-line"></i>
                            </div>
                            <div className="review-slide-top-right">
                                <i className="ri-double-quotes-l"></i>
                            </div>
                        </div>
                        <div className="review-slide-center">
                            <p>“The editing improved my manuscript without removing my personal style. That balance impressed me.”</p>
                        </div>
                        <div className="review-slide-bottom">
                            <div className="review-slide-bottom-left">
                                <img src="../src/assets/images/review1.webp" alt="" />
                            </div>
                            <div className="review-slide-bottom-right">
                                <h4>Daniel M.</h4>
                                <p>Book Author</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review-slide">
                        <div className="review-slide-top">
                            <div className="review-slide-top-left">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-fill"></i>
                                <i className="ri-star-line"></i>
                            </div>
                            <div className="review-slide-top-right">
                                <i className="ri-double-quotes-l"></i>
                            </div>
                        </div>
                        <div className="review-slide-center">
                            <p>“The cover design caught my attention immediately. It reflected the theme of my book perfectly.”</p>
                        </div>
                        <div className="review-slide-bottom">
                            <div className="review-slide-bottom-left">
                                <img src="../src/assets/images/review1.webp" alt="" />
                            </div>
                            <div className="review-slide-bottom-right">
                                <h4>Lucas T.</h4>
                                <p>Book Author</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review-slide">
                        <div className="review-slide-top">
                            <div className="review-slide-top-left">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-fill"></i>
                                <i className="ri-star-line"></i>
                            </div>
                            <div className="review-slide-top-right">
                                <i className="ri-double-quotes-l"></i>
                            </div>
                        </div>
                        <div className="review-slide-center">
                            <p>“I had notes scattered everywhere. Their team helped shape them into a structured book. Watching it appear online felt incredible.”</p>
                        </div>
                        <div className="review-slide-bottom">
                            <div className="review-slide-bottom-left">
                                {/* <img src="../asset/assets/images/review1.webp" alt=""> */}
                                <img src="../src/assets/images/review1.webp" alt="" />
                            </div>
                            <div className="review-slide-bottom-right">
                                <h4>Amanda R.</h4>
                                <p>Book Author</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review-slide">
                        <div className="review-slide-top">
                            <div className="review-slide-top-left">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-fill"></i>
                                <i className="ri-star-line"></i>
                            </div>
                            <div className="review-slide-top-right">
                                <i className="ri-double-quotes-l"></i>
                            </div>
                        </div>
                        <div className="review-slide-center">
                            <p>“The editing improved my manuscript without removing my personal style. That balance impressed me.”</p>
                        </div>
                        <div className="review-slide-bottom">
                            <div className="review-slide-bottom-left">
                                <img src="../src/assets/images/review1.webp" alt="" />
                            </div>
                            <div className="review-slide-bottom-right">
                                <h4>Daniel M.</h4>
                                <p>Book Author</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review-slide">
                        <div className="review-slide-top">
                            <div className="review-slide-top-left">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-fill"></i>
                                <i className="ri-star-line"></i>
                            </div>
                            <div className="review-slide-top-right">
                                <i className="ri-double-quotes-l"></i>
                            </div>
                        </div>
                        <div className="review-slide-center">
                            <p>“The cover design caught my attention immediately. It reflected the theme of my book perfectly.”</p>
                        </div>
                        <div className="review-slide-bottom">
                            <div className="review-slide-bottom-left">
                                <img src="../src/assets/images/review1.webp" alt="" />
                            </div>
                            <div className="review-slide-bottom-right">
                                <h4>Lucas T.</h4>
                                <p>Book Author</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* <!-- Navigation Buttons --> */}
                <div className="next">
                    <i className="ri-arrow-right-s-line"></i>
                </div>
                <div className="preview">
                    <i className="ri-arrow-left-s-line"></i>
                </div>
            </Swiper>
        </>
    )
}

export default ReviewSlider
