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
import video1 from './assets/video_1.mp4';
import Col2Photo from '../../components/Col2Photo/Col2Photo';
import Footer from '../../components/Footer/Footer';
import NextPrevCase from '../../components/NextPrevCase/NextPrevCase';
import { casesData } from '../utils/const';
const Case22Page = () => {
  const caseData = {
    projectTitle: 'Медиа бильярд',
    clientTitle: 'BetBoom',
    cards: ['events', 'Digital'],
    description:
      'Перед нами стояла задача создать уникальное шоу на базе бильярда, опираясь на рост популярности игры как модного лайфстайл-развлечения. Формат должен был быть интересен аудитории Twitch и оживить классические, часто скучные трансляции.',
    result: [
      {
        title: '8ч',
        desc: 'Длительность',
      },
      {
        title: '13 700',
        desc: 'аудитория онлайн',
      },
      {
        title: '337к',
        desc: 'уникальных просмотров',
      }
    ],
    titleAlign: 'items-center', // Выравнивание заголовка
  };
  return (
    <main className="container mx-auto">
      <HeaderBlack />

      {/* Section 1 */}
      <InfoSection caseData={caseData} />

      {/* Section 2 */}
      <video src={video1} autoPlay loop muted playsInline preload="metadata" className="mt-5 md:mt-[50px] w-full h-auto"></video>

      <div className="mt-5 md:mt-[50px]">
        <p className="w-auto sm:w-[48%] text-[0.625rem] sm:text-sm md:text-xl lg:text-[1.4375rem] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line">
          Мы отошли от привычного образа спорт-бара и стандартной Twitch-трансляции. Создали целый сценарий и сняли шоу как фильм — с декорациями, светом, костюмами и продуманным сетапом.
        </p>
      </div>

      <Col2Photo image1={image1} image2={image2} />

      <img src={image3} alt="photo1" className="mt-5 md:mt-[3.125rem] w-full h-auto" loading='lazy'/>

      <div className="mt-5 md:mt-[50px]">
        <p className="w-auto sm:w-[48%] ml-auto text-[0.625rem] sm:text-sm md:text-xl lg:text-[1.4375rem] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line">
          Концепция опиралась на стиль «олдскульного цирка»: театрально, харизматично, с лёгким гротеском. Площадкой стал театральный зал, где бильярдный стол был главным героем спектакля.
        </p>
      </div>

      <img src={image4} alt="photo1" className="mt-5 md:mt-[3.125rem] w-full h-auto" loading='lazy'/>

      <div className="mt-5 md:mt-[50px]">
        <p className="w-auto sm:w-[48%] text-[0.625rem] sm:text-sm md:text-xl lg:text-[1.4375rem] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line">
          Для трансляции привлекли дружественных стримеров, трансляция велась на Twitch-е Саши Парадеевича. Фокус был не на мастерстве игры, а на развлекательном контенте в кадре.
        </p>
      </div>

      <img src={image5} alt="photo1" className="mt-5 md:mt-[3.125rem] w-full h-auto" loading='lazy'/>

      <div className="mt-5 md:mt-[50px]">
        <p className="w-auto sm:w-[48%] text-[0.625rem] sm:text-sm md:text-xl lg:text-[1.4375rem] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line">
          Понимая, что классический бильярд может показаться скучным, мы придумали собственные правила и задания. Они делали розыгрыши непредсказуемыми, добавляли юмор и ставили участников в интересные, иногда забавные ситуации.
        </p>
      </div>

      <Col2Photo image1={image6} image2={image7} />

      <img src={image8} alt="photo1" className="mt-5 md:mt-[3.125rem] w-full h-auto" loading='lazy'/>

      <Col2Photo image1={image9} image2={image10} />

      <div className="mt-5 md:mt-[50px]">
        <p className="w-auto sm:w-[48%] ml-auto text-[0.625rem] sm:text-sm md:text-xl lg:text-[1.4375rem] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line">
          Концепция опиралась на стиль «олдскульного цирка»: театрально, харизматично, с лёгким гротеском. Площадкой стал театральный зал, где бильярдный стол был главным героем спектакля.
        </p>
      </div>

      <Col2Photo image1={image11} image2={image12} />

      {/* Section 14 */}
      <NextPrevCase dataPrev={casesData[3]} dataNext={casesData[4]} link={"/case9"}/>

      <Footer />
    </main>
  );
};

export default Case22Page;