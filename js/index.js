
const today = new Date()
const thisYear = today.getFullYear()

const footer = document.querySelector("footer")
//console.log(footer)
const copyright = document.createElement("p")
copyright.innerText =`Liubov Rodin ${thisYear}`
//console.log(copyright)
footer.appendChild(copyright);

let skills = ['HTML', 'Javascript', 'parenting']
let skillsSection = document.querySelector('#skills')
let skillsList = skillsSection.querySelector('ul')
for (let i=0; i<skills.length; i++) {
    let skill = document.createElement('li')
    skill.innerText=skills[i]
    //skill.innerHTML ="<a src=skills></a>";
    skillsSection.appendChild(skill)
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

  //console.log(newMessage)

  messageForm.reset()
    });

    function onRemoveButtonClick(event) {
        const entry = event.target.parentNode
        entry.remove()
    }


