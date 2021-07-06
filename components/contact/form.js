{
	/* Contact form */
}
{
	/* <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
					<h3 className="text-lg font-medium">
						Send me a message
					</h3>
					<form className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
						<div>
							<label
								htmlFor="first_name"
								className="block text-sm font-medium">
								First name
							</label>
							<div className="mt-1">
								<input
									type="text"
									name="first_name"
									id="first_name"
									autoComplete="given-name"
									className="py-3 px-4 block w-full border border-gray-300 shadow-sm focus:ring-teal-500 focus:border-blue-500 rounded-md"
									value={firstName}
									onChange={(event) => {
										setFirstName(event.target.value);
									}}
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="last_name"
								className="block text-sm font-medium text-gray-900">
								Last name
							</label>
							<div className="mt-1">
								<input
									type="text"
									name="last_name"
									id="last_name"
									autoComplete="family-name"
									className="py-3 px-4 block w-full shadow-sm  focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
									value={lastName}
									onChange={(event) => {
										setLastName(event.target.value);
									}}
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium">
								Email
							</label>
							<div className="mt-1 border-red-600">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border border-gray-300 rounded-md"
									value={email}
									onChange={(event) => {
										setEmail(event.target.value);
									}}
								/>
							</div>
						</div>
						<div>
							<div className="flex justify-between">
								<label
									htmlFor="phone"
									className="block text-sm font-medium">
									Phone
								</label>
								<span
									id="phone-optional"
									className="text-sm">
									Optional
								</span>
							</div>
							<div className="mt-1">
								<input
									type="text"
									name="phone"
									id="phone"
									autoComplete="tel"
									className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border border-gray-300 rounded-md"
									aria-describedby="phone-optional"
									value={number}
									onChange={(event) => {
										setNumber(event.target.value);
									}}
								/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<label
								htmlFor="subject"
								className="block text-sm font-medium">
								Subject
							</label>

							<div className="mt-1">
								<input
									type="text"
									name="subject"
									id="subject"
									className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border border-gray-300 rounded-md"
									value={subject}
									onChange={(event) => {
										setSubject(event.target.value);
									}}
								/>
							</div>
						</div>

						<div className="sm:col-span-2">
							<div className="flex justify-between">
								<label
									htmlFor="message"
									className="block text-sm font-medium">
									Message
								</label>
								<span id="message-max" className="text-sm">
									Max. 500 characters
								</span>
							</div>
							<div className="mt-1">
								<textarea
									id="message"
									name="message"
									rows={4}
									className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border border-gray-300rounded-md"
									aria-describedby="message-max"
									value={body}
									onChange={(event) => {
										setBody(event.target.value);
									}}
								/>
							</div>
						</div>
						<div className="sm:col-span-2 sm:flex sm:justify-end">
							<button
								onClick={(e) => sendEmail(e)}
								className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto">
								Submit
							</button>
						</div>
					</form>
				</div> */
}
