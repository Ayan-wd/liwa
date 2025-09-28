import Link from "next/link";

function BreadCrumb({ title, backgroundImage }) {
	return (
		<div
			className="position-relative text-white text-center d-flex align-items-center justify-content-center"
			style={{
				backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
				backgroundSize: "cover",
				backgroundPosition: "center",
				minHeight: "550px", // adjust height as needed
			}}
		>
			{/* 🔹 Black overlay */}
			<div
				className="position-absolute top-0 start-0 w-100 h-100"
				style={{ backgroundColor: "rgba(0,0,0,0.7)" }} // 50% black
			></div>

			{/* Content above overlay */}
			<div className="container position-relative">
				<h1 className="display-3 mb-4 mb-md-1 text-center text-white">{title}</h1>
				<nav className="mt-3">
					<ul className="breadcrumb justify-content-center bg-transparent p-0 m-0">
						<li className="breadcrumb-item">
							<Link href="/" className="text-white text-decoration-none">
								Home
							</Link>
						</li>
						<li className="breadcrumb-item active text-white" aria-current="page">
							{title}
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default BreadCrumb;
