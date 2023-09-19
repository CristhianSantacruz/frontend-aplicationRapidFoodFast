import './css/footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
function FooterComponent() {
  return (
    <div className='container_footer'>
      <footer>
        <a href='https://www.linkedin.com/in/cristhiansantacruz/' target='_blank'><LinkedInIcon style={{ color: "blue",fontSize:"30px" }} /></a>
        <a href='https://github.com/CristhianSantacruz' target='_blank'><GitHubIcon style={{ color: "black",fontSize:"30px"}} /></a>
        
      </footer>
    </div>
  )
}

export default FooterComponent
