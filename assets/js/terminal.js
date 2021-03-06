const initialSection = document.querySelector("#initial");

const initialPrompt = "<span class='prompt'>PS F:\\web\\WHOISbinit></span> <input type='text' id='userInput' placeholder='Type a command!' autofocus autocomplete='off'><br/><div class='systemOutput'></div>";
initialSection.innerHTML = initialPrompt;

let inputField = document.querySelector("#userInput");
let outputField = document.querySelectorAll(".systemOutput");

let keepValue = inputField.value;

const terminalCommands = {
    "help": "Use commands like <strong>whoami</strong>, <strong>intro</strong>, <strong>about</strong>, <strong>age</strong>, <strong>birthday</strong>, <strong>address</strong>, <strong>education</strong>, <strong>hobbies</strong>, <strong>skills</strong>, <strong>career</strong>, <strong>projects</strong>, <strong>achievements</strong>, <strong>profession</strong>, <strong>company</strong>, <strong>resume</strong>, <strong>email</strong>, <strong>phone</strong>, <strong>social</strong>, <strong>form</strong>, <strong>font</strong>, and some other system commands!",

    "whoami": "<strong>Binit Ghimire<strong> (WHOISbinit)",

    "intro": "Full-stack Web Development and Web/Network Penetration Testing enthusiast with an experience of over 12 years in the field of Technology, with deep enthusiasm towards Development, Security, Networking, SysAdmin, Server Administration and Cloud Computing.",

    "about": "Hi! I am <strong>Binit Ghimire</strong>.<br>I am a Tech Enthusiastic full-stack web developer, programmer and web/network penetration tester from Nepal.<br>I am following the unique <strong>#DevSecNetSysServCloud</strong> strategy in my Technology career.",

    "age": "Twenty (20)",
    "birthday": "March 3, 2001",
    "address": "Address Line 1: Bharatpur-9, Milanchowk, Chitwan<br>Address Line 2: Jyotish Karyalaya, MC9R+HW Bharatpur<br>City: Bharatpur<br>Province: Bagmati Pradesh<br>ZIP Code: 44200<br>Country: Nepal",
    
    "education": "<p>Studying Bachelor of Engineering (Computer Engineering) at <a onclick=\"window.open('http://unitedtechnicalcollege.edu.np', '_blank')\">United Technical College</a>, affiliated to <a onclick=\"window.open('http://pu.edu.np', '_blank')\">Pokhara University</a>, Nepal!</p>Find about my education in detail in my Résumé, by using the <strong>resume</strong> command!",

    "hobbies": "Reading research papers, documentations and RFCs; playing CTFs; doing SysAdmin and DevSecOps stuffs; developing security automation tools; and contributing to <strong><a onclick=\"window.open('https://www.facebook.com/groups/askbuddie', '_blank')\">Ask Buddie</a></strong>, a Technology community, as a Community Administrator!",

    "skills": "<ul><li>Proficient at full-stack web development in LAMP, LEMP and JAM stacks,</li><li>Web application and Network penetration testing,</li><li>Web programming with HTML5, CSS3, JavaScript, PHP and MySQL,</li><li>Linux/UNIX (RedHat, Debian, Fedora) and Microsoft Windows System and Server administration,</li><li>Cloud, Serverless and Containerized Computing and Systems Development,</li><li>Scripting in Bash, Batch, PowerShell and Python,</li><li>Programming in C, C++ and Rust,</li><li>Git, SVN and GNU Bazaar Version Control Systems,</li><li>Networking and Network Administration,</li><li>Cryptography,</li><li>Digital Forensics and Incident Response,</li><li>Intelligence Gathering (OSINT, GEOINT and HUMINT) and Reconnaissance,</li><li>Reverse Engineering.</li></ul>",

    "career": "Establishing and following the unique <strong>#DevSecNetSysServCloud</strong> strategy for building my Technology career!",

    "projects": "<ul><li><strong>NtHiM (Now, the Host is Mine!)</strong> - <a onclick=\"window.open('https://github.com/TheBinitGhimire/NtHiM', '_blank')\">GitHub</a></li><li><strong>Web-Shells</strong> - <a onclick=\"window.open('https://github.com/TheBinitGhimire/Web-Shells', '_blank')\">GitHub</a></li><li><strong>WHOISxss</strong> - <a onclick=\"window.open('https://github.com/TheBinitGhimire/WHOISxss', '_blank')\">GitHub</a></li><li><strong>GH-Takeover</strong> - <a onclick=\"window.open('https://github.com/TheBinitGhimire/GH-Takeover', '_blank')\">GitHub</a></li><li>Plus, many more! Find the public repositories on <a onclick=\"window.open('https://github.com/TheBinitGhimire', '_blank')\">GitHub</a>!</li></ul>",

    "achievements": "<ul><li>Thanked, acknowledged and rewarded by over 70 multinational companies, governmemnts, organizations and universities in total including Facebook, Microsoft and Alibaba for responsibly discovering and reporting security vulnerabilities in their platforms!</li><li>The CVE Assignment Team at MITRE assigned CVE-2019-11513, CVE-2020-13487 and CVE-2020-13660 for 3 different vulnerabilities that I discovered in multiple platforms, i.e. bbPress and CMS Made Simple.</li><li>Some of my projects have become highly popular in the open-source community on GitHub.</li><li>Featured in Nepali national magazines and newspapers multiple times for my involvement in the field of Security!</li><li>Find about my achievements in detail in my Résumé, by using the <strong>resume</strong> command!</li></ul>",

    "profession": "Undergraduate Computer Engineering student | Independent Full-stack Web Developer, Programmer and Web/Network Penetration Tester",

    "company": "None! I am open to exploring new opportunities.",
    "experience": "Find about my work experience in detail in my Résumé, by using the <strong>resume</strong> command!",

    "resume": "<p>Find My Résumé Here! <a onclick=\"window.open('https://docs.google.com/document/d/1NNZPfIlwhR9KCitCzPQuzthGy3ngoAdHSRztLJzi9Ds/edit?usp=sharing', '_blank')\">Binit Ghimire RESUME</a></p>For any verification regarding my résumé, please make sure to contact the respective authorities!",

    "email": "thebinitghimire@gmail.com (binit@WHOISbinit.me)",
    "phone": "+977-9846868930 (Nepal Telecom)",
    "social": "<span>Facebook</span>: <a onclick=\"window.open('https://www.facebook.com/InternetHeroBINIT', '_blank')\">Binit Ghimire (@InternetHeroBINIT)</a><br><span>Twitter</span>: <a onclick=\"window.open('https://twitter.com/WHOISbinit', '_blank')\">Binit Ghimire (@WHOISbinit)</a><br><span>LinkedIn</span>: <a onclick=\"window.open('https://www.linkedin.com/in/thebinitghimire/', '_blank')\">Binit Ghimire (@thebinitghimire)</a><br><span>GitHub</span>: <a onclick=\"window.open('https://github.com/TheBinitGhimire/', '_blank')\">Binit Ghimire (@TheBinitGhimire)</a><br><span>YouTube</span>: <a onclick=\"window.open('https://www.youtube.com/user/TheBinitGhimire/', '_blank')\">Binit Ghimire (/user/thebinitghimire)</a><br><span>Telegram</span>: <a onclick=\"window.open('https://t.me/InternetHeroBINIT', '_blank')\">@InternetHeroBINIT</a><br><span>Instagram</span>: <a onclick=\"window.open('https://www.instagram.com/WHOISbinit/', '_blank')\">@WHOISbinit</a>",

    "form": "You can submit your message here: <strong><a onclick=\"window.open('https://forms.gle/pkc46VBTRLKKhtWTA', '_blank')\">Google Forms</a></strong>",

    "font": "<strong>Fira Code</strong> <<a onclick=\"window.open('https://fonts.google.com/specimen/Fira+Code', '_blank')\">Find on Google Fonts!</a>>",
    "uname": "BinitOS",
    "uname -a": "BinitOS | WHOISbinit 2.0",
    "hostname": "WHOISbinit.me",
    "pwd": "F:\\web\\WHOISbinit",
    "ls": "<p><strong>Directory:</strong> F:\\web\\WHOISbinit</p><strong>Elements:</strong> assets/, binit.webmanifest, index.html, terminal.html",
    "sudo": "This isn't a UNIX-based Operating System.",
    "cd": "You aren't allowed you to change directories.",
    "rm": "Before running this command, make sure you know that the web front-end can't perform actions in the server."
}

Object.assign(terminalCommands, {
    "main": terminalCommands["about"],
    "who": terminalCommands["about"],

    "get skills": terminalCommands["skills"],
    "get --skills": terminalCommands["skills"],
    "find skills": terminalCommands["skills"],
    "find --skills": terminalCommands["skills"],
    "know skills": terminalCommands["skills"],
    "know --skills": terminalCommands["skills"],
    "your skills": terminalCommands["skills"],
    "my skills": terminalCommands["skills"],

    "what are you studying": terminalCommands["education"],
    "study": terminalCommands["education"],
    "your education": terminalCommands["education"],
    "my education": terminalCommands["education"],
    
    "what are you doing": terminalCommands["career"],
    "current work": terminalCommands["career"],
    "involvement": terminalCommands["career"],
    "your involvement": terminalCommands["career"],
    "my involvement": terminalCommands["career"],

    "see projects": terminalCommands["projects"],
    "find projects": terminalCommands["projects"],
    "find --projects": terminalCommands["projects"],
    "your projects": terminalCommands["projects"],
    "my projects": terminalCommands["projects"],

    "get resume": terminalCommands["resume"],
    "get --resume": terminalCommands["resume"],
    "your resume": terminalCommands["resume"],
    "my resume": terminalCommands["resume"],

    "get font": terminalCommands["font"],
    "get --font": terminalCommands["font"],
    "which font": terminalCommands["font"],
    "which --font": terminalCommands["font"],

    "get email": terminalCommands["email"],
    "get --email": terminalCommands["email"],
    "contact email": terminalCommands["email"],
    "contact --email": terminalCommands["email"],
    "your email": terminalCommands["email"],
    "my email": terminalCommands["email"],

    "get phone": terminalCommands["phone"],
    "get --phone": terminalCommands["phone"],
    "contact phone": terminalCommands["phone"],
    "contact --phone": terminalCommands["phone"],
    "contact number": terminalCommands["phone"],
    "contact --number": terminalCommands["phone"],
    "your phone": terminalCommands["phone"],
    "my phone": terminalCommands["phone"],

    "get social": terminalCommands["social"],
    "get --social": terminalCommands["social"],
    "contact social": terminalCommands["social"],
    "contact --social": terminalCommands["social"],
    "get profile": terminalCommands["social"],
    "get --profile": terminalCommands["social"],
    "contact profile": terminalCommands["social"],
    "contact --profile": terminalCommands["social"],

    "get form": terminalCommands["form"],
    "get --form": terminalCommands["form"],
    "contact form": terminalCommands["form"],
    "contact --form": terminalCommands["form"]
});

const eventListener = () => {
    inputField.addEventListener("keyup", (event) => {
        if(event.keyCode === 13) {
            inputField.setAttribute("readonly", "true");
            keepValue = inputField.value;
            event.preventDefault();
            inputField.disabled = true;
            inputField.setAttribute("value", keepValue);
            inputField.removeAttribute("id");
            if(keepValue.toLowerCase() == "clear" || keepValue.toLowerCase() == "cls") initialSection.innerHTML = initialPrompt;
            else {
                let systemOutput = executeCommand(keepValue.toLowerCase());
                outputField[outputField.length - 1].innerHTML = systemOutput;
                initialSection.innerHTML += "<br />" + initialPrompt;
            }
            inputField = document.querySelector("#userInput");
            outputField = document.querySelectorAll(".systemOutput");
            inputField.focus();
            eventListener();
        } else if(event.keyCode === 38){
            inputField.value = keepValue;
        }
    });
}

eventListener();

document.body.addEventListener('click', () => {
    inputField.focus();
}, true);

const executeCommand = (userInput) => {
    if(userInput == "exit" || userInput == "quit"){
        window.parent.postMessage("closeTerminal", '*');
        return "Now, the Terminal will be closed.";
    } else if(terminalCommands.hasOwnProperty(userInput)){
        return terminalCommands[userInput];
    } else{
        return "The term isn't recognized as the name of a cmdlet, function, script file, or operable program."
    }
}