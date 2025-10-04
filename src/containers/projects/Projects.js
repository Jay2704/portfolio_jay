import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => (
    <div className="main" id="opensource">
      <h1 className="project-title">Open Source Projects</h1>
      <div className="error-message">
        <p>Unable to load projects at this time. Please try again later.</p>
        <Button
          text={"View on GitHub"}
          className="project-button"
          href={socialMediaLinks.github}
          newTab={true}
        />
      </div>
    </div>
  );
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // todo: remove useContex because is not supported
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    const getRepoData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch("/profile.json");
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Validate the data structure
        if (!data || !data.data || !data.data.user || !data.data.user.pinnedItems || !data.data.user.pinnedItems.edges) {
          throw new Error("Invalid data structure received from GitHub API");
        }
        
        const repoData = data.data.user.pinnedItems.edges;
        
        // Filter out any null/undefined items
        const validRepos = repoData.filter(item => item && item.node && item.node.id);
        
        if (validRepos.length === 0) {
          throw new Error("No valid repositories found");
        }
        
        setrepoFunction(validRepos);
      } catch (error) {
        console.error("Error fetching repository data:", error);
        setError(error.message);
        setrepoFunction([]);
      } finally {
        setLoading(false);
      }
    };
    
    getRepoData();
  }, []);

  function setrepoFunction(array) {
    setrepo(array);
  }

  // Show loading state
  if (loading) {
    return <Loading />;
  }

  // Show error state
  if (error || !openSource.display) {
    return <FailedLoading />;
  }

  // Show projects if we have valid data
  if (Array.isArray(repo) && repo.length > 0) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              // Additional safety check for each repo item
              if (!v || !v.node || !v.node.id) {
                console.warn(`Invalid repository data at index ${i}:`, v);
                return null;
              }
              
              try {
                return (
                  <GithubRepoCard 
                    repo={v} 
                    key={v.node.id} 
                    isDark={isDark} 
                  />
                );
              } catch (componentError) {
                console.error(`Error rendering repository card for ${v.node.name}:`, componentError);
                return null;
              }
            }).filter(Boolean)} {/* Remove null entries */}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  }

  // Fallback for empty or invalid data
  return <FailedLoading />;
}
