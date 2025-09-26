"use client";
function GoogleMap() {
  return (
    <div className="container my-5">
      <div className="card shadow border-0 rounded-3">
        <div className="card-body p-4">
          {/* Header */}
          <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between mb-3">
            <h3 className="mb-2 mb-sm-0 fw-bold text-dark">Our Location</h3>
            <a
              href="https://maps.app.goo.gl/89TaJLe9ZKcuy31u6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-primary"
            >
              View on Google Maps
            </a>
          </div>

          {/* Google Maps iframe */}
          <div className="ratio ratio-16x9 rounded border">
            <iframe
              title="Our Location - Al Qusais Dubai"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.903215586142!2d55.3660732!3d25.2923988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f62ee6e6e5c07%3A0xb31c49e3f36263a7!2sMai%20Tower%2C%20Al%20Nahda%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1721044500000!5m2!1sen!2sae"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoogleMap;
