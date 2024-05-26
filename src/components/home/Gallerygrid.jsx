import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import DownloadingIcon from '@mui/icons-material/Downloading';
import DeleteIcon from '@mui/icons-material/Delete';
import Popupmodule from "./FilePopupmodule";


const Gallerygrid = ({ files }) => {
  /**
   * 
   * Function to determine the file type based on the file extension
   * @param {string} filename - The name of the file
   * @returns {string} - The type of the file
   */
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupModuleFile, setpopupModuleFile] = useState('')
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const getFileType = (filename) => {
    const fileExtension = filename.split('.').pop().toLowerCase();
    const supportedImageFormats = ["jpg", "ico", "webp", "png", "jpeg", "gif", "jfif"];
    const supportedVideoFormats = ['mp4', 'avi', 'mov'];
    const supportedAudioFormats = ['mp3', 'wav', 'ogg'];
    const supportedZipFormats = ['zip', 'rar'];
    const supportedPdfFormats = ['pdf'];
    const supportedExcelFormats = ['xls', 'xlsx'];
    const supportedtxtFormats = ['txt'];

    if (supportedImageFormats.includes(fileExtension)) {
      return "image";
    } else if (supportedVideoFormats.includes(fileExtension)) {
      return "video";
    } else if (supportedAudioFormats.includes(fileExtension)) {
      return "audio";
    } else if (supportedZipFormats.includes(fileExtension)) {
      return "zip";
    } else if (supportedPdfFormats.includes(fileExtension)) {

      return "pdf";
    } else if (supportedExcelFormats.includes(fileExtension)) {
      return "excel";
    }
    else if (supportedtxtFormats.includes(fileExtension)) {
      return "txt";
    }
    else {
      return "unknown";
    }
  };


  const handleCilckPopup = (value) => {
    if (value == false) {
      setpopupModuleFile('')
      setAnchorEl(null);
      setIsPopupOpen(false)
    }

  };
  console.log(popupModuleFile, "main page")

  return (
    <>
      <div>
        <Popupmodule
          isPopupOpen={isPopupOpen}
          src={popupModuleFile !== '' ? "https://filestreambot-pro-karthik.koyeb.app/" + popupModuleFile.endpoint : ''}
          type={popupModuleFile !== '' ? getFileType(popupModuleFile.name) : ''}
          onchangefile={handleCilckPopup} />

      </div>
      {files.map((file) => (
        <div class="hover:cursor-alias">
          <div class="flex w-full flex-col items-center justify-center overflow-hidden rounded-xl bg-darkC2 px-2.5 hover:bg-darkC">


            {getFileType(file.name) === "image" && (

              <>                <div class="relative flex w-full items-center justify-between px-1 py-3" onClick={() => {

                  if (popupModuleFile == '') { setpopupModuleFile(file) }

                }} >
                  <div class="flex items-center space-x-4">
                    <div class="h-6 w-6">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-full w-full text-[#CA2E24]" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 21h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zm3-7 2.363 2.363L14 11l5 7H5l3-4z"></path>
                      </svg>
                    </div>

                    <span class="w-32 truncate text-sm font-medium text-textC">free-images.jpg</span>
                  </div>
                  <svg stroke="currentColor" onClick={handleClick} fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="h-6 w-6 cursor-pointer rounded-full p-1 hover:bg-[#ccc]" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                  </svg>
                  <div>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem class="p-3 flex" onClick={() => {
                        setIsPopupOpen(isPopupOpen == false ? true : false);

                      }}>
                        <FullscreenIcon />
                        <div class='pl-2'> Open File</div>

                      </MenuItem>
                      <MenuItem class="p-3 flex" onClick={handleClose}>
                        <DownloadingIcon />
                        <div class='pl-2'> Download</div>
                      </MenuItem>
                      <MenuItem class="p-3 flex" onClick={handleClose}

                      ><DeleteIcon />
                        <div class='pl-2'> Delete</div>
                      </MenuItem>
                    </Menu>
                  </div>
                </div>
                <div class="flex h-44 w-48 items-center justify-center pb-2.5">
                  <img alt="free-images.jpg"
                    loading="lazy" width="500" height="500"
                    class="h-full w-full rounded-sm object-cover object-center"
                    src={"https://filestreambot-pro-karthik.koyeb.app/" + file.endpoint}
                  />
                </div>
              </>

            )}
            {getFileType(file.name) === "video" && (


              <>
                <div class="relative flex w-full items-center justify-between px-1 py-3"onClick={() => {

if (popupModuleFile == '') { setpopupModuleFile(file) }

}}>
                  <div class="flex items-center space-x-4">
                    <div class="h-6 w-6">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-full w-full text-[#CA2E24]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"></path>
                      </svg>
                    </div>
                    <span class="w-32 truncate text-sm font-medium text-textC">free-images.jpg</span>
                  </div>
                  <svg stroke="currentColor" fill="currentColor" onClick={handleClick} stroke-width="0" viewBox="0 0 16 16" class="h-6 w-6 cursor-pointer rounded-full p-1 hover:bg-[#ccc]" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                  </svg>
                  <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem class="p-3 flex" onClick={() => {
                        setIsPopupOpen(isPopupOpen == false ? true : false);

                      }}>
                        <FullscreenIcon />
                        <div class='pl-2'> Open File</div>

                      </MenuItem>
                      <MenuItem class="p-3 flex" onClick={handleClose}>
                        <DownloadingIcon />
                        <div class='pl-2'> Download</div>
                      </MenuItem>
                      <MenuItem class="p-3 flex" onClick={handleClose}

                      ><DeleteIcon />
                        <div class='pl-2'> Delete</div>
                      </MenuItem>
                    </Menu>
                </div>
                <div class="flex h-44 w-48 items-center justify-center pb-2.5">
                  <video class="h-full w-full"
                    autoPlay
                    loop
                    muted
                    src={"https://filestreambot-pro-karthik.koyeb.app/" + file.endpoint}
                    type="video/mp4">

                    <div class="h-36 w-36">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-full w-full text-[#CA2E24]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"></path>
                      </svg>
                    </div>
                  </video>
                </div>
              </>

            )}
            {getFileType(file.name) === "zip" && (
              <>
                <div class="relative flex w-full items-center justify-between px-1 py-3"><div class="flex items-center space-x-4"><div class="h-6 w-6"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="h-full w-full text-textC" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM296 136v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm0 64v160h128V584H296zm48 48h32v64h-32v-64z"></path></svg></div><span class="w-32 truncate text-sm font-medium text-textC">cart.zip</span></div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="h-6 w-6 cursor-pointer rounded-full p-1 hover:bg-[#ccc]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path></svg></div>
                <div class="flex h-44 w-48 items-center justify-center pb-2.5"><div class="h-36 w-36 "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="h-full w-full text-textC" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM296 136v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm0 64v160h128V584H296zm48 48h32v64h-32v-64z"></path></svg></div></div>
              </>

            )}

            {getFileType(file.name) === "pdf" && (
              <>
                <div className="relative flex w-full items-center justify-between px-1 py-3">
                  <div className="flex items-center space-x-4">
                    <div className="h-6 w-6">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-full w-full text-[#CA2E24]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"></path></svg>
                    </div>
                    <span className="w-32 truncate text-sm font-medium text-textC">{file.name}</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    className="h-6 w-6 cursor-pointer rounded-full p-1 hover:bg-[#ccc]"
                  >
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                  </svg>
                </div>

                <div className="flex h-44 w-48 items-center justify-center pb-2.5">
                  <div className="h-36 w-36">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className="h-full w-full text-[#CA2E24]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"></path>
                    </svg>
                  </div>
                </div>
              </>

            )}
            {getFileType(file.name) === "audio" && (

              <>
                <div className="relative flex w-full items-center justify-between px-1 py-3"onClick={() => {

if (popupModuleFile == '') { setpopupModuleFile(file) }

}}>
                  <div className="flex items-center space-x-4">
                    <div className="h-6 w-6">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="h-full w-full text-[#CA2E24]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z"></path></svg>
                    </div>
                    <span className="w-32 truncate text-sm font-medium text-textC">{file.name}</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    className="h-6 w-6 cursor-pointer rounded-full p-1 hover:bg-[#ccc]"
                  >
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                  </svg>
                </div>
                <div className="flex h-44 w-48 items-center justify-center pb-2.5">
                  <div className="flex flex-col items-center justify-center">
                    <div className="h-24 w-24">
                      <svg stroke="currentColor" fill="currentColor" onClick={handleClick} stroke-width="0" viewBox="0 0 512 512" class="h-full w-full text-[#CA2E24]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z"></path></svg>
                      <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem class="p-3 flex" onClick={() => {
                        setIsPopupOpen(isPopupOpen == false ? true : false);

                      }}>
                        <FullscreenIcon />
                        <div class='pl-2'> Open File</div>

                      </MenuItem>
                      <MenuItem class="p-3 flex" onClick={handleClose}>
                        <DownloadingIcon />
                        <div class='pl-2'> Download</div>
                      </MenuItem>
                      <MenuItem class="p-3 flex" onClick={handleClose}

                      ><DeleteIcon />
                        <div class='pl-2'> Delete</div>
                      </MenuItem>
                    </Menu>
                    </div>
                    <audio controls className="w-44">
                      <source src={"https://filestreambot-pro-karthik.koyeb.app/" + file.endpoint} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              </>

            )}
            {getFileType(file.name) === "txt" && (

              <>
                <div className="relative flex w-full items-center justify-between px-1 py-3">
                  <div className="flex items-center space-x-4">
                    <div className="h-6 w-6">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-full w-full text-[#447DD7]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.998 14.768H8.895v3.274h-.917v-3.274H6.893V14h3.105v.768zm2.725 3.274-.365-.731c-.15-.282-.246-.492-.359-.726h-.013c-.083.233-.185.443-.312.726l-.335.731h-1.045l1.171-2.045L10.336 14h1.05l.354.738c.121.245.21.443.306.671h.013c.096-.258.174-.438.276-.671l.341-.738h1.043l-1.139 1.973 1.198 2.069h-1.055zm4.384-3.274h-1.104v3.274h-.917v-3.274h-1.085V14h3.105v.768zM14 9h-1V4l5 5h-4z"></path></svg>
                    </div>
                    <span className="w-32 truncate text-sm font-medium text-textC">{file.name}</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    className="h-6 w-6 cursor-pointer rounded-full p-1 hover:bg-[#ccc]"
                  >
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                  </svg>
                </div>

                <div className="flex h-44 w-48 items-center justify-center pb-2.5">
                  <div className="h-36 w-36">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-full w-full text-[#447DD7]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.998 14.768H8.895v3.274h-.917v-3.274H6.893V14h3.105v.768zm2.725 3.274-.365-.731c-.15-.282-.246-.492-.359-.726h-.013c-.083.233-.185.443-.312.726l-.335.731h-1.045l1.171-2.045L10.336 14h1.05l.354.738c.121.245.21.443.306.671h.013c.096-.258.174-.438.276-.671l.341-.738h1.043l-1.139 1.973 1.198 2.069h-1.055zm4.384-3.274h-1.104v3.274h-.917v-3.274h-1.085V14h3.105v.768zM14 9h-1V4l5 5h-4z"></path></svg>

                  </div>
                </div>
              </>

            )}



          </div>
        </div>

      ))}
    </>
  );
};

export default Gallerygrid;
