import React from 'react';
const socialLinks = [
  { platform: "Facebook", url: "https://www.facebook.com/username" },
  { platform: "Twitter", url: "https://www.twitter.com/username" },
  { platform: "Discord", url: "https://discord.com/" },
+ { platform: "YouTube", url: "https://www.youtube.com/@username" },
];
defaultHeroSocialLinks = () => {
  return socialLinks.map((socialLink, index) => (
    React.createElement('a', { key: `Hero-Social-Link-${index}`, href: socialLink.url }, socialLink.platform)
  ))}
