import React from 'react';

import Header from './components/header';
import Layout from './components/layout';
import Footer from './components/footer';

import './App.css';

const App: React.FC = () => {
    return (
        <div className="page">
            <Header/>
            <Layout/>
            <Footer/>
        </div>
    );
};

export default App;
