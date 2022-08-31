import React, { useEffect, useState } from "react";
import Footer from "../../core/Footer/Footer";
import Loader from "../../core/Loader/Loader";
import "./Repositories.scss";
import {
  RiGitBranchLine,
  RiGitRepositoryFill,
  RiUserFollowLine,
} from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import bg from "../../assets/sprinkle.svg";

const Repositories = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState(null);
  const langs = {
    "c#": "#af36ff",
    scss: "#ff36c6",
    html: "#ff5917",
    javascript: "#ffdf6b",
    typescript: "#0096ed",
    css: "#00fbff",
    null: "#ff00a2",
  };

  useEffect(() => {
    (async () => {
      // Retrieve and set repository data (after filters/sorts)
      let repoData = await fetch("https://api.github.com/users/bforbiggy/repos")
        .then(response => response.json())
        .then(response => response
          .filter((item) => {
            return !item.fork;
          })
          .sort((a, b) => {
            return b.stargazers_count - a.stargazers_count;
          }))
      setRepos(repoData);

      // Retrieve and set user data
      let userData = await fetch("https://api.github.com/users/bforbiggy").then(
        (response) => response.json()
      );
      setUser(userData);

      setIsFetching(false);
    })();
  }, []);

  const getLanguageColor = (language) => {
    language = language ?? "null";
    return langs[language?.toLowerCase()] ?? "#FFF";
  };

  return (
    <div
      className="repositories-container"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <main>
        {isFetching ? <Loader local={true} /> : (<>
          <div className="user">
            {user && (<>
              <div className="avatar">
                <img src="https://github.com/bforbiggy.png" alt="Biggy's pfp" />
              </div>
              <div className="user-info">
                <div className="name">🎴 {user.login} 🎴</div>
                <div className="bio">{user.bio}</div>
                <div className="field">
                  <div className="key">
                    <RiGitRepositoryFill />
                    Repositories:~ ${" "}
                  </div>
                  <div className="value">{user.public_repos}</div>
                </div>
                <div className="field">
                  <div className="key">
                    <RiUserFollowLine />
                    Followers:~ ${" "}
                  </div>
                  <div className="value">{user.followers}</div>
                </div>
              </div>
            </>
            )}
          </div>

          <div className="repositories">
            <div className="title">bforbiggy@Repositories:~ $</div>
            {repos?.map((data) => (
              <a
                href={data.html_url}
                target="_blank" rel="noreferrer"
                className="repository-container"
              >
                <div className="name">
                  <RiGitBranchLine /> {data.name}
                </div>
                <div className="description">{data.description}</div>
                <div className="info-container">
                  <div className="item">
                    <div className="key">Main Language</div>
                    <div
                      className="value"
                      style={{
                        color: getLanguageColor(data.language),
                        fontSize: "1.1em",
                      }}
                    >
                      {data.language ?? "null"}
                    </div>
                  </div>

                  <div className="item">
                    <div className="key">Created On</div>
                    <div className="value">
                      {new Date(data.created_at).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="item">
                    <div className="key">
                      <FaStar />
                    </div>
                    <div className="value">{data.stargazers_count}</div>
                  </div>
                </div>
              </a>
            ))
            }
          </div>
        </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Repositories;
