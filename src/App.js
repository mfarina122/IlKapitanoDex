import React from 'react';
import './App.css';
import { useState } from 'react';

function DescriptionModal({ isOpen, onClose, title, description }) {
  if (!isOpen) return null;

  const handleBackgroundClick = (e) => {
    // Only close if the click is directly on the background overlay
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div onClick={handleBackgroundClick} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl max-w-md w-full max-h-[80vh] overflow-y-auto relative">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}

function Card({ title, description, imageUrl, openModal }) {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white m-4 transform transition duration-300 hover:scale-105 flex flex-col"
    style={{
      backgroundImage: 'url(/kirby.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: 'rgba(255,255,255,0.8)',
      backgroundBlendMode: 'lighten'
    }}>
    <div className="h-96 flex items-center justify-center bg-gray-200">
      {imageUrl && (
        <img 
          className="max-w-full max-h-full object-contain" 
          src={imageUrl} 
          alt={title} 
        />
      )}
    </div>
    <div className="px-6 py-4 flex-grow">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base line-clamp-4 h-24">
        {description}
      </p>
    </div>
    <div className="px-6 pt-4 pb-4">
    <button 
            onClick={openModal}
            className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-600 transition"
          >
            Leggi di più
          </button>
    </div>
  </div>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchInput, setSearchInput] = useState('');

  const cardData = [
    {
      title: "Il Kapitanino",
      description: "Il protagonista della storia. Non ha mai sbatti di fare qualunque cosa ed ha sempre addosso la koperta in modo da coprirlo",
      imageUrl: "/Kapitani/14.png"
    },
    {
      title:"Il Kapitanotto",
      description:"Appassionato del mondo in miniatura. Vede tutte le cose piccole e ne è attratto",
      imageUrl:"/Kapitani/50.png"
    },
    {
      title:"Il Kapitanone",
      description:"Il kapitanone, in tutta la sua voglia di mangiare. È cosi grosso da muoversi rotolando. E solito cucinare i biscotti vivi perchè usa la farina magica della famiglia kapitani. Ha imparato a cucinare e mangiare tali biscotti fin da piccolo e da allora è senza fondo. Ha bisogno di 9999999999 kcal al giorno per non collassare",
      imageUrl:"/Kapitani/18.png"
    },
    {
      title:"Il Kapitaninno",
      description:"Il Kapitaninno, dorme 23 ore su 24 nell'arco della giornata e non fa assolutamente nient'altro. Nell'unica in cui è sveglio è sempre letargico ed è sempre sul punto di crollare da un momento all'altro",
      imageUrl:"/Kapitani/1.png"
    },
    {
      title:"Er Kapitanaccio",
      description:"Il Kapitanaccio, colui che ha abbracciato la via criminale, fondando il suo ghetto che sarà la base della sua banda a Roma. ",
      imageUrl:"/Kapitani/58.png"
    },
    {
      title:"Il Kapitanese",
      description:"Il Kapitanese è calabrese ed è il capo della cosca di Cosenza della banda der Kapitanaccio. Svolge sempre delle commissioni per lui, violente o meno che siano.",
      imageUrl:"/Kapitani/54.png"
    },
    {
      title:"Il Kapitanetto",
      description:"Il Kapitanetto, detto anche il perfettino della famiglia. Ha sempre la casa in ordine e cerca di mantenerla sempre nel miglior modo possibile. Cerca inoltre di avere un ottimo rapporto con tutti i membri della famiglia ed è triste se non ci riesce. Inoltre, cerca di mettere pace ovunque ci sia un conflitto, anche il più minimo. Tale livello di perfezione però non è ben accolto da tutti, specialmente dar kapitanaccio",
      imageUrl:"/Kapitani/44.png"
    },
    {
      title:"El Kapitanito",
      description:"El Kapitanito, il festaiolo della famiglia. Ha sempre voglia di fare festa ed è sempre quello che mette a soqquadro la casa del Kapitanetto. Dopo le feste è sempre bello vedere le sgridate assurde che fa il Kapitanetto mentre lo esorta a mettere di nuovo in ordine la casa",
      imageUrl:"/Kapitani/30.png"
    },
    {
      title:"Il Kapitanissimo",
      description:"Il Kapitanissimo, l'unico membro non rosa della famiglia. Ciò non gliha impedito di diventare l'unico astronauta di famiglia. L'unico problema di questa scelta di vita è che è sempre in giro per lo spazio e dunque gli altri della famiglia lo vedono solo in occasioni rarissime. Per quanto la famiglia lo ammiri tantissimo per i suoi risultati, provano comunque un sacco di soggezione quando è intorno a loro e dunque non ci parlano molto",
      imageUrl:"/Kapitani/46.png",
    },
    {
      title:"Il Kapitawino",
      description:"Il Kapitawino. A differenza del suo fratellino Kapitanino lui è sempre attivo, soprattutto quando si tratta di roba anime o di videogiochi. Non per questo si staccherà mai dalla sua kopertina color arancio, esattamente come i suoi fratelli",
      imageUrl:"/Kapitani/7.png"
    },
    {
      title:"Il Kapitagnino",
      description:"Il Kapitagnino. Lui è il gattaro della famiglia, ed è quindi assorbito dai gatti che crederebbe anche lui essere anche un gatto. Rosa, gonfio e senza baffi, ma pur sempre un gatto",
      imageUrl:"/Kapitani/65.png"
    },
    {
      imageUrl:"/Kapitani/56.png",
      title:"Il Kapitanello",
      description:"Il Kapitanello. È cresciuto al sud e ogni volta c'era un personaggio molto acclamato dal pubblico chiamato Nello. Tale personaggio era solito mangiare un ghiacciolo d'estate. Quindi ha deciso di diventare esattamente come lui, decidendo di avere sempre in bocca un ghiacciolo"
    },
    {
      imageUrl:"/Kapitani/57.png",
      title:"Il Kapignano",
      description:"Il Kapignano. Per lui dire gna non è una parola, è un modo di vivere. Ha deciso di seguire questo stile di vita perchè, quando è nato, la sua prima parola è stata GNA"
    },
    {
      imageUrl:"/Kapitani/55.png",
      title:"Il Kapitanuccio",
      description:"Il Kapitanuccio. È il kapitano che ha assaggiato per la prima volta il caffè e non gli è piaciuto. Quando era piccolo però, il kapitanino ha rovesciato il caffè nel biberon ed è diventato cappuccino. Il kapitanuccio, assaggiandolo dal biberon, l'ha trovato una bevanda incredibile e dunque ha deciso di continuare a berlo per l'eternità",
    },
    {
      imageUrl:"/Kapitani/17.png",
      title:"Il Kapitanismo",
      description:"Il Kapitanismo. È colui ha fondato il kulto dei kapitani. Si impegna a far si che chiunque rispetti i kapitani, anche i kapitani stessi ed è il kapitano più forte e temuto da tutti, perfino dar kapitanaccio e per far sì che questo potere venga manifestato, è l'unico tra i kapitani ad avere una mossa finale dotata di animazione"
    },
    {
      title:"Il Kapitanottero",
      imageUrl:"/Kapitani/35.png",
      description:"Il Kapitanottero. Era un amante degli elicotteri e quando era piccolo ha trovato una scatola ed ha deciso di infilarcisi dentro per sempre perchè somigliava tantissimo ad una cabina di pilotaggio dalla quale ha deciso di mettere le mani a w simulando l'elica dell'elicottero"
    },
    {
      title:"Il Kapitapatico",
      imageUrl:"/Kapitani/24.png",
      description:"Il Kapitapatico. È un kapitano che non ha alcun interesse o particolarità. Ciò lo ha reso apatico fin dalla nascita, togliendogli qualunque forma di stimolo o emozione. Nemmeno il kapitanino è riuscito a fargli provare qualcosa",
    },
    {
      title:"Il KAPITAAAANO",
      imageUrl:"/Kapitani/40.png",
      description:"Il KapitAAAAno. È un kapitano che è solito urlare sempre. Nelle sue urla, ha rischiato più volte di urlare il kapitaninno, pur non riuscendoci mai. Si sente sempre in colpa per questa cosa e vorrebbe non farlo, ma urlare gli piace troppo."
    },
    {
      title:"Il Kapitanardo",
      imageUrl:"/Kapitani/4.png",
      description:"Il Kapitanardo. Gli piace fare le cose con il botto, ma in silenzio. Prende sempre ordini dar Kapitanaccio per distruggere i nemici della sua organizzazione e cerca sempre di trovare modi creativi per distruggere le basi nemiche. Ogni volta che sta per farlo, si allontana sempre con un ghigno beffardo prima di far esplodere le sue bombe ed è sempre felice di sentirne il botto",
    },
    {
      title:"Il Kapitanato",
      imageUrl:"/Kapitani/13.png",
      description:"Il Kapitanato. Adora il cioccolato, non potrebbe mai farne a meno. Grazie al cioccolato, è sempre felice e sorridente. Nessuno della famiglia però è in grado di dire se è genuinamente felice oppure se è solamente un effetto del cioccolato"
    },
    {
      title:"Il Kapitanatico",
      imageUrl:"/Kapitani/33.png",
      description:"Il Kapitanatico. È il ludopatico della famiglia. Essendo un assiduo frequentatore dei casinò di Las Vegas, torna spesso a casa senza nulla addosso ed è dunque costretto a rifugiare il suo corpo all'interno di una scatola di cartone. Il kapitanottero è spesso confuso perchè la scambia per la sua scatola, ma poi si ricorda che non ha la caratteristica somiglianza alla kabina di pilotaggio e dunque lascia perdere"
    },
    {
      title:"Il Kapicantante",
      imageUrl:"/Kapitani/67.png",
      description:"Il Kapicantante. È un kapitano che ha deciso di diventare un cantante. Lui ha deciso di cantare praticamente sempre, soprattutto quando si tratta di anime o di videogiochi. E' il creatore di tutti gli stakketti della famiglia"
    },
    {
      title:"Il Kapitano",
      imageUrl:"/Kapitani/19.png",
      description:"Il Kapitano. È il generatore della famiglia. Tramite la divisione cellulare di sè stesso, ha dato vita a tutti gli altri kapitani della famiglia. Ogni volta che ha una nuova passione, anche se temporanea, dà vita ad un nuovo kapitanino, pronto a prenderne il posto nella famiglia."
    },
    {
      title:"Il Kapitasanto",
      imageUrl:"/Kapitani/53.png",
      description:"Il Kapitasanto. È un kapitano che ha deciso di diventare un santo. Per poter fare ciò, ha deciso di seguire tutte le norme, alla lettera, del kapitanetto il quale lo indottrina, affinchè diventi il kapostipite della religione del kapitanismo"
    },
    {
      title:"Il Kapitagnone",
      imageUrl:"/Kapitani/64.png",
      description:"Il Kapitagnone. Ha sempre gli occhi chiusi e mangia continuamente cibi gommosi e a causa di ciò, fa tanto rumore con la bocca. Voleva essere grosso come il Kapitanone, ma ci ha rinunciato, preferendo passare la vita a masticare."
    },
  ];

  const filteredCards = cardData.filter(card => 
    card.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div  className="min-h-screen bg-gradient-to-b from-green-100 via-white to-green-100 p-4 flex justify-center items-center">
    <div className="container mx-auto max-w-screen-xl">
    <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 drop-shadow-lg">
          Il Kapitadex
        </h1>
        <div className="mb-8 flex justify-center">
          <input 
            type="text" 
            placeholder="Cerca un Kapitano..." 
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {filteredCards.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredCards.map((card, index) => (
          <Card 
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            openModal={() => {
              setSelectedCard(card);
              setIsModalOpen(true)
            }}
          />
        ))}
      </div>
      ) : (
          <p className="text-gray-600 text-center">Nessun kapitano trovato</p>
      )}
      <DescriptionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title={selectedCard?.title}
        description={selectedCard?.description}
      />
    </div>
  </div>
  );
}

export default App;
