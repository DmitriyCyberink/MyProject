import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './DeviceDescription.css';


type DeviceDescriptionProps = {
  id: number;
  name: string;
  price: number;
  img: string;
};

export default function DeviceDescription() {

  const [description, setDescription] = useState<DeviceDescriptionProps>();
  const params = useParams();
  useEffect(() => {
    axios.get(`http://localhost:5000/api/device/${params.id}`)
      .then((response: any) => setDescription(response.data))
  }, []);

  return (
    <div className='itemContainer'>
      <div>
        {description ? <img src={require(`../../../../../my-backend/static/${description.img}`)} /> : null}
      </div>
      <div className='itemDescription'>
        <p className='itemPrice'>{description?.price} MDL</p>
        <p className='itemName'>{description?.name}</p>
      <button className='itemButton'>Comanda acum ! </button>
      </div>
    </div>
  )
};
