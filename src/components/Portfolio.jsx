import React from "react";
import portfolio from "../Data/Portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./title";

function Portfolio(){
    return(
        <div>
            <Title>Projects</Title>
            <div className="flex flex-col md:flex-row items-center justify-center pt-10 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {portfolio.map(project => (
                        <PortfolioItem                        
                        imgUrl={project.imgUrl}
                        title={project.title}
                        description={project.description}
                        stack={project.stack}
                        link={project.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;