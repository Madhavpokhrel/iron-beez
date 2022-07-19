import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import { motion } from "framer-motion";

import "./RecomendedForYou.scss";
import { Services } from "../../Pages";

const listings = [
  {
      "id": "4f5c3a396d81f2a3e1bf0b2eee606935-b96129fa-311e",
      "heading": "2015 Scag 61\" Freedom Z Pro, 24HP Kawasaki FS730 Engine",
      "price": 7845,
      "vdp_url": "https://relay.marketcheck.com/vdp/us/heavy_equipments/4f5c3a396d81f2a3e1bf0b2eee606935-b96129fa-311e/8836ED6E",
      "seller_type": "dealer",
      "inventory_type": "new",
      "last_seen_at": 1658196661,
      "last_seen_at_date": "2022-07-19T02:11:01.000Z",
      "scraped_at": 1658196661,
      "scraped_at_date": "2022-07-19T02:11:01.000Z",
      "first_seen_at": 1658196661,
      "first_seen_at_date": "2022-07-19T02:11:01.000Z",
      "source": "cleavesco.com",
      "media": {
          "photo_links": [
              "https://relay.marketcheck.com/image/us/heavy_equipments/4f5c3a396d81f2a3e1bf0b2eee606935-b96129fa-311e/8836ED6E"
          ]
      },
      "dealer": {
          "id": 10007127,
          "website": "cleavesco.com",
          "name": "Cleaves Company Inc",
          "street": "300 Reservoir St",
          "city": "Needham",
          "state": "MA",
          "zip": "02494",
          "msa_code": "1120"
      },
      "build": {
          "year": 2015,
          "make": "WELLS CARGO",
          "model": "61\" Freedom Z Pro, 24HP Kawasaki FS730 Engine"
      }
  },
  {
      "id": "8d79702c3bbb24b56405d6e93b3c6c31-eec44c6b-4dc5",
      "heading": "2018 Kohler Engine 60RCL 60 kW Generator",
      "price": 19377,
      "vdp_url": "https://relay.marketcheck.com/vdp/us/heavy_equipments/8d79702c3bbb24b56405d6e93b3c6c31-eec44c6b-4dc5/8836ED6E",
      "seller_type": "dealer",
      "inventory_type": "new",
      "last_seen_at": 1658196660,
      "last_seen_at_date": "2022-07-19T02:11:00.000Z",
      "scraped_at": 1658196660,
      "scraped_at_date": "2022-07-19T02:11:00.000Z",
      "first_seen_at": 1658196660,
      "first_seen_at_date": "2022-07-19T02:11:00.000Z",
      "source": "cleavesco.com",
      "media": {
          "photo_links": [
              "https://relay.marketcheck.com/image/us/heavy_equipments/8d79702c3bbb24b56405d6e93b3c6c31-eec44c6b-4dc5/8836ED6E",
              "https://cdnmedia.endeavorsuite.com/images/catalogs/17677/products/detail/849600bb-12b7-442d-8517-f53f90838466.jpg",
              "https://cdnmedia.endeavorsuite.com/images/catalogs/17677/products/detail/8f55ca65-ed67-4cc2-8e38-be92dd4ee771.jpg"
          ]
      },
      "dealer": {
          "id": 10007127,
          "website": "cleavesco.com",
          "name": "Cleaves Company Inc",
          "street": "300 Reservoir St",
          "city": "Needham",
          "state": "MA",
          "zip": "02494",
          "msa_code": "1120"
      },
      "build": {
          "year": 2018,
          "make": "KOHLER",
          "model": "60RCL 60 kW Generator"
      }
  },
  {
      "id": "306c07170fa8b60c1aeead6aa3162484-b6279ca5-8e52",
      "heading": "2021 Felco 621",
      "price": 5136,
      "vdp_url": "https://relay.marketcheck.com/vdp/us/heavy_equipments/306c07170fa8b60c1aeead6aa3162484-b6279ca5-8e52/8836ED6E",
      "seller_type": "dealer",
      "inventory_type": "new",
      "last_seen_at": 1658196633,
      "last_seen_at_date": "2022-07-19T02:10:33.000Z",
      "scraped_at": 1658196633,
      "scraped_at_date": "2022-07-19T02:10:33.000Z",
      "first_seen_at": 1658196633,
      "first_seen_at_date": "2022-07-19T02:10:33.000Z",
      "source": "cleavesco.com",
      "media": {
          "photo_links": [
              "https://relay.marketcheck.com/image/us/heavy_equipments/306c07170fa8b60c1aeead6aa3162484-b6279ca5-8e52/8836ED6E",
              "https://cdnmedia.endeavorsuite.com/images/catalogs/21338/products/detail/8f95b150-cc53-4603-8584-1190d4782823.jpg"
          ]
      },
      "dealer": {
          "id": 10007127,
          "website": "cleavesco.com",
          "name": "Cleaves Company Inc",
          "street": "300 Reservoir St",
          "city": "Needham",
          "state": "MA",
          "zip": "02494",
          "msa_code": "1120"
      },
      "build": {
          "year": 2021,
          "make": "KOBELCO",
          "model": "621"
      }
  }
]

const recomended = [
  {
    imageUrl:
      "https://img.forconstructionpros.com/files/base/acbm/fcp/image/2021/08/JD__210G_LC_.611c797165850.png?auto=format%2Ccompress",
    name: "Text",
    model: "00qwert",
    year: "2012",
    price: 100,
  },
  {
    imageUrl:
      "https://img.forconstructionpros.com/files/base/acbm/fcp/image/2021/08/JD__210G_LC_.611c797165850.png?auto=format%2Ccompress",
    name: "Text",
    model: "00qwert",
    year: "2012",
    price: 100,
  },
  {
    imageUrl:
      "https://img.forconstructionpros.com/files/base/acbm/fcp/image/2021/08/JD__210G_LC_.611c797165850.png?auto=format%2Ccompress",
    name: "Text",
    model: "00qwert",
    year: "2012",
    price: 100,
  },
];

const RecomendedForYou = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  return (
    <div className="app__works">
      <div className="app__rfy">
        <h1>Recomended for you</h1>
      </div>

      <motion.div
        animate={{ animateCard }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__rfy-card"
      >
        {listings.map((recomend, index) => (
          <div className="app__rfy-item app__flex" key={index}>
            <div className="app__rfy-img app__flex">
              <img src={recomend.media.photo_links[0]} alt={recomend.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__rfy-hover app__flex"
              >
                <a href="#" target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <BsFillHeartFill />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__rfy-content app__flex">
              <h4 className="bold-text">Name: {recomend.dealer.name}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                Model: {recomend.build.model}
              </p>
              <p className="p-text" style={{ marginTop: 10 }}>
                Year: {recomend.build.year}
              </p>
              <div className="app__rfy-price app__flex">
                <p className="p-text">${recomend.price}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div
        className="app__flex"
      >
       <Services />
      </motion.div>
    </div>
  );
};

export default RecomendedForYou;