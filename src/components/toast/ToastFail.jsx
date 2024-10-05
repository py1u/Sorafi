"use client";
import { toast } from "sonner";
import Failure from "../icons/Failure";

const ToastFail = () => {
  return (
    <button
      className="text-sx text rounded-lg bg-sorafi-dark px-4 py-2"
      onClick={() =>
        toast("Toast Created!", {
          icon: <Failure />,
          className:
            "backdrop-blur-lg bg-sorafi-cinder-900/10 opacity border-sorafi-sakura-400/50",
          classNames: {
            title: "text-sorafi-sakura-400",
          },
        })
      }
    >
      Fail
    </button>
  );
};

export default ToastFail;
