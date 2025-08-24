import './Services.scss'
import Section from '@/layouts/Section'
import Button from '@/components/Button'

export default () => {
  const serviceItems = [
    {
      title: 'Basic',
      price: '$100',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam',
      serviceListItems: [
        {
          text: 'Lorem ipsum, dolor sit ',
        },
        {
          text: 'Lorem ipsum, dolor sit ',
        },
        {
          text: 'Lorem ipsum, dolor sit ',
        },
        {
          text: 'Lorem ipsum, dolor sit ',
        },
        {
          text: 'Lorem ipsum, dolor sit ',
        },
      ],
    },
    {
      title: 'Plus',
      price: '$250',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam',
      serviceListItems: [
        {
          text: 'Lorem ipsum, dolor sit ',
        },
        {
          text: 'Lorem ipsum, dolor sit ',
        },
        {
          text: 'Lorem ipsum, dolor sit ',
        },
        {
          text: 'Lorem ipsum, dolor sit ',
        },
        {
          text: 'Lorem ipsum, dolor sit ',
        },
      ],
    },
    {
      title: 'Pro',
      price: '$400',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam',
      serviceListItems: [
        {
          text: 'Lorem ipsum, dolor sit ',
        },
        {
          text: 'Lorem ipsum, dolor sit ',
        },
        {
          text: 'Lorem ipsum, dolor sit ',
        },
        {
          text: 'Lorem ipsum, dolor sit ',
        },
        {
          text: 'Lorem ipsum, dolor sit ',
        },
      ],
    },
  ]

  return (
    <Section
      title='Our Services'
      titleId='our-services-title'
      description='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      suptitle='Plans'
      className='services'
    >
      <div className='services__cards'>
        {serviceItems.map(({ title, price, text, serviceListItems }, index) => (
          <article
            className='services__cards-item'
            key={index}
          >
            <div className='services__cards-title'>{title}</div>
            <div className='services__cards-price h3'>
              {price}
              <span
                className='services__cards-price-month'
                aria-label='per month'
              >
                /month
              </span>
            </div>
            <div className='services__cards-text'>{text}</div>
            {serviceListItems && (
              <ul
                className='services__list'
                aria-label={`Features of ${title} plan`}
              >
                {serviceListItems.map(({ text }, index) => (
                  <li
                    className='services__list-item'
                    key={index}
                  >
                    {text}
                  </li>
                ))}
              </ul>
            )}
            <Button
              className='services__cards-link'
              label='Learn More'
              aria-label={`Learn more about ${title} plan`}
              title={`Learn more about ${title} plan`}
              link
              bg
            />
          </article>
        ))}
      </div>
    </Section>
  )
}
