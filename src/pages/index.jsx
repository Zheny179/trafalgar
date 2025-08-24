import Hero from '@/sections/Hero'
import Sponsors from '@/sections/Sponsors'
import Communication from '@/sections/ContentSection'
import ContentSection from '@/sections/ContentSection'
import Talents from '@/sections/Talents'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero />
      <Sponsors />
      <ContentSection
        title='Lorem ipsum dolor sit amet consectetur'
        description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?'
        buttonText='Learn More'
        imageSrc='/src/assets/images/communication/bg.svg'
        imagePosition='left'
        customClass=''
      />
      <ContentSection
        title='Lorem ipsum dolor sit amet consectetur '
        description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?'
        buttonText='Learn More'
        imageSrc='/src/assets/images/protection/bg.svg'
        imagePosition='right'
        customClass='protection'
      />
      <Talents />
    </>
  )
}
