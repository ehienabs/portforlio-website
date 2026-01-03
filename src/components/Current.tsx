
import React from "react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Community = () => {
  return (
    <section id="community" className="py-16 sm:py-24 bg-secondary/30">
      <div className="section-container bg-gray-100">
        <h2 className="section-title">What I Am Working On</h2>
        <p className="section-subtitle">
          Building infrastructure that transforms public knowledge into AI-ready datasets
        </p>
        
        <div className="grid gap-8 md:grid-cols-3 mt-12">
          <Card className="overflow-hidden h-full border-2 hover:border-wikimedia hover:shadow-md transition-all">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-wikimedia rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold">AI-Ready Knowledge Infrastructure</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I design and operate large-scale data pipelines that convert Wikipedia into structured, versioned, and reproducible datasets. These datasets are used across AI training pipelines, retrieval-augmented generation systems, and evaluation workflows.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline" className="h-full border-2 hover:border-wikimedia hover:shadow-md">Data Pipelines</Badge>
                <Badge variant="outline" className="h-full border-2 hover:border-wikimedia hover:shadow-md">AI Training</Badge>
                <Badge variant="outline" className="h-full border-2 hover:border-wikimedia hover:shadow-md">RAG Systems</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden h-full border-2 hover:border-wikimedia hover:shadow-md transition-all">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-wikimedia rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Data Quality & Observability</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                My work emphasizes making dataset limitations visible: coverage gaps, schema drift, update lag, and cross-language inconsistencies. I build metrics and observability systems that help downstream users understand not just what data they are using, but how reliable it is.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline" className="h-full border-2 hover:border-wikimedia hover:shadow-md">Data Quality</Badge>
                <Badge variant="outline" className="h-full border-2 hover:border-wikimedia hover:shadow-md">Metrics</Badge>
                <Badge variant="outline" className="h-full border-2 hover:border-wikimedia hover:shadow-md">Observability</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden h-full border-2 hover:border-wikimedia hover:shadow-md transition-all">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-wikimedia rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                  <path d="m2 12 5 3-2 4.5"/>
                  <path d="M17 3.34a10 10 0 0 1 0 17.32"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Responsible Reuse of Public Data</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                As public knowledge becomes a core input to AI systems, infrastructure choices increasingly shape bias, representation, and accountability. I am interested in how we design systems that preserve provenance and enable responsible reuse at scale.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline" className="h-full border-2 hover:border-wikimedia hover:shadow-md">Provenance</Badge>
                <Badge variant="outline" className="h-full border-2 hover:border-wikimedia hover:shadow-md">Ethics</Badge>
                <Badge variant="outline" className="h-full border-2 hover:border-wikimedia hover:shadow-md">Transparency</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Selected Work Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-wikimedia mb-8 text-center">Selected Works</h3>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            <Card className="overflow-hidden h-full border-2 hover:border-wikimedia hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold">Structured Content</h3>
                <p className="text-sm text-muted-foreground">Wikimedia Foundation</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A high-throughput data distribution system that transforms Wikipedia into machine-readable snapshots for AI training, search, and evaluation. Designed with strong guarantees around consistency, freshness, and reproducibility across languages.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-wikimedia text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-wikimedia-dark transition-colors" asChild>
                  <a href="https://enterprise.wikimedia.com/blog/build-a-knowledge-panel/" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden h-full border-2 hover:border-wikimedia hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold">Developer SDKs for Data APIs</h3>
                <p className="text-sm text-muted-foreground">Wikimedia Foundation</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tools that lower the barrier for researchers and engineers integrating large public datasets into automated pipelines and batch workflows.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-wikimedia text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-wikimedia-dark transition-colors" asChild>
                  <a href="https://github.com/wikimedia-enterprise" target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden h-full border-2 hover:border-wikimedia hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold">Dataset Integrity & Metrics Frameworks</h3>
                <p className="text-sm text-muted-foreground">Wikimedia Foundation</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Internal systems for measuring data coverage, freshness, and consistency across large, multilingual datasets.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-wikimedia text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-wikimedia-dark transition-colors" asChild>
                  <a href="https://enterprise.wikimedia.com/blog/parsed-references-with-scoring-models/" target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
