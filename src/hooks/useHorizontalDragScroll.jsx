import { useEffect, useRef } from "react";

const DRAG_THRESHOLD_PX = 6;

export default function useHorizontalDragScroll(enabled = true) {
  const railRef = useRef(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || !enabled) return;

    let isDragging = false;
    let moved = false;
    let startX = 0;
    let startLeft = 0;
    let activePointerId = null;

    const onPointerDown = (event) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;

      isDragging = true;
      moved = false;
      activePointerId = event.pointerId;
      startX = event.clientX;
      startLeft = rail.scrollLeft;

      rail.classList.add("is-dragging");
      rail.setPointerCapture?.(event.pointerId);
    };

    const onPointerMove = (event) => {
      if (!isDragging || event.pointerId !== activePointerId) return;

      const deltaX = event.clientX - startX;
      if (!moved && Math.abs(deltaX) > DRAG_THRESHOLD_PX) {
        moved = true;
      }

      if (moved) {
        rail.scrollLeft = startLeft - deltaX;
      }
    };

    const endDrag = (event) => {
      if (!isDragging) return;
      if (event.pointerId != null && event.pointerId !== activePointerId) return;

      isDragging = false;
      activePointerId = null;
      rail.classList.remove("is-dragging");
    };

    const onClickCapture = (event) => {
      if (!moved) return;
      event.preventDefault();
      event.stopPropagation();
      moved = false;
    };

    rail.classList.add("drag-scroll-rail");
    rail.style.touchAction = "pan-y";

    rail.addEventListener("pointerdown", onPointerDown);
    rail.addEventListener("pointermove", onPointerMove);
    rail.addEventListener("pointerup", endDrag);
    rail.addEventListener("pointercancel", endDrag);
    rail.addEventListener("lostpointercapture", endDrag);
    rail.addEventListener("click", onClickCapture, true);

    return () => {
      rail.classList.remove("drag-scroll-rail", "is-dragging");
      rail.style.touchAction = "";
      rail.removeEventListener("pointerdown", onPointerDown);
      rail.removeEventListener("pointermove", onPointerMove);
      rail.removeEventListener("pointerup", endDrag);
      rail.removeEventListener("pointercancel", endDrag);
      rail.removeEventListener("lostpointercapture", endDrag);
      rail.removeEventListener("click", onClickCapture, true);
    };
  }, [enabled]);

  return railRef;
}
