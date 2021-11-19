Vue.component("tabla-juegos", {
  props: {
    tipo: {
      type: Array,
    },
    cssClass: {
      type: String,
      default: 'style-basic',
    }
  },
  template: `
    <div>
      <table :class="['table-responsive', 'table-juegos', cssClass]">
        <thead class="juegos-head">
          <tr>
            <th class="table-title" scope="col">Foto</th>
            <th class="table-title" scope="col">Nombre</th>
            <th class="table-title" scope="col">Jugadores</th>
            <th class="table-title" scope="col">Tiempo</th>
            <th class="table-title" scope="col">Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr class="juegos-row" v-for="(juego, i) in tipo" :key="i" :titulo="juego.titulo" :jugadoresMin="juego.jugadoresMin" :jugadoresMax="juego.jugadoresMax">
            <td><img :src="juego.foto" :alt="juego.titulo"/></td>
            <td class="juego-titulo">{{juego.titulo}}</td>
            <td>{{juego.jugadoresMin}}-{{juego.jugadoresMax}}</td>
            <td>{{juego.tiempoDeJuego}}'</td>
            <td>
              <p>{{juego.descripcion}}</p>
              <a class="btn" target="_blank" :href="juego.linkBgg">Ver en BGG</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})

var myapp = new Vue({
  el: '#app',
  data: {
    tipoDeJuego: '',
    msgElegir: 'Elegí un tipo de juego para ver las recomendaciones.',
    bgParty: [
      {
        id: 1,
        titulo: "Skull King",
        jugadoresMin: 2,
        jugadoresMax: 6,
        tiempoDeJuego: 30,
        foto: "https://cf.geekdo-images.com/jiL3MIGH_w3g6El3OHVVig__itemrep/img/tC74qzJUxzrgPZ54MBctKmx8pbg=/fit-in/246x300/filters:strip_icc()/pic6137456.png",
        descripcion: "En Skull King tus amigos y vos se convierten en piratas que apuestan para ver cuantas manos se van a llevar.",
        linkBgg: "https://boardgamegeek.com/boardgame/150145/skull-king",
      },
      {
        id: 2,
        titulo: "The Game",
        jugadoresMin: 1,
        jugadoresMax: 5,
        tiempoDeJuego: 20,
        foto: "https://cf.geekdo-images.com/g4pn1ieUKfIhERl5Ym6joQ__itemrep/img/4fI4jFXRtKw-ItHIqpzp8tH7r1A=/fit-in/246x300/filters:strip_icc()/pic4203279.png",
        descripcion: "En The Game los jugadores juegan de manera cooperativa para quedarse sin cartas",
        linkBgg: "https://boardgamegeek.com/boardgame/173090/game",
      },
      {
        id: 3,
        titulo: "That's Pretty Clever!",
        jugadoresMin: 1,
        jugadoresMax: 4,
        tiempoDeJuego: 30,
        foto: "https://cf.geekdo-images.com/3-unuy5JW1cC8C6EUBNiOA__itemrep/img/6BcSS0mLm9nJBIXTcz0HQ5SKJmI=/fit-in/246x300/filters:strip_icc()/pic4410877.jpg",
        descripcion: "En este juego 'roll & write', los jugadores se van turnando para tirar dados completando casillas y ganando puntos",
        linkBgg: "https://boardgamegeek.com/boardgame/244522/s-pretty-clever",
      },
      {   
        id: 4,
        titulo: "Codenames",
        jugadoresMin: 2,
        jugadoresMax: 8,
        tiempoDeJuego: 15,
        foto: "https://cf.geekdo-images.com/F_KDEu0GjdClml8N7c8Imw__itemrep/img/e8zw8YQvQB8q8zfWkHQ48Ls920g=/fit-in/246x300/filters:strip_icc()/pic2582929.jpg",
        descripcion: "En Codenames los jugadores se dividen en dos equipos, asignado a un capitán que deberá guiar a su equipo a encontrar las palabras clave.",
        linkBgg: "https://boardgamegeek.com/boardgame/178900/codenames",
      }
    ],
    bgMedio: [
      {
        id: 1,
        titulo: "Azul",
        jugadoresMin: "2",
        jugadoresMax: "4",
        tiempoDeJuego: "45",
        foto: "https://cf.geekdo-images.com/tz19PfklMdAdjxV9WArraA__itemrep/img/EuG9Te3VDhT58DlEYeEVVunM5wY=/fit-in/246x300/filters:strip_icc()/pic3718275.jpg",
        descripcion: "En Azul cada jugador deberá ir seleccionando azulejos para completar su pared y así ganar puntos.",
        linkBgg: "https://boardgamegeek.com/boardgame/230802/azul",
      },
      {
        id: 2,
        titulo: "Splendor",
        jugadoresMin: "2",
        jugadoresMax: "4",
        tiempoDeJuego: "30",
        foto: "https://cf.geekdo-images.com/rwOMxx4q5yuElIvo-1-OFw__itemrep/img/NaQx3XWoNAOMDGl4AXf4nxlhHo0=/fit-in/246x300/filters:strip_icc()/pic1904079.jpg",
        descripcion: "Cada uno de los jugadores compite por tener la joyería más prestigiosa del Renacimiento.",
        linkBgg: "https://boardgamegeek.com/boardgame/148228/splendor",
      },
      {
        id: 3,
        titulo: "Dinosaur Island: Rawr 'n Write ",
        jugadoresMin: "1",
        jugadoresMax: "4",
        tiempoDeJuego: "45",
        foto: "https://cf.geekdo-images.com/xRP9jo5gfwhfFkgxQBgWTw__itemrep/img/1HA068DMDuzajRY0s_5PDc1BDhg=/fit-in/246x300/filters:strip_icc()/pic5622932.png",
        descripcion: "Cada jugador crea su propio parque jurásico y añade atracciones dibujándolas en un papel.",
        linkBgg: "https://boardgamegeek.com/boardgame/318009/dinosaur-island-rawr-n-write",
      },
      {   
        id: 4,
        titulo: "Manhattan",
        jugadoresMin: "2",
        jugadoresMax: "4",
        tiempoDeJuego: "45",
        foto: "https://cf.geekdo-images.com/J38tww49pGTsp3bmgEekkA__itemrep/img/zEddKUhfmbz47gdfdSukuK53B44=/fit-in/246x300/filters:strip_icc()/pic3573055.png",
        descripcion: "Los jugadores van construyendo el paisaje de Manhattan, agregando edificios y subiendo la cantidad de pisos.",
        linkBgg: "https://boardgamegeek.com/boardgame/199/manhattan",
      }
    ],
    bgPro: [
      {
        id: 1,
        titulo: "Scythe",
        jugadoresMin: "1",
        jugadoresMax: "5",
        tiempoDeJuego: "115",
        foto: "https://cf.geekdo-images.com/7k_nOxpO9OGIjhLq2BUZdA__itemrep/img/RVh5N-_HcMziJ3M6Q1eLTlj8XIQ=/fit-in/246x300/filters:strip_icc()/pic3163924.jpg",
        descripcion: "Scythe nos plantea un mundo distópico en el cual luego de la primera guerra mundial los jugadores deberán cuidar su territorio e ir ampliándolo.",
        linkBgg: "https://boardgamegeek.com/boardgame/169786/scythe",
      },
      {
        id: 2,
        titulo: "Roll Player",
        jugadoresMin: "1",
        jugadoresMax: "4",
        tiempoDeJuego: "90",
        foto: "https://cf.geekdo-images.com/enmQAOQl99U6wiQvZoL5GQ__itemrep/img/lEXrmts1iZPtAufiXjzxk6Ik9rg=/fit-in/246x300/filters:strip_icc()/pic2556921.jpg",
        descripcion: "Cada jugador deberá crear su propio personaje de rol, teniendo en cuenta diferentes stats para ganar más puntos",
        linkBgg: "https://boardgamegeek.com/boardgame/169426/roll-player",
      },
      {
        id: 3,
        titulo: "Terraforming Mars",
        jugadoresMin: "1",
        jugadoresMax: "5",
        tiempoDeJuego: "120",
        foto: "https://cf.geekdo-images.com/wg9oOLcsKvDesSUdZQ4rxw__itemrep/img/IwUOQfhP5c0KcRJBY4X_hi3LpsY=/fit-in/246x300/filters:strip_icc()/pic3536616.jpg",
        descripcion: "Cada jugador representa una corporación que intenta conquistar Marte y hacerla habitable para los humanos.",
        linkBgg: "https://boardgamegeek.com/boardgame/167791/terraforming-mars",
      },
      {   
        id: 4,
        titulo: "Viticulture",
        jugadoresMin: "2",
        jugadoresMax: "6",
        tiempoDeJuego: "90",
        foto: "https://cf.geekdo-images.com/WrnWFA1Sysm3-nQyBe1sUA__itemrep/img/c3Gex8FN8UwHHIChBqf1jUE-SWk=/fit-in/246x300/filters:strip_icc()/pic2619743.jpg",
        descripcion: "En Viticulture se crean viñedos y se cultivan uvas para hacer vino y venderlo al final de la temporada.",
        linkBgg: "https://boardgamegeek.com/boardgame/128621/viticulture",
      }
    ]
  },
})