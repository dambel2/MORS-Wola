import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md"

const DropdownLink = ({ children, href, FlyoutContent }) => {
    const [open, setOpen] = useState(false);
  
    const showFlyout = FlyoutContent && open;
  
    return (
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative w-fit h-fit"
      >
        <a href={href} className="relative text-black flex items-center gap-2 font-semibold">
          {children}
          {window.innerWidth >= 1280 && <MdKeyboardArrowDown />}
          <span
            style={{
              transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
            }}
            className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 bg-[#e18a33] transition-transform duration-300 ease-out"
          />
        </a>
        <AnimatePresence>
          {showFlyout && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              style={{ translateX: "-50%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-1/2 top-12 bg-white text-black"
            >
              {window.innerWidth >= 1280 && <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />}
              {window.innerWidth >= 1280 && <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#e18a33]" />}
              {window.innerWidth >= 1280 && <FlyoutContent />}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  export default DropdownLink
  