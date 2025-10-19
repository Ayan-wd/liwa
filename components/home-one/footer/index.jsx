import FooterBottom from "./FooterBottom"
import FooterContent from "./FooterContent"

function Footer() {
  return (
    <footer className="text-light  bg-white" role="contentinfo">
      <div className="container">
        <FooterContent />
        <FooterBottom />
      </div>
    </footer>
  )
}

export default Footer
