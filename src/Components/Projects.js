import React, { Component } from 'react';

class Projects extends Component {
  render() {
    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        return <div key={projects.title}><h3>{projects.title}</h3>
            <p className="info"><em className="date">{projects.time}</em></p>
            <p>{projects.description}</p>
        </div>
      })

    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Projects</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {projects}
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default Projects;
