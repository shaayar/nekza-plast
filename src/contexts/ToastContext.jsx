import { useCallback, useMemo } from "react";
import { Toaster, toast } from "sonner";
import ToastContext from "./toastContext.js";

export function ToastProvider({ children }) {
  const showToast = useCallback((options) => {
    const next = typeof options === "string" ? { message: options } : options;
    if (!next?.message) return;

    const type = next.type || "info";
    const duration = next.duration ?? 3000;
    if (type === "success") {
      toast.success(next.message, { duration });
      return;
    }

    if (type === "error") {
      toast.error(next.message, { duration });
      return;
    }

    if (type === "warning") {
      toast.warning(next.message, { duration });
      return;
    }

    toast(next.message, { duration });
  }, []);

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <Toaster
        position="bottom-right"
        richColors
        closeButton
        toastOptions={{
          duration: 3000,
          className: "font-comfortaa",
        }}
      />
    </ToastContext.Provider>
  );
}
