import React from 'react';

const allList = [
    { id: 0, text: 'portfolio #0' },
    { id: 1, text: 'portfolio #1' }
];


export const Home = () => (
    <h2>Home</h2>
);

export const About = ({ children }) => (
    <div>
        <h2>About</h2>
        <div>{children}</div>
    </div>
);

export const Name = () => (
    <h3>gomugom</h3>
);

export const Portfolio = ({
    routeParams: { id }
}) => {
    const filteredList = id ? allList.filter(v=> v.id == id) : allList;
    const renderList = filteredList.map(v=>
        <li key={v.id}>{v.text}</li>
    );
    return (
        <div>
            <h2>Portfolio</h2>
            <ul>{renderList}</ul>
        </div>
    );
}
