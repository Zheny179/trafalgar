import './Talents.scss'
import TeamProfile from '@/components/TeamProfile'
import Button from '@/components/Button'
import Section from '@/layouts/Section'

export default () => {
  return (
    <Section
      title='Our Talents'
      titleId='our-talents-title'
      description='Lorem ipsum, dolor sit amet consectetur Suscipit nemo hic quos, ab,'
      suptitle='team'
      className='talents'
    >
      <div className='talents__block'>
        <TeamProfile />
        <Button
          className='talents__link'
          label='View Team'
          title='View Team'
          link
          bg
        />
      </div>
    </Section>
  )
}
