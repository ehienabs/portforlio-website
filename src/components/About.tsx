
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="bg-secondary/50 py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title text-wikimedia">About Me</h2>
        <p className="section-subtitle">
          Building AI-ready knowledge infrastructure and scalable data systems.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-12">
          <div className="order-2 md:order-1 animate-fade-in">
            <h3 className="text-2xl font-bold text-wikimedia mb-4">Here's Me!</h3>
            <div className="space-y-4 text-base md:text-lg">
              <p>
                I design and operate scalable systems for delivering large volumes of data through APIs, with a focus on resilience, observability, and developer experience. My work spans both enterprise and small-scale users, from supporting open-source software with over a billion downloads to building developer-friendly data platforms and writing clear, actionable technical documentation.
              </p>
              <p>
                I work on AI-ready knowledge infrastructure, designing large-scale data pipelines that transform human-curated knowledge into structured, versioned, and reproducible datasets. These datasets are used across AI training pipelines, retrieval-augmented generation systems, and evaluation workflows.
              </p>
              <p>
                A central theme in my work is data quality. I focus on making dataset limitations visible. These limitations include coverage gaps, schema drift, and cross-language inconsistencies. I build observability and metrics systems that support transparency and responsible reuse of public data in AI systems.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-3 gap-4">
              <a 
                href="https://www.linkedin.com/in/ehienabs" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block transition-transform hover:scale-105"
              >
                <Card className="p-4 animate-fade-in h-full border-2 hover:border-wikimedia hover:shadow-md transition-all" style={{animationDelay: "0.1s"}}>
                  <CardContent className="p-0 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-wikimedia rounded-full flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
                      </svg>
                    </div>
                    <h3 className="font-bold">Career</h3>
                    <p className="text-sm text-muted-foreground">Professional Experience</p>
                    <Badge variant="outline" className="mt-2 border-2 hover:border-wikimedia hover:shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                      Visit
                    </Badge>
                  </CardContent>
                </Card>
              </a>
              
              <a 
                href="#community" 
                className="block transition-transform hover:scale-105"
              >
                <Card className="p-4 animate-fade-in h-full border-2 hover:border-wikimedia hover:shadow-md" style={{animationDelay: "0.2s"}}>
                  <CardContent className="p-0 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-wikimedia rounded-full flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                        <line x1="12" y1="22.08" x2="12" y2="12"/>
                      </svg>
                    </div>
                    <h3 className="font-bold">What I am Working on</h3>
                    <p className="text-sm text-muted-foreground">Current Projects</p>
                    <Badge variant="outline" className="mt-2 border-2 hover:border-wikimedia hover:shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                      View work
                    </Badge>
                  </CardContent>
                </Card>
              </a>
              
              <a 
                href="#skills" 
                className="block transition-transform hover:scale-105"
              >
                <Card className="p-4 animate-fade-in h-full border-2 hover:border-wikimedia hover:shadow-md" style={{animationDelay: "0.3s"}}>
                  <CardContent className="p-0 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-wikimedia rounded-full flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m18 16 4-4-4-4"/>
                        <path d="m6 8-4 4 4 4"/>
                        <path d="m14.5 4-5 16"/>
                      </svg>
                    </div>
                    <h3 className="font-bold">Technical Skills</h3>
                    <p className="text-sm text-muted-foreground">Technologies & Tools</p>
                    <Badge variant="outline" className="mt-2 border-2 hover:border-wikimedia hover:shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                      View skills
                    </Badge>
                  </CardContent>
                </Card>
              </a>
              
              <a 
                href="#publications" 
                className="block transition-transform hover:scale-105"
              >
                <Card className="p-4 animate-fade-in h-full border-2 hover:border-wikimedia hover:shadow-md" style={{animationDelay: "0.4s"}}>
                  <CardContent className="p-0 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-wikimedia rounded-full flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                      </svg>
                    </div>
                    <h3 className="font-bold">Publications</h3>
                    <p className="text-sm text-muted-foreground">My Published Writings</p>
                    <Badge variant="outline" className="mt-2 border-2 hover:border-wikimedia hover:shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                      Read articles
                    </Badge>
                  </CardContent>
                </Card>
              </a>
              
              <a 
                href="#speaking" 
                className="block transition-transform hover:scale-105"
              >
                <Card className="p-4 animate-fade-in h-full border-2 hover:border-wikimedia hover:shadow-md" style={{animationDelay: "0.5s"}}>
                  <CardContent className="p-0 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-wikimedia rounded-full flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20h9"></path>
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                      </svg>
                    </div>
                    <h3 className="font-bold">Media Appearances</h3>
                    <p className="text-sm text-muted-foreground">Talks & Interviews</p>
                    <Badge variant="outline" className="mt-2 border-2 hover:border-wikimedia hover:shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                      View media
                    </Badge>
                  </CardContent>
                </Card>
              </a>
              
              <a 
                href="#projects" 
                className="block transition-transform hover:scale-105"
              >
                <Card className="p-4 animate-fade-in h-full border-2 hover:border-wikimedia hover:shadow-md" style={{animationDelay: "0.6s"}}>
                  <CardContent className="p-0 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-wikimedia rounded-full flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                        <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                        <path d="M10 9H8"/>
                        <path d="M16 13H8"/>
                        <path d="M16 17H8"/>
                      </svg>
                    </div>
                    <h3 className="font-bold">Featured Projects</h3>
                    <p className="text-sm text-muted-foreground">Selected Works</p>
                    <Badge variant="outline" className="mt-2 border-2 hover:border-wikimedia hover:shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                      View projects
                    </Badge>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;