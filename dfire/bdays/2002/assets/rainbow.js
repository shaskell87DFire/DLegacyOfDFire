/*
  D'Fire 2002 Birthday Quilt
  Modern Rainbow Links compatibility script

  PURPOSE:
  Recreates the rainbow-link hover effect used by the historical rainbow.js
  on D'Fire's birthday quilt page, using modern browser event handling.

  PRESERVATION NOTE:
  This is a modern compatibility recreation, not the untouched archival script.
  The recovered later surviving Rainbow Links script identified itself as
  "Rainbow Links Version 1.03 (2003.9.20)" by TAKANASHI Mizuki and was updated
  by DynamicDrive.com for IE6.

  Historical behavior preserved:
  - Links automatically receive a cycling rainbow color while hovered.
  - The link returns to its original color when the pointer leaves.
  - Color progression uses the same basic HSV-style rainbow cycle.
  - Historical rate value retained: 20 degrees per step.
  - Historical timing retained: 100 ms per color change.

  Modernization:
  - Replaces document.all, captureEvents(), event.srcElement, and other
    obsolete browser-specific event APIs with standard DOM events.
*/

(function () {
  "use strict";

  const rate = 20;
  const intervalMs = 100;
  let hue = 0;

  let activeLink = null;
  let timerId = null;
  let originalInlineColor = "";

  function hsvToRgb(h, s, v) {
    s /= 255;
    v /= 255;

    const c = v * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = v - c;

    let r = 0, g = 0, b = 0;

    if (h < 60) {
      r = c; g = x; b = 0;
    } else if (h < 120) {
      r = x; g = c; b = 0;
    } else if (h < 180) {
      r = 0; g = c; b = x;
    } else if (h < 240) {
      r = 0; g = x; b = c;
    } else if (h < 300) {
      r = x; g = 0; b = c;
    } else {
      r = c; g = 0; b = x;
    }

    return [
      Math.round((r + m) * 255),
      Math.round((g + m) * 255),
      Math.round((b + m) * 255)
    ];
  }

  function toHex(value) {
    return value.toString(16).padStart(2, "0");
  }

  function makeColor() {
    const [r, g, b] = hsvToRgb(hue, 128, 255);

    hue += rate;
    if (hue >= 360) {
      hue = 0;
    }

    return "#" + toHex(r) + toHex(g) + toHex(b);
  }

  function changeColor() {
    if (activeLink) {
      activeLink.style.color = makeColor();
    }
  }

  function startRainbow(link) {
    if (!link || link === activeLink) {
      return;
    }

    stopRainbow();

    activeLink = link;
    originalInlineColor = link.style.color;

    changeColor();
    timerId = window.setInterval(changeColor, intervalMs);
  }

  function stopRainbow() {
    if (timerId !== null) {
      window.clearInterval(timerId);
      timerId = null;
    }

    if (activeLink) {
      activeLink.style.color = originalInlineColor;
      activeLink = null;
      originalInlineColor = "";
    }
  }

  document.addEventListener("mouseover", function (event) {
    const link = event.target.closest && event.target.closest("a[href]");

    if (!link) {
      return;
    }

    if (event.relatedTarget && link.contains(event.relatedTarget)) {
      return;
    }

    startRainbow(link);
  });

  document.addEventListener("mouseout", function (event) {
    const link = event.target.closest && event.target.closest("a[href]");

    if (!link || link !== activeLink) {
      return;
    }

    if (event.relatedTarget && link.contains(event.relatedTarget)) {
      return;
    }

    stopRainbow();
  });

  window.addEventListener("blur", stopRainbow);
})();
