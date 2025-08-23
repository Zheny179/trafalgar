import "./Talents.scss"
import TeamProfile from "@/components/TeamProfile"
import Button from "@/components/Button"

export default () => {
  return (
    <section className="talents">
      <div className="talents__inner container">
        <div className="talents__wrapper">
          <p className="talents__suptitle">team</p>
          <h2 className="talents__title">Our Talents</h2>
          <p className="talents__desc">
            Lorem ipsum, dolor sit amet consectetur Suscipit nemo hic quos, ab,
          </p>
        </div>
        <TeamProfile />
        <Button className="talents__link" label="View Team" link bg />
      </div>
    </section>
  )
}
