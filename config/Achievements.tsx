import { Certification, Hackathon, OSC } from "@/types/Achievements";

export const hackathons: Hackathon[] = [
  {
    title: "SJBIT Hackathon AXIOM 2025",
    image: "/hackathons/h1.jpeg",
    description: "",
    position: 1,
    prize: "50000",
    relatedPost:
      "https://www.linkedin.com/posts/ritog09_hackathon-innovation-healthcare-activity-7394777214476750848-xI-K?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOqC18B0Ra01Zo8HryK10CKGm6VFJf4Y9A",
    relatedBlogSlug: "/blogs/sjbit-hackathon",
    time: "",
  },
  {
    title: "Dr.TTIT Hackathon Nexathon 2025",
    image: "/hackathons/h2.jpeg",
    description: "",
    position: 1,
    prize: "20000",
    relatedPost:
      "https://www.linkedin.com/posts/ritog09_this-is-the-3rd-hackathon-win-in-november-activity-7402425867500716032-DSUJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOqC18B0Ra01Zo8HryK10CKGm6VFJf4Y9A",
    relatedBlogSlug: "/blogs/ttit-hackathon",
    time: "",
  },
  {
    title: "Global Ideathon 2025 ",
    image: "/hackathons/h3.jpeg",
    description: "",
    position: 2,
    prize: "15000",
    relatedPost:
      "https://www.linkedin.com/posts/ritog09_this-is-the-3rd-hackathon-win-in-november-activity-7402425867500716032-DSUJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOqC18B0Ra01Zo8HryK10CKGm6VFJf4Y9A",
    relatedBlogSlug: "/blogs/global-ideathon",
    time: "",
  },
];

export const osc: OSC[] = [
  {
    title:
      "improvement: Important Links for Developers animation improvement (fixes #116)",
    organization: "sugarlabs",
    issueLink: "https://github.com/sugarlabs/www-v2/issues/116",
    prLink: "https://github.com/sugarlabs/www-v2/pull/124",
    time: "Apr 23, 2025",
    status: "merged",
  },
  {
    title:
      "bug fix: Show proper validation error during bed stay completion (fixes: #11998)",
    organization: "ohcnetwork",
    issueLink: "https://github.com/ohcnetwork/care_fe/issues/11998",
    prLink: "https://github.com/ohcnetwork/care_fe/pull/12002",
    time: "Apr 30, 2025",
    status: "merged",
  },
  {
    title:
    
      "How do we present errors when the error is that the schema(s) passed?",
    organization: "hyperjump-io",
    issueLink: "https://github.com/hyperjump-io/json-schema-errors/issues/120",
    prLink: "https://github.com/hyperjump-io/json-schema-errors/pull/159",
    time: "",
    status: "in-progress",
  },
  {
    title:
      "Redesign the metaschema tab to better reflect its stack trace nature",
    organization: "sourcemeta",
    issueLink: "https://github.com/sourcemeta/studio/issues/150",
    prLink: "https://github.com/sourcemeta/studio/pull/158",
    time: "Feb 18, 2026",
    status: "merged",
  },
  {
    title: "Better distinguish error categories using different exit codes",
    organization: "sourcemeta",
    issueLink: "https://github.com/sourcemeta/studio/issues/153",
    prLink: "https://github.com/sourcemeta/jsonschema/pull/648",
    time: "Feb 24, 2026",
    status: "merged",
  },
  {
    title: "fix#140: ordering of linting errors by source location",
    organization: "sourcemeta",
    issueLink: "https://github.com/sourcemeta/studio/issues/140",
    prLink: "https://github.com/sourcemeta/studio/pull/141",
    time: "Jan 17, 2026",
    status: "in-progress",
  },
  {
    title: "Fix tools filter checkbox state persistence on refresh",
    organization: "json-schema-org",
    issueLink: "https://github.com/json-schema-org/website/issues/2033",
    prLink: "https://github.com/json-schema-org/website/pull/2058",
    time: "Jan 20, 2026",
    status: "merged",
  },
  {
    title: "feat: add pagination to blog page (10 posts per page)",
    organization: "json-schema-org",
    issueLink: "https://github.com/json-schema-org/website/issues/1946",
    prLink: "https://github.com/json-schema-org/website/pull/1968",
    time: "Dec 8, 2025",
    status: "merged",
  },
  {
    title: "fix#86: search state reset done",
    organization: "ioflux-org",
    issueLink: "https://github.com/ioflux-org/studio-json-schema/issues/86",
    prLink: "https://github.com/ioflux-org/studio-json-schema/pull/92",
    time: "Feb 22, 2026",
    status: "merged",
  },
  {
    title: "Feat: Export visualization as image",
    organization: "ioflux-org",
    issueLink: "https://github.com/ioflux-org/studio-json-schema/issues/51",
    prLink: "",
    time: "Feb 7, 2026",
    status: "in-progress",
  },
];

export const certifications: Certification[] = [];
