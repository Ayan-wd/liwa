import FooterBottom from "./FooterBottom"
import FooterContent from "./FooterContent"

function Footer() {
  return (
    <footer className="dark-bg text-light pt-5" role="contentinfo">
      <div className="container">
        <FooterContent />
        <FooterBottom />
      </div>
    </footer>
  )
}

export default Footer
