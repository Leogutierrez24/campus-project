import { useState } from "react";

export const useOpenMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setOpenMenu(true);
    }

    const handleCloseMenu = () => {
        setOpenMenu(false);
    }
    return { openMenu, handleOpenMenu, handleCloseMenu };
}