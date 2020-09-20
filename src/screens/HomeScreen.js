import React from 'react';
import ProjectArray from '../components/ProjectArray';
import SearchBox from '../components/SearchBox';
import HomeHeader from '../components/HomeHeader'
import AddProject from '../components/CreateProject/Container'



const HomeScreen=()=> {


  return (
    <div className="home">
      <HomeHeader />
      <h1 className="home-title">Project Manager</h1>
      <SearchBox />
      <ProjectArray />
    </div>
  );
}

export default HomeScreen;


/*
 {
        active ? <CreateProject/> :
          <div>
            <ProjectArray />
              <div onClick={handleClick}>
                <IconButton className={classes.largeButton} aria-label="Delete">
                  <AddBoxIcon className={classes.largeIcon} />
                </IconButton>
              </div>
          </div>
        }



         <div onClick={handleClick}>
        <IconButton className={classes.largeButton} aria-label="Delete">
          <AddBoxIcon className={classes.largeIcon} />
        </IconButton>
      </div>
*/