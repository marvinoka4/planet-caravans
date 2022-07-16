import {
  PlanetNavBar,
  PlanetHero,
  PlanetContentText,
  PlanetCTABlock,
  PlanetFooter
} from '/ui-components'

export default function Home() {
  return (
    <div>
      <PlanetNavBar />
      <PlanetHero />
      <PlanetContentText />
      <PlanetCTABlock />
      <PlanetFooter />
    </div>
  )
}