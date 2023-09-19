import './css/cardfoot.css'
interface CardProps {
    title: string,
    company: string,
    price: number,
    direction: string,
    phone: string,
    image: string,
    link: string
}

export function CardFood({ title, company, price, direction, phone, image, link }: CardProps) {

    const returnPrice = () => {
        if (price < 1) {
            return (
                <> 🪙 {price}</>
            )
        }
        else if (price >= 1 && price <= 5) {
            return (
                <>💲{price}</>
            )
        }

        else if (price >= 100) {
            return (
                <> 💰 {price}</>
            )
        }
        else {
            return (
                <> 💵 {price}</>
            )
        }

    }
    const returnText = () => {
        if (link.length == 0 || link == null || link === "Contact") {
            return <>  Contactanos </>
        } else {
            return <a href={link} target='_blank'> Visitamos 🌐 </a>
        }
    }

    const returnDirection = () => {
        if (direction === 'nodirection') {
            return "⬇️";
        }
        return <p> 🧭 {direction}</p>;
    }

    return (
        <div className="card">
            <h2>{title}</h2>
            <img src={image} alt={title} title={title} />
            <h3>{company}</h3>
            <h3><i>Precio</i> {returnPrice()}</h3>
            <p>{returnDirection()}</p>
            <p> 📞{phone}  {returnText()}</p>
        </div>
    )
}
