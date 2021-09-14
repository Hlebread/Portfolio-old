const title = 'Gleb Makhankov • Future Front-end developer';

const projects = {
	theNeuven: {
		name: 'The Neuven',
		link: 'https://hlebread.github.io/The-Neuven/',
		gitHub: 'https://github.com/Hlebread/The-Neuven',
		img: 'theNeuven',
		info: 'Just a travel company website that I was building to practice my layout skills',
	},
	finApp: {
		name: 'Eveneuum',
		link: 'https://hlebread.github.io/FinanceApp/',
		gitHub: 'https://github.com/Hlebread/FinanceApp',
		img: 'eveneuum',
		info: 'A web application that is a financial assistant with a small set of functions and a visual presentation',
	},
	weatherWidget: {
		name: 'Weather Widget',
		link: 'https://hlebread.github.io/WeatherWidget/',
		gitHub: 'https://github.com/Hlebread/WeatherWidget',
		img: 'weatherWidget',
		info: 'Simple weather widget for your site with geolocation and forecast',
	},
};

const projectContainer = {
	render: (className = 'projects') =>{
		return `
			<section class="${className}"></section>
		`;
	}
};

const projectCard = {
	render: (projectLink = 'https://github.com/Hlebread', 
				projectOnGitHubLink = 'https://github.com/Hlebread', 
				imgName,
				projectName = 'Project',
				projectInfo = 'Some information',
				className = 'project') =>{
		return `
			<section class="${className}">
				<div class="back">
					<a href="${projectLink}" target="_blank">Open project</a>
					<a href="${projectOnGitHubLink}" target="_blank"><i class="fa-brands fa-github"></i>Show on GitHub</a>
				</div>
				<div class="container">
					<figure class="preview">
						<img src="./images/${imgName}.jpg" alt="ProjectPreview">
					</figure>
					<div class="info">
						<h1 class="project-name">${projectName}</h1>
						<span class="project-short-info">${projectInfo}</span>
						<span class="bottom">Click on card to show more</span>
					</div>
				<div>
			</section>
		`;
	}
};

const footer = {
	render: (gitHubLink = 'https://github.com/Hlebread', linkedInLink = 'https://www.linkedin.com/in/gleb-makhankov/', className = 'links') =>{
		return `
			<footer class="${className}">
				<a href="${gitHubLink}" title="GitHub" target="_blank">
					<i class="fa-brands fa-github"></i>
					Open GitHub profile
				</a>
				<a href="${linkedInLink}" title="LinkedIn" target="_blank">
					<i class="fa-brands fa-linkedin"></i>
					Open LinkedIn profile
				</a>
			</footer>
		`;
	}
};