import React, { useState, useEffect, useRef } from "react";

import EnlargerIcon from "../../../../assets/icons/enlarger";

const SidebarSearchbox = () => {
  const [isInputVisible, setInputVisibility] = useState(false);
  const [isShortcutHintVisible, setShortcutHintVisibility] = useState(true);
  const inputRef = useRef(null);

  // Function to handle the search icon click
  const toggleInputVisibility = () => {
    setInputVisibility(!isInputVisible);
    if (!isInputVisible) {
      // We will ensure that the input is focused when it becomes visible
      inputRef.current.focus();
    }
  };

  // Effect for adding/removing window event listeners
  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.metaKey || event.altKey) && event.key === "j") {
        event.preventDefault();
        setInputVisibility(true); // Show input if it's not already visible
        if (inputRef.current) {
          inputRef.current.focus(); // Focus the input field
        }
      }
    };

    // Add event listeners
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener on dismount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        // Assuming 768px is your breakpoint md
        setShortcutHintVisibility(true);
        setInputVisibility(false); // You may want to keep the input open based on design choices
      } else {
        setShortcutHintVisibility(false);
      }
    }

    // Call the handler right away so state gets updated with initial window size
    handleResize();

    // Add event listeners
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on dismount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const styledIcon = React.cloneElement(EnlargerIcon(), {
    className: `md:h-4 md:w-4 h-8 w-8 transition-all`,
  });

  return (
    <div className="flex justify-center items-center gap-2 p-2 md:pl-4 md:pr-2 md:py-2.5 mb-3 md:mb-2 w-[54px] md:w-full md:rounded-full rounded-xl bg-white bg-opacity-10 border-white border-opacity-50 md:border-opacity-5 border-2 md:border">
      <button
        onClick={toggleInputVisibility}
        className="flex items-center focus:outline-none flex-shrink-0"
      >
        {styledIcon}
      </button>
      <input
        ref={inputRef}
        type="text"
        className="flex-1 text-white focus:outline-none hidden md:flex bg-transparent leading-none"
        placeholder="Search"
        style={{ width: "calc(100% - 32px)" }}
      />
      <span className="hidden px-2 py-1 md:inline font-inter bg-black text-white text-xs bg-opacity-10 rounded-lg opacity-100 whitespace-nowrap leading-none tracking-tighter">
        ⌘ + J
      </span>
    </div>
  );
};

export default SidebarSearchbox;
