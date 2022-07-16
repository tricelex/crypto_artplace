import React from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import images from '../assets';

const NFTCard = ({ nft }) => {
  return (
    <Link href={{ pathname: '/nft-details', query: { nft } }}>
      <div className='flex-1 p-4 m-4 my-2 bg-white shadow-md cursor-pointer min-w-215 max-w-max xs:max-w-none sm:w-full sm:min-w-155 minmd:min-w-256 minlg:min-w-327 dark:bg-nft-black-3 rounded-2xl minlg:m-8 sm: sm:mx-2'>
        <div className='relative w-full overflow-hidden h-52 sm:h-36 xs:h-56 minmd:h-60 minlg:h-300 rounded-2xl'>
          <Image
            src={nft.image || images[`nft${nft.i}`]}
            layout='fill'
            objectFit='cover'
            alt={`nft${nft.i}`}
          />
        </div>
        <div className='flex flex-col mt-3'>
          <p className='text-sm font-semibold font-poppins dark:text-white text-nft-black-1 minlg:text-xl'>
            {nft.name}
          </p>
          <div className='flex-row mt-1 flexBetween minlg:mt-3 xs:flex-col xs:items-start xs:mt-3'>
            <p className='text-xs font-semibold font-poppins dark:text-white text-nft-black-1 minlg:text-xl'>
              {nft.price} <span className='normal'>ETH</span>
            </p>
            <p className='text-xs font-semibold font-poppins dark:text-white text-nft-black-1 minlg:text-lg'>
              {nft.seller}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NFTCard;
