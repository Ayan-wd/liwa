"use client";
function GoogleMap() {
  return (
    <div className=" m-5 sm:p-6 rounded-xl shadow-lg border border-gray-200 space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
          Our Location
        </h3>
        <a
          href="https://maps.app.goo.gl/89TaJLe9ZKcuy31u6"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm bg-blue-100 text-blue-600 px-3 sm:px-4 py-2 rounded-md hover:bg-blue-200 transition font-medium text-center"
        >
          View on Google Maps
        </a>
      </div>

      {/* Google Maps iframe */}
      <div className="overflow-hidden rounded-lg border border-gray-300">
        <iframe
          title="Our Location - Al Qusais Dubai"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.903215586142!2d55.3660732!3d25.2923988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f62ee6e6e5c07%3A0xb31c49e3f36263a7!2sMai%20Tower%2C%20Al%20Nahda%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1721044500000!5m2!1sen!2sae"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-60 sm:h-72 rounded-lg"
        />
      </div>
    </div>
  )
}

export default GoogleMap;
