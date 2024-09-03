import React from "react";
import Image from "next/image";
import Question from "../Question";


export default function Landing() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow">
                {/* bagian 1*/}
                <div className="flex flex-col items-center mt-16 md:mt-40">
                    {/* Section 1 */}
                    <div className="flex flex-wrap mx-auto text-center">
                        <p className="text-[#FFCA09] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold  sm:mx-4">Empowering</p>
                        <p className="text-[#1E1E1E] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">Innovation,</p>
                    </div>

                    {/* Section 2 */}
                    <div className="flex flex-wrap mt-4 md:mt-8 mx-auto text-center">
                        <p className="text-[#1E1E1E] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">Collaboration, </p>
                        <p className="text-[#1E1E1E] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mx-1 sm:mx-2">and</p>
                        <p className="text-[#ED4F81] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mx-1 sm:mx-2">Career</p>
                        <p className="text-[#1E1E1E] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mx-1">Growth</p>
                    </div>

                    {/* Description Section */}
                    <div className="text-center mx-auto font-medium text-[#4D4D4D] opacity-70 text-sm sm:text-base md:text-lg mt-6 md:mt-12 max-w-[90%] md:max-w-[70%] lg:max-w-[50%]">
                        Fostering innovation, enhancing collaboration, and driving career advancement in the era of Industry 5.0.
                    </div>

                    {/* Button */}
                    <button className="bg-[#18BAEB] hover:bg-[#18BAEB80] my-12 md:my-24 px-8 sm:px-12 py-3 sm:py-4 text-white text-[14px] sm:text-[16px] rounded-full flex items-center">
                        Get Started
                    </button>

                    {/* Image */}
                    <Image
                        src="/variant.svg"
                        alt="Vercel Logo"
                        width={1220}
                        height={261.49}
                        priority />


                </div>

                {/* bagian 2 */}
                <div className="mx-auto text-center my-32 md:my-32">
                    <div className="flex flex-col mx-auto text-center">
                        <p className="font-bold text-[36px] md:text-2xl text-[#1E1E1E]">
                            Where they got <span className="text-[#ED4F81]">hired?</span>
                        </p>

                        <div className="flex flex-wrap justify-center gap-20 mt-16 mx-auto">
                            <div className="flex justify-center items-center">
                                <Image src="/shpify.svg" width={120} height={27} alt="shopify" />
                            </div>
                            <div className="flex justify-center items-center mt-4 md:mt-0">
                                <Image src="/amazon.svg" width={120} height={25} alt="amazon" />
                            </div>
                            <div className="flex justify-center items-center">
                                <Image src="/deloitte.svg" width={180} height={39} alt="deloitte" />
                            </div>
                            <div className="flex justify-center items-center mt-4 md:mt-0">
                                <Image src="/slack.svg" width={120} height={27} alt="slack" />
                            </div>
                            <div className="flex justify-center items-center">
                                <Image src="/zalora.svg" width={120} height={27} alt="zalora" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* bagian 3 */}
                <div className="flex flex-col md:flex-row gap-12 my-16">
                    <Image
                        src="/vide-placeholder.svg"
                        width={566}
                        height={491}
                        alt=""
                        className="w-full md:w-auto"
                    />
                    <div className="flex flex-col justify-center w-full md:w-auto">
                        <p className="font-bold text-[24px] md:text-[36px] text-[#18BAEB]">
                            About Us
                        </p>
                        <p className="mt-4 w-full md:w-[80%] font-regular text-[16px] md:text-[18px] text-[#4D4D4D]">
                            Welcome to Industro, your ultimate platform dedicated to advancing Industry 5.0. At Industro, we are passionate about driving the future of industrial innovation by connecting professionals, enthusiasts, and organizations with the latest insights, tools, and opportunities in the evolving landscape of Industry 5.0. Our goal is to empower individuals and businesses to navigate this transformative era with confidence and knowledge.
                        </p>
                    </div>
                </div>

                {/*bagian 4*/}
                <div className="flex flex-col md:flex-row gap-12 my-32">
                    {/* Bagian Kiri */}
                    <div className="flex flex-col justify-center w-full md:w-1/2">
                        <p className="font-bold text-[24px] md:text-[36px]">Meet our <span className="text-[#FFCA09]">team</span> </p>
                        <p className="font-bold text-[24px] md:text-[36px] text-[#ED4F81]">members</p>
                        <p className="font-regular text-[16px] md:text-[18px] text-[#4D4D4D]">
                            Get to know individuals behind Industro, each bringing their unique expertise and vision to drive innovation and excellence.
                        </p>
                        <Image
                            src="/asset-bagian4.svg"
                            width={259.84}
                            height={194.86}
                            alt="asset bagian 4"
                            className="mt-8 md:mt-16"
                        />
                    </div>

                    {/* Bagian Kanan */}
                    <div className="flex flex-wrap justify-between w-full gap-6">
                        <div className="flex-1 min-w-[300px] flex flex-col items-center md:items-start">
                            <Image
                                src="/asset-bagian4-image-placeholder.svg"
                                width={328.39}
                                height={415.97}
                                alt="image placeholder"
                            />
                            <p className="my-4 text-center md:text-left text-[#1E1E1E] font-bold text-[28px]">Musyafa Fadila</p>
                        </div>
                        <div className="flex-1 min-w-[300px] flex flex-col items-center md:items-start">
                            <Image
                                src="/asset-bagian4-image-placeholder.svg"
                                width={328.39}
                                height={415.97}
                                alt="image placeholder"
                            />
                            <p className="my-4 text-center md:text-left text-[#1E1E1E] font-bold text-[28px]">Ratu Rayya</p>
                        </div>
                    </div>
                </div>

                {/*bagian 5*/}
                <div className="flex flex-col justify-center">
                    <div className="text-center px-4">
                        <p className="font-bold text-[28px] md:text-[36px] text-[#1E1E1E]">
                            Browse our <span className="text-[#18BAEB]">set</span><span className="text-[#FFCA09]"> of</span><span className="text-[#ED4F81]"> features</span>
                        </p>
                        <p className="font-regular text-[16px] md:text-[18px] text-[#4D4D4D] mt-4">
                            Explore our comprehensive set of features designed to empower you in the Industry 5.0 landscape.
                        </p>
                    </div>
                    <div className="flex flex-wrap my-12 gap-6 justify-center">
                        <div className="flex flex-col items-center w-full md:w-auto">
                            <Image
                                src="/inno-bagian5.svg"
                                width={583.33}
                                height={233.27}
                                alt="innovation"
                                className="my-8 max-w-full h-auto"
                            />
                            <Image
                                src="/tag-bagian5.svg"
                                width={583.33}
                                height={233.27}
                                alt="tagline"
                                className=" max-w-full h-auto"
                            />
                        </div>
                        <div className="flex justify-center w-full md:w-auto">
                            <Image
                                src="/tag-bagian5-full.svg"
                                width={604.76}
                                height={498.45}
                                alt="tagline"
                                className="my-8 max-w-full h-auto"
                            />
                        </div>
                    </div>
                </div>

                {/*bagian 6*/}
                <div className="flex flex-col justify-center my-16">
                    <div className="text-center px-4">
                        <p className="font-bold text-[28px] md:text-[36px] text-[#1E1E1E]">
                            What they said <span className="text-[#ED4F81]"> about </span><span className="text-[#FFCA09]"> industro</span><span className="text-[#18BAEB]">?</span>
                        </p>
                        <p className="mx-auto font-regular text-[16px] md:text-[18px] text-[#4D4D4D] mt-4 w-[50%]">
                            Industro has been a game-changer for our team! The curated news feed keeps us up-to-date with the latest trends in Industry 5.0, and the Innovation Hub has made collaboration seamless.It&apos;s the perfect platform for anyone looking to stay ahead in the industrial tech space.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-12 justify-center my-20">
                        <div className="flex flex-wrap gap-4">
                            <Image src="/pp.svg" width={50} height={50} alt="pp" />
                            <div className="">
                                <p>Alex Turner</p>
                                <p>Lead Engineer at Innovatech</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <Image src="/pp.svg" width={50} height={50} alt="pp" />
                            <div className="">
                                <p>Alex Turner</p>
                                <p>Lead Engineer at Innovatech</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <Image src="/pp.svg" width={50} height={50} alt="pp" />
                            <div className="">
                                <p>Alex Turner</p>
                                <p>Lead Engineer at Innovatech</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <Image src="/pp.svg" width={50} height={50} alt="pp" />
                            <div className="">
                                <p>Alex Turner</p>
                                <p>Lead Engineer at Innovatech</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*bagian 7*/}
                <div className="flex flex-col md:flex-row justify-center md:justify-end items-center my-16 md:my-32 px-4 md:px-0">
                    <div className="w-full md:w-1/2 px-4 md:px-6">
                        <p className="font-bold text-[18px] text-[#18BAEB]">CONTACT US</p>
                        <p className="font-bold text-[36px] md:text-[44px] text-[#1E1E1E] leading-tight md:leading-normal mt-4 md:mt-0">
                            Get in touch today
                        </p>
                        <p className="w-full md:w-[80%] font-regular text-[16px] md:text-[18px] text-[#4D4D4D] mt-4">
                            Get in touch with us for any inquiries, support, or collaboration opportunities – we’re here to help!
                        </p>
                        {/* Forms */}
                        <form className="w-full md:max-w-md my-8 md:my-12">
                            <div className="mb-4">
                                <input type="text" id="name" className="bg-[#F9F9FF] text-sm rounded-lg block w-full p-2.5 outline-none" placeholder="Name" required />
                            </div>
                            <div className="mb-4">
                                <input type="email" id="email" className="bg-[#F9F9FF] text-sm rounded-lg block w-full p-2.5 outline-none" placeholder="Email" required />
                            </div>
                            <div className="mb-4">
                                <textarea id="message" rows={4} className="block p-2.5 w-full text-sm bg-[#F9F9FF] rounded-lg outline-none" placeholder="Please type your message here..."></textarea>
                            </div>
                            <button type="submit" className="text-white bg-[#ED4F81] hover:bg-[#ED4F8180] font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4">
                                Send message
                            </button>
                        </form>
                        {/* Forms */}
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end md:mt-0 mt-8 md:mt-0">
                        <Image src="/asset-bagian7.svg" width={713.52} height={819} alt="asset" className="max-w-full h-auto " />
                    </div>
                </div>

                {/*bagian 8*/}
                <div className="flex flex-col items-center justify-center pt-0 px-5 pb-[80px] box-border w-full max-w-full text-xl text-steelblue mq750:pb-[52px]">
                    <div className="w-full max-w-[812px] flex flex-col items-center justify-start gap-[53px] mq450:gap-[26px]">
                        <div className="flex flex-col items-center justify-start py-0 px-[54px] box-border w-full mq1050:px-[27px]">
                            <div className="w-full flex flex-col items-center justify-start gap-4">
                                <p className="text-center font-bold text-[30px] md:text-[36px] text-[#FFCA09]">
                                    Frequently <span className="text-[#18BAEB]">Asked </span><span className="text-[#ED4F81]">Questions</span>
                                </p>
                                <div className="text-lg leading-[30px] text-dImageray text-center">
                                    From navigating our features to troubleshooting, our comprehensive guide provides quick and clear solutions to help you make the most of your experience on our platform.
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-center justify-start gap-5 text-left text-lg md:text-2xl text-gray">
                            <div className="bg-[#E9FAFF] rounded-[30px] flex flex-col items-start justify-start py-6 px-9 box-border w-full">
                                <div className="flex flex-col gap-3 w-full">
                                    <div className="flex items-start justify-between gap-5 w-full mq1050:flex-wrap">
                                        <b className="leading-[28px] inline-block w-full mq450:text-lg mq450:leading-[22px]">
                                            What kind of content is available in the Industry 5.0 News Feed?
                                        </b>
                                        <Image
                                            className="w-8 h-8"
                                            loading="lazy"
                                            alt="Open Question"
                                            src="/open-question.svg"
                                            width={32}
                                            height={32}
                                        />
                                    </div>
                                    <div className="text-lg leading-[30px] text-dImageray">
                                        Our News Feed features regularly updated articles, insights, and case studies focused exclusively on Industry 5.0. You’ll find content covering the latest trends, technological innovations, and key developments relevant to this transformative industrial era.
                                    </div>
                                </div>
                            </div>
                            <Question
                                className="rounded-[30px] w-full"
                                title="Can I collaborate with my external team on the Innovation Hub?"
                                closedQuestion="/closed-question.svg"
                            />
                            <Question
                                className="rounded-[30px] w-full"
                                title="Are the tutorial videos interactive?"
                                closedQuestion="/closed-question.svg"
                            />
                            <Question
                                className="rounded-[30px] w-full"
                                title="How does the Job Board match me with job opportunities?"
                                closedQuestion="/closed-question.svg"
                            />
                        </div>
                    </div>
                </div>

                {/*bagian 9*/}
                <div className="bg-[#FDEEEE] flex flex-col items-center py-16 px-8 rounded-[20px]">
                    <h2 className="text-[28px] md:text-[36px] font-bold text-center text-[#1E1E1E]">
                        Create your account today <br /> and <span className="text-[#F06595]">get started</span> <span className="text-[#FFC300]">for free!</span>
                    </h2>
                    <button className="mt-8 bg-[#00C2FF] text-white font-medium rounded-full text-[16px] px-6 py-3 hover:bg-[#00C2FF80]">
                        Get started
                    </button>
                </div>
            </div>


            <footer className="bg-white text-gray-400 py-6 mt-24">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <p className="text-center md:text-left text-sm mb-4 md:mb-0">
                        Copyright © 2024 PIXEL TEAM | All Rights Reserved
                    </p>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
                        <a href="/" className="hover:text-gray-600">Home</a>
                        <a href="/about" className="hover:text-gray-600">About</a>
                        <a href="/pricing" className="hover:text-gray-600">Pricing</a>
                        <a href="/contact" className="hover:text-gray-600">Contact</a>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <a href="#" aria-label="Facebook" className="hover:text-gray-600">
                            <Image src="/facebook.svg" width={36} height={36} alt="facebook" />
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:text-gray-600">
                            <Image src="/twitter.svg" width={36} height={36} alt="twitter" />
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:text-gray-600">
                            <Image src="/instagram.svg" width={36} height={36} alt="instagram" />
                        </a>
                    </div>
                </div>
            </footer>



        </div>


    );
}
