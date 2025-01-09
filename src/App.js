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
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white m-4 transform transition duration-300 hover:scale-105 flex flex-col">
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
      description:"Il kapitanone, in tutta la sua voglia di mangiare. E cosi grosso da muoversi rotolando. E solito cucinare i biscotti vivi perchè usa la farina magica della famiglia kapitani. Ha imparato a cucinare e mangiare tali biscotti fin da piccolo e da allora è senza fondo. Ha bisogno di 9999999999 kcal al giorno per non collassare",
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
      title:"Il Kapitanito",
      description:"El Kapitanito, il festaiolo della famiglia. Ha sempre voglia di fare festa ed è sempre quello che mette a soqquadro la casa del Kapitanetto. Dopo le feste è sempre bello vedere le sgridate assurde che fa il Kapitanetto mentre lo esorta a mettere di nuovo in ordine la casa",
      imageUrl:"/Kapitani/30.png"
    },
    {
      title:"Il Kapitanissimo",
      description:"Il Kapitanissimo, l'unico membro non rosa della famiglia. Ciò non l'ha impedito di diventare l'unico astronauta di famiglia. L'unico problema di questa scelta di vita è che è sempre in giro per lo spazio e dunque gli altri della famiglia lo vedono solo in occasioni rarissime. Per quanto la famiglia lo ammiri tantissimo per i suoi risultati, provano comunque un sacco di soggezione quando è intorno a loro e dunque non ci parlano molto",
      imageUrl:"/Kapitani/46.png",
    },
    {
      title:"Il Kapitawino",
      description:"Il Kapitawino. A differenza del suo fratelino Kapitanino lui è sempre attivo, soprattutto quando si tratta di roba anime o di videogiochi. Non per questo si staccherà mai dalla sua kopertina color arancio, esattamente come i suoi fratelli",
      imageUrl:"/Kapitani/7.png"
    },
    {
      title:"Il Kapitagnino",
      description:"Il Kapitagnino. Lui è il gattaro della famiglia, ed è così assorbito dai gatti che crede di essere anche lui un gatto. Rosa, gonfio e senza baffi, ma pur sempre un gatto",
      imageUrl:"/Kapitani/65.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center items-center">
    <div className="container mx-auto max-w-screen-xl">
    <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 drop-shadow-lg">
          Il KapitanoDex
        </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cardData.map((card, index) => (
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
