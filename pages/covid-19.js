import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from 'react-query-devtools';
import Card from "../components/CovidCard/covidCard";

const mati = "/icon/mati.svg";
const positif = "/icon/positif.svg";
const sembuh = "/icon/sembuh.svg";

const getCovid = async () => {
  const res = await fetch('https://covid19.mathdro.id/api');

  if (!res.ok) {
    throw new Error("fetching error");
  }

  return await res.json()
}


const Covid19 = () => {

  const { data, isError, isLoading, isFetching, isSuccess, } = useQuery("covid", getCovid);

  // const [confirmed, setConfirmed] = useState([])
  // const [deaths, setDeaths] = useState([])
  // const [recovered, setRecovered] = useState([])

  // const getDataCovid = async () => {
  //   try {
  //     const res = await fetch("https://covid19.mathdro.id/api");
  //     const data = await res.json();
  //     console.log("datanya", data)

  //     // kalau ok kita set datanya
  //     if (res.ok) {
  //       setConfirmed(data.confirmed.value);
  //       setDeaths(data.deaths.value);
  //       setRecovered(data.recovered.value);
  //     }

  //     if (!res.ok) {
  //       throw "error bos";
  //     }
  //   } catch (error) {
  //     // handle error
  //     console.log("errornya", error);
  //   }
  // };

  // useEffect(() => {
  //   getDataCovid()
  // }, []);

  return (
    <React.Fragment>
      <h1 className="font-bold text-lg mt-5 text-yellow-500">
        Indonesia Corona Live Data
      </h1>

      {
        data.map(x =>
          <div className="flex flex-wrap justify-center mt-10 gap-x-3 gap-y-3">
            <Card jumlah={Number(x.confirmed).toLocaleString()} judul="Positif" img={positif} />
            <Card jumlah={Number(x.deaths).toLocaleString()} judul="meninggal" img={mati} />
            <Card jumlah={Number(x.recovered).toLocaleString()} judul="sembuh" img={sembuh} />
          </div>
       )
      }

      <ReactQueryDevtools initialIsOpen={false} />
    </React.Fragment>
  );
};

export default Covid19;
