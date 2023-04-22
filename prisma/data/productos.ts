const productos = [
  {
    nombre: "Bolso de mano vintage",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682059059/BioApp/Productos/Bolso_de_mano_vintage_cp9rxz.jpg",
    precio: 120.5,
    material: "Cuero",
    tamanio: "Mediano",
    color: "Marrón",
    categoriaId: 1,
  },
  {
    nombre: "Bolso de playa bohemio",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682059056/BioApp/Productos/Bolso_de_playa_bohemio_usbrmj.jpg",
    precio: 65.0,
    material: "Yute",
    tamanio: "Grande",
    color: "Multicolor",
    categoriaId: 1,
  },
  {
    nombre: "Bolso tote ecológico",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682059056/BioApp/Productos/Bolso_tote_ecol%C3%B3gico_pu9gcu.jpg",
    precio: 85.0,
    material: "Algodón orgánico",
    tamanio: "Pequeño",
    color: "Blanco",
    categoriaId: 1,
  },
  {
    nombre: "Bolso bandolera urbano",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682059055/BioApp/Productos/Bolso_bandolera_urbano_zn78xm.jpg",
    precio: 99.0,
    material: "Poliéster reciclado",
    tamanio: "Mediano",
    color: "Negro",
    categoriaId: 1,
  },
  {
    nombre: "Bolso messenger sostenible",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682059056/BioApp/Productos/Bolso_messenger_sostenible_hnxbvv.jpg",
    precio: 115.0,
    material: "Piel vegana",
    tamanio: "Grande",
    color: "Azul",
    categoriaId: 1,
  }, //aaa
  {
    nombre: "Bolso bandolera de cuero vegano",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682059377/BioApp/Productos/Bolso_bandolera_de_cuero_vegano_zftftv.jpg",
    precio: 69.99,
    material: "Cuero vegano",
    tamanio: "Grande",
    color: "Negro",
    categoriaId: 1,
  },
  {
    nombre: "Bolso de mano hecho a mano",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682059377/BioApp/Productos/Bolso_de_mano_hecho_a_mano_ldklj8.jpg",
    precio: 39.99,
    material: "Lana",
    tamanio: "Mediano",
    color: "Gris",
    categoriaId: 1,
  },
  {
    nombre: "Bolso de hombro tejido a mano",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682059378/BioApp/Productos/Bolso_de_hombro_tejido_a_mano_lxnhf5.jpg",
    precio: 59.99,
    material: "Algodón",
    tamanio: "Grande",
    color: "Azul y blanco",
    categoriaId: 1,
  },
  {
    nombre: "Bolso de mano estilo étnico",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682059379/BioApp/Productos/Bolso_de_mano_estilo_%C3%A9tnico_j2dkl4.jpg",
    precio: 49.99,
    material: "Rafia",
    tamanio: "Pequeño",
    color: "Marrón y verde",
    categoriaId: 1,
  },
  {
    nombre: "Bolso tote de lona reciclada",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682059378/BioApp/Productos/Bolso_tote_de_lona_reciclada_fmqczz.jpg",
    precio: 29.99,
    material: "Lona reciclada",
    tamanio: "Grande",
    color: "Azul y beige",
    categoriaId: 1,
  }, //bb
  {
    nombre: "Bolso tote negro",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682059811/BioApp/Productos/Bolso_tote_negro_y79mzb.jpg",
    precio: 55.99,
    material: "Piel sintética",
    tamanio: "Mediano",
    color: "Negro",
    categoriaId: 1,
  },
  {
    nombre: "Bolso bandolera de tela",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682059813/BioApp/Productos/Bolso_bandolera_de_tela_wtdosj.jpg",
    precio: 39.99,
    material: "Algodón orgánico",
    tamanio: "Pequeño",
    color: "Multicolor",
    categoriaId: 1,
  },
  {
    nombre: "Bolso de mano de cuero",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682059812/BioApp/Productos/Bolso_de_mano_de_cuero_nteswo.jpg",
    precio: 89.99,
    material: "Cuero reciclado",
    tamanio: "Grande",
    color: "Marrón",
    categoriaId: 1,
  },
  {
    nombre: "Mochila de lona verde",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682059811/BioApp/Productos/Mochila_de_lona_verde_vehz8z.jpg",
    precio: 49.99,
    material: "Lona reciclada",
    tamanio: "Grande",
    color: "Verde",
    categoriaId: 1,
  },
  {
    nombre: "Bolso de playa de rafia",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682059812/BioApp/Productos/Bolso_de_playa_de_rafia_zlowes.jpg",
    precio: 29.99,
    material: "Rafia",
    tamanio: "Grande",
    color: "Beige",
    categoriaId: 1,
  }, // cc
  {
    nombre: "Bolso bandolera de lona reciclada",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682060248/BioApp/Productos/Bolso_bandolera_de_lona_reciclada_hv9du9.jpg",
    precio: 49.99,
    material: "Lona reciclada y detalles en cuero vegano",
    tamanio: "Mediano",
    color: "Verde militar",
    categoriaId: 1,
  },
  {
    nombre: "Bolso de mano tejido con plástico reciclado",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682060249/BioApp/Productos/Bolso_de_mano_tejido_con_pl%C3%A1stico_reciclado_ie73fb.jpg",
    precio: 29.99,
    material: "Plástico reciclado",
    tamanio: "Pequeño",
    color: "Multicolor",
    categoriaId: 1,
  },
  {
    nombre: "Bolso de hombro hecho a mano con algodón orgánico",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682060249/BioApp/Productos/Bolso_de_hombro_hecho_a_mano_con_algod%C3%B3n_org%C3%A1nico_yalbqq.jpg",
    precio: 69.99,
    material: "Algodón orgánico y detalles en cuero vegano",
    tamanio: "Grande",
    color: "Azul marino",
    categoriaId: 1,
  },
  {
    nombre: "Bolso tote de cuero vegano y corcho",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682060248/BioApp/Productos/Bolso_tote_de_cuero_vegano_y_corcho_dkmqvh.jpg",
    precio: 89.99,
    material: "Cuero vegano y corcho",
    tamanio: "Mediano",
    color: "Negro",
    categoriaId: 1,
  },
  {
    nombre: "Bolso de viaje hecho a mano con neumáticos reciclados",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682060248/BioApp/Productos/Bolso_de_viaje_hecho_a_mano_con_neum%C3%A1ticos_reciclados_o6tzzx.jpg",
    precio: 119.99,
    material: "Neumáticos reciclados",
    tamanio: "Grande",
    color: "Negro",
    categoriaId: 1,
  }, //dd
  {
    nombre: "Cartera de mano",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682060596/BioApp/Productos/Cartera_de_mano_oupmrc.jpg",
    precio: 59.99,
    material: "Cuero sintético",
    tamanio: "Mediana",
    color: "Negro",
    categoriaId: 2,
  },
  {
    nombre: "Cartera de hombro",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682060596/BioApp/Productos/Cartera_de_hombro_mjrthn.jpg",
    precio: 79.99,
    material: "Cuero genuino",
    tamanio: "Grande",
    color: "Marrón",
    categoriaId: 2,
  },
  {
    nombre: "Cartera cruzada",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682060596/BioApp/Productos/Cartera_cruzada_glwjs5.jpg",
    precio: 39.99,
    material: "Piel sintética",
    tamanio: "Pequeña",
    color: "Rojo",
    categoriaId: 2,
  },
  {
    nombre: "Cartera para portátil",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682060596/BioApp/Productos/Cartera_para_port%C3%A1til_bjmmru.jpg",
    precio: 109.99,
    material: "Cuero genuino",
    tamanio: "Grande",
    color: "Negro",
    categoriaId: 2,
  },
  {
    nombre: "Cartera con estampado animal",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682060595/BioApp/Productos/Cartera_con_estampado_animal_mfgpq9.jpg",
    precio: 49.99,
    material: "Piel sintética",
    tamanio: "Mediana",
    color: "Estampado leopardo",
    categoriaId: 2,
  }, //ee
  {
    nombre: "Cartera de mano elegante",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682060920/BioApp/Productos/Cartera_de_mano_elegante_jisrzw.jpg",
    precio: 59.99,
    material: "Cuero sintético",
    tamanio: "Pequeño",
    color: "Negro",
    categoriaId: 2,
  },
  {
    nombre: "Cartera de hombro con flecos",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682060920/BioApp/Productos/Cartera_de_hombro_con_flecos_azxozb.jpg",
    precio: 69.99,
    material: "Cuero genuino",
    tamanio: "Mediano",
    color: "Café",
    categoriaId: 2,
  },
  {
    nombre: "Cartera de cuero artesanal",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682060919/BioApp/Productos/Cartera_de_cuero_artesanal_zovwtq.jpg",
    precio: 79.99,
    material: "Cuero genuino",
    tamanio: "Grande",
    color: "Marrón oscuro",
    categoriaId: 2,
  },
  {
    nombre: "Cartera de mano con estampado floral",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682060920/BioApp/Productos/Cartera_de_mano_con_estampado_floral_ocqx7o.jpg",
    precio: 49.99,
    material: "Tela reciclada",
    tamanio: "Pequeño",
    color: "Multicolor",
    categoriaId: 2,
  },
  {
    nombre: "Cartera de hombro minimalista",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682060920/BioApp/Productos/Cartera_de_hombro_minimalista_tsim0h.jpg",
    precio: 89.99,
    material: "Cuero genuino",
    tamanio: "Grande",
    color: "Negro",
    categoriaId: 2,
  }, //ff (De aqui para abajo continua)
  {
    nombre: "Mochila Azteca",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682092143/BioApp/Productos/Mochila_Azteca_zpbfpv.jpg",
    precio: 80.5,
    material: "Algodón orgánico y poliéster reciclado",
    tamanio: "Grande",
    color: "Multicolor",
    categoriaId: 3,
  },
  {
    nombre: "Mochila de Viaje",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682092143/BioApp/Productos/Mochila_de_Viaje_fwxuad.jpg",
    precio: 120.0,
    material: "Lona de algodón orgánico y corcho",
    tamanio: "Grande",
    color: "Beige y marrón",
    categoriaId: 3,
  },
  {
    nombre: "Mochila Escolar",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682092143/BioApp/Productos/Mochila_Escolar_eh8v8k.jpg",
    precio: 60.99,
    material: "Poliéster reciclado y algodón orgánico",
    tamanio: "Mediano",
    color: "Negro",
    categoriaId: 3,
  },
  {
    nombre: "Mochila de Senderismo",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682092143/BioApp/Productos/Mochila_de_Senderismo_edmgw7.jpg",
    precio: 150.25,
    material: "Nylon reciclado y poliéster reciclado",
    tamanio: "Grande",
    color: "Verde y negro",
    categoriaId: 3,
  },
  {
    nombre: "Mochila de Cuero Vegano",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682092143/BioApp/Productos/Mochila_de_Cuero_Vegano_mf6z0c.jpg",
    precio: 90.75,
    material: "Cuero vegano y poliéster reciclado",
    tamanio: "Mediano",
    color: "Marrón",
    categoriaId: 3,
  }, //gg
  {
    nombre: "Mochila clásica",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682092666/BioApp/Productos/Mochila_cl%C3%A1sica_slb9yw.jpg",
    precio: 89.99,
    material: "Tela impermeable",
    tamanio: "Grande",
    color: "Negro",
    categoriaId: 3,
  },
  {
    nombre: "Mochila urbana",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682092667/BioApp/Productos/Mochila_urbana_es22t9.jpg",
    precio: 74.99,
    material: "Poliéster",
    tamanio: "Mediana",
    color: "Gris",
    categoriaId: 3,
  },
  {
    nombre: "Mochila escolar moderno",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682092666/BioApp/Productos/Mochila_escolar_moderno_g3szg3.jpg",
    precio: 49.99,
    material: "Lona resistente",
    tamanio: "Grande",
    color: "Rojo",
    categoriaId: 3,
  },
  {
    nombre: "Mochila para senderismo",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682092666/BioApp/Productos/Mochila_para_senderismo_if9bmw.jpg",
    precio: 149.99,
    material: "Nailon ripstop",
    tamanio: "Extra grande",
    color: "Verde",
    categoriaId: 3,
  },
  {
    nombre: "Mochila de cuero reciclado",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682092666/BioApp/Productos/Mochila_de_cuero_reciclado_epdjsc.jpg",
    precio: 199.99,
    material: "Cuero genuino",
    tamanio: "Mediana",
    color: "Marrón",
    categoriaId: 3,
  }, // hh
  {
    nombre: "Mochila Adventure",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682092965/BioApp/Productos/Mochila_Adventure_bndvbv.jpg",
    precio: 89.99,
    material: "Nylon reciclado",
    tamanio: "Grande",
    color: "Negro",
    categoriaId: 3,
  },
  {
    nombre: "Mochila Estilo Boho",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682092966/BioApp/Productos/Mochila_Estilo_Boho_itxs6i.jpg",
    precio: 79.99,
    material: "Algodón orgánico",
    tamanio: "Mediana",
    color: "Azul",
    categoriaId: 3,
  },
  {
    nombre: "Mochila Antirrobo",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682092964/BioApp/Productos/Mochila_Antirrobo_reoox8.jpg",
    precio: 129.99,
    material: "Poliéster reciclado",
    tamanio: "Grande",
    color: "Gris",
    categoriaId: 3,
  },
  {
    nombre: "Mochila Elegante",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682092966/BioApp/Productos/Mochila_Elegante_eyxfz5.jpg",
    precio: 99.99,
    material: "Cuero vegano",
    tamanio: "Pequeña",
    color: "Marrón",
    categoriaId: 3,
  },
  {
    nombre: "Mochila para Bicicleta",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682092965/BioApp/Productos/Mochila_para_Bicicleta_gxnkuh.jpg",
    precio: 59.99,
    material: "Nylon reciclado",
    tamanio: "Pequeña",
    color: "Verde",
    categoriaId: 3,
  }, //ii
  {
    nombre: "Mochila para laptop",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682093415/BioApp/Productos/Mochila_para_laptop_lh3ijg.jpg",
    precio: 69.99,
    material: "Poliéster reciclado",
    tamanio: "Mediano",
    color: "Negro",
    categoriaId: 3,
  },
  {
    nombre: "Mochila para senderismo",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682093415/BioApp/Productos/Mochila_para_senderismo_wwxr3m.jpg",
    precio: 89.99,
    material: "Nylon reciclado",
    tamanio: "Grande",
    color: "Azul",
    categoriaId: 3,
  },
  {
    nombre: "Mochila para ciclismo",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682093415/BioApp/Productos/Mochila_para_ciclismo_gvjncy.jpg",
    precio: 59.99,
    material: "Poliéster reciclado",
    tamanio: "Pequeño",
    color: "Verde",
    categoriaId: 3,
  },
  {
    nombre: "Mochila para viajes",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682093415/BioApp/Productos/Mochila_para_viajes_oyo1oq.jpg",
    precio: 99.99,
    material: "Algodón orgánico",
    tamanio: "Grande",
    color: "Gris",
    categoriaId: 3,
  },
  {
    nombre: "Mochila para la universidad",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682093416/BioApp/Productos/Mochila_para_la_universidad_qberpv.jpg",
    precio: 79.99,
    material: "Poliéster reciclado",
    tamanio: "Mediano",
    color: "Rojo",
    categoriaId: 3,
  }, // jj
  {
    nombre: "Juego de toallas de algodón orgánico",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682093743/BioApp/Productos/Juego_de_toallas_de_algod%C3%B3n_org%C3%A1nico_pwdi91.jpg",
    precio: 35.99,
    material: "algodón orgánico",
    tamanio: "50x100 cm",
    color: "blanco",
    categoriaId: 4,
  },
  {
    nombre: "Set de posavasos de corcho reciclado",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682093743/BioApp/Productos/Set_de_posavasos_de_corcho_reciclado_tozmcy.jpg",
    precio: 12.99,
    material: "corcho reciclado",
    tamanio: "10x10 cm",
    color: "natural",
    categoriaId: 4,
  },
  {
    nombre: "Lámpara de mesa con base de madera sostenible",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682093744/BioApp/Productos/L%C3%A1mpara_de_mesa_con_base_de_madera_sostenible_w7txva.jpg",
    precio: 45.99,
    material: "madera sostenible",
    tamanio: "35 cm de altura",
    color: "marrón",
    categoriaId: 4,
  },
  {
    nombre: "Portavelas de vidrio reciclado",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682093743/BioApp/Productos/Portavelas_de_vidrio_reciclado_wovwkf.jpg",
    precio: 8.99,
    material: "vidrio reciclado",
    tamanio: "10x10 cm",
    color: "transparente",
    categoriaId: 4,
  },
  {
    nombre: "Cojín de lino orgánico y algodón reciclado",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682093817/BioApp/Productos/Coj%C3%ADn_de_lino_org%C3%A1nico_y_algod%C3%B3n_reciclado_ucnarp.jpg",
    precio: 22.99,
    material: "lino orgánico y algodón reciclado",
    tamanio: "40x40 cm",
    color: "verde",
    categoriaId: 4,
  }, //kk
  {
    nombre: "Lámpara de mesa reciclada",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682094137/BioApp/Productos/L%C3%A1mpara_de_mesa_reciclada_stswx6.jpg",
    precio: 25.99,
    material: "Plástico reciclado",
    tamanio: "22 cm de alto x 10 cm de diámetro",
    color: "Multicolor",
    categoriaId: 4,
  },
  {
    nombre: "Cojín tejido de algodón reciclado",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682094138/BioApp/Productos/Coj%C3%ADn_tejido_de_algod%C3%B3n_reciclado_dkrcyh.jpg",
    precio: 19.99,
    material: "Algodón reciclado",
    tamanio: "45 cm x 45 cm",
    color: "Blanco y gris",
    categoriaId: 4,
  },
  {
    nombre: "Manta de lana reciclada",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682094137/BioApp/Productos/Manta_de_lana_reciclada_jrxmpo.jpg",
    precio: 69.99,
    material: "Lana reciclada",
    tamanio: "150 cm x 200 cm",
    color: "Marrón y beige",
    categoriaId: 4,
  },
  {
    nombre: "Set de posavasos reciclados",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682094137/BioApp/Productos/Set_de_posavasos_reciclados_glqjg8.jpg",
    precio: 9.99,
    material: "Cartón reciclado",
    tamanio: "10 cm x 10 cm",
    color: "Marrón claro",
    categoriaId: 4,
  },
  {
    nombre: "Centro de mesa reciclado",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682094138/BioApp/Productos/Centro_de_mesa_reciclado_cdxvmq.jpg",
    precio: 49.99,
    material: "Botellas de vidrio recicladas",
    tamanio: "35 cm x 25 cm",
    color: "Verde",
    categoriaId: 4,
  }, //ll
  {
    nombre: "Alfombra de trapillo",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682094489/BioApp/Productos/Alfombra_de_trapillo_byh97k.jpg",
    precio: 75.99,
    material: "Trapillo de algodón reciclado",
    tamanio: "120 cm x 80 cm",
    color: "Multicolor",
    categoriaId: 4,
  },
  {
    nombre: "Macetero colgante de macramé",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682094490/BioApp/Productos/Macetero_colgante_de_macram%C3%A9_mjucks.jpg",
    precio: 29.99,
    material: "Cuerda de algodón orgánico",
    tamanio: "30 cm de diámetro",
    color: "Blanco",
    categoriaId: 4,
  },
  {
    nombre: "Candelabro de madera y vidrio reciclados",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682094490/BioApp/Productos/Candelabro_de_madera_y_vidrio_reciclados_d9sloe.jpg",
    precio: 42.99,
    material: "Madera y vidrio reciclados",
    tamanio: "25 cm x 15 cm x 15 cm",
    color: "Marrón y transparente",
    categoriaId: 4,
  },
  {
    nombre: "Juego de posavasos de corcho",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682094490/BioApp/Productos/Juego_de_posavasos_de_corcho_w31lge.jpg",
    precio: 12.99,
    material: "Corcho sostenible",
    tamanio: "10 cm x 10 cm",
    color: "Marrón",
    categoriaId: 4,
  },
  {
    nombre: "Espejo de pared con marco de bambú",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682094490/BioApp/Productos/Espejo_de_pared_con_marco_de_bamb%C3%BA_p0ru0y.jpg",
    precio: 89.99,
    material: "Bambú sostenible",
    tamanio: "80 cm x 60 cm",
    color: "Marrón claro",
    categoriaId: 4,
  }, //mm
  {
    nombre: "Silla ergonómica",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682094803/BioApp/Productos/Silla_ergon%C3%B3mica_qpzw3i.jpg",
    precio: 249.99,
    material: "Malla transpirable",
    tamanio: "Mediano",
    color: "Negro",
    categoriaId: 5,
  },
  {
    nombre: "Escritorio de esquina",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682094804/BioApp/Productos/Escritorio_de_esquina_nk5vxa.jpg",
    precio: 399.99,
    material: "Madera de pino",
    tamanio: "Grande",
    color: "Blanco",
    categoriaId: 5,
  },
  {
    nombre: "Lámpara de mesa",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682094803/BioApp/Productos/L%C3%A1mpara_de_mesa_ear1ba.jpg",
    precio: 49.99,
    material: "Acero inoxidable",
    tamanio: "Pequeño",
    color: "Plateado",
    categoriaId: 5,
  },
  {
    nombre: "Archivero con ruedas",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682094803/BioApp/Productos/Archivero_con_ruedas_gxkheq.jpg",
    precio: 149.99,
    material: "Madera contrachapada",
    tamanio: "Mediano",
    color: "Marrón",
    categoriaId: 5,
  },
  {
    nombre: "Monitor de alta resolución",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682094803/BioApp/Productos/Monitor_de_alta_resoluci%C3%B3n_fmemim.jpg",
    precio: 899.99,
    material: "Plástico y metal",
    tamanio: "Grande",
    color: "Negro",
    categoriaId: 5,
  }, //nn
  {
    nombre: "Polo unisex gris",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682095880/BioApp/Productos/Polo_unisex_gris_p6hgwy.jpg",
    precio: 45.5,
    material: "Algodón",
    tamanio: "Ajustable",
    color: "Gris",
    categoriaId: 5,
  },
  {
    nombre: "Pantalon de plata",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682095880/BioApp/Productos/Pantalon_de_plata_wevctw.jpg",
    precio: 125.99,
    material: "Plata 925",
    tamanio: "Ajustable",
    color: "Plateado",
    categoriaId: 5,
  },
  {
    nombre: "Pantalon grisaseo",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682095881/BioApp/Productos/Pantalon_grisaseo_vpnxxb.jpg",
    precio: 799.99,
    material: "Oro blanco 18k, diamantes",
    tamanio: "Ajustable",
    color: "Blanco",
    categoriaId: 5,
  },
  {
    nombre: "Pantalon Yoga",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682095880/BioApp/Productos/Pantalon_Yoga_big4rj.jpg",
    precio: 299.99,
    material: "Perlas, plata 925",
    tamanio: "Ajustable",
    color: "Blanco",
    categoriaId: 5,
  },
  {
    nombre: "Jeans california",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682095880/BioApp/Productos/Jeans_california_kmt5po.jpg",
    precio: 189.99,
    material: "Acero inoxidable, cuero",
    tamanio: "Ajustable",
    color: "Negro",
    categoriaId: 5,
  },
  {
    nombre: "Pantalon chapk",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682095881/BioApp/Productos/Pantalon_chapk_pavshh.jpg",
    precio: 99.99,
    material: "Cristales Swarovski, aleación de metal",
    tamanio: "Ajustable",
    color: "Multicolor",
    categoriaId: 5,
  },
  {
    nombre: "Jeans cielo",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682095881/BioApp/Productos/Jeans_cielo_hbzzac.jpg",
    precio: 29.99,
    material: "Fibras de tela comprimida",
    tamanio: "Ajustable",
    color: "Azul",
    categoriaId: 5,
  },
  {
    nombre: "Pantalon amplio",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682095881/BioApp/Productos/Pantalon_amplio_qqwapj.jpg",
    precio: 49.99,
    material: "Fibras de tela de jeans",
    tamanio: "Ajustable",
    color: "Azul marino",
    categoriaId: 5,
  },
  {
    nombre: "Pantalon programmer",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682095880/BioApp/Productos/Pantalon_programmer_oomr1r.jpg",
    precio: 7.99,
    material: "Fibras de jeans usados",
    tamanio: "Ajustable",
    color: "Verde opaco",
    categoriaId: 5,
  },
  {
    nombre: "leggins para gym",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682095881/BioApp/Productos/leggins_para_gym_mlc63g.jpg",
    precio: 24.99,
    material: "Fibras de jeans prensados",
    tamanio: "Ajustable",
    color: "Varios",
    categoriaId: 5,
  },
  {
    nombre: "Traje elegancia la de francia",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682095880/BioApp/Productos/Traje_elegancia_la_de_francia_mzm9ew.jpg",
    precio: 69.99,
    material: "Fibras de tela fina",
    tamanio: "Ajustable",
    color: "Blanco",
    categoriaId: 5,
  }, //oo
  {
    nombre: "Juego de bloques reciclados",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682096989/BioApp/Productos/Juego_de_bloques_reciclados_ea6s88.jpg",
    precio: 19.99,
    material: "Plástico reciclado",
    tamanio: "Pequeño",
    color: "Varios",
    categoriaId: 6,
  },
  {
    nombre: "Rompecabezas de madera ecológica",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682096990/BioApp/Productos/Rompecabezas_de_madera_ecol%C3%B3gica_ypzixi.jpg",
    precio: 12.99,
    material: "Madera sostenible",
    tamanio: "Mediano",
    color: "Natural",
    categoriaId: 6,
  },
  {
    nombre: "Juego de bolos ecológicos",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682096990/BioApp/Productos/Juego_de_bolos_ecol%C3%B3gicos_vd3dci.jpg",
    precio: 29.99,
    material: "Bambú sostenible",
    tamanio: "Grande",
    color: "Natural",
    categoriaId: 6,
  },
  {
    nombre: "Pista de carreras reciclada",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682096991/BioApp/Productos/Pista_de_carreras_reciclada_nmhn1d.jpg",
    precio: 39.99,
    material: "Plástico reciclado",
    tamanio: "Grande",
    color: "Varios",
    categoriaId: 6,
  },
  {
    nombre: "Juego de construcción sostenible",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682096990/BioApp/Productos/Juego_de_construcci%C3%B3n_sostenible_hnlkqz.jpg",
    precio: 24.99,
    material: "Madera sostenible",
    tamanio: "Mediano",
    color: "Natural",
    categoriaId: 6,
  },
  {
    nombre: "Juego de memoria con cartón reciclado",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682096990/BioApp/Productos/Juego_de_memoria_con_cart%C3%B3n_reciclado_yqnxsx.jpg",
    precio: 14.99,
    material: "Cartón reciclado",
    tamanio: "Pequeño",
    color: "Natural",
    categoriaId: 6,
  },
  {
    nombre: "Set de arte amigable con el medio ambiente",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682096989/BioApp/Productos/Set_de_arte_amigable_con_el_medio_ambiente_uqnjm9.jpg",
    precio: 19.99,
    material: "Pinturas no tóxicas",
    tamanio: "Mediano",
    color: "Varios",
    categoriaId: 6,
  },
  {
    nombre: "Peluche hecho con botellas recicladas",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682096988/BioApp/Productos/Peluche_hecho_con_botellas_recicladas_qiswhg.jpg",
    precio: 9.99,
    material: "Botellas de plástico recicladas",
    tamanio: "Pequeño",
    color: "Varios",
    categoriaId: 6,
  },
  {
    nombre: "Juego de ajedrez con madera sostenible",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682096990/BioApp/Productos/Juego_de_ajedrez_con_madera_sostenible_nxeieg.jpg",
    precio: 49.99,
    material: "Madera sostenible",
    tamanio: "Grande",
    color: "Natural",
    categoriaId: 6,
  },
  {
    nombre: "Juguete para gatos con materiales reciclados",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682097519/BioApp/Productos/Juguete_para_gatos_con_materiales_reciclados_bhd2qk.jpg",
    precio: 7.99,
    material: "Cartón reciclado",
    tamanio: "Pequeño",
    color: "Natural",
    categoriaId: 6,
  },
  {
    nombre: "Kit de jardinería infantil sostenible",
    imagen: "https://res.cloudinary.com/djsl4a5py/image/upload/v1682097519/BioApp/Productos/Kit_de_jardiner%C3%ADa_infantil_sostenible_ug56er.jpg",
    precio: 21.99,
    material:
      "Plastico reciclado",
    tamanio: "Mediano",
    color: "Natural",
    categoriaId: 6,
  },
  {
    nombre: "Juego de construcción con bloques de corcho",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682097519/BioApp/Productos/Juego_de_construcci%C3%B3n_con_bloques_de_corcho_zhrmrp.jpg",
    precio: 16.99,
    material: "Corcho reciclado",
    tamanio: "Pequeño",
    color: "Natural",
    categoriaId: 6,
  },
  {
    nombre: "Puzzle con piezas de algodón orgánico",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682097518/BioApp/Productos/Puzzle_con_piezas_de_algod%C3%B3n_org%C3%A1nico_hmwrq8.jpg",
    precio: 11.99,
    material: "Algodón orgánico",
    tamanio: "Mediano",
    color: "Natural",
    categoriaId: 6,
  },
  {
    nombre: "Juguete para perros hecho con botellas de plástico recicladas",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682097518/BioApp/Productos/Juguete_para_perros_hecho_con_botellas_de_pl%C3%A1stico_recicladas_q8f5up.jpg",
    precio: 12.99,
    material: "Botellas de plástico recicladas",
    tamanio: "Mediano",
    color: "Varios",
    categoriaId: 6,
  },
  {
    nombre: "Juego de mesa con piezas de madera sostenible",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682097518/BioApp/Productos/Juego_de_mesa_con_piezas_de_madera_sostenible_go52b4.jpg",
    precio: 29.99,
    material: "Madera sostenible",
    tamanio: "Mediano",
    color: "Natural",
    categoriaId: 6,
  },
  {
    nombre: "Set de arte con pinturas veganas",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682097518/BioApp/Productos/Set_de_arte_con_pinturas_veganas_bcobfu.jpg",
    precio: 18.99,
    material: "Pinturas veganas",
    tamanio: "Mediano",
    color: "Varios",
    categoriaId: 6,
  },
  {
    nombre: "Juego de pelota para perros con caucho reciclado",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682097518/BioApp/Productos/Juego_de_pelota_para_perros_con_caucho_reciclado_x6bu84.jpg",
    precio: 8.99,
    material: "Caucho reciclado",
    tamanio: "Pequeño",
    color: "Varios",
    categoriaId: 6,
  },
  {
    nombre: "Set de bloques de madera sostenible para bebés",
    imagen:
      "https://res.cloudinary.com/djsl4a5py/image/upload/v1682097519/BioApp/Productos/Set_de_bloques_de_madera_sostenible_para_beb%C3%A9s_jb0p0l.jpg",
    precio: 14.99,
    material: "Madera sostenible",
    tamanio: "Pequeño",
    color: "Natural",
    categoriaId: 6,
  },
];

export { productos };
