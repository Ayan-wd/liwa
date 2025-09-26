"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import ContactThumb from "../../public/images/contact/contact-thumb.jpg";

function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const submitForm = (formData) => {
		console.log("Submitted Form Data:", formData);
		reset();
	};

	return (
		<div className="py-5">
			<div className="container">
				<div className="row mb-4">
					<div className="col-lg-8">
						<h2 className="fw-bold text-dark">
							Contact us for a <span className="text-black">personal experience</span>
						</h2>
						<p className="text-muted">
							We’d love to hear from you! Please fill out the form below and we’ll
							get in touch soon.
						</p>
					</div>
				</div>

				<div className="row align-items-center">
					{/* Image Section */}
					<div className="col-lg-5 mb-4 mb-lg-0 text-center">
						<Image
							src={ContactThumb}
							alt="Contact"
							className="img-fluid rounded shadow"
						/>
					</div>

					{/* Form Section */}
					<div className="col-lg-7">
						<form
							onSubmit={handleSubmit(submitForm)}
						>
							{/* Name Field */}
							<div className="mb-3">
								<label htmlFor="name" className="form-label fw-semibold">
									Your Name
								</label>
								<input
									type="text"
									id="name"
									className={`form-control border border-2 border-dark rounded ${
										errors.name ? "is-invalid" : ""
									}`}
									{...register("name", { required: "Name is required." })}
								/>
								{errors.name && (
									<div className="invalid-feedback">{errors.name.message}</div>
								)}
							</div>

							{/* Email Field */}
							<div className="mb-3">
								<label htmlFor="email" className="form-label fw-semibold">
									Email Address
								</label>
								<input
									type="email"
									id="email"
									className={`form-control border border-2 border-dark rounded ${
										errors.email ? "is-invalid" : ""
									}`}
									{...register("email", {
										required: "Email is required.",
										pattern: {
											value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
											message: "Enter a valid email address.",
										},
									})}
								/>
								{errors.email && (
									<div className="invalid-feedback">{errors.email.message}</div>
								)}
							</div>

							{/* Phone Field */}
							<div className="mb-3">
								<label htmlFor="phone" className="form-label fw-semibold">
									Phone Number
								</label>
								<input
									type="tel"
									id="phone"
									className={`form-control border border-2 border-dark rounded ${
										errors.phone ? "is-invalid" : ""
									}`}
									{...register("phone", { required: "Phone number is required." })}
								/>
								{errors.phone && (
									<div className="invalid-feedback">{errors.phone.message}</div>
								)}
							</div>

							{/* Message Field */}
							<div className="mb-3">
								<label htmlFor="message" className="form-label fw-semibold">
									Write your message
								</label>
								<textarea
									id="message"
									rows={4}
									className="form-control border border-2 border-dark rounded"
									{...register("message")}
								></textarea>
							</div>

							{/* Submit Button */}
							<button type="submit" className="btn btn-dark rounded-pill w-100">
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;
