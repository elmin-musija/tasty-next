import React from "react";
import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./privacy-policy.module.css";

const PrivacyPolicy = () => {
	const checkRef = useRef(null);
	const [checked, setChecked] = useState(false);
	const checkBoxHandler = () => {
		setChecked(checkRef.current.checked === true);
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className={styles.privatePolicy}
		>
			<div>
				<h2>Tasty Privacy Policy</h2>
				<p>
					This app is a non commercial demonstration project to show off the
					developer's programming skills. This privacy policy will explain how
					we use the personal data we collect from you when you use our website.
				</p>
			</div>

			<div>
				<h3>Topics</h3>
				<ul>
					<li>What data do we collect?</li>
					<li>How do we collect your data?</li>
					<li>How will we use your data?</li>
					<li>How do we store your data?</li>
					<li>Marketing</li>
					<li>What are your data protection rights?</li>
					<li>What are cookies?</li>
					<li>How do we use cookies?</li>
					<li>What types of cookies do we use?</li>
					<li>How to manage your cookies</li>
					<li>Privacy policies of other websites</li>
					<li>Changes to our privacy policy</li>
					<li>How to contact us</li>
				</ul>
			</div>

			<div>
				<h3>What data do we collect?</h3>
				<p>We collect the following data:</p>
				<ul>
					<li>Fullname</li>
					<li>Email address</li>
					<li>Hashed password</li>
					<li>Your added favourite meals</li>
				</ul>
			</div>

			<div>
				<h3>How do we collect your data?</h3>
				<p>You directly provide us with all of the data we collect.</p>
			</div>

			<div>
				<h3>How will we use your data?</h3>
				<p>We collect your data so that we can:</p>
				<ul>
					<li>Offer you a customer area.</li>
					<li>Enable you to save your favorite meals.</li>
				</ul>
				<p>If you agree, we will NOT share your data with third party.</p>
				<p>
					Since this is a demonstration application, we only use the data to
					enable the functions mentioned above. Beside that, there is no further
					data processing. We will explicitly NOT use your email address to
					contact you.
				</p>
			</div>

			<div>
				<h3>How do we store your data?</h3>
				<p>
					We securely store your data in an online database hosted at{" "}
					<Link href="http://www.mongodb.com/atlas/database" target="_blank">
						MongoDB Atlas
					</Link>
					.
				</p>
				<p>
					We will keep your user information (fullname, email address, password,
					added favorites) for 10 minutes. Once this time period has expired, we
					will automatically delete your data.
				</p>
			</div>

			<div>
				<h3>Marketing</h3>
				<p>We do not undertake any marketing neither contact you.</p>
			</div>

			<div>
				<h3>What are your data protection rights?</h3>
				<p>
					We would like to make sure you are fully aware of all of your data
					protection rights. Every user is entitled to the following:
				</p>
				<p>
					<span>The right to access</span> – You have the right to request us
					for copies of your personal data. However, your data is automatically
					deleted after 10 minutes after you entered it.
				</p>
				<p>
					<span>The right to rectification</span> – You have the right to
					request that we correct any information you believe is inaccurate. You
					also have the right to request us to complete the information you
					believe is incomplete.
				</p>
				<p>
					<span>The right to erasure</span>– You have the right to request that
					we erase your personal data, under certain conditions.
				</p>
				<p>
					<span>The right to restrict processing</span> – You have the right to
					request that we restrict the processing of your personal data, under
					certain conditions.
				</p>
				<p>
					<span>The right to object to processing</span>– You have the right to
					object the processing of your personal data, under certain conditions.
				</p>
				<p>
					<span>The right to data portability</span>– You have the right to
					request that we transfer the data that we have collected to another
					organization, or directly to you, under certain conditions.
				</p>
				<p>
					If you make a request, we have one month to respond to you. If you
					would like to exercise any of these rights, please contact us at our
					email:{" "}
					<a href="mailto:info.tasty.app@gmail.com">info.tasty.app@gmail.com</a>
				</p>
			</div>

			<div>
				<h3>What are cookies?</h3>
				<p>
					Cookies are text files placed on your computer to collect standard
					Internet log information and visitor behavior information. When you
					visit our websites, we may collect information from you automatically
					through cookies or similar technology.
				</p>
				<p>
					For further information, visit{" "}
					<Link href="http://www.allaboutcookies.org" target="_blank">
						allaboutcookies.org
					</Link>
					.
				</p>
			</div>

			<div>
				<h3>How do we use cookies?</h3>
				<p>
					We use cookies in a range of ways to improve your experience on our
					website, including:
				</p>
				<ul>
					<li>Keeping you signed in</li>
					<li>Read and store your favorite meals</li>
				</ul>
			</div>

			<div>
				<h3>What types of cookies do we use?</h3>
				<p>
					There are a number of different types of cookies, however, our website
					uses:
				</p>
				<ul>
					<li>
						Functionality – We use these cookies so that you can log in and save
						your favorite meals.
					</li>
				</ul>
			</div>

			<div>
				<h3>How to manage cookies</h3>
				<p>
					You can set your browser not to accept cookies, and the above website
					tells you how to remove cookies from your browser. However, in a few
					cases, some of our website features may not function as a result.
				</p>
			</div>

			<div>
				<h3>Privacy policies of other websites</h3>
				<p>
					Our website contains links to other websites. Our privacy policy
					applies only to our website, so if you click on a link to another
					website, you should read their privacy policy.
				</p>
			</div>

			<div>
				<h3>Changes to our privacy policy</h3>
				<p>
					We keep this privacy policy under regular review and places any
					updates on this web page. This privacy policy was last updated on 7
					February 2023.
				</p>
			</div>

			<div>
				<h3>How to contact us</h3>
				<p>
					If you have any questions about our privacy policy, the data we hold
					on you, or you would like to exercise one of your data protection
					rights, please do not hesitate to contact us.
				</p>
				<p>
					Email us at:{" "}
					<a href="mailto:info.tasty.app@gmail.com">info.tasty.app@gmail.com</a>{" "}
				</p>
			</div>

			<form className={styles.form}>
				<input
					type="checkbox"
					ref={checkRef}
					onChange={checkBoxHandler}
					id="checkBox"
				/>
				<label htmlFor="checkBox">
					I have read the privacy policy and accept it.
				</label>
			</form>

			{checked && (
				<a href="/home" className={`${styles.btn} ${styles.btnActive}`}>
					Continue
				</a>
			)}

			{!checked && (
				<a href="" className={`${styles.btn} ${styles.btnDisabled}`}>
					Please accept privacy policy
				</a>
			)}
		</motion.div>
	);
};

export default PrivacyPolicy;
