import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className="header__socials">
          <a href="https://linkedin.com" target="_blank noopener noreferer"><BsLinkedin /> </a>
          <a href="https://github.com" target="_blank noreferer"><BsGithub /></a>
          <a href="https://instagram.com" target="_blank noreferer"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocial