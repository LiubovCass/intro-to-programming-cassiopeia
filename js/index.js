let Today = new Date().getFullYear()

const footer = document.querySelector("footer")
//console.log(footer)
const copyright = document.createElement("p")

document.getElementById("p1").innerHTML = "LIUBOV RODIN " + Today;
//console.log(copyright)
footer.appendChild(copyright);
let skills = ['HTML', 'Javascript', 'parenting']
let skillsSection = document.getElementById('skills')
let skillsList = skillsSection.querySelector('ul')
for (let i=0; i<skills.length; i++) {
    let skill = document.createElement('li')
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill)
}



