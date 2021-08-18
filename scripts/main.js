const Portfolio = (function(){
	function Controller(){
		let myModel = null;
		let container = null;

		this.init = function(model){
			myModel = model;
			this.makePage();
			this.addClicks();
		}

		this.makePage = function(){
			myModel.makePage();
			container = document.body.querySelector('.projects');
		}

		this.addClicks = function(){
			container.addEventListener('click', (event) => {
				let card = event.target.closest('.project');
				if(!card){
					this.flipCardBack();
					return;
				};
				this.flipCard(card);
			});
		}

		this.flipCard = function(card){
			myModel.flipCard(card);
		}

		this.flipCardBack = function(){
			myModel.flipCardBack();
		}
	};

	function Model(){
		let myView = null;

		this.init = function(view){
			myView = view;
		}

		this.makePage = function(){
			myView.makePage();
		}

		this.flipCard = function(card){
			myView.flipCard(card);
		}

		this.flipCardBack = function(){
			myView.flipCardBack();
		}
	};

	function View(){
		let parts = null;
		let container = null;

		this.init = function(components){
			parts = components;
		}

		this.makePage = function(){
			this.setPageTitle();
			this.createContainer();
			this.createFooter();
			this.addProjects();
		}

		this.setPageTitle = function(){
			document.title = parts.title;
		}

		this.createContainer = function(){
			document.body.insertAdjacentHTML('beforeend', parts.container.render());
			container = document.body.querySelector('.projects');
		}

		this.createFooter = function(){
			document.body.insertAdjacentHTML('beforeend', parts.footer.render());
		}

		this.addProjects = function(){
			for(key in parts.projects){
				container.insertAdjacentHTML('beforeend',
					parts.card.render(parts.projects[key].link,
											parts.projects[key].gitHub,
											parts.projects[key].img,
											parts.projects[key].name,
											parts.projects[key].info)
				);
			};
		}

		this.flipCard = function(card){
			card.classList.toggle('flip');
		}

		this.flipCardBack = function(){
			let projects = container.querySelectorAll('.project');
			projects.forEach(e => {
				e.classList.remove('flip');
			});
		}
		
	};

	return {
		createPortfolio: function(){
			const components = {
				title: title,
				projects: projects,
				container: projectContainer,
				card: projectCard,
				footer: footer,
			};

			const portfolioView = new View();
			const portfolioModel = new Model();
			const portfolioController = new Controller();

			portfolioView.init(components);
			portfolioModel.init(portfolioView);
			portfolioController.init(portfolioModel);
		},


	}
}());

const portfolio = new Portfolio.createPortfolio();