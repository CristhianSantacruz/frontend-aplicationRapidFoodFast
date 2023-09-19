
import { CardFood } from '../components/CardFood';
import { useComidaData } from '../hooks/useComidaData'
import { Link } from 'react-router-dom';


function ListCards() {

    const { data } = useComidaData(); 
    return (
        <div className='container'>
            <Link to="/add-food" className='button_agregar'>Agregar</Link>
            <div className='card-grip'>
                {data?.map(comidata =>
                    <CardFood
                        title={comidata.title}
                        company={comidata.company}
                        price={comidata.price}
                        image={comidata.image}
                        direction={comidata.direction}
                        phone={comidata.phone}
                        link={comidata.link}
                        key={comidata.id}
                    />

                )}
            </div>
        </div>
    )
}

export default ListCards
