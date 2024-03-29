import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import Card from "../components/CovidCard/covidCard";
import Loading from "../components/SkeletonLoading/loading";

const mati = "/icon/mati.svg";
const positif = "/icon/positif.svg";
const sembuh = "/icon/sembuh.svg";

const getCovid = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_COVID_ID}`);

  if (!res.ok) {
    throw new Error("fetching error");
  }

  return await res.json();
};

const Covid19 = () => {
  const {
    data: dataCovid,
    isError,
    isLoading,
    isFetching,
    isSuccess,
  } = useQuery("covid", getCovid)


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
        isLoading &&
        <div className="flex justify-center mt-10 gap-x-3 gap-y-3">
          <Loading />
          <Loading />
          <Loading />
        </div>

      }

      {isError && 
      <div>
        <img className="w-42 h-36 mt-10" src="/icon/404.svg" alt="error" />
      </div>
      }
      {isSuccess && (
        <div className="flex flex-wrap justify-center mt-10 gap-x-3 gap-y-3">
          <Card
            jumlah={Number(dataCovid?.confirmed?.value).toLocaleString()}
            judul="Positif"
            img={positif}
          />
          <Card
            jumlah={Number(dataCovid?.deaths?.value).toLocaleString()}
            judul="meninggal"
            img={mati}
          />
          <Card
            jumlah={Number(dataCovid?.recovered?.value).toLocaleString()}
            judul="sembuh"
            img={sembuh}
          />
        </div>
      )}

      <p className="text-xs text-gray-500 mt-3 italic">terakhir di update : {dataCovid?.lastUpdate}</p>




      <ReactQueryDevtools initialIsOpen={false} />
    </React.Fragment>
  );
};

export default Covid19;
