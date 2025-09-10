interface FormationProps {
  lightMode: boolean;
}

export default function Formation({ lightMode }: FormationProps) {
  return (
    <section
      id="formation"
      className={`py-20 ${lightMode ? "bg-white" : "bg-[#0a192f]"}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-mono font-bold mb-16 text-center ${lightMode ? "text-[#0a192f]" : "text-[#ccd6f6]"}`}>
          Formation
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {/* LICENCE INFORMATIQUE */}
          <div className={`${lightMode ? "bg-white" : "bg-[#112240]"} rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-[#64ffda]">LST  en INFORMATIQUE</h3>
                <span className={`font-mono bg-[#64ffda]/10 px-3 py-1 rounded-full ${lightMode ? "text-[#0a192f]" : "text-[#ccd6f6]"}`}>2023 - 2024</span>
              </div>
              <div className="space-y-3">
                <p className="text-[#8892b0] flex items-center">
                  <span className="mr-2">📍</span>
                  FST BENI MELLAL, MAROC
                </p>
                <p className={`${lightMode ? "text-[#0a192f]" : "text-[#ccd6f6]"} leading-relaxed`}>
                  Spécialisation en développement web et applications mobiles.
                  Focus sur les technologies modernes et l'architecture logicielle.
                </p>
              </div>
            </div>
            <div className="h-1 bg-gradient-to-r from-[#64ffda] to-[#0a192f]"></div>
          </div>
          {/* DEUST */}
          <div className={`${lightMode ? "bg-white" : "bg-[#112240]"} rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-[#64ffda]">DEUST en MIPC</h3>
                <span className={`font-mono bg-[#64ffda]/10 px-3 py-1 rounded-full ${lightMode ? "text-[#0a192f]" : "text-[#ccd6f6]"}`}>2021 - 2023</span>
              </div>
              <div className="space-y-3">
                <p className="text-[#8892b0] flex items-center">
                  <span className="mr-2">📍</span>
                  FST BENI MELLAL, MAROC
                </p>
                <p className={`${lightMode ? "text-[#0a192f]" : "text-[#ccd6f6]"} leading-relaxed`}>
                  Formation pluridisciplinaire avec une forte base scientifique.
                  Développement des compétences analytiques et résolution de problèmes.
                </p>
              </div>
            </div>
            <div className="h-1 bg-gradient-to-r from-[#64ffda] to-[#0a192f]"></div>
          </div>
          {/* Baccalauréat */}
          <div className={`${lightMode ? "bg-white" : "bg-[#112240]"} rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-[#64ffda]">Baccalauréat Science Physique</h3>
                <span className={`font-mono bg-[#64ffda]/10 px-3 py-1 rounded-full ${lightMode ? "text-[#0a192f]" : "text-[#ccd6f6]"}`}>2020 - 2021</span>
              </div>
              <div className="space-y-3">
                <p className="text-[#8892b0] flex items-center">
                  <span className="mr-2">📍</span>
                  ANISSE INTERNATIONAL SCHOOL, CASABLANCA
                </p>
                <p className={`${lightMode ? "text-[#0a192f]" : "text-[#ccd6f6]"} leading-relaxed`}>
                  Formation scientifique avec excellence en physique et mathématiques.
                  Développement de la rigueur et de la méthodologie scientifique.
                </p>
              </div>
            </div>
            <div className="h-1 bg-gradient-to-r from-[#64ffda] to-[#0a192f]"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 