import './Portfolio.scss'
import Section from '@/layouts/Section'
import { Image } from 'minista'
import Button from '@/components/Button'

export default () => {
  const portfolioItems = [
    {
      href: '#',
      img: '/src/assets/images/portfolio/1.svg',
      alt: 'Project 1: Landing page design',
    },
    {
      href: '#',
      img: '/src/assets/images/portfolio/2.svg',
      alt: 'Project 2: Web disign landing page',
    },
    {
      href: '#',
      img: '/src/assets/images/portfolio/3.svg',
      alt: 'Project 3: Rocket your business',
    },
    {
      href: '#',
      img: '/src/assets/images/portfolio/4.svg',
      alt: 'Project 4: Shopping sample text here',
    },
    {
      href: '#',
      img: '/src/assets/images/portfolio/5.svg',
      alt: 'Project 5: Geometric shapes',
    },
    {
      href: '#',
      img: '/src/assets/images/portfolio/6.svg',
      alt: 'Project 6: Trick or treat',
    },
    {
      href: '#',
      img: '/src/assets/images/portfolio/7.svg',
      alt: 'Project 7: Halloween',
    },
    {
      href: '#',
      img: '/src/assets/images/portfolio/8.png',
      alt: 'Project 8: Virtual reality experience',
    },
  ]

  return (
    <Section
      title='Portfolio'
      titleId='portfolio-title'
      description='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      suptitle='Works'
      className='portfolio'
    >
      <div className='portfolio__block'>
        <ul
          className='portfolio__block-list'
          aria-label='Portfolio projects gallery'
        >
          {portfolioItems.map(({ href, img, alt }, index) => (
            <li
              className='portfolio__block-item'
              key={index}
            >
              <a
                className='portfolio__block-link'
                href={href}
                aria-label={alt}
                title={alt}
              >
                <Image
                  src={img}
                  aria-label={alt}
                  className='portfolio__block-img'
                />
              </a>
            </li>
          ))}
        </ul>
        <Button
          className='portfolio__link'
          label='Learn More'
          aria-label='View all portfolio projects'
          title='View all portfolio projects'
          bg
          link
        />
      </div>
    </Section>
  )
}
