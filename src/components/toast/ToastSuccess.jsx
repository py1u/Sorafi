"use client";
import { toast } from "sonner";
import Success from "../icons/Success";

function ToastSuccess() {
  return (
    <button
      className="text-sx text rounded-lg bg-sorafi-dark px-4 py-2"
      onClick={() =>
        toast("Toast Created!", {
          icon: <Success />,
          className:
            "backdrop-blur-lg bg-sorafi-cinder-900/10 opacity border-sorafi-keppel-300/50",
          classNames: {
            title: "text-sorafi-keppel-300",
          },
        })
      }
    >
      Success
    </button>
  );
}

export default ToastSuccess;
