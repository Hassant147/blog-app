import React from 'react';
import './App.css';
import Header from './Header';
import TwoColumnLayout from './TwoColumnLayout';
import Ttopics from './TrendingTopic';
import { InnovationTechSection } from './InnovTech';
import FeaturedBlogs from './FeaturedBlog';
import BlogSection from './threeColumn';
import InstagramSection from './instagram';
import Footersec from './Footer';

function App() {
    return ( <
        div className = "App" >
        <
        Header / >
        <
        TwoColumnLayout / >
        <
        Ttopics / >
        <
        InnovationTechSection / >
        <
        FeaturedBlogs / >
        <
        BlogSection / >
        <
        InstagramSection / >
        <
        Footersec / >
        <
        /div>
    );
}

export default App;