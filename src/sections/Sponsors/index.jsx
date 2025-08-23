import "./Sponsors.scss"
import { Image } from "minista"
import Button from "@/components/Button"

export default () => {
  const sponsorsItem = [
    {
      img: "/src/assets/images/sponsors/google.svg",
      title: "Google",
    },
    {
      img: "/src/assets/images/sponsors/microsoft.svg",
      title: "Microsoft",
    },
    {
      img: "/src/assets/images/sponsors/airbnb.svg",
      title: "Airbnb",
    },
    {
      img: "/src/assets/images/sponsors/facebook.svg",
      title: "Facebook",
    },
    {
      img: "/src/assets/images/sponsors/spotify.svg",
      title: "Spotify",
    },
  ]

  return (
    <section className="sponsors">
      <div className="sponsors__inner container">
        <div className="sponsors__wrapper">
          <p className="sponsors__suptitle">partners</p>
          <h2 className="sponsors__title">Lorem Ipsum Dolor</h2>
          <p className="sponsors__desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="sponsors__block">
          <ul className="sponsors__block-list">
            {sponsorsItem.map(({ img, title }, index) => (
              <li className="sponsors__block-item" key={index}>
                <Image
                  className={"sponsors__block-img"}
                  src={img}
                  alt={title}
                  title={title}
                />
              </li>
            ))}
          </ul>
        </div>
        <Button className="sponsors__link" label={"Learn More"} link bg />
      </div>
    </section>
  )
}
