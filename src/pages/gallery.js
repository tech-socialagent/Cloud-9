import GalleryMain from '@/Components/Gallery/galleryMain';
import NavbarCopy from '@/Components/Home/Navbar copy';
import React, { useContext } from 'react';
import Popup from '@/Components/popup'
import { PopupContext } from '@/Context';

function Gallery() {

    const { popupOpen } = useContext(PopupContext);
    
    return ( 
        <> 
            {popupOpen && <Popup />}
            <NavbarCopy />
            <GalleryMain />
        </>
     );
}

export default Gallery;