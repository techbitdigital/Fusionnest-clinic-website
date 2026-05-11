import React, { useEffect } from 'react'
import useSEO from '../hooks/useSEO'
import seoConfig from '../hooks/seoConfig'

export default function Blog() {
  useSEO(seoConfig.blog)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>Blog</div>
  )
}
