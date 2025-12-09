import * as React from 'react';
import HeaderBlack from '../../components/HeaderBlack/HeaderBlack';
import InfoSection from '../../components/InfoSection/InfoSection';
import image1 from './assets/image_1.png';
import image2 from './assets/image_2.png';
import image3 from './assets/image_3.png';
import image4 from './assets/image_4.png';
import image5 from './assets/image_5.png';
import image6 from './assets/image_6.png';
import image7 from './assets/image_7.png';
import image8 from './assets/image_8.png';
import image9 from './assets/image_9.png';
import image10 from './assets/image_10.png';
import image11 from './assets/image_11.png';
import image12 from './assets/image_12.png';
import image13 from './assets/image_13.png';
import image14 from './assets/image_14.png';
import image15 from './assets/image_15.png';
import image16 from './assets/image_16.png';
import image17 from './assets/image_17.png';
import image18 from './assets/image_18.png';
import image19 from './assets/image_19.png';
import image20 from './assets/image_20.png';
import image21 from './assets/image_21.png';
import image22 from './assets/image_22.png';
import image23 from './assets/image_23.png';
import image24 from './assets/image_24.png';
import image25 from './assets/image_25.png';
import image26 from './assets/image_26.png';
import image27 from './assets/image_27.png';
import image28 from './assets/image_28.png';
import image29 from './assets/image_29.png';
import image30 from './assets/image_30.png';
import image31 from './assets/image_31.png';
import image32 from './assets/image_32.png';
import image33 from './assets/image_33.png';
import image34 from './assets/image_34.png';
import image35 from './assets/image_35.png';
import image36 from './assets/image_36.png';
import image37 from './assets/image_37.png';
import image38 from './assets/image_38.png';
import image39 from './assets/image_39.png';
import image40 from './assets/image_40.png';
import image41 from './assets/image_41.png';
import image42 from './assets/image_42.png';
import image43 from './assets/image_43.png';
import image44 from './assets/image_44.png';
import image45 from './assets/image_45.png';
import image46 from './assets/image_46.png';
import image47 from './assets/image_47.png';
import image48 from './assets/image_48.png';
import image49 from './assets/image_49.png';
import image50 from './assets/image_50.png';
import image51 from './assets/image_51.png';
import image52 from './assets/image_52.png';
import image53 from './assets/image_53.png';
import image54 from './assets/image_54.png';
import image55 from './assets/image_55.png';
import video1 from './assets/video_1.mp4';
import video2 from './assets/video_2.mp4';
import video3 from './assets/video_3.mp4';
import Col2Photo from '../../components/Col2Photo/Col2Photo';
import ImageVideo from '../../components/ImageVideo/ImageVideo';
import Footer from '../../components/Footer/Footer';
import NextPrevCase from '../../components/NextPrevCase/NextPrevCase';
import { casesData } from '../utils/const';
const Case19Page = () => {
  const caseData = {
    projectTitle: 'Движ Фест',
    clientTitle: 'Фонд Мельниченко',
    cards: ['events'],
    description:
      'Фонд Мельниченко обратился к нам с задачей организовать масштабный спортивный фестиваль для сотрудников группы компаний Еврохим, СУЭК и других. Через командные виды спорта важно было ненавязчиво укрепить корпоративный HR-бренд и собрать обратную связь от сотрудников.',
    titleAlign: 'items-center', // Выравнивание заголовка
  };
  return (
    <main className="container mx-auto">
      <HeaderBlack />

      {/* Section 1 */}
      <InfoSection caseData={caseData} />

      {/* Section 2 */}
      <ImageVideo image={image1} video={video1} widthImage="w-[42%]" widthVideo="w-[56%]"/>

      {/* Section 3 */}
      <div className="mt-5 md:mt-[50px]">
        <p className="w-auto sm:w-[58%] text-[0.625rem] sm:text-sm md:text-xl lg:text-[1.4375rem] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line">
          Что мы сделали:
          <br />
          — Разработали общую концепцию и формат фестиваля
          <br />
          — Разработали регламенты для спортивных турниров: футбол, волейбол, настольный теннис и шахматы. 
          <br />
          — Придумали форматы и механику для фан-активностей
          <br />
          — Организовали сбор обратной связи через Telegram-бот, превратив его в увлекательный квест внутри интерактивного лабиринта
        </p>
        <img src={image2} alt="Фото кейса" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>
      </div>

      <img src={image3} alt="Фото кейса" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>

      <Col2Photo image1={image4} image2={image5} />

      <Col2Photo image1={image6} image2={image7} />

      {/* Section */}
      <div className="mt-5 md:mt-[50px]">
        <p className="w-auto sm:w-[48%] ml-auto text-[0.625rem] sm:text-sm md:text-xl lg:text-[1.4375rem] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line">
          Фестиваль проходил по принципам современных городских событий: спортивные турниры, фуд-корт, зоны отдыха и разнообразные активности.
        </p>
      </div>

      <ImageVideo image={image8} video={video2} widthImage="w-[49%]" widthVideo="w-[49%]"/>

      <img src={image9} alt="Фото кейса" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>

      <Col2Photo image1={image10} image2={image11} />

      <img src={image12} alt="Фото кейса" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>

      <Col2Photo image1={image13} image2={image14} />

      <Col2Photo image1={image15} image2={image16} />

      <img src={image17} alt="Фото кейса" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>

      <div className="mt-5 md:mt-[50px]">
        <p className="w-auto text-[0.625rem] sm:text-sm md:text-xl lg:text-[1.4375rem] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line">
          Участники зарабатывали баллы во всех зонах фестиваля и могли обменять их на подарки от бренда. Отдельно выделяется игровая механика «Лабиринт», которая стала инструментом для сбора обратной связи:
        </p>
        <p className="w-auto text-[0.625rem] sm:text-sm md:text-xl lg:text-[1.4375rem] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line">
          — Физический лабиринт — арт-объект внутри с информацией о компаниях.
          <br />
          — Квест в Telegram — участники изучали информацию и отвечали на вопросы в  Telegram боте.
          <br />
          — Единая валюта фестиваля — за правильные ответы начислялись баллы, которые также можно было получить в других активностях.
        </p>
        <p className="w-auto text-[0.625rem] sm:text-sm md:text-xl lg:text-[1.4375rem] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line">
          Призы — баллы обменивались на подарки, усиливая мотивацию участвовать.
        </p>
      </div>

      <img src={image18} alt="Фото кейса" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>

      <Col2Photo image1={image19} image2={image20} />

      <ImageVideo image={image21} video={video3} widthImage="w-[49%]" widthVideo="w-[49%]"/>

      <img src={image22} alt="Фото кейса" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>

      <div className="mt-5 md:mt-[50px]">
        <p className="w-auto sm:w-[52%] text-[0.625rem] sm:text-sm md:text-xl lg:text-[1.4375rem] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line">
          Фестиваль стал масштабным событием, объединяющим спорт, отдых и корпоративные смыслы. Мероприятие укрепило корпоративный дух, создало пространство для общения сотрудников разных компаний и позволило собрать ценную обратную связь в лёгком, нативном формате.
        </p>
      </div>

      <img src={image23} alt="Фото кейса" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>

      <Col2Photo image1={image24} image2={image25} />

      <img src={image26} alt="Фото кейса" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>
      
      <Col2Photo image1={image27} image2={image28} />
      
      <img src={image29} alt="Фото кейса" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>

      <Col2Photo image1={image30} image2={image31} />

      <img src={image32} alt="Фото кейса" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>
      
      <Col2Photo image1={image33} image2={image34} />
      
      <img src={image35} alt="Фото кейса" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>

      <Col2Photo image1={image36} image2={image37} />

      <img src={image38} alt="Фото кейса" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>
      
      <Col2Photo image1={image39} image2={image40} />
      
      <img src={image41} alt="Фото кейса" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>

      <Col2Photo image1={image42} image2={image43} />

      <Col2Photo image1={image44} image2={image45} />
      
      <img src={image46} alt="Фото кейса" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>

      <Col2Photo image1={image47} image2={image48} />
      
      <Col2Photo image1={image49} image2={image50} />
      
      <img src={image51} alt="Фото кейса" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>

      <img src={image52} alt="Фото кейса" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>

      <Col2Photo image1={image53} image2={image54} />
      
      <img src={image55} alt="Фото кейса" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>
      
      {/* Section 14 */}
      <NextPrevCase dataPrev={casesData[3]} dataNext={casesData[4]} link={"/case9"}/>

      <Footer />
    </main>
  );
};

export default Case19Page;