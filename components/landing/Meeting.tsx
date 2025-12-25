"use client";

import { meetingConfig } from "@/config/Meeting";
import { useHapticFeedback } from "@/hooks/use-haptic-feedback";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import Container from "../common/Container";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import Image from "next/image";
import Lanyard from "../3d/Lanyard";

export interface MeetingProps {
  pfp?: string;
  profileAlt?: string;
  linkText?: string;
  calLink?: string;
  preText?: string;
}

export default function Meeting({
  pfp = meetingConfig.profileImage,
  profileAlt = meetingConfig.profileAlt,
  linkText = meetingConfig.linkText,
  calLink = meetingConfig.calLink,
  preText = meetingConfig.preText,
}: MeetingProps) {
  const { triggerHaptic, isMobile } = useHapticFeedback();
  const [showCalPopup, setShowCalPopup] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "lets-talk" });
      if (cal) {
        cal("on", {
          action: "bookingSuccessful",
          callback: () => {
            setShowCalPopup(false);
          },
        });
      }
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  const handleButtonClick = () => {
    if (isMobile()) {
      triggerHaptic("medium");
    }
    setShowCalPopup(true);
  };
  return (
    <>
      <Container className="mt-20 border border-dashed dark:border-white/10 border-black/20 py-8 rounded-md flex flex-col md:flex-row items-center justify-between gap-8">
        {/* 3D Lanyard */}
        <div className="w-full md:w-[60%] h-60 md:h-75">
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </div>
        <div className="sm:px-12 px-6 mt-6 pb-8 sm:flex sm:justify-between sm:items-center w-full flex-col">
          <p className="opacity-50 text-base md:text-xl mb-4 sm:mb-3 text-center">
            {preText}
          </p>
          <div className="w-full sm:w-auto mt-4 sm:mt-0 flex justify-center sm:justify-end">
            <div
              className="inline-flex items-center text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md shadow-[0_0_5px_rgba(0,0,0,0.1)] dark:shadow-[0_0_5px_rgba(255,255,255,0.1)] self-end text-black dark:text-white cursor-pointer transition-all group"
              onClick={handleButtonClick}
            >
              <div className="flex items-center gap-2 group-hover:gap-8 transition-all duration-300 relative z-20">
                <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    alt={profileAlt}
                    width={20}
                    height={20}
                    className="w-full h-full object-cover"
                    src={pfp}
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="flex items-center gap-0 absolute left-[24px] transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3 h-3"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  <div className="w-5 h-5 rounded-full bg-black/10 dark:bg-white/10  flex items-center justify-center text-[8px] ml-1 mr-2">
                    You
                  </div>
                </div>
                <span className="whitespace-nowrap relative block text-sm font-bold ml-0 group-hover:ml-4 transition-all duration-300">
                  {linkText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Cal.com Dialog */}
      <Dialog open={showCalPopup} onOpenChange={setShowCalPopup}>
        <DialogContent className="max-w-[calc(100vw-2rem)] sm:max-w-[calc(100vw-4rem)] md:max-w-4xl max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle>Book a Meeting</DialogTitle>
            <DialogDescription>
              Schedule a time to connect and discuss opportunities
            </DialogDescription>
          </DialogHeader>

          <div className="overflow-y-auto max-h-[calc(90vh-220px)] rounded-lg">
            {/* <Cal
              calLink={calLink}
              config={{
                name: "Portfolio Visitor",
                email: "",
                notes: "Booked from portfolio website",
              }}
              className="w-full h-[500px] rounded-lg"
            /> */}
            <button
              data-cal-namespace="lets-talk"
              data-cal-link="ritabrata-ghosh-ijlgtd/lets-talk"
              data-cal-config='{"layout":"month_view"}'
              className="
    inline-flex items-center justify-center
    h-8 px-4
    rounded-md
    bg-primary text-primary-foreground
    text-sm font-medium
    transition-colors
    hover:bg-primary/90
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-ring
    focus-visible:ring-offset-2
    disabled:pointer-events-none
    disabled:opacity-50
    cursor-pointer
  "
            >
              Let's Talk!
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
