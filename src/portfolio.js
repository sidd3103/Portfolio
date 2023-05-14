/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from 'react-easy-emoji';
import splashAnimation from './assets/lottie/splashAnimation'; // Rename to your file name for custom animation
import {
	SiMysql,
	SiPytorch,
	SiTensorflow,
	SiDocker,
	SiPython,
	SiTypescript,
	SiApachespark,
	SiJavascript,
	SiR,
	SiScikitlearn,
} from 'react-icons/si';
import { BsGit } from 'react-icons/bs';
import { DiJava } from 'react-icons/di';
import { TbBrandCpp } from 'react-icons/tb';

// Splash Screen

const splashScreen = {
	enabled: true, // set false to disable splash screen
	animation: splashAnimation,
	duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
	animated: true, // Set to false to use static SVG
};

const greeting = {
	username: 'Siddharth Mittal',
	title: "Hi all, I'm Sid",
	subTitle: emoji(
		'An aspiring Machine Learning Engineer with a strong passion for everything related to programming, data, and artificial intelligence. I love diving into datasets, extracting meaningful insights, and leveraging them to create powerful AI models.'
	),
	resumeLink:
		'https://docs.google.com/document/d/1Couo1Cg4JV-WzFmKQKRMajxtdK7zh9h-pJSx7GsaxKU/edit?usp=sharing', // Set to empty to hide the button
	displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
	github: 'https://github.com/sidd3103',
	linkedin: 'https://www.linkedin.com/in/sidd31/',
	gmail: 'siddharth.mittal31@gmail.com',
	// Instagram, Twitter and Kaggle are also supported in the links!
	// To customize icons and social links, tweak src/components/SocialMedia
	display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
	title: 'What I do',
	subTitle:
		'Turning Data into Intelligent Solutions as an Aspiring Machine Learning Engineer.',
	skills: [
		// emoji(
		//   "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		// ),
		// emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
		// emoji(
		//   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
		// )
	],

	/* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

	softwareSkills: [
		{
			skillName: 'Python',
			tags: <SiPython />,
		},
		{
			skillName: 'Java',
			tags: <DiJava />,
		},
		{
			skillName: 'C++',
			tags: <TbBrandCpp />,
		},
		{
			skillName: 'TypeScript',
			tags: <SiTypescript />,
		},
		{
			skillName: 'JS',
			tags: <SiJavascript />,
		},
		{
			skillName: 'R',
			tags: <SiR />,
		},
		{
			skillName: 'Tensorflow',
			tags: <SiTensorflow />,
		},
		{
			skillName: 'Pytorch',
			tags: <SiPytorch />,
		},
		{
			skillName: 'MySQL',
			tags: <SiMysql />,
		},
		{
			skillName: 'Git',
			tags: <BsGit />,
		},
		{
			skillName: 'Docker',
			tags: <SiDocker />,
		},
		{
			skillName: 'Apache Spark',
			tags: <SiApachespark />,
		},
		{
			skillName: 'Scikit-learn',
			tags: <SiScikitlearn />,
		},
	],
	display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
	display: true, // Set false to hide this section, defaults to true
	schools: [
		{
			schoolName: 'University of British Columbia',
			logo: require('./assets/images/ubc.png'),
			subHeader: 'Bachelor of Science in Computer Science and Mathematics',
			duration: 'January 2018 - May 2023',
		},
		{
			schoolName: 'Delhi Public School',
			logo: require('./assets/images/dps.png'),
			subHeader: 'High School Diploma in Computer Science',
			duration: 'April 2014 - March 2017',
		},
	],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
	viewSkillBars: false, //Set it to true to show Proficiency Section
	experience: [
		{
			Stack: 'Frontend/Design', //Insert stack or technology you have experience in
			progressPercentage: '90%', //Insert relative proficiency in percentage
		},
		{
			Stack: 'Backend',
			progressPercentage: '70%',
		},
		{
			Stack: 'Programming',
			progressPercentage: '60%',
		},
	],
	displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
	display: true, //Set it to true to show workExperiences Section
	experience: [
		{
			role: 'Applied Artificial Intelligence Engineer Co-op',
			company: 'Chubb Insurance',
			companylogo: require('./assets/images/chubb.jpeg'),
			date: 'September 2022 – January 2023',
			descBullets: [
				'Used Python to extract valuable data from the 10TB+ GDELT global dataset.',
				'Co-developed knowledge graphs using data on key individuals, organizations, and events.',
				"Used HuggingFace's Bart-Large-CNN model for text summarization.",
				'Used BeautifulSoup to extract data from numerous websites successfully.',
			],
		},
		{
			role: 'Artificial Intelligence Researcher Co-op',
			company: 'Huawei Technologies',
			companylogo: require('./assets/images/huawei.jpeg'),
			date: 'January 2022 – September 2022',
			descBullets: [
				'Trained several object detection models using YOLO and Centernet, achieving 0.8-0.9 mAP on test data.',
				'Helped preprocess large datasets like MS-COCO for object detection.',
				"Aided in implementing Deep Model Consolidation for YOLO's class incremental learning.",
				'Co-wrote a research paper comparing class incremental learning techniques in single-stage detectors across two large, unique datasets.',
			],
		},
		{
			role: 'Data Scientist Co-op',
			company: 'TRIUMF Labs',
			companylogo: require('./assets/images/triumf.png'),
			date: 'September 2021 – January 2022',
			descBullets: [
				'Project Name: Deep Learning for Event Reconstruction in Water Cherenkov Detectors',
				'Joined a research team to develop the Hyper-Kamiokande experiment studying neutrino oscillations.',
				'Improved electron/gamma discrimination by enhancing the ResNet18 model.',
				'Boosted ResNet18 performance by 5% with a new padding system and image augmentation technique.',
				'Optimized the neural network engine, cutting iteration time by 33%.',
			],
		},
	],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
	showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
	display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
	title: 'Personal Projects',
	projects: [
		{
			image: require('./assets/images/Canny.gif'),
			projectName: 'Canny Detector',
			projectDesc:
				'Implemented the Canny Detector for detecting edges in grayscale images.',
			footerLink: [
				{
					name: 'View Project',
					url: 'https://github.com/sidd3103/CannyDetector',
				},
				//  you can add extra buttons here.
			],
		},
		{
			image: require('./assets/images/Guesser.gif'),
			projectName: 'Digit Guesser',
			projectDesc:
				'Implemented a multi-class classiﬁcation convolution neural network on the MNIST handwritten digit dataset reaching an accuracy of 99%; used the model to guess the digit the user drew using their mouse.',
			footerLink: [
				{
					name: 'View Project',
					url: 'https://github.com/sidd3103/Digit-Guesser',
				},
			],
		},
		{
			image: require('./assets/images/Sudoku.gif'),
			projectName: 'Sudoku Solver',
			projectDesc:
				'Built a sudoku game with GUI using the Pygame library and Python classes to create the board and each subsequent cell in the board',
			footerLink: [
				{
					name: 'View Project',
					url: 'https://github.com/sidd3103/Sudoku-Solver',
				},
			],
		},
		{
			image: require('./assets/images/Connect.gif'),
			projectName: 'Connect-4',
			projectDesc:
				'Built a Connect-4 game for two players using Pygame to design the GUI, and implemented various classes for diﬀerent sections of the game ; also implemented a single-player version where the user plays against the AI',
			footerLink: [
				{
					name: 'View Project',
					url: 'https://github.com/sidd3103/Connect-4',
				},
			],
		},
	],
	display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
	title: emoji('Achievements And Certifications 🏆 '),
	subtitle:
		'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

	achievementsCards: [
		{
			title: 'Google Code-In Finalist',
			subtitle:
				'First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.',
			image: require('./assets/images/codeInLogo.webp'),
			imageAlt: 'Google Code-In Logo',
			footerLink: [
				{
					name: 'Certification',
					url: 'https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing',
				},
				{
					name: 'Award Letter',
					url: 'https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing',
				},
				{
					name: 'Google Code-in Blog',
					url: 'https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html',
				},
			],
		},
		{
			title: 'Google Assistant Action',
			subtitle:
				'Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.',
			image: require('./assets/images/googleAssistantLogo.webp'),
			imageAlt: 'Google Assistant Action Logo',
			footerLink: [
				{
					name: 'View Google Assistant Action',
					url: 'https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en',
				},
			],
		},

		{
			title: 'PWA Web App Developer',
			subtitle: 'Completed Certifcation from SMIT for PWA Web App Development',
			image: require('./assets/images/pwaLogo.webp'),
			imageAlt: 'PWA Logo',
			footerLink: [
				{ name: 'Certification', url: '' },
				{
					name: 'Final Project',
					url: 'https://pakistan-olx-1.firebaseapp.com/',
				},
			],
		},
	],
	display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
	title: 'Blogs',
	subtitle:
		'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',
	displayMediumBlogs: 'true', // Set true to display fetched medium blogs instead of hardcoded ones
	blogs: [
		{
			url: 'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
			title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
			description:
				'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
		},
		{
			url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
			title: 'Why REACT is The Best?',
			description:
				'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
		},
	],
	display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
	title: 'TALKS',
	subtitle: emoji(
		'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
	),

	talks: [
		{
			title: 'Build Actions For Google Assistant',
			subtitle: 'Codelab at GDG DevFest Karachi 2019',
			slides_url: 'https://bit.ly/saadpasta-slides',
			event_url: 'https://www.facebook.com/events/2339906106275053/',
		},
	],
	display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
	title: emoji('Podcast 🎙️'),
	subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

	// Please Provide with Your Podcast embeded Link
	podcast: [
		'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
	],
	display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
	title: emoji('Contact Me ☎️'),
	subtitle:
		'Discuss a project/opportunity or just want to say hi? My Inbox is open for all.',
	number: '+1 (778) 723 1207',
	email_address: 'siddharth.mittal31@gmail.com',
};

// Twitter Section

const twitterDetails = {
	userName: 'twitter', //Replace "twitter" with your twitter username without @
	display: false, // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
	illustration,
	greeting,
	socialMediaLinks,
	splashScreen,
	skillsSection,
	educationInfo,
	techStack,
	workExperiences,
	openSource,
	bigProjects,
	achievementSection,
	blogSection,
	talkSection,
	podcastSection,
	contactInfo,
	twitterDetails,
	isHireable,
};
