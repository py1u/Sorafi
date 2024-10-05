"use client";
import { toast } from "sonner";
import Warning from "../icons/Warning";

const ToastWarn = () => {
  return (
    <button
      className="text-sx text rounded-lg bg-sorafi-dark px-4 py-2"
      onClick={() =>
        toast("Toast Created!", {
          icon: <Warning />,
          className:
            "backdrop-blur-lg bg-sorafi-cinder-900/10 opacity border-sorafi-molten-300/50",
          classNames: {
            title: "text-sorafi-molten-300",
          },
        })
      }
    >
      Warn
    </button>
  );
};

export default ToastWarn;
