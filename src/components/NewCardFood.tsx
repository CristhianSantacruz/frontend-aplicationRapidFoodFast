import {useState} from 'react'
import { ComidaData } from '../data/ComidaData';
import { useComidaDataMutate } from '../hooks/useComidaDataMutable';
import './css/newFood.css'
import { Link,useNavigate } from 'react-router-dom';

function NewCardFood() {

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [price, setPrice] = useState("0");
  const [direction, setDirection] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");

  const { mutate } = useComidaDataMutate();
  const navigate = useNavigate();


  const submitInfo = () => {
    const comidaData: ComidaData = {
      title,
      company,
      price,
      image,
      direction,
      phone,
      link,
    }
    Number(comidaData.price)
    if(title.length==0 || price==='0'|| phone.length==0 || image.length==0){
      alert("Por favor ingrese los requisitos obligatorios");
      return;
    }
    mutate(comidaData)
    setTimeout(() => {
      navigate('/');
    }, 100);
  } 
  

  return (
    <div className='container_center'>
      <div className="container_food">
        <h1>Creacion de un nuevo producto</h1>
        <div className='botones_container'>
          <button onClick={submitInfo} className='button_create' > Crear </button>
          <Link to="/" className='button_cancel'>Cancelar</Link>
        </div>
        <h5 className='obligatorio_inputs'>* obligatorio</h5>
        <form className="form">
          <label>Title <b style={{color:'red'}}>*</b></label>
          <input value={title} onChange={(e) => { setTitle(e.target.value) }} />
          <label>Company</label>
          <input value={company} onChange={(e) => { setCompany(e.target.value) }} />

          <label>Price <b style={{color:'red'}}>*</b></label>
          <input value={price} onChange={(e) => { setPrice((e.target.value)) }} />

          <label>Direction</label>
          <input value={direction} onChange={(e) => { setDirection(e.target.value) }} />

          <label>Phone <b style={{color:'red'}}>*</b> </label>
          <input value={phone} onChange={(e) => { setPhone(e.target.value) }} />

          <label>Image <b style={{color:'red'}}>*</b> </label>
          <input value={image} onChange={(e) => { setImage(e.target.value) }} />

          <label>Page web</label>
          <input value={link} onChange={(e) => { setLink(e.target.value) }} />
        </form>

      </div>

    </div>
  )
}

export default NewCardFood
