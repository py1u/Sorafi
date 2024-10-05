"use client";
import { toast } from "sonner";
import Notification from "../icons/Notification";

function ToastNotify() {
  return (
    <button
      className="text-sx text rounded-lg bg-sorafi-dark px-4 py-2"
      onClick={() =>
        toast("Event Scheduled!", {
          description: "Monday, October 3rd at 6:00pm",
          icon: <Notification />,
          className:
            "backdrop-blur-lg bg-sorafi-cinder-900/10 opacity border-sorafi-cinder-50/50",
          classNames: {
            title: "text-sorafi-cinder-50",
          },
        })
      }
    >
      Notification
    </button>
  );
}

export default ToastNotify;
