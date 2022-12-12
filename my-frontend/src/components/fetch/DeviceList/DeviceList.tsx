import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DeviceContainer from '../DeviceContainer/DeviceContainer';
import './DeviceList.css';
import MySlider from '../../Slider';

interface DeviceListProps {
  devices?: DeviceProps[];
};


interface DeviceProps {
  id: number;
  name: string;
  price: number;
  img: string;
};


export default function DeviceList(props: DeviceListProps) {
  const params = useParams();
  const [deviceList, setDeviceList] = useState<DeviceProps[]>([]);

  useEffect(() => {
    if (params.brandId && params.typeId) {
      axios.get(`http://localhost:5000/api/device?typeId=${params.typeId}&brandId=${params.brandId}`)
        .then((response: any) => {
          console.log(response.data);
          setDeviceList(response.data.rows);
        })
    } else {
      axios.get('http://localhost:5000/api/device')
        .then((response: any) => {
          console.log(response.data);
          setDeviceList(response.data.rows);
        })
    }
  }, []);

  const renderedDeviceList = deviceList.map(device =>
    <DeviceContainer
      id={device.id}
      key={device.id} name={device.name}
      price={device.price}
      img={device.img}
    />)

  return (
    <>
      <MySlider />
      <div className='items'>
        {renderedDeviceList}
      </div>
    </>
  )
};
