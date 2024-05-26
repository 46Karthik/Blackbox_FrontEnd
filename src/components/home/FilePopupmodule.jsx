import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
//   boxShadow: 24,
//   p: 4,
};

export default function BasicModal({isPopupOpen,src,type,onchangefile}) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {setOpen(false), onchangefile(false)};
useEffect(()=>{
    // console.log(type,"isPopupOpen")
if(isPopupOpen == true){
    setOpen(true)
    const video = document.createElement('video');

// Set the source of the video
video.src = "https://filestreambot-pro-karthik.koyeb.app/16848/wp.mp4?hash=AgADSA"
// video.src = 'https://filestreambot-pro-karthik.koyeb.app/16874/sp.mp4?hash=AgAD7w';

// Once the video metadata has loaded
video.addEventListener('loadedmetadata', () => {
  // Log the video's height and width
  // console.log('Video height:', video.videoHeight);
  // console.log('Video width:', video.videoWidth);
});

// Load the video
video.load();
}
else{
    setOpen(false)
}


},[isPopupOpen])
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        {type =="image"?<>
        <img alt="free-images.jpg"
                    loading="lazy" width="500" height="500"
                    class="h-full w-full rounded-sm object-cover object-center"
                    src={src}
                  />
        </>:<>
        <video class="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700" controls
  src={src}  autoPlay
  loop type="video/mp4">
</video>   
        </>}
      
        </Box>
      </Modal>
    </div>
  );
}