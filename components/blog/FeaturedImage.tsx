import React from 'react'
import { NextSeo } from 'next-seo'
import cn from 'classnames'

import mdxInNextJs from './images/How-to-setup-MDX-in-Nextjs.jpg'
import { rootUrl } from '../../lib/constants'
import { getSeoProps } from '../getSeoProps'

const titlesToImages = {
  'How to setup MDX in Next.js': mdxInNextJs,
}

type Props = {
  title: string
  description?: string
  withSeo?: boolean
  className?: string
}

export const FeaturedImage = ({
  title,
  description,
  withSeo,
  className,
}: Props) => {
  const imageSrc = titlesToImages[title]

  return imageSrc ? (
    <>
      {!!withSeo && (
        <NextSeo
          {...getSeoProps({
            title,
            description,
            openGraph: {
              images: [
                {
                  url: `${rootUrl}${imageSrc}`,
                  width: 2048,
                  height: 1152,
                  alt: `Featured image for ${title}`,
                },
              ],
            },
            twitter: {
              cardType: 'summary_large_image',
            },
          })}
        />
      )}
      <img
        src={imageSrc}
        className={cn('sm:rounded shadow-lg max-w-full', className)}
        alt={`hero of "${title}"`}
      />
    </>
  ) : null
}