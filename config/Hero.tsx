import config from '../config/index';

classes Hero {
  constructor() {
    super();
  }

  socialLinks = config.socialLinks(
    "YouTube", "https://www.youtube.com",
    "Facebook", "https://www.facebook.com",
    "Instagram", "https://www.instagram.com",
  );
}

export default Hero;