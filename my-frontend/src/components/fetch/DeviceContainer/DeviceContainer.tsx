import './DeviceContainer.css';
import { Link } from 'react-router-dom';

type DeviceProps = {
  id: number;
  name: string;
  price: number;
  img: string;
};

export default function DeviceContainer(props: DeviceProps) {
  return (
    <Link to={`/device/${props.id}`}>
      <div className='itemsContainer'>
        <img className='itemsImg' src={require(`../../../../../my-backend/static/${props.img}`)} /> 
        <p className='itemsSale'>Reducere -15%</p>
        <p className='itemsName'>{props.name}</p>
        <p className='itemsPrice'>{props.price} MDL</p>
        <p className='newItemsPrice'>{props.price - 800} MDL</p>
      </div>
    </Link>
  )
};
