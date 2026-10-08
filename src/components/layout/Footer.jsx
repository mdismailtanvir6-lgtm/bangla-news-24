import React from "react";

export default function Footer({
  year = new Date().getFullYear(),
  brandName = "BanglaBulletin",
  sourceText = "BBC Bangla",
}) {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-4 px-4">
      <div className="max-w-7xl mx-auto text-gray-600 font-serif text-sm flex flex-col sm:flex-row justify-between items-center gap-2">
        {/* Left side: Copyright */}
        <div>
          © {year} {brandName}
        </div>

        {/* Right side: Source */}
        <div>Source: {sourceText}</div>
      </div>
    </footer>
  );
}
