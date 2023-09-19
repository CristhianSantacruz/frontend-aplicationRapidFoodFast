import './css/autor.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
function AuthorComponents() {
  return (

    <div className="container_author">
      <h3>Cristhian Santacruz <h4>@klashz</h4></h3>
      <div className="container_author2">
        <img src="/src/components/images/rostro.jpg" width="240px" title="Cristhian Santacruz" />
        <p>Hola Soy Cristhian Santacruz 🫡
          <br /><br /> Este proyecto contiene tanto la creacion del Frontend como del Backend. 💻<br /><br />
          Frontend : Para el desarrollo del frontend use react con typescript.⚛️<br />
          Backend : Para el desarrollo del backend use Spring Boot. 🌱
        </p>
        <a href='https://www.linkedin.com/in/cristhiansantacruz/' target='_blank'><LinkedInIcon style={{ color: "white" }} /></a>
        <a href='https://github.com/CristhianSantacruz' target='_blank'><GitHubIcon style={{ color: "white" }} /></a>
      </div>
    </div>
  )
}

export default AuthorComponents
