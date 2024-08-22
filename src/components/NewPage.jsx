import React from 'react';
import '../style/NewPage.css';
import Image from '../assets/DSC_0888.JPG'; // Replace with your own images

function NewPage() {
  return (
    <div className="new-page">
      <div className="article-card">
        <img className="article-image" src={Image} alt="Article" />
        <div className="article-badge">NOU</div>
        <div className="article-content">
          <h2 className="article-title">Article Title</h2>
          <p className="article-description">
            This is a description of the article. It provides a brief summary of the article's content.
          </p>
        </div>
      </div>
      <div className="article-card">
        <img className="article-image" src={Image} alt="Article" />
        <div className="article-content">
          <h2 className="article-title">Article Title</h2>
          <p className="article-description">
            This is a description of the article. It provides a brief summary of the article's content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewPage;




