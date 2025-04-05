document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.getElementById("cursor");
  
    document.addEventListener("mousemove", e => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
  
    document.querySelectorAll(".ripple").forEach(el => {
      el.addEventListener("mouseenter", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1.4)";
      });
      el.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
      });
    });
  });
  