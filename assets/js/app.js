const projects = [
  {
    title: "Torrent Search (Web)",
    img: "assets/images/torsearch.jpg",
    description:
      "An application that allows users to search for torrents on the web from multiple sources.",
    link: "https://torrent-search.github.io/torrent-search-web",
    github: "https://github.com/Torrent-Search/torrent-search-web",
    tags: ["React", "CSS", "Bootstrap"],
  },
  {
    title: "Music Search",
    description:
      "An application that allows users to search for music on the web from JioSaavn API and Youtube (Experimental).",
    link: "https://tejasvp25.github.io/music-search-web/",
    github: "https://github.com/Tejasvp25/music-search-web",
    tags: ["React"],
  },
  {
    title: "Yet Another Paste Bin",
    description: "An application intended to share Text and Code snippets",
    link: "https://yapbin.netlify.app/",
    github: "",
    tags: [
      "Javascript",
      "React",
      "Context API",
      "HTML",
      "CSS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Mongoose",
    ],
  },
  {
    title: "Torrent Scraper",
    description:
      "An microservice that scrapes torrents from the web. Used for Torrent Search and Music Search.",
    link: "",
    github: "https://github.com/Torrent-Search/torr_scraper_node",
    tags: ["Webservice", "Golang"],
  },
  {
    title: "Heroku Dyno Manager",
    description:
      "An application to Manage Heroku.com dynos using Heroku Platform API",
    github: "https://github.com/Tejasvp25/Heroku_Dyno_Manager",
    tags: ["Android", "Kotlin", "Android Native", "Heroku", "REST API", "MVVC"],
  },
  {
    title: "Rest API Mocker",
    description: "An Small utility to mock REST API Responses",
    github: "https://github.com/Tejasvp25/Api-Mocker",
    tags: ["Javascript", "NodeJS", "REST API", "Mocker"],
  },

  // {
  //   title: "Yet Another Paste Bin - Backend",
  //   description: "",
  //   link: "https://yapbin.netlify.app/",
  //   github: "https://github.com/Yet-Another-Paste-Bin/yapb_backend_server",
  //   tags: [
  //     "Javascript",

  //     "HTML",
  //     "CSS",
  //   ],
  // },
];
function generateEle(projectDetails) {
  const { title, img, description, link, github, tags } = projectDetails;

  const parentElement = document.createElement("div");
  parentElement.classList.add("project-card");

  if (img) {
    const imgEle = document.createElement("img");
    imgEle.src = img;

    parentElement.classList.add("grid-large");
    parentElement.appendChild(imgEle);
  } else {
    parentElement.classList.add("grid-medium");
  }

  const mainChildElement = document.createElement("div");
  parentElement.appendChild(mainChildElement);

  const titleEle = document.createElement("h3");
  titleEle.innerHTML = title;
  mainChildElement.appendChild(titleEle);

  const tagsEle = document.createElement("div");
  if (tags) {
    const tagEle = tags.map((tag) => {
      const tagEle = document.createElement("span");
      tagEle.classList.add("tag");
      tagEle.innerHTML = tag;
      return tagEle;
    });
    tagsEle.append(...tagEle);
  }
  mainChildElement.appendChild(tagsEle);

  const descriptionEle = document.createElement("p");
  descriptionEle.innerHTML = description;
  mainChildElement.appendChild(descriptionEle);

  if (link) {
    const linkEle = document.createElement("a");
    linkEle.href = link;
    const visitEleLogo = document.createElement("i");
    visitEleLogo.classList.add("fa-solid");
    visitEleLogo.classList.add("fa-external-link-alt");
    visitEleLogo.classList.add("hover-underline-animation");
    linkEle.appendChild(visitEleLogo);
    mainChildElement.appendChild(linkEle);
  }

  if (github) {
    const githubEle = document.createElement("a");
    githubEle.href = github;
    const githubEleLogo = document.createElement("i");
    githubEleLogo.classList.add("fa-brands");
    githubEleLogo.classList.add("fa-github");
    githubEleLogo.classList.add("hover-underline-animation");
    githubEle.appendChild(githubEleLogo);
    mainChildElement.appendChild(githubEle);
  }
  parentElement.setAttribute("data-aos", "zoom-in");
  parentElement.setAttribute("data-aos-duration", "500");
  return parentElement;
}

function generateProjects() {
  const projectsEle = document.getElementById("projects");
  projectsEle.classList.add("projects");
  const projectsList = projects.map((project) => generateEle(project));
  projectsEle.append(...projectsList);
}

function scrollToElement(event, element) {
  event.preventDefault();

  var ele = document.querySelector(element);
  var headerOffset = 200;
  if (element == "#projects-section") {
    headerOffset = 300;
  }
  var elementPosition = ele.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}
function classToggle() {
  const navs = document.querySelector(".Navbar__Items");
  if (navs.classList.contains("Navbar__ToggleShow")) {
    const navbar = document.querySelector(".Navbar");
    navbar.style.position = "absolute";
  } else {
    const navbar = document.querySelector(".Navbar");
    navbar.style.position = "unset";
  }
  navs.classList.toggle("Navbar__ToggleShow");
}
document
  .querySelector(".Navbar__Link-toggle")
  .addEventListener("click", classToggle);

window.onscroll = function () {
  const navs = document.querySelector(".Navbar__Items");
  if (navs.classList.contains("Navbar__ToggleShow")) {
    const navbar = document.querySelector(".Navbar");
    navbar.style.position = "absolute";
  }
  navs.classList.remove("Navbar__ToggleShow");
};
generateProjects();
