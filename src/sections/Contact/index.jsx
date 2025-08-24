import './Contact.scss'
import Section from '@/layouts/Section'
import Button from '@/components/Button'

export default () => {
  return (
    <Section
      title='Contact Us'
      titleId='contact-us-title'
      description='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      className='contact-us'
    >
      <div className='contact-us__inner'>
        <form
          className='contact-us__form'
          method='post'
          aria-label='Contact form'
        >
          <div className='contact-us__field'>
            <label
              className='contact-us__label'
              htmlFor='contact-name'
            >
              Name
            </label>
            <input
              className='contact-us__input'
              type='text'
              id='contact-name'
              required
            />
          </div>

          <div className='contact-us__field'>
            <label
              className='contact-us__label'
              htmlFor='contact-email'
            >
              Email
            </label>
            <input
              className='contact-us__input'
              type='email'
              name='email'
              id='contact-email'
              required
            />
          </div>

          <div className='contact-us__field'>
            <label
              className='contact-us__label'
              htmlFor='contact-message'
            >
              Message
            </label>
            <textarea
              className='contact-us__textarea'
              id='contact-message'
              name='message'
              required
              spellCheck
            />
          </div>
          <Button
            className='contact-us__submit'
            label='Submit'
            submit
            bg
          />
        </form>
        <div
          className='contact-us__map'
          aria-label='Our location on map'
        >
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423289.7032114892!2d-119.03552956825818!3d34.01947366478602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z0JvQvtGBLdCQ0L3QtNC20LXQu9C10YEsINCa0LDQu9C40YTQvtGA0L3QuNGPLCDQodCo0JA!5e0!3m2!1sru!2sru!4v1756055163094!5m2!1sru!2sru'
            style={{ border: 0 }}
            allowFullScreen
            title='Google Maps: Location of our office'
            aria-label='Interactive map showing our office location'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
      </div>
    </Section>
  )
}
