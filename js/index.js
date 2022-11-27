
const renderCopyright = () => {
const today = new Date()
const thisYear = today.getFullYear()

const copyright = document.querySelector('#copyright')
//console.log(footer)
copyright.innerHTML = `&copy Liubov Rodin ${thisYear}`
//console.log(copyright)
// footer.appendChild(copyright);
  }
  renderCopyright()

let skills = ['HTML', 'Javascript', 'CSS', 'GitHub', 'parenting']
let skillsSection = document.querySelector('#skills')
let skillsList = skillsSection.querySelector('ul')
for (i=0; i<skills.length; i++) {
    let skill = document.createElement('li')
    skill.innerText = skills[i]
    skillsList.appendChild(skill)
}  

let messageForm = document.querySelector("[name=leave_message]")
console.log(messageForm)
messageForm.addEventListener('submit',function (event) {
    event.preventDefault() 
        let name = event.target.name.value;
        let email = event.target.email.value;
        let message = event.target.message.value;
        console.log(name);
        console.log(email);
        console.log(message);

    let messageSection=document.querySelector('#messages')
    let messageList=messageSection.querySelector('ul')
    let newMessage=document.createElement('li')
    
    //displays new message with linkabale name + message
    newMessage.innerHTML+=`<a href="mailto:${email}">${name} </a>` + `wrote: ${message}`
    messageList.appendChild(newMessage)

    //create remove button
    let removeButton=document.createElement('button')
     removeButton.innerText = 'remove'
     removeButton.setAttribute('type','button')
     removeButton.addEventListener('click',function(event) {
        newMessage.remove()
     })
    //create edit button
     let editButton = document.createElement('button')
     editButton.innerText = 'edit'
     editButton.setAttribute('type', 'button')
     editButton.addEventListener('click', function(event) {
        newMessage.remove()
    //for edit function
        const nameElement = document.querySelector('[name = name]')
        nameElement.value = name
        const emailElement = document.querySelector('[name = email]')
        emailElement.value = email
        const messageElement = document.querySelector('[name = message]')
        messageElement.value = message
     })

newMessage.appendChild(removeButton)
messageList.appendChild(newMessage)
newMessage.appendChild(editButton)

  messageForm.reset()
    });

    function onRemoveButtonClick(event) {
        const entry = event.target.parentNode
        entry.remove()
    }



// let githubRequest = new XMLHttpRequest();
// githubRequest.open('GET', 'https://api.github.com/users/LiubovCass/repos');
// githubRequest.send();

// githubRequest.addEventListener('load', function() {
//   let repositories = [];
//   repositories= JSON.parse(this.response);
//   console.log(repositories);
      
// })

// Fetch API

fetch('https://api.github.com/users/LiubovCass/repos')
// .then(function(response) {
//   return response.json();
.then((repositories) => {
    return repositories.json();
})
.then((repositories) => {
const projectSection = document.querySelector('#projects')
const projectList = document.querySelector('#projects ul')
// function projectsListFunc() {
  // let repositories = [];
for (let i = 0; i < repositories.length; i++) {
  let project = document.createElement("li")
  project.innerHTML = `<a href="${repositories[i].html_url}" target="_blank">${repositories[i].name}</a>`;
  projectList.appendChild(project);
  
} 

return projectList;
})






        








