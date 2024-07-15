const timeline = () => {
    const template = ({isLeft, title, info}) => `<div class="container ${isLeft ? 'left' : 'right'}">
    <div class="content">
        <h3>${title}</h3>
        <p>${info}</p>
    </div>
</div>`;

const data = [
    {
        title: "Programming and robotics teacher",
        info: "March 2024 • iCode • Dallas, TX"
    },
    {
        title: "Data Annotator",
        info: "October 2021 • Moveworks • Mountain View, CA"
    },
    {
        title: "Customer Support React Contractor",
        info: "March 2021 • LifeOmic • SLC, UT"
    },
    {
        title: "React Developer Intern",
        info: "May 2020 • MX • Lehi, UT"
    },
    {
        title: "React Developer Intern",
        info: "September 2019 • JustUtahCoders • SLC, UT"
    },
    {
        title: "WordPress Developer",
        info: "February 2017 • Remote"
    },
];

const html = data.map((row, i) => template({isLeft: i%2===0, ...row})).join('\n');

console.log(html);

document.querySelector('#timeline').innerHTML = html;
}

timeline();