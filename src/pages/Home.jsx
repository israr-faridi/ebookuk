import BrandReview from "../components/Common/BrandReview"
import Button from "../components/Common/Button"
import HeroBottom from "../components/Hero/HeroBottom/HeroBottom"
import HeroImg from "../components/Hero/HeroImg/HeroImg"
import HeroTitle from "../components/Hero/HeroTitle/HeroTitle"
import HoverCard from "../components/HoverCard/HoverCard"

const Home = () => {
    return (
        <>
            {/* Hero */}
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="hero-data">
                                <HeroTitle heading={<>Every Great Book Begins With a <span> Voice Like Yours</span></>} headingpara={<>Avail the <span>best eBook writing services</span> at pocket-friendly rates</>} para={"Our ebook publishing platform helps authors transform their thoughts into books that readers can hold on their screens and remember long after the final page."} />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <HeroImg img_url={"../src/assets/images/top-banner-book.webp"} />
                        </div>
                    </div>
                </div>
            </section>
            <HeroBottom />
            <BrandReview />

            {/* Section 1 */}
            <section className="sec-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="image">
                                <img src="../src/assets/images/home-sec-1.webp" alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                            <h2>A Place Where Writers Turn Ideas Into Published Books</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-6">
                            <p>Many writers begin with excitement. But after a few chapters, uncertainty appears. Questions pile up about editing, formatting, or publishing. This website exists to remove that confusion and give writers a clear path forward.</p>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                            <p>Our platform connects authors with professionals who understand the full publishing process. Writing guidance, editing support, professional formatting, and publishing solutions live here in one place. Instead of chasing different services across the internet, authors find everything they need inside a single creative space. Your manuscript begins as a draft. It leaves as a polished ebook ready for readers.</p>
                        </div>
                    </div>
                    <div className="buttons">
                        <Button link={"/"} name={"red"} value={"Get a Quote"} />
                        <Button link={"/"} name={"black"} value={"Chat With Us"} />
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section className="sec-2">
                <div className="heading">
                    <h2>The Right Partner Makes Every Book Stronger</h2>
                    <p>Writing a book takes courage. Publishing it requires the right support. Our team works closely with authors so their stories reach readers in the best possible form.</p>
                </div>
                <div className="container">
                    <div className="heverCardMain">
                        <HoverCard heading={"Skilled Book Professionals"} para={"Our team includes experienced writers, editors, and publishing specialists who understand how strong books are built. They study the flow of your manuscript and help refine it without replacing your voice"} icon={"ri-shield-line"} />
                        <HoverCard heading={"Skilled Book Professionals"} para={"Our team includes experienced writers, editors, and publishing specialists who understand how strong books are built. They study the flow of your manuscript and help refine it without replacing your voice"} icon={"ri-shield-line"} />
                        <HoverCard heading={"Skilled Book Professionals"} para={"Our team includes experienced writers, editors, and publishing specialists who understand how strong books are built. They study the flow of your manuscript and help refine it without replacing your voice"} icon={"ri-shield-line"} />
                        <HoverCard heading={"Skilled Book Professionals"} para={"Our team includes experienced writers, editors, and publishing specialists who understand how strong books are built. They study the flow of your manuscript and help refine it without replacing your voice"} icon={"ri-shield-line"} />
                        <HoverCard heading={"Skilled Book Professionals"} para={"Our team includes experienced writers, editors, and publishing specialists who understand how strong books are built. They study the flow of your manuscript and help refine it without replacing your voice"} icon={"ri-shield-line"} />
                        <HoverCard heading={"Skilled Book Professionals"} para={"Our team includes experienced writers, editors, and publishing specialists who understand how strong books are built. They study the flow of your manuscript and help refine it without replacing your voice"} icon={"ri-shield-line"} />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home
