import {
  PlanetNavBar,
  PlanetHero,
  PlanetContentText,
  PlanetCTABlock,
  PlanetFooter
} from '/ui-components'
import Head from "next/head";

export default function Home() {
  return (
      <div>
          <Head>
              <title>Planet Caravans</title>
              <meta name='description' content='Built by evensix' />
              <link rel='icon' href='/favicon.ico' />
          </Head>


          <div>

              <PlanetNavBar />
              <PlanetHero />
              <PlanetContentText />
              <PlanetCTABlock />
              <PlanetFooter />
          </div>

      </div>

  )
}