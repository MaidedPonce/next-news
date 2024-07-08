'use client'
import { m, useScroll, useTransform } from 'framer-motion'
import LazyAnimations from 'app/components/Providers/LazyAnimations'

const CoverPost = () => {
  const { scrollY } = useScroll()
  const translateY = useTransform(scrollY, [0, 300], [0, 100])
  return (
    <LazyAnimations>
      <m.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ translateY }}
        className='bg-custom-gradient h-40 w-full'
      />
    </LazyAnimations>
  )
}

export default CoverPost
