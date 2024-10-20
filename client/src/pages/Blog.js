import React from 'react';

function Blog() {
  return (
    <div className="blog">
      <h1>Latest Posts</h1>
      <p>Stay up to date with the latest trends in technology and web design. Our blog features tips, tutorials, and product reviews to help you succeed.</p>
      
      <div className="blog-posts">
        <div className="post">
          <h2>The Best Laptops for Designers in 2024</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <a href="#">Read More</a>
        </div>
        <div className="post">
          <h2>Top 5 Web Design Trends to Watch</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <a href="#">Read More</a>
        </div>
        <div className="post">
          <h2>How to Optimize Your Website for SEO</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <a href="#">Read More</a>
        </div>
      </div>
      
      <div className="newsletter-signup">
        <h3>Subscribe to Our Newsletter</h3>
        <p>Get the latest news and exclusive offers delivered straight to your inbox.</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Blog;