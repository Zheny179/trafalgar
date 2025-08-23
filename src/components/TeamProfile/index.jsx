import "./TeamProfile.scss"
import { Image } from "minista"

export default () => {
  const teamProfile = [
    {
      photo: "/src/assets/images/talents/1.svg",
      name: "Peg Legge",
      post: "CEO",
    },
    {
      photo: "/src/assets/images/talents/2.svg",
      name: "Richard Guerra",
      post: "CTO",
    },
    {
      photo: "/src/assets/images/talents/3.svg",
      name: "Alexandra Stolz",
      post: "DESIGNER",
    },
    {
      photo: "/src/assets/images/talents/4.svg",
      name: "Janet Bray",
      post: "DEVELOPER",
    },
  ]

  return (
    <div className="team-profile">
      {teamProfile.map(({ photo, name, post }, index) => (
        <div className="team-profile__item" key={index}>
          <Image className="team-profile__photo" src={photo} />
          <dl className="team-profile__info">
            <dt className="team-profile__info-name">{name}</dt>
            <dd className="team-profile__info-post">{post}</dd>
          </dl>
        </div>
      ))}
    </div>
  )
}
