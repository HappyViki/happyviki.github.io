const template = (e) => `<div class="d-flex flex-column flex-md-row justify-content-between mb-5">
<div class="flex-grow-1">
    <h3 class="mb-0">${e.title}</h3>
    <div class="toggle-details" class="subheading">${e.company}</div>
    <p>${e.skills.join(", ")}</p>
    <ul class="toggle-details">${e.list.map(item=>`<li>${item}</li>`).join('')}</ul>
</div>
<div class="flex-shrink-0"><span class="text-primary">${e.start} - ${e.end}</span></div>
</div>`;

const data = [
    {
        title: "Data Annotator",
        company: "Moveworks",
        location: "Remote",
        start: "10/2021",
        end: "4/2023",
        skills: [
            "JavaScript",
            "Google Sheets",
        ],
        list: [
            "Automated annotation tasks with JavaScript Bookmarklets.",
            "Manipulated data in Google Sheets with formulas and functions.",
        ]
    },
    {
        title: "Front End Engineer (React)",
        company: "LifeOmic",
        location: "Remote",
        start: "3/2021",
        end: "6/2021",
        skills: [
            "JavaScript",
            "React",
            "GraphQL",
            "UX/UI Design",
        ],
        list: [
            "Built an internal customer support app with Material UI, React, Axios, Apollo, and GraphQL.",
            "Contributed to React Native app design 10+ times at weekly UX (User Experience) meetings.",
        ]
    },
    {
        title: "Front End Engineer (React)",
        company: "MX",
        location: "Remote",
        start: "5/2020",
        end: "9/2020",
        skills: [
            "CSS Flexbox",
            "JavaScript",
            "React",
            "React Native",
            "Redux-Observable",
            "Jest",
        ],
        list: [
            "Pair-programmed on complicated issues.",
            "Communicated through Zoom and Slack with team members for code review and clarification.",
            "Fixed 50+ bugs including CSS, JavaScript, ReactJS, and Redux-Observable state.",
            "Tested releases cross-platform on Firefox, Chrome, Safari, Internet Explorer 11 (with VirtualBox), and mobile versions.",
            "Lead 3+ meetings with 2-5 coworkers.",
            "Prepared 5+ designs for complex bug fix meetings with other developers.",
        ]
    },
    {
        title: "Full Stack Developer (React)",
        company: "Just Utah Coders",
        location: "Salt Lake City, Utah",
        start: "10/2019",
        end: "2/2020",
        skills: [
            "JavaScript",
            "React",
            "SQL",
            "RegEx"
        ],
        list: [
            "Modified existing React app with team.",
            "Collaborated on structure of data parser using JSON from PDF docket.",
            "Built developer tool for junior developers to use with PDF parser.",
            "Added pages with complex user data SQL queries."
        ]
    },
    {
        title: "Full Stack WordPress Developer",
        company: "J.F. Web Development",
        location: "Remote",
        start: "2/2017",
        end: "1/2021",
        skills: [
            "PHP",
            "CSS",
            "JavaScript",
            "jQuery",
            "MySQL",
            "WordPress Child Theme",
            "WordPress Plugin"
        ],
        list: [
            "Collaborated remotely with the manager through Skype and Gmail 3 times a month.",
            "Developed 5+ WordPress/WooCommerce sites with Beaver Builder page builder and CSS.",
            "Modified 10+ websites with HTML, PHP, CSS, JavaScript, and jQuery to comply with client specifications.",
            "Used WordPress hooks, plugins, PHP, and JavaScript to enhance User Experience.",
            "Wrote 10+ detailed progress reports on new feature implementation.",
            "Transferred 20+ domain names between HostGator, BlueHost, 1&1, and GoDaddy."
        ]
    }
];

experiences.innerHTML = data.map(template).join('');

toggleDetails.addEventListener("click", () => {
    experiences.classList.toggle("hide-details");
})