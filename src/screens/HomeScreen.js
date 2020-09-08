import React from 'react';
import ProjectArray from '../components/ProjectArray';
import SearchBox from '../components/SearchBox';
import HomeHeader from '../components/HomeHeader'


function HomeScreen() {
  
  return (
    <div>
      <HomeHeader />
      <h1>Project Manager</h1>
      <SearchBox />
      <ProjectArray />
    </div>
  );
}

export default HomeScreen;
