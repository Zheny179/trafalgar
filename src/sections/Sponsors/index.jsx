import './Sponsors.scss'
import { Image } from 'minista'
import Button from '@/components/Button'
import Section from '@/layouts/Section'

export default () => {
  const sponsorsItem = [
    {
      img: '/src/assets/images/sponsors/google.svg',
      title: 'Google',
    },
    {
      img: '/src/assets/images/sponsors/microsoft.svg',
      title: 'Microsoft',
    },
    {
      img: '/src/assets/images/sponsors/airbnb.svg',
      title: 'Airbnb',
    },
    {
      img: '/src/assets/images/sponsors/facebook.svg',
      title: 'Facebook',
    },
    {
      img: '/src/assets/images/sponsors/spotify.svg',
      title: 'Spotify',
    },
  ]

  return (
    <Section
      title='Lorem Ipsum Dolor'
      titleId='sponsors-title'
      description='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      suptitle='partners'
      className='sponsors'
    >
      <div className='sponsors__block'>
        <ul className='sponsors__block-list'>
          {sponsorsItem.map(({ img, title }, index) => (
            <li
              className='sponsors__block-item'
              key={index}
            >
              <Image
                className={'sponsors__block-img'}
                src={img}
                alt={title}
                title={title}
              />
            </li>
          ))}
        </ul>
        <Button
          className='sponsors__link'
          label={'Learn More'}
          title='Learn more partners'
          link
          bg
        />
      </div>
    </Section>
  )
}
