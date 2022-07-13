import React from 'react';

const ContactComponent = () => {
	return (
		<div className="about container mx-auto flex justify-center items-center">
			<div className="glass-container flex justify-center items-center">
				<div className="py-6">
					<h2 className="text-2xl font-bold text-white">
						Contact_Me
					</h2>
					<div className="mt-8 max-w-md">
						<div className="grid grid-cols-1 gap-6">
							<label className="">
								<span className="text-white uppercase">
									Full_name
								</span>
								<input
									type="text"
									className="contact-input"
									placeholder=""
								/>
							</label>
							<label className="">
								<span className="text-white uppercase">
									Email_address
								</span>
								<input
									type="email"
									className="contact-input"
									placeholder=""
								/>
							</label>
							<label className="">
								<span className="text-white uppercase">
									Message
								</span>
								<textarea
									className="contact-input"
									rows="2"
								></textarea>
							</label>
							<button
								type="button"
								className="border-solid border w-20 p-1 rounded-sm mx-auto uppercase hover:shadow-sm hover:shadow-white focus:bg-white focus:text-black"
							>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactComponent;
