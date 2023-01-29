import React from "react";
import { motion } from "framer-motion";

function AnimatedLogo() {
	return (
		<motion.svg
			width="185"
			height="65"
			viewBox="0 0 185 65"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			initial={{ opacity: 0, pathLength: 0 }}
			animate={{ opacity: 1, pathLength: 1 }}
			transition={{
				duration: 2,
				ease: "easeInOut",
			}}
		>
			<motion.path
				d="M85.3 15.1985C82.7688 14.7739 80.84 12.5724 80.84 9.92045C80.84 6.96457 83.2362 4.56836 86.1921 4.56836C86.5593 4.56836 86.918 4.60535 87.2644 4.67582"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				initial={{ opacity: 0, pathLength: 0 }}
				animate={{ opacity: 1, pathLength: 1 }}
				transition={{
					duration: 3,
					ease: "easeInOut",
				}}
			/>
			<motion.path
				d="M99.7527 15.1985C102.284 14.7739 104.213 12.5724 104.213 9.92045C104.213 6.96457 101.817 4.56836 98.8607 4.56836C98.4934 4.56836 98.1348 4.60535 97.7883 4.67582"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				initial={{ opacity: 0, pathLength: 0 }}
				animate={{ opacity: 1, pathLength: 1 }}
				transition={{
					duration: 3,
					ease: "easeInOut",
				}}
			/>
			<motion.path
				d="M87.2527 7.69012C87.1426 7.26246 87.0841 6.81411 87.0841 6.35209C87.0841 3.39621 89.4803 1 92.4362 1C95.3921 1 97.7883 3.39621 97.7883 6.35209C97.7883 6.81411 97.7298 7.26246 97.6197 7.69012"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				initial={{ opacity: 0, pathLength: 0 }}
				animate={{ opacity: 1, pathLength: 1 }}
				transition={{
					duration: 3,
					ease: "easeInOut",
				}}
			/>
			<motion.path
				d="M92.4011 10.6719V13.4748"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				initial={{ opacity: 0, pathLength: 0 }}
				animate={{ opacity: 1, pathLength: 1 }}
				transition={{
					duration: 3,
					ease: "easeInOut",
				}}
			/>
			<motion.path
				d="M87.4444 10.9072C87.2203 11.4077 87.6311 13.3158 88.1166 13.6286"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				initial={{ opacity: 0, pathLength: 0 }}
				animate={{ opacity: 1, pathLength: 1 }}
				transition={{
					duration: 3,
					ease: "easeInOut",
				}}
			/>
			<motion.path
				d="M97.7255 10.9072C97.9496 11.4077 97.5388 13.3158 97.0533 13.6286"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				initial={{ opacity: 0, pathLength: 0 }}
				animate={{ opacity: 1, pathLength: 1 }}
				transition={{
					duration: 3,
					ease: "easeInOut",
				}}
			/>
			<motion.path
				d="M39.638 47V23.108H30.178V16.2H57.766V23.108H48.35V47H39.638ZM74.0195 47V42.556L73.4475 41.456V33.272C73.4475 31.952 73.0368 30.94 72.2155 30.236C71.4235 29.5027 70.1475 29.136 68.3875 29.136C67.2435 29.136 66.0848 29.3267 64.9115 29.708C63.7382 30.06 62.7408 30.5587 61.9195 31.204L59.1035 25.528C60.4528 24.648 62.0662 23.9733 63.9435 23.504C65.8502 23.0053 67.7422 22.756 69.6195 22.756C73.4915 22.756 76.4835 23.6507 78.5955 25.44C80.7368 27.2 81.8075 29.972 81.8075 33.756V47H74.0195ZM66.9795 47.396C65.0728 47.396 63.4595 47.0733 62.1395 46.428C60.8195 45.7827 59.8075 44.9027 59.1035 43.788C58.4288 42.6733 58.0915 41.4267 58.0915 40.048C58.0915 38.5813 58.4582 37.32 59.1915 36.264C59.9542 35.1787 61.1128 34.3573 62.6675 33.8C64.2222 33.2133 66.2315 32.92 68.6955 32.92H74.3275V37.276H69.8395C68.4902 37.276 67.5368 37.496 66.9795 37.936C66.4515 38.376 66.1875 38.9627 66.1875 39.696C66.1875 40.4293 66.4662 41.016 67.0235 41.456C67.5808 41.896 68.3435 42.116 69.3115 42.116C70.2208 42.116 71.0422 41.896 71.7755 41.456C72.5382 40.9867 73.0955 40.2827 73.4475 39.344L74.5915 42.424C74.1515 44.0667 73.2862 45.3133 71.9955 46.164C70.7342 46.9853 69.0622 47.396 66.9795 47.396ZM95.7524 47.396C93.7284 47.396 91.7484 47.1613 89.8124 46.692C87.9057 46.2227 86.3657 45.636 85.1924 44.932L87.7004 39.212C88.8151 39.8867 90.1204 40.4293 91.6164 40.84C93.1124 41.2213 94.5791 41.412 96.0164 41.412C97.4244 41.412 98.3924 41.2653 98.9204 40.972C99.4777 40.6787 99.7564 40.2827 99.7564 39.784C99.7564 39.3147 99.4924 38.9773 98.9644 38.772C98.4657 38.5373 97.7911 38.3613 96.9404 38.244C96.1191 38.1267 95.2097 37.9947 94.2124 37.848C93.2151 37.7013 92.2031 37.5107 91.1764 37.276C90.1791 37.012 89.2551 36.6307 88.4044 36.132C87.5831 35.604 86.9231 34.9 86.4244 34.02C85.9257 33.14 85.6764 32.0253 85.6764 30.676C85.6764 29.1507 86.1164 27.8013 86.9964 26.628C87.9057 25.4253 89.2257 24.4867 90.9564 23.812C92.6871 23.108 94.7991 22.756 97.2924 22.756C98.9644 22.756 100.651 22.932 102.352 23.284C104.083 23.6067 105.535 24.1053 106.708 24.78L104.2 30.456C103.027 29.7813 101.854 29.3267 100.68 29.092C99.5071 28.828 98.3924 28.696 97.3364 28.696C95.9284 28.696 94.9311 28.8573 94.3444 29.18C93.7871 29.5027 93.5084 29.8987 93.5084 30.368C93.5084 30.8373 93.7577 31.204 94.2564 31.468C94.7551 31.7027 95.4151 31.8933 96.2364 32.04C97.0871 32.1573 98.0111 32.2893 99.0084 32.436C100.006 32.5533 101.003 32.744 102 33.008C103.027 33.272 103.951 33.668 104.772 34.196C105.623 34.6947 106.298 35.384 106.796 36.264C107.295 37.1147 107.544 38.2147 107.544 39.564C107.544 41.0307 107.09 42.3507 106.18 43.524C105.3 44.6973 103.98 45.636 102.22 46.34C100.49 47.044 98.3337 47.396 95.7524 47.396ZM121.795 47.396C118.744 47.396 116.368 46.648 114.667 45.152C112.966 43.6267 112.115 41.3387 112.115 38.288V17.828H120.475V38.2C120.475 39.0507 120.71 39.7253 121.179 40.224C121.648 40.6933 122.25 40.928 122.983 40.928C123.98 40.928 124.831 40.6787 125.535 40.18L127.603 46.032C126.899 46.5013 126.034 46.8387 125.007 47.044C123.98 47.2787 122.91 47.396 121.795 47.396ZM108.639 30.28V24.032H125.931V30.28H108.639ZM134.489 55.932C133.228 55.932 131.952 55.7267 130.661 55.316C129.4 54.9347 128.373 54.4213 127.581 53.776L130.485 47.924C130.984 48.364 131.556 48.7013 132.201 48.936C132.876 49.2 133.536 49.332 134.181 49.332C135.09 49.332 135.809 49.1267 136.337 48.716C136.865 48.3053 137.32 47.66 137.701 46.78L138.801 44.008L139.461 43.172L147.557 23.152H155.521L145.225 47.968C144.404 50.0213 143.45 51.62 142.365 52.764C141.309 53.9373 140.121 54.7587 138.801 55.228C137.51 55.6973 136.073 55.932 134.489 55.932ZM137.745 48.012L127.229 23.152H135.809L143.553 42.424L137.745 48.012Z"
				fill="white"
				initial={{ opacity: 0, pathLength: 0 }}
				animate={{ opacity: 1, pathLength: 1 }}
				transition={{
					duration: 3,
					ease: "easeOut",
				}}
			/>
		</motion.svg>
	);
}

export default AnimatedLogo;
