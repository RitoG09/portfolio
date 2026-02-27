export interface Hackathon {
  title: string;
  image: string;
  description: string;
  position: number;
  prize: string;
  relatedPost: string;
  relatedBlogSlug: string;
  time: string;
}

export interface OSC {
  title: string;
  organization: string;
  issueLink: string;
  prLink: string;
  time: string;
  status: "in-progress" | "merged";
}

export interface Certification {
  title: string;
  description: string;
  link: string;
  image: string;
  time: string;
}
