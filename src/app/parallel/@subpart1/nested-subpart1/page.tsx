import React from "react";

// WHEN DIRECTLY NAVIGATING TO SUB ROUTES OF SLOT -
// LIKE /parallel/nested-subpart1
// NEXTJS WILL RENDER DEFAULT FOR OTHER EXISTING
// SLOTS FOR HARD NAVIGATION
// BUT FOR SOFT NAVIGATION, IT WILL RE-RENDER ONLY THE SLOT
// CHANGES WITHOUT RENDERRING THE OTHER SLOTS

const NestedSubPart1 = () => {
  return <div>Nested SubPart1</div>;
};

export default NestedSubPart1;
