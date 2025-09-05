import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../Components/NewsletterBox'

function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad, amet, aut doloremque sint aliquid temporibus eaque, ipsam necessitatibus quisquam ullam. Quisquam temporibus maiores nobis aut libero, eius harum eos!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ad doloribus, deleniti ipsa sint nam laboriosam hic voluptas nesciunt rerum facilis repellendus, tenetur explicabo iure similique, odio inventore suscipit consequuntur!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut distinctio corporis, quae doloremque quia fugit nam expedita animi ea totam deserunt harum, ut minima blanditiis, esse officia aliquid. Pariatur, dicta.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium esse temporibus quos consectetur architecto minima vero nesciunt ex aut consequatur obcaecati, qui modi impedit autem nobis.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium esse temporibus quos consectetur architecto minima vero nesciunt ex aut consequatur obcaecati, qui modi impedit autem nobis.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium esse temporibus quos consectetur architecto minima vero nesciunt ex aut consequatur obcaecati, qui modi impedit autem nobis.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
