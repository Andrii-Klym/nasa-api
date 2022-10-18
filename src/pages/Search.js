import 'semantic-ui-css/semantic.min.css'

import { Loading } from "../components"
import { Select, Input } from 'semantic-ui-react';
import { useState   } from "react";

import getNasaData from "../hooks/useFetch"

export default function Search() {
  const [data, setData] = useState({});
  const [option, setOption] = useState({});

  const handleChange = e => {
    console.log(e);
    if(!e.target) {
      setOption(prevState => ({
        ...prevState,
        [e.name]: e.value
    }));
    }
    const { name, value } = e.target;
    setOption(prevState => ({
        ...prevState,
        [name]: value
    }));
};

  const nameOptions = [
    {value: 'Curiosity', text: 'Curiosity'},
    {value: 'Opportunity', text: 'Opportunity'},
    {value: 'Spirit', text: 'Spirit'}
  ];

  const cameraOptions = [
    {value: 'FHAZ', text: 'FHAZ'},
    {value: 'RHAZ', text: 'RHAZ'},
    {value: 'MAST', text: 'MAST'},
    {value: 'CHEMCAM', text: 'CHEMCAM'},
    {value: 'MAHLI', text: 'MAHLI'},
    {value: 'MARDI', text: 'MARDI'},
    {value: 'NAVCAM', text: 'NAVCAM'},
    {value: 'PANCAM', text: 'PANCAM'},
    {value: 'MINITES', text: 'MINITES'}
  ]

  const fetchData = async (searchParams) => {
    const {roverName, solData, cameraName} = searchParams
    const data = await getNasaData(roverName, solData, cameraName);
    setData(data);
  }

  return (
    <>
      {!data ? (
        <Loading />
      ) : (
        <section className="px-32 py-32 bg-zinc-800	">
          <h1 className="heading text-center mb-10">Select Photos</h1>

          <div className="form grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto mt-10 lg:gap-20 px-5 mb-16">
                  <Select placeholder="Select Rover" 
                          onChange={(e, data) => handleChange(data)} 
                          options={nameOptions}
                          name="roverName">
                  </Select>
                  <Select placeholder="Select Camera" 
                          onChange={(e, data) => handleChange(data)} 
                          options={cameraOptions}
                          name="cameraName">
                  </Select>
                  <Input placeholder='Select day from 24 to 1000'
                          name="solData"
                          onChange={handleChange}
                          type="number"
                          min="24"
                          max="1000"
                          className="w-72"/>
              </div>
              <div className="flex justify-center mb-16">
              <button className="h-10 w-56 bg-white"
                      disabled={false}
                      onClick={() => fetchData(option)}>Start</button>
              </div>

          {data.photos && (
            <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5">
              {data.photos.map(({ id, img_src, camera, earth_date }) => (
                  <article key={id}>
                    <img
                      src={img_src}
                      alt={camera.full_name}
                      className="h-64 object-cover"
                    />
                    <div className="bg-zinc-900 p-5">
                      <h2 className="text-white font-bold text-xl mb-5">
                        <span className="opacity-75">{camera.name} <br/> </span>{camera.full_name}
                      </h2>
                      <p className="text-white opacity-75 mb-10">{earth_date}</p>
                    </div>
                  </article>
              ))}
            </div>
          )}
        </section>
      )}
    </>
  )
}
