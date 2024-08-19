import { http, HttpResponse } from 'msw'

export const searchMovieMock = http.get('movie/search/*', async () => {
  return new HttpResponse(
    JSON.stringify({
      movies: [
        {
          lists: [],
          backdrop_path: '/frDS8A5vIP927KYAxTVVKRIbqZw.jpg',
          rating: {
            average: 7.2,
            ratingsCount: 7633,
          },
          id: 268,
          overview:
            'Em Gotham City o milionário Bruce Wayne, que quando jovem teve os pais assassinados por bandidos, resolve combater o crime como Batman, o Homem-Morcego. Mas chega o dia em que o vilão Coringa decide dominar a cidade e se torna um grande desafio para o super-herói.',
          poster_path: '/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg',
          title: 'Batman',
          release_date: '21/06/1989',
          genres: [
            {
              id: 28,
              name: 'Ação',
            },
            {
              id: 80,
              name: 'Crime',
            },
            {
              id: 14,
              name: 'Fantasia',
            },
          ],
        },
        {
          lists: [],
          backdrop_path: '/bxxupqG6TBLKC60M6L8iOvbQEr6.jpg',
          rating: {
            average: 6.399,
            ratingsCount: 916,
          },
          id: 2661,
          overview:
            'Em Gotham City, Charada, Pinguim, Coringa e Mulher-Gato roubam uma invenção secreta e planejam usá-la de forma maléfica. Além disto, planejam também destruir o Homem-Morcego e o Menino-Prodígio.',
          poster_path: '/ocfATpIo0O4JYaDc5jpyePPG87k.jpg',
          title: 'Batman: O Homem Morcego',
          release_date: '30/07/1966',
          genres: [
            {
              id: 28,
              name: 'Ação',
            },
            {
              id: 35,
              name: 'Comédia',
            },
            {
              id: 80,
              name: 'Crime',
            },
          ],
        },
        {
          lists: [],
          backdrop_path: '/bHxJA9rllKF2jhb11ARAwZJYSp6.jpg',
          rating: {
            average: 6.5,
            ratingsCount: 103,
          },
          id: 125249,
          overview:
            'Em Gotham City, Batman (Lewis Wilson) luta contra Dr. Daka (J. Carrol Naish), um japonês mentor de um grupo de espionagem que sabota instituições. Daka tem um aparelho que pulveriza uma radiação mortal, tendo assim, muita facilidade de destruir seus inimigos, além de poder recrutar homens, fazer uma lavagem cerebral neles e transformá-los em seus servos. Batman precisa usar todo o seu poder de morcego para enfrentar este inimigo.',
          poster_path: '/AvzD3mrtokIzZOiV6zAG7geIo6F.jpg',
          title: 'Batman',
          release_date: '16/07/1943',
          genres: [
            {
              id: 28,
              name: 'Ação',
            },
            {
              id: 12,
              name: 'Aventura',
            },
            {
              id: 80,
              name: 'Crime',
            },
            {
              id: 878,
              name: 'Ficção científica',
            },
            {
              id: 53,
              name: 'Thriller',
            },
            {
              id: 10752,
              name: 'Guerra',
            },
          ],
        },
        {
          lists: [
            {
              id: 12,
            },
            {
              id: 11,
            },
          ],
          backdrop_path: '/tRS6jvPM9qPrrnx2KRp3ew96Yot.jpg',
          rating: {
            average: 7.675,
            ratingsCount: 9900,
          },
          id: 414906,
          overview:
            'Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.',
          poster_path: '/wd7b4Nv9QBHDTIjc2m7sr0IUMoh.jpg',
          title: 'Batman',
          release_date: '01/03/2022',
          genres: [
            {
              id: 80,
              name: 'Crime',
            },
            {
              id: 9648,
              name: 'Mistério',
            },
            {
              id: 53,
              name: 'Thriller',
            },
          ],
        },
        {
          lists: [],
          backdrop_path: '/snlu32RmjldF9b068UURJg8sQtn.jpg',
          rating: {
            average: 5.43,
            ratingsCount: 5044,
          },
          id: 414,
          overview:
            'Duas-Caras e Charada, dois excêntricos bandidos, decidem descobrir a identidade do Homem-Morcego para depois matá-lo. Este por sua vez recebe a ajuda de um jovem que tem sede de vingança, por ter perdido a família em um acidente provocado exatamente pelo Duas-Caras.',
          poster_path: '/tEwd28NegRgXmZdiEJeVrclYZfX.jpg',
          title: 'Batman Eternamente',
          release_date: '16/06/1995',
          genres: [
            {
              id: 28,
              name: 'Ação',
            },
            {
              id: 80,
              name: 'Crime',
            },
            {
              id: 14,
              name: 'Fantasia',
            },
          ],
        },
        {
          lists: [],
          backdrop_path: '/5fX1oSGuYdKgwWmUTAN5MNSQGzr.jpg',
          rating: {
            average: 5.969,
            ratingsCount: 17706,
          },
          id: 209112,
          overview:
            'Temendo que as ações de um super-herói divino não tenham sido controladas, o formidável e vigoroso vigilante de Gotham City enfrenta o salvador mais reverenciado e moderno de Metrópolis, enquanto o mundo luta com o tipo de herói que realmente precisa. E com Batman e Superman em guerra um contra o outro, uma nova ameaça rapidamente surge, colocando a humanidade em maior perigo do que nunca antes.',
          poster_path: '/vh6pjeGH0GQupLepPCZn5PylcRg.jpg',
          title: 'Batman vs Superman: A Origem da Justiça',
          release_date: '23/03/2016',
          genres: [
            {
              id: 28,
              name: 'Ação',
            },
            {
              id: 12,
              name: 'Aventura',
            },
            {
              id: 14,
              name: 'Fantasia',
            },
          ],
        },
        {
          lists: [],
          backdrop_path: '/dqK9Hag1054tghRQSqLSfrkvQnA.jpg',
          rating: {
            average: 8.516,
            ratingsCount: 32356,
          },
          id: 155,
          overview:
            'Após dois anos desde o surgimento do Batman, os criminosos de Gotham City têm muito o que temer. Com a ajuda do tenente James Gordon e do promotor público Harvey Dent, Batman luta contra o crime organizado. Acuados com o combate, os chefes do crime aceitam a proposta feita pelo Coringa e o contratam para combater o Homem-Morcego.',
          poster_path: '/4lj1ikfsSmMZNyfdi8R8Tv5tsgb.jpg',
          title: 'Batman: O Cavaleiro das Trevas',
          release_date: '16/07/2008',
          genres: [
            {
              id: 28,
              name: 'Ação',
            },
            {
              id: 80,
              name: 'Crime',
            },
            {
              id: 18,
              name: 'Drama',
            },
            {
              id: 53,
              name: 'Thriller',
            },
          ],
        },
        {
          lists: [],
          backdrop_path: '/3WP0RObZ2t7ShHfqQpKPljF9B22.jpg',
          rating: {
            average: 6.923,
            ratingsCount: 6341,
          },
          id: 364,
          overview:
            'O monstruoso Pinguim, que vive nos arredores de Gotham, se junta ao diabólico empresário Max Shreck para vencer Batman de uma vez por todas. Porém, a secretária de Shreck, Selina Kyle, descobre os planos e se transforma na irresistível Mulher Gato que se alia na destruição de Batman.',
          poster_path: '/trmToqPh8XYS6tzI2Nmv5ctfuSI.jpg',
          title: 'Batman: O Retorno',
          release_date: '19/06/1992',
          genres: [
            {
              id: 28,
              name: 'Ação',
            },
            {
              id: 14,
              name: 'Fantasia',
            },
          ],
        },
        {
          lists: [],
          backdrop_path: '/cMUuAgVsMWOCawXonZ4D1dSMd6h.jpg',
          rating: {
            average: 7.467,
            ratingsCount: 1060,
          },
          id: 14919,
          overview:
            'Sob a identidade secreta de Batman, o multimilionário Bruce Wayne combate perigosos criminosos que ameaçam Gotham City. Desta vez, além de enfrentar seu arqui-inimigo Coringa, o incansável homem-morcego encara outro terrível vilão: o Fantasma.',
          poster_path: '/opeo3R9l1AgbiIgPqpp1rtPXBwb.jpg',
          title: 'Batman: A Máscara do Fantasma',
          release_date: '25/12/1993',
          genres: [
            {
              id: 28,
              name: 'Ação',
            },
            {
              id: 16,
              name: 'Animação',
            },
            {
              id: 80,
              name: 'Crime',
            },
            {
              id: 18,
              name: 'Drama',
            },
            {
              id: 9648,
              name: 'Mistério',
            },
          ],
        },
        {
          lists: [],
          backdrop_path: '/a21obwG9qMSf1qa6oG4ZgpOyMaA.jpg',
          rating: {
            average: 6.6,
            ratingsCount: 125,
          },
          id: 870358,
          overview:
            'Neste Natal, Damian Wayne quer ser um super-herói igual ao pai dele - o primeiro e único Batman. Damian fica sozinho em casa enquanto o Batman sai para enfrentar os maiores supervilões de Gotham na Véspera de Natal, mas acaba descobrindo um plano maligno para roubar o Natal e aproveita a chance para salvar o dia.',
          poster_path: '/t2wpjvGFA9ZdQFZn4Phg6QKZRBH.jpg',
          title: 'O Natal do Pequeno Batman',
          release_date: '08/12/2023',
          genres: [
            {
              id: 28,
              name: 'Ação',
            },
            {
              id: 16,
              name: 'Animação',
            },
            {
              id: 35,
              name: 'Comédia',
            },
            {
              id: 10751,
              name: 'Família',
            },
          ],
        },
        {
          lists: [],
          backdrop_path: '/c3OHQncTAnKFhdOTX7D3LTW6son.jpg',
          rating: {
            average: 7.781,
            ratingsCount: 22346,
          },
          id: 49026,
          overview:
            'Após ser culpado pela morte de Harvey Dent e passar de herói a vilão, Batman desaparece. As coisas mudam com a chegada de uma ladra misteriosa, a Mulher-Gato, e Bane, um terrorista mascarado, que fazem Batman abandonar seu exílio forçado.',
          poster_path: '/j4z01cnbTCaVX69bik1612pSuH6.jpg',
          title: 'Batman: O Cavaleiro das Trevas Ressurge',
          release_date: '17/07/2012',
          genres: [
            {
              id: 28,
              name: 'Ação',
            },
            {
              id: 80,
              name: 'Crime',
            },
            {
              id: 18,
              name: 'Drama',
            },
            {
              id: 53,
              name: 'Thriller',
            },
          ],
        },
        {
          lists: [],
          backdrop_path: '/iQJ1gC2p6yn5wnBEklhPaEFJ3n1.jpg',
          rating: {
            average: 7.668,
            ratingsCount: 277,
          },
          id: 886396,
          overview:
            'Jonathan Kent e o jovem companheiro relutante Damian Wayne estão encarregados de salvar o mundo da destruição iminente. Os dois devem unir forças para resgatar seus pais e salvar o planeta, tornando-se os super-heróis que deveriam ser.',
          poster_path: '/vKUiO82S3r2OkgpTtuTTL6mnpjk.jpg',
          title: 'Batman e Superman: Batalha dos Super Filhos',
          release_date: '17/10/2022',
          genres: [
            {
              id: 28,
              name: 'Ação',
            },
            {
              id: 16,
              name: 'Animação',
            },
            {
              id: 878,
              name: 'Ficção científica',
            },
          ],
        },
        {
          lists: [],
          backdrop_path: '/bNMw3onveTYU7PpLQRK0HQK8JRb.jpg',
          rating: {
            average: 7.253,
            ratingsCount: 928,
          },
          id: 69735,
          overview:
            'Bruce Wayne retorna para casa depois de anos de treinamento para se tornar um combatente do crime, enquanto o Tenente James Gordon se muda para Gotham e encontra a corrupção em todas as esferas da administração. Assim tem início a batalha de Wayne contra as famílias mafiosas e bandidos de Gotham, sem contar a polícia, que nos primórdios de Batman, atacam o morcego freneticamente.',
          poster_path: '/9e0Yftt4svEI268iogQQdMXvng6.jpg',
          title: 'Batman: Ano Um',
          release_date: '27/09/2011',
          genres: [
            {
              id: 28,
              name: 'Ação',
            },
            {
              id: 16,
              name: 'Animação',
            },
            {
              id: 80,
              name: 'Crime',
            },
          ],
        },
        {
          lists: [],
          backdrop_path: '/oSogG5fpITtg11UGz8tfRNfuMeA.jpg',
          rating: {
            average: 7.421,
            ratingsCount: 491,
          },
          id: 736074,
          overview:
            'O assassino conhecido como Holiday continua a perseguir a família do crime Falcone, enquanto uma nova classe de criminosos fantasiados sobe em Gotham City. Batman suspeita que um ex-aliado pode ser o assassino em série.',
          poster_path: '/9aU7b0dBctae0aLRYy6joj467zV.jpg',
          title: 'Batman: O Longo Dia das Bruxas - Parte 2',
          release_date: '26/07/2021',
          genres: [
            {
              id: 28,
              name: 'Ação',
            },
            {
              id: 16,
              name: 'Animação',
            },
            {
              id: 80,
              name: 'Crime',
            },
            {
              id: 9648,
              name: 'Mistério',
            },
          ],
        },
        {
          lists: [],
          backdrop_path: '/eoMushgujydxFplE9yPZ54lwOvo.jpg',
          rating: {
            average: 7.221,
            ratingsCount: 4888,
          },
          id: 324849,
          overview:
            'No spin-off de Uma Aventura Lego, Batman (Will Arnett) descobre que adotou acidentalmente um garoto órfão. Ele se torna ninguém menos que seu ajudante Robin (Michael Cera). A dupla formada pelo arrogante Homem-Morcego e o seu empolgado ajudante deve combater o crime e prender o Coringa (Zach Galifianakis).',
          poster_path: '/qVf6lTFzDsBZUbYbk8m9dk9SipX.jpg',
          title: 'Lego Batman: O Filme',
          release_date: '08/02/2017',
          genres: [
            {
              id: 28,
              name: 'Ação',
            },
            {
              id: 16,
              name: 'Animação',
            },
            {
              id: 35,
              name: 'Comédia',
            },
            {
              id: 10751,
              name: 'Família',
            },
          ],
        },
        {
          lists: [],
          backdrop_path: '/eevJuYAitUe6VwFN29aFwzeyeTr.jpg',
          rating: {
            average: 7.18,
            ratingsCount: 851,
          },
          id: 537056,
          overview:
            'O passado de Batman começa a se desenrolar, dá-se início a uma corrida para o Cavaleiro das Trevas solucionar os jogos mortais do Silêncio. O misterioso vilão conhecido como Silêncio está determinado a destruir tanto a carreira de combatente ao crime de Batman, quanto a vida pessoal de Bruce Wayne',
          poster_path: '/5fepR3N7FtTaZp5aiLrrYiQUH0A.jpg',
          title: 'Batman: Silêncio',
          release_date: '19/07/2019',
          genres: [
            {
              id: 28,
              name: 'Ação',
            },
            {
              id: 16,
              name: 'Animação',
            },
            {
              id: 80,
              name: 'Crime',
            },
            {
              id: 9648,
              name: 'Mistério',
            },
          ],
        },
        {
          lists: [],
          backdrop_path: '/sA50fD5aLbYPRU0fMCHIZ88gc5g.jpg',
          rating: {
            average: 7.148,
            ratingsCount: 471,
          },
          id: 581997,
          overview:
            'Quando uma nova ameaça começa a roubar tecnologia experimental da cidade de Gotham, Batman se coloca em estado de alerta. Mas uma equipe de guerreiros, que espreita por debaixo das ruas, também investiga o caso: as Tartarugas Ninja! Liderados por Leonardo, esses irmãos – o esperto Donatello, o destemido Raphael e o brincalhão Michelangelo – são artistas marciais misteriosos que acabarão cruzando caminhos com o Cavaleiro Negro. Warner Bros Home Entertainment, DC e Nickelodeon apresentam Batman vs. Tartarugas Ninja, uma aventura estonteante de acelerar o coração, numa proporção que Gotham jamais viu!',
          poster_path: '/wzRkYSd8nHwnMn2Tk3vzqHCL6mH.jpg',
          title: 'Batman vs. As Tartarugas Ninjas',
          release_date: '31/03/2019',
          genres: [
            {
              id: 28,
              name: 'Ação',
            },
            {
              id: 16,
              name: 'Animação',
            },
            {
              id: 80,
              name: 'Crime',
            },
            {
              id: 878,
              name: 'Ficção científica',
            },
          ],
        },
        {
          lists: [],
          backdrop_path: '/7eccX0xay9pDj6ZQvU4cu3whw18.jpg',
          rating: {
            average: 6.6,
            ratingsCount: 189,
          },
          id: 1003579,
          overview:
            'Durante uma longa viagem de descoberta, na qual adotou três órfãos pelo mundo, Bruce Wayne encontra o Pinguim no ártico e descobre que um culto planeja a destruição de Gotham City. Agora, ele precisa voltar para casa e vestir o manto do Batman para proteger a cidade onde seus pais foram assassinados por um louco vinte anos antes. Mas será que o herói que acredita na ciência conseguirá manter sua sanidade quando descobrir que não está enfrentando criminosos ou loucos, mas magia antiga, demônios de fogo e deuses antigos interdimensionais?',
          poster_path: '/hTQMObXnPjV8Yo90hiC7quSz0U7.jpg',
          title: 'Batman: A Perdição Chegou a Gotham',
          release_date: '10/03/2023',
          genres: [
            {
              id: 28,
              name: 'Ação',
            },
            {
              id: 16,
              name: 'Animação',
            },
            {
              id: 14,
              name: 'Fantasia',
            },
            {
              id: 9648,
              name: 'Mistério',
            },
          ],
        },
        {
          lists: [],
          backdrop_path: '/niRgVCgvDVxD67u6gjKZnkBO1AD.jpg',
          rating: {
            average: 6.717,
            ratingsCount: 666,
          },
          id: 13851,
          overview:
            'Dos produtores de Batman Begins e de Batman – O Cavaleiro das Trevas, o grande lançamento de cinema do ano, vem esta maravilhosa interpretação da transição do Homem-Morcego, de inciante à Cavaleiro das Trevas. Seis histórias interrelacionadas revelam as primeiras aventuras de Bruce Wayne como Batman e os passos que ele tomou até se transformar no incansável vingador de Gotham City. Estas incríveis aventuras colocam Batman contra o amedrontador Espantalho e dois outros vilões jamais encarados antes: o ensandecido Killer Croc e o pistoleiro que nunca erra conhecido como Deadshot',
          poster_path: '/jbsN2F0V0QIts4XFlCRKXOF3bAX.jpg',
          title: 'Batman: O Cavaleiro de Gotham',
          release_date: '08/07/2008',
          genres: [
            {
              id: 28,
              name: 'Ação',
            },
            {
              id: 16,
              name: 'Animação',
            },
            {
              id: 80,
              name: 'Crime',
            },
            {
              id: 878,
              name: 'Ficção científica',
            },
            {
              id: 53,
              name: 'Thriller',
            },
          ],
        },
        {
          lists: [],
          backdrop_path: '/8UHbmR3WP86BspfwZZPgsVxxCFJ.jpg',
          rating: {
            average: 7.3,
            ratingsCount: 233,
          },
          id: 484862,
          overview:
            'Quando Scooby-Doo e seu grupo se deparam com criminosos demasiado perigosos para eles, Batman aparece para salvar o dia! Quando um caso não resolvido do passado de Batman volta para o assombrar e o misterioso Crimson Cloak ameaça tomar posse de Gotham, Batman recruta a Mystery Inc. para ajudar a solucionar o caso. Será que o trabalho de equipe será suficiente para resolver o mistério e destruir os planos dos vilões mais perigosos que o mundo já viu? Prepare seu cinto de utilidade com instrumentos e os biscoitos Scooby para descobrir à medida que você se prepara para uma aventura altamente emocionante!',
          poster_path: '/7S9uKgx9s147R0873GZ5h4W0HWY.jpg',
          title: 'Scooby-Doo! & Batman: Os Bravos e Destemidos',
          release_date: '31/01/2018',
          genres: [
            {
              id: 28,
              name: 'Ação',
            },
            {
              id: 16,
              name: 'Animação',
            },
            {
              id: 35,
              name: 'Comédia',
            },
            {
              id: 10751,
              name: 'Família',
            },
            {
              id: 878,
              name: 'Ficção científica',
            },
          ],
        },
      ],
    }),
    {
      status: 201,
    },
  )
})
