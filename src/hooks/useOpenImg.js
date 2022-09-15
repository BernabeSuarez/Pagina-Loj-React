import { useState } from 'react'

export const useOpenImg = () => {
    const [openModal, setOpenModal] = useState(false)

    return {
        openModal,
        setOpenModal,
    };
};

