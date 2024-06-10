"use client";
import "./servicos.css"
import Api from "../../utils/Api";

import React, {  useEffect, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Loader from "../loader/Loader";



export default function Servicos() {
  const [servicos, setServicos] = useState([]);
  useEffect(() => {
    const getServices = async () => {
      const servicosRes = await Api();
      setServicos(servicosRes);
    }

    getServices();
  }, []);

  return (
    <>
      <Swiper
      id="mobileGallerySlider"
        modules={[Virtual, Navigation, ]}
        slidesPerView={5}
        centeredSlides={false}
        spaceBetween={0}
        
        navigation={true}
        virtual
      >
        {servicos?.length > 0 ? (
          servicos.map((servico) => (
            // aumenta a altura do cartão
            <SwiperSlide  key={servico.id_servico} className="servico__item">
              <div className="servico__item_container">
                <h3 className="servico__item_title">{servico.nome}</h3>
                <div className="servico__item_contain">
                  <p className="servico__item_text">{servico.preco}€</p>
                  <p className="servico__item_text">{servico.a_partir_de}m</p>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : <Loader/>}
      </Swiper>
    </>
  );
}
