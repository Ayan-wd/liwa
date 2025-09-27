import FooterBottom from "./FooterBottom"
import FooterContent from "./FooterContent"

function Footer() {
  return (
    <footer style={{ backgroundColor: "#2e2e2e" }} className="text-light pt-5" role="contentinfo">
      <div className="container">
        <FooterContent />
        <FooterBottom />
      </div>
    </footer>
  )
}

export default Footer
