import './Footer.scss'
import Icon from '@/components/Icon'

export default () => {
  const socialItems = [
    {
      icon: 'facebook',
      width: '10',
      height: '19',
      href: '#',
      label: 'Facebook',
    },
    {
      icon: 'instagram',
      width: '19',
      height: '19',
      href: '#',
      label: 'Instagram',
    },
    {
      icon: 'twitter',
      width: '23',
      height: '19',
      href: '#',
      label: 'Twitter',
    },
    {
      icon: 'pinterest',
      width: '15',
      height: '19',
      href: '#',
      label: 'Pinterest',
    },
    {
      icon: 'tik-tok',
      width: '16',
      height: '19',
      href: '#',
      label: 'TikTok',
    },
    {
      icon: 'whatsapp',
      width: '19',
      height: '19',
      href: '#',
      label: 'WhatsApp',
    },
    {
      icon: 'youtube',
      width: '27',
      height: '19',
      href: '#',
      label: 'YouTube',
    },
  ]
  return (
    <footer className='footer'>
      <div className='footer__inner container'>
        <div className='footer__soc1als'>
          <ul className='footer__soc1als-list'>
            {socialItems.map(({ icon, width, height, href, label }, index) => (
              <li
                className='footer__soc1als-item'
                key={index}
              >
                <a
                  className='footer__soc1als-link'
                  title={`Visit our ${label} page`}
                  href={href}
                  target='_blank'
                  rel='noreferrer'
                >
                  <span className='visually-hidden'>{label}</span>
                  <Icon
                    hasFill
                    name={icon}
                    className='footer__soc1als-icon'
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className='footer__copyright'>
          &copy; Start, 2022. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
