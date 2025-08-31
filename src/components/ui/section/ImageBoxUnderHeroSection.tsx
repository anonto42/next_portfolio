"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import HeroImageButton from '../Buttons/HeroImageButton'

export default function ImageBoxUnderHeroSection({
    data
}: {
    data: {
        image: string
        experience: string
        projects: string
    }
}) {
    const [isImageLoaded, setIsImageLoaded] = useState(false)

    const handleImageLoad = () => {
        setIsImageLoaded(true)
    }

    return (
        <div className="flex items-center justify-center">
            <div className="w-[340px] h-[340px] flex justify-center items-center overflow-hidden relative rounded-tl-4xl rounded-br-4xl">
                {/* Custom Skeleton Loader */}
                {!isImageLoaded && (
                    <div className="skeleton-loader absolute top-0 left-0 w-full h-full bg-gray-300 animate-pulse"></div>
                )}

                <Image
                    fill={true}
                    quality={100}
                    priority
                    placeholder="blur"
                    alt="User profile picture"
                    src={data.image}
                    blurDataURL="/images/Profile2.webp"
                    className="object-cover"
                    onLoadingComplete={handleImageLoad} // Set image load state
                />

                <HeroImageButton
                    text={`${data.projects}+ completed projects`}
                    position="right-0 top-0"
                    border="rounded-bl-xl"
                />

                <HeroImageButton
                    text={`${data.experience} years experience`}
                    position="left-0 bottom-0"
                    border="rounded-tr-xl"
                />
            </div>
        </div>
    )
}
