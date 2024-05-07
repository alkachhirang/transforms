import React from 'react';
import { Greentick } from './IconImg';
import rectangleimg from '../assets/images/webp/rectangle-btn.webp';
import oneimg from '../assets/images/webp/one-img.webp';
import twoimg from '../assets/images/webp/two-img.webp';
import threeimg from '../assets/images/webp/three-img.webp';
import fourimg from '../assets/images/webp/four-img.webp';
import fiveimg from '../assets/images/webp/five-img.webp';
import cardimg1 from '../assets/images/webp/card-img1.webp';
import cardimg2 from '../assets/images/webp/card-img2.webp';
import cardimg3 from '../assets/images/webp/card-img3.webp';
import cardimg4 from '../assets/images/webp/card-img4.webp';
import cardimg5 from '../assets/images/webp/card-img5.webp';
import greencircle from '../assets/images/webp/green-circle-img.webp';
import dottedline from '../assets/images/webp/dotted-line-img.webp';

const TransformsWellness = () => {
    return (
        <div className='xl:pt-[97px] lg:pt-[60px] md:pt-[50px] pt-[40px] xl:pb-[170px] lg:pb-[100px] md:pb-[70px] sm:pb-[50px] pb-[40px] relative '>
            <img src={dottedline} alt="dottedline" className='max-w-[85px] w-full z-0 object-contain absolute bottom-[16%] left-[7%]' />
            <img src={greencircle} alt="greencircle" className='max-w-[27px] w-full z-0 absolute bottom-[10%] left-[4%]' />
            <div className='container xl:max-w-[1164px] px-3 mx-auto relative'>
                <img src={rectangleimg} alt="rectangleimg" className='absolute max-w-[72px] max-h-[72px] object-contain h-full left-[47%] top-[8%] xl:block hidden' />
                <div className='flex justify-center items-center flex-col' data-aos="fade-down">
                    <button className='font-semibold text-lightgreen text-base border-[1px] border-solid border-lightgreen py-[9px] px-[23px] bg-lightgrey rounded-[51px] hover:bg-lightgreen !leading-[150%] hover:text-white transition-all ease-linear duration-300'>HOW IT WORKS</button>
                    <h1 className='capitalize ff_roboto text-black !leading-[120%] mt-[8px] text-center text-4xl sm:text-5xl mb-[30px] sm:mb-[40px] md:mb-[60px] xl:mb-[80px] font-bold'>How Evexia <span className='text-lightgreen'>Transforms Wellness</span></h1>
                </div>
                <div className='flex lg:flex-row flex-col-reverse flex-wrap justify-between xl:mb-[84px] lg:mb-[50px] sm:mb-[30px] mb-[20px]'>
                    <div data-aos="fade-right">
                        <div className='xl:max-w-[498px] hover:shadow-[0_6px_16.9px_0px_rgba(56,_97,_196,_0.3)] transition-all duration-300 ease-linear mt-[20px] sm:mt-[30px] lg:mt-0 lg:max-w-[480px] min-h-[289px] w-full h-full p-[20px] sm:p-[24px] border-[1px] border-solid border-lightgrey rounded-[16px] relative'>
                            <img src={oneimg} alt="oneimg" className='absolute right-[10%] bottom-[4%] sm:bottom-[8%] max-w-[57px] sm:max-w-[92px] w-full max-h-[57px] h-full object-contain' />
                            <h2 className='font-medium text-black !leading-[120%] ff_roboto text-xl sm:text-2xl mb-[12px] sm:mb-[16px]'>Step 1: Kickstart your journey</h2>
                            <div className='flex gap-[14px]'>
                                <div>
                                    <Greentick />
                                </div>
                                <p className='font-normal leading-[150%] mb-[8px] sm:mb-[16px] text-black opacity-[70%]'><span className='font-bold'>Get your kit:</span> Grab an Evexia genomic test through our app. It’s secure, simple and privacy is a given</p>
                            </div>
                            <div className='flex gap-[14px]'>
                                <div>
                                    <Greentick />
                                </div>
                                <p className='font-normal leading-[150%] mb-[16px] text-black opacity-[70%]'><span className='font-bold'> Send your DNA:</span> With our easy guide, send us your sample. Our lab’s next step? Unlocking your genetic secrets</p>
                            </div>
                        </div>
                    </div>
                    <div className='xl:max-w-[498px] lg:max-w-[480px] !w-full flex justify-center' data-aos="fade-left">
                        <img src={cardimg1} alt="cardimg1" className='rounded-[16px] border-[1.15px] boder-solid border-lightgreen w-full' />
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col flex-wrap justify-between xl:mb-[84px] lg:mb-[50px] sm:mb-[30px] mb-[20px]'>
                    <div className='xl:max-w-[498px] lg:max-w-[480px] !w-full flex justify-center' data-aos="fade-right">
                        <img src={cardimg2} alt="cardimg2" className='rounded-[16px] border-[1.15px] boder-solid border-lightgreen w-full' />
                    </div>
                    <div data-aos="fade-left">
                        <div className='xl:max-w-[498px] mt-[20px] hover:shadow-[0_6px_16.9px_0px_rgba(56,_97,_196,_0.3)] transition-all duration-300 ease-linear sm:mt-[30px] lg:mt-0 lg:max-w-[480px] min-h-[289px] w-full h-full p-[20px] sm:p-[24px] border-[1px] border-solid border-lightgrey rounded-[16px] relative'>
                            <img src={twoimg} alt="twoimg" className='absolute right-[10%] bottom-[4%] sm:bottom-[8%] max-w-[57px] sm:max-w-[92px] w-full max-h-[57px] h-full object-contain' />
                            <h2 className='font-medium text-black !leading-[120%] ff_roboto text-xl sm:text-2xl mb-[12px] sm:mb-[16px]'>Step 2: Unveil your personalized plan</h2>
                            <div className='flex gap-[14px]'>
                                <div>
                                    <Greentick />
                                </div>
                                <p className='font-normal leading-[150%] mb-[8px] sm:mb-[16px] text-black opacity-[70%]'><span className='font-bold'>Deep insights:</span> Our experts dive into your DNA, pinpointing what makes your health tick</p>
                            </div>
                            <div className='flex gap-[14px]'>
                                <div>
                                    <Greentick />
                                </div>
                                <p className='font-normal leading-[150%] mb-[16px] text-black opacity-[70%]'><span className='font-bold'> Your blueprint:</span> Get a tailored wellness plan – diet, exercise, and mental strategies crafted  just for you</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col-reverse flex-wrap justify-between xl:mb-[84px] lg:mb-[50px] sm:mb-[30px] mb-[20px]'>
                    <div data-aos="fade-right">
                        <div className='xl:max-w-[498px] hover:shadow-[0_6px_16.9px_0px_rgba(56,_97,_196,_0.3)] transition-all duration-300 ease-linear mt-[20px] sm:mt-[30px] lg:mt-0 lg:max-w-[480px] min-h-[289px] w-full h-full p-[20px] sm:p-[24px] border-[1px] border-solid border-lightgrey rounded-[16px] relative'>
                            <img src={threeimg} alt="threeimg" className='absolute right-[10%] bottom-[4%] sm:bottom-[8%] max-w-[57px] sm:max-w-[92px] w-full max-h-[57px] h-full object-contain' />
                            <h2 className='font-medium text-black !leading-[120%] ff_roboto text-xl sm:text-2xl mb-[12px] sm:mb-[16px]'>Step 3: Live your best life</h2>
                            <div className='flex gap-[14px]'>
                                <div>
                                    <Greentick />
                                </div>
                                <p className='font-normal leading-[150%] mb-[8px] sm:mb-[16px] text-black opacity-[70%]'><span className='font-bold'>Track & thrive:</span> With our app, your health’s in your hands. Meals, workouts, and wellness – track it all</p>
                            </div>
                            <div className='flex gap-[14px]'>
                                <div>
                                    <Greentick />
                                </div>
                                <p className='font-normal leading-[150%] mb-[16px] text-black opacity-[70%]'><span className='font-bold'>Evolving with you:</span> as you grow, so does your plan. Our AI keeps you on the cutting edge of wellness</p>
                            </div>
                        </div>
                    </div>
                    <div className='xl:max-w-[498px] lg:max-w-[480px] !w-full flex justify-center' data-aos="fade-left">
                        <img src={cardimg3} alt="cardimg3" className='rounded-[16px] border-[1.15px] boder-solid border-lightgreen w-full' />
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col flex-wrap justify-between xl:mb-[84px] lg:mb-[50px] sm:mb-[30px] mb-[20px]'>
                    <div className='xl:max-w-[498px] lg:max-w-[480px] !w-full flex justify-center' data-aos="fade-right">
                        <img src={cardimg4} alt="cardimg4" className='rounded-[16px] border-[1.15px] boder-solid border-lightgreen w-full' />
                    </div>
                    <div data-aos="fade-left">
                        <div className='xl:max-w-[498px] mt-[20px] hover:shadow-[0_6px_16.9px_0px_rgba(56,_97,_196,_0.3)] transition-all duration-300 ease-linear sm:mt-[30px] lg:mt-0 lg:max-w-[480px] min-h-[289px] w-full h-full p-[20px] sm:p-[24px] border-[1px] border-solid border-lightgrey rounded-[16px] relative'>
                            <img src={fourimg} alt="fourimg" className='absolute right-[10%] bottom-[4%] sm:bottom-[8%] max-w-[57px] sm:max-w-[92px] w-full max-h-[57px] h-full object-contain' />
                            <h2 className='font-medium text-black !leading-[120%] ff_roboto text-xl sm:text-2xl mb-[12px] sm:mb-[16px]'>Step 4: Find your tribe</h2>
                            <div className='flex gap-[14px]'>
                                <div>
                                    <Greentick />
                                </div>
                                <p className='font-normal leading-[150%] mb-[8px] sm:mb-[16px] text-black opacity-[70%]'><span className='font-bold'>Community spirit:</span> You’re not alone. Join fellow Evexians, sharing and growing together on this wellness voyage</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col-reverse flex-wrap justify-between '>
                    <div data-aos="fade-right">
                        <div className='xl:max-w-[498px] hover:shadow-[0_6px_16.9px_0px_rgba(56,_97,_196,_0.3)] transition-all duration-300 ease-linear bg-white z-[2] mt-[20px] sm:mt-[30px] lg:mt-0 lg:max-w-[480px] min-h-[289px] w-full h-full p-[20px] sm:p-[24px] border-[1px] border-solid border-lightgrey rounded-[16px] relative'>
                            <img src={fiveimg} alt="fiveimg" className='absolute right-[10%] bottom-[4%] sm:bottom-[8%] max-w-[57px] sm:max-w-[92px] w-full max-h-[57px] h-full object-contain' />
                            <h2 className='font-medium text-black !leading-[120%] ff_roboto text-xl sm:text-2xl mb-[12px] sm:mb-[16px]'>Step 5: Witness your transformation</h2>
                            <div className='flex gap-[14px]'>
                                <div>
                                    <Greentick />
                                </div>
                                <p className='font-normal leading-[150%] mb-[8px] sm:mb-[16px] text-black opacity-[70%]'><span className='font-bold'>See the change:</span> feel the power of genetics in action. From energy boosts to mental clarity, witness your well-being align with your DNA</p>
                            </div>
                            <div className='flex gap-[14px]'>
                                <div>
                                    <Greentick />
                                </div>
                                <p className='font-normal leading-[150%] mb-[16px] text-black opacity-[70%] xl:max-w-[406px]'><span className='font-bold'>Share your victory:</span> Your success story is powerful. Inspire the community, leading the way in the wellness revolution</p>
                            </div>
                        </div>
                    </div>
                    <div className='xl:max-w-[498px] lg:max-w-[480px] !w-full flex justify-center' data-aos="fade-left">
                        <img src={cardimg5} alt="cardimg5" className='rounded-[16px] border-[1.15px] boder-solid border-lightgreen w-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransformsWellness;
