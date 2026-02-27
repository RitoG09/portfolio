import AchievementCard from "./AchievementCard";
import { osc } from "@/config/Achievements";

function GitMergeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M6 21V9a9 9 0 0 0 9 9" />
    </svg>
  );
}

function GitPRIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M13 6h3a2 2 0 0 1 2 2v7" />
      <line x1="6" y1="9" x2="6" y2="21" />
    </svg>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function OpenSourceTab() {
  const mergedCount = osc.filter((item) => item.status === "merged").length;
  const inProgressCount = osc.filter(
    (item) => item.status === "in-progress",
  ).length;

  return (
    <AchievementCard className="p-0! overflow-visible!">
      {/* Stats header */}
      <div className="px-6 pt-6 md:px-10 md:pt-10 pb-5 border-b border-border/50">
        <div className="flex items-center gap-6 flex-wrap">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-purple-500/10">
              <GitMergeIcon className="w-4.5 h-4.5 text-purple-500" />
            </div>
            <div>
              <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-medium">
                Merged
              </p>
              <p className="text-xl font-bold leading-tight">{mergedCount}</p>
            </div>
          </div>
          <div className="w-px h-10 bg-border/60 hidden sm:block" />
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-emerald-500/10">
              <GitPRIcon className="w-4.5 h-4.5 text-emerald-500" />
            </div>
            <div>
              <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-medium">
                In Progress
              </p>
              <p className="text-xl font-bold leading-tight">
                {inProgressCount}
              </p>
            </div>
          </div>
          <div className="w-px h-10 bg-border/60 hidden sm:block" />
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10">
              <span className="text-sm font-bold text-primary">
                {osc.length}
              </span>
            </div>
            <div>
              <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-medium">
                Total
              </p>
              <p className="text-xl font-bold leading-tight">PRs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contribution list */}
      <div className="px-6 py-5 md:px-10 md:py-8 space-y-3">
        {osc.map((item, idx) => (
          <div
            key={idx}
            className="group relative rounded-xl border border-border/50 bg-muted/20 p-4 md:p-5 transition-all duration-300 hover:border-border hover:bg-muted/40 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex items-start gap-4">
              {/* Status icon */}
              <div className="mt-0.5 shrink-0">
                {item.status === "merged" ? (
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/10 ring-1 ring-purple-500/25 transition-all duration-300 group-hover:bg-purple-500/15 group-hover:ring-purple-500/40">
                    <GitMergeIcon className="w-5 h-5 text-purple-500" />
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/25 transition-all duration-300 group-hover:bg-emerald-500/15 group-hover:ring-emerald-500/40">
                    <GitPRIcon className="w-5 h-5 text-emerald-500" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Badges row */}
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  {/* Organization badge */}
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-primary/8 text-primary text-xs font-semibold tracking-wide border border-primary/10">
                    {item.organization}
                  </span>

                  {/* Status badge */}
                  {item.status === "merged" ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-500 text-xs font-medium border border-purple-500/15">
                      <GitMergeIcon className="w-3 h-3" />
                      Merged
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-500 text-xs font-medium border border-emerald-500/15">
                      <GitPRIcon className="w-3 h-3" />
                      Open
                    </span>
                  )}

                  {/* Time */}
                  {item.time && (
                    <span className="text-[11px] text-muted-foreground font-medium tracking-wide">
                      {item.time}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-sm md:text-[15px] font-medium leading-snug text-foreground/90 group-hover:text-foreground transition-colors duration-200 line-clamp-2">
                  {item.title || "Open Source Contribution"}
                </h3>

                {/* Links */}
                <div className="flex items-center gap-4 mt-3">
                  {item.issueLink && (
                    <a
                      href={item.issueLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-200 group/link"
                    >
                      <ExternalLinkIcon className="w-3.5 h-3.5" />
                      <span className="group-hover/link:underline underline-offset-4">
                        View Issue
                      </span>
                    </a>
                  )}
                  {item.prLink && (
                    <a
                      href={item.prLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-200 group/link"
                    >
                      <ExternalLinkIcon className="w-3.5 h-3.5" />
                      <span className="group-hover/link:underline underline-offset-4">
                        View PR
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AchievementCard>
  );
}
