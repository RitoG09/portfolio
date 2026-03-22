// Social links configuration updated for YouTube channel
import socialLinks from '../../../config/social-links.yaml';

const heroSection = () => {
  return (
    <div className='hero-container'>
      <h1>Hi, I'm Rito G.</h1>
      <p>A software engineer with a passion for learning and building.</p>
      <div className='social-links'>
        {socialLinks.linkedin}
        {socialLinks.github}
        {socialLinks.twitter}
        {socialLinks.youtube} // New YouTube channel link added
      </div>
    </div>
  );
}

export default heroSection;
