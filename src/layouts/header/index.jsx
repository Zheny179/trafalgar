import './Header.scss'
import Logo from '@/components/Logo'
import clsx from 'clsx'
import BurgerButton from '@/components/BurgerButton'

export default (props) => {
  const { url } = props

  const menuItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Portfolio',
      href: '/portfolio',
    },
    {
      label: 'Services',
      href: '/services',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ]

  return (
    <header
      className='header'
      data-js-overlay-menu=''
    >
      <div className='header__inner container'>
        <Logo />
        <dialog
          className='header__overlay-menu-dialog'
          data-js-overlay-menu-dialog=''
        >
          <nav className='header__menu'>
            <ul className='header__menu-list'>
              {menuItems.map(({ label, href }, index) => (
                <li
                  className='header__menu-item'
                  key={index}
                >
                  <a
                    className={clsx(
                      'header__menu-link',
                      href === url && 'is-active'
                    )}
                    href={href}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </dialog>
        <BurgerButton
          className='header__burger-button visible-tablet'
          extraAttrs={{
            'data-js-overlay-menu-burger-button': '',
          }}
        />
      </div>
    </header>
  )
}
