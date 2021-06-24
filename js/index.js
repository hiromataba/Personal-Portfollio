import data from './datainfo.js';

const myProjects = data.projects;
const menuBtn = document.querySelector('.burger');
const menuOpen = document.querySelector('header nav ul');
const menuClose = document.querySelector('.close-menu-btn button');
const menuItems = document.querySelectorAll('header nav ul li a');
menuBtn.addEventListener('click', () => menuOpen.classList.add('mobileMenu'));
menuClose.addEventListener('click', () => menuOpen.classList.remove('mobileMenu'));
menuItems.forEach((item) => item.addEventListener('click', () => menuOpen.classList.remove('mobileMenu')));
// Get Article
const cardGrid = document.querySelector('.work-section .card-grid');
function implementProjects() {
  myProjects.forEach((project) => {
    const projectArticle = document.createElement('article');
    projectArticle.classList.add('work-section-card');
    // Add Image
    const imgLeft = document.createElement('div');
    imgLeft.classList.add('img-left');
    const imageLeft = document.createElement('img');
    imageLeft.src = project.projectImage;
    imageLeft.alt = project.companyName;
    imgLeft.appendChild(imageLeft);
    projectArticle.appendChild(imgLeft);
    // Add work Card
    const workCardRight = document.createElement('div');
    workCardRight.classList.add('work-section-card-right');
    // Add company Name
    const companyName = document.createElement('h1');
    companyName.classList.add('author-name');
    companyName.innerText = project.projectName;
    workCardRight.appendChild(companyName);
    // Add card Info
    const cardInfo = document.createElement('ul');
    cardInfo.classList.add('card-info');

    // Add card info Title
    const cardInfoLiTitle = document.createElement('li');
    const cardInfoTitle = document.createElement('p');
    cardInfoTitle.classList.add('card-info-title');
    cardInfoTitle.innerText = project.companyName;
    cardInfoLiTitle.appendChild(cardInfoTitle);
    cardInfo.appendChild(cardInfoLiTitle);

    // Add dot
    const cardInfoLiDotOne = document.createElement('li');
    const imageCounterOne = document.createElement('img');
    imageCounterOne.src = './img/counter.png';
    imageCounterOne.alt = 'Counter';
    cardInfoLiDotOne.appendChild(imageCounterOne);
    cardInfo.appendChild(cardInfoLiDotOne);
    // Add Author Position
    const cardInfoLiPosition = document.createElement('li');
    const projectPosition = document.createElement('p');
    projectPosition.classList.add('author-skills');
    projectPosition.innerText = project.projectPosition;
    cardInfoLiPosition.appendChild(projectPosition);
    cardInfo.appendChild(cardInfoLiPosition);

    // Add dot
    const cardInfoLiDotTwo = document.createElement('li');
    const imageCounterTwo = document.createElement('img');
    imageCounterTwo.src = './img/counter.png';
    imageCounterTwo.alt = 'Counter';
    cardInfoLiDotTwo.appendChild(imageCounterTwo);
    cardInfo.appendChild(cardInfoLiDotTwo);

    // Add Date
    const cardInfoLiDate = document.createElement('li');
    const projectDate = document.createElement('p');
    projectDate.classList.add('card-date');
    projectDate.innerText = project.projectDate;
    cardInfoLiDate.appendChild(projectDate);
    cardInfo.appendChild(cardInfoLiDate);
    workCardRight.appendChild(cardInfo);

    // Add Inner Info
    const cardInnerInfo = document.createElement('p');
    cardInnerInfo.classList.add('card-inner-info');
    cardInnerInfo.innerText = project.projectDescription;
    workCardRight.appendChild(cardInnerInfo);

    // Add Skills
    const skills = document.createElement('ul');
    skills.classList.add('skills');
    project.projectTechnologies.forEach((tech) => {
      const techItem = document.createElement('li');
      techItem.classList.add('card-skills-li');
      techItem.innerText = tech;
      skills.appendChild(techItem);
    });

    workCardRight.appendChild(skills);

    // Add button
    const seeMoreBtn = document.createElement('button');
    seeMoreBtn.classList.add('see-project-button');
    seeMoreBtn.innerText = 'See Project';
    seeMoreBtn.type = 'button';
    seeMoreBtn.dataset.key = project.key;
    workCardRight.appendChild(seeMoreBtn);

    projectArticle.appendChild(workCardRight);

    cardGrid.appendChild(projectArticle);
  });
}

implementProjects();

// POP UP WINDOW
const popupWindow = document.querySelector('.popup-window');
const popupBody = document.querySelector('.popup-wrapper');
const seeProjectBtns = [...document.querySelectorAll('.see-project-button')];
const showPopupWindow = (btn) => {
  popupWindow.classList.add('showPopup');
  popupBody.classList.add('showPopup');
  let projectPortfolio = myProjects.filter((project) => project.key === Number(btn.dataset.key));
  [projectPortfolio] = projectPortfolio;
  // Add project Name
  document.querySelector('.popup-wrapper .popup-window-header h2').innerText = projectPortfolio.projectName;
  // Add project Image
  const projectImage = document.querySelector('.popup-wrapper .snapshoot-img img');
  projectImage.src = projectPortfolio.projectImage;
  projectImage.alt = projectPortfolio.projectName;
  // Add project Text
  document.querySelector('.popup-wrapper .blocks .right-block p').innerText = projectPortfolio.projectText;
  // Add project Technologies
  const technologiesWrap = document.querySelector('.popup-wrapper .blocks .left-block ul');
  const technologiesWrapChild = [...technologiesWrap.childNodes];
  technologiesWrapChild.forEach((child, index) => {
    technologiesWrap.removeChild(technologiesWrapChild[index]);
  });
  projectPortfolio.projectTechnologies.forEach((tech) => {
    const techItem = document.createElement('li');
    techItem.classList.add('card-skills-li');
    techItem.innerText = tech;
    technologiesWrap.appendChild(techItem);
  });
  // Add links to Buttons
  document.querySelector('.popup-wrapper .blocks .left-block-btns .see-live-btn').href = projectPortfolio.liveLink;
  document.querySelector('.popup-wrapper .blocks .left-block-btns .see-code-btn').href = projectPortfolio.sourceLink;
};
seeProjectBtns.forEach((btn) => btn.addEventListener('click', () => showPopupWindow(btn)));
const closePopupWindow = document.querySelector('.popup-wrapper .x img');
function popupClose() {
  popupWindow.classList.remove('showPopup');
  popupBody.classList.remove('showPopup');
}
closePopupWindow.addEventListener('click', () => popupClose());
// Add validation to the email
const submitContactBtn = document.querySelector('.submit-contact');
const emailInput = document.querySelector('form fieldset input[type="email"');
submitContactBtn.addEventListener('click', (e) => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    e.preventDefault();
    emailInput.parentElement.classList.add('invalid-input');
    submitContactBtn.parentElement.classList.add('invalid-input');
    submitContactBtn.classList.add('submit-contact-disable');
  }else{

  }
});
emailInput.addEventListener('input', (e) => {
  if (e.target.value !== emailInput.value.toLowerCase()) {
    e.preventDefault();
    emailInput.parentElement.classList.add('invalid-input');
    submitContactBtn.classList.add('submit-contact-disable');
    submitContactBtn.parentElement.classList.add('invalid-input');
  } else {
    submitContactBtn.classList.remove('submit-contact-disable');
    emailInput.parentElement.classList.remove('invalid-input');
    submitContactBtn.parentElement.classList.remove('invalid-input');
  }
});
