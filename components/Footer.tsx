import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import images from '../assets';
import { Button } from '.';

const FooterLinks = ({ heading, items }) => (
  <div className='items-start justify-start flex-1'>
    <h3 className='mb-10 text-xl font-semibold font-poppings dark:text-white text-nft-black-1'>
      {heading}
    </h3>
    {items.map((item, index) => (
      <p
        key={index}
        className='my-3 text-base font-normal cursor-pointer font-poppins dark:text-white text-nft-black-1 dark:hover:text-nft-gray-1 hover:text-nft-black-1'
      >
        {item}
      </p>
    ))}
  </div>
);

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className='flex-col py-16 border-t flexCenter dark:border-nft-black-1 border-nft-gray-1 sm:py-8'>
      <div className='flex-row w-full px-16 minmd:w-4/5 sm:px-4 md:flex-col'>
        <div className='flex-col flex-1 flexStart'>
          <div className='cursor-pointer flexCenter'>
            <Image src={images.logo02} objectFit='contain' alt='logo' width={32} height={32} />
            <p className='ml-1 text-lg font-semibold dark:text-white text-nft-black-1'>CryptoArt</p>
          </div>
          <p className='mt-6 text-base font-semibold font-poppings dark:text-white text-nft-black-1'>
            Get the latest updates
          </p>
          <div className='mt-6 bg-white border rounded-md flexBetween md:w-full minlg:w-557 w-357 dark:bg-nft-black-2 dark:border-nft-black-2 border-nft-gray-2'>
            <input
              type='email'
              placeholder='Your Email'
              className='flex-1 w-full h-full px-4 text-xs font-normal bg-white rounded-md outline-none dark:bg-nft-black-2 dark:text-white text-nft-black-1 minlg:text-lg'
            />
            <div className='flex-initial'>
              <Button btnName='Email Me' classStyles='rounded-md' />
            </div>
          </div>
        </div>

        <div className='flex-wrap flex-1 ml-10 flexBetweenStart md:ml-0 md:mt-8'>
          <FooterLinks heading='CryptoArt' items={['Explore', 'How it Works', 'Contact Us']} />
          <FooterLinks
            heading='Support'
            items={['Help Center', 'Terms of Service', 'Legal', 'Privacy Policy']}
          />
        </div>
      </div>

      <div className='w-full px-16 mt-5 border-t flexCenter dark:border-nft-black-1 border-nft-gray-1 sm:px-4'>
        <div className='flex-row w-full flexBetween minmd:w-4/5 sm:flex-col mt-7'>
          <p className='text-base font-semibold font-poppins dark:text-white text-nft-black-1'>
            ArtPlace, Inc. All Rights Reserved.
          </p>
          <div className='flex flex-row sm:mt-7'>
            {[images.instagram, images.twitter, images.telegram, images.discord].map(
              (image, index) => (
                <div className='mx-2 cursor-pointer' key={index}>
                  <Image
                    src={image}
                    objectFit='contain'
                    width={24}
                    height={24}
                    alt='social'
                    className={theme === 'light' ? 'filter invert' : ''}
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
