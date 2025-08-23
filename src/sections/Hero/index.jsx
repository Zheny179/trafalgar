import "./Hero.scss"
import { Image } from "minista"
import Button from "@/components/Button"

export default () => {
  return (
    <section className="hero">
      <div className="hero__inner container">
        <div className="hero__wrapper">
          <p className="hero__suptitle">WELCOME</p>
          <h1 className="hero__title">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <p className="hero__desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </p>
          <Button className="hero__link" label="Explore" link />
        </div>
        <Image
          className="hero__bg-image"
          src="/src/assets/images/hero/bg.svg"
          loading="eager"
        />
      </div>
    </section>
  )
}
