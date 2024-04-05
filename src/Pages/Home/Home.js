import './Home.scss'

export const Home = () =>{

  return(
    <div className="container-fluid home-module">
      <div className='main-box'>
        <div className='title'>
          <h1>Odkrywanie Potencjału Zawodowego</h1>
        </div>
        <div className='description'>
          <p>
            POWER IT TRAINING to globalny dostawca szkoleń z zakresu finansów i biznesu, który z pasją naucza podstaw finansów oraz 
            zaawansowanych tematów. Naszym sekretem jest doświadczona kadra instruktorów, połączona z czołowym programem nauczania i sprawdzoną metodologią. 
            Wykorzystujemy najnowsze nauki o uczeniu się i technologie, aby umożliwić sukces i przygotować studentów do pracy.
            Naszą wizją jest inspirowanie kolejnych pokoleń profesjonalistów do zmieniania świata.
          </p>
        </div>
        <div className='buttons'>
          <button> Przeszkol zespół</button>
          <button> Przeszkol siebie</button>
        </div>
      </div>
      <video autoPlay="autoplay" loop="loop" muted className="video">
        <source src='./1.mp4' type="video/mp4" />
        Twoja przeglądarka nie obsługuje znacznika video.
      </video>

    </div>  
  )
}