import { Phone, Mail, MapPin } from "lucide-react";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../animation/FadeInStaggerTwo";

function ContactInfo() {
  return (
    <div className="aximo-contact-info-section">
      <div className="container">
        <div className="aximo-contact-info-title">
          <h2>
            <span className="display-3 mb-4 mb-md-5 text-center text-black">
              Contact Information
            </span>
          </h2>
        </div>
        <FadeInStaggerTwo className="row">
          {/* Phone */}
          <FadeInStaggerTwoChildren className="col-xl-6 col-md-6">
            <div className="aximo-contact-info-box d-flex align-items-start">
              <div className="aximo-contact-info-icon me-3">
                <Phone size={28} strokeWidth={1.8} className="text-primary" />
              </div>
              <div className="aximo-contact-info-data text-black">
                <span className="fw-bold">Call us</span>
                <p className="mb-0">+971 54 393 1009</p>
                <p className="mb-0">+971 50 168 1993</p>
              </div>
            </div>
          </FadeInStaggerTwoChildren>

          {/* Email */}
          <FadeInStaggerTwoChildren className="col-xl-6 col-md-6">
            <div className="aximo-contact-info-box d-flex align-items-start">
              <div className="aximo-contact-info-icon me-3">
                <Mail size={28} strokeWidth={1.8} className="text-danger" />
              </div>
              <div className="aximo-contact-info-data text-black">
                <span className="fw-bold">Email us</span>
                <p className="mb-0">sales@liwaeindutries.com</p>
                <p className="mb-0">admin@liwaindustries.com</p>
              </div>
            </div>
          </FadeInStaggerTwoChildren>

          {/* Address 1 */}
          <FadeInStaggerTwoChildren className="col-xl-6 col-md-6">
            <div className="aximo-contact-info-box d-flex align-items-start">
              <div className="aximo-contact-info-icon me-3">
                <MapPin size={28} strokeWidth={1.8} className="text-success" />
              </div>
              <div className="aximo-contact-info-data text-black">
                <span className="fw-bold">Office address</span>
                <p className="mb-0">Office 510, Mai Tower Al Nahda - Dubai UAE</p>
              </div>
            </div>
          </FadeInStaggerTwoChildren>

          {/* Address 2 */}
          <FadeInStaggerTwoChildren className="col-xl-6 col-md-6">
            <div className="aximo-contact-info-box d-flex align-items-start">
              <div className="aximo-contact-info-icon me-3">
                <MapPin size={28} strokeWidth={1.8} className="text-success" />
              </div>
              <div className="aximo-contact-info-data text-black">
                <span className="fw-bold">Office address</span>
                <p className="mb-0">F0AM0781 Al Hamra Industrial Zone FZE - RAK - UAE</p>
              </div>
            </div>
          </FadeInStaggerTwoChildren>
        </FadeInStaggerTwo>
      </div>
    </div>
  );
}

export default ContactInfo;
																											