import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import {
  ArrowDownIcon,
  MoreOptionsIcon,
  DownloadIcon,
  DeleteIcon,
} from "../common/SvgIcons";
import LottieImage from "../common/LottieImage";

const MainData = ({ files, handleOptionsClick, optionsVisible, handleDelete }) => {
  const optionsMenuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        optionsMenuRef.current &&
        !optionsMenuRef.current.contains(event.target) &&
        !event.target.closest(".optionsContainer")
      ) {
        handleOptionsClick(null); // Close options menu if open
      }
    };

    const handleDocumentClick = (event) => {
      handleOutsideClick(event);
    };

    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [handleOptionsClick]);

  return (
    <div>
      {/* Header row for the data list */}
      {files.length > 0 && (
        <DataListRow>
          <div>
            <b>
              <ArrowDownIcon /> Name
            </b>
          </div>
          <div className="modified">
            <b>Date</b>
          </div>
          <div>
            <b>Options</b>
          </div>
        </DataListRow>
      )}

      {/* Render each file in the data list */}
      {files.length > 0 ? (
        files.map((file) => (
          <DataListRow key={file.id}>
            <div>
              {/* File details and icon */}
              <a href={file.endpoint} target="_blank">
                <span title={file.name}>{file.name}</span>
              </a>
            </div>
            <div className="modified">
              {/* Display date */}
              {convertDates(file.date)}
            </div>
            <div>
              {/* Options menu for each file */}
              <OptionsContainer
                className="optionsContainer"
                title="Options"
                onClick={() => handleOptionsClick(file.id)}
              >
                <MoreOptionsIcon />
              </OptionsContainer>
              {optionsVisible === file.id && (
                // Display options menu when optionsVisible matches file id
                <OptionsMenu ref={optionsMenuRef}>
                  {/* Various options available for each file */}
                  {/* Download button */}
                  <span>
                    <a
                      href={"https://filestreambot-pro-karthik.koyeb.app/" +file.endpoint}
                      download={file.rename}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <DownloadIcon />
                      {" Download"}
                    </a>
                  </span>
                  {/* Delete button */}
                  <span onClick={() => handleDelete(file.id)}>
                    <button>
                      <DeleteIcon />
                      {" Delete"}
                    </button>
                  </span>
                </OptionsMenu>
              )}
            </div>
          </DataListRow>
        ))
      ) : (
        // Render a Lottie animation if no files are available
        <LottieImage
          imagePath={"/homePage.svg"}
          text1={"A place for all of your files"}
          text2={"Upload your files here & use the 'New' button to upload"}
        />
      )}
    </div>
  );
};

// Styled components for the data list row and options menu
const DataListRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  border-bottom: 1px solid #ccc;
  padding: 10px;

  div:last-child {
    justify-self: flex-end;
    padding-right: 10px;
    font-size: 13px;
    position: relative;
  }

  div,
  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 13px;
    b {
      display: flex;
      align-items: center;
    }
    svg {
      font-size: 22px;
      margin: 10px;
    }
  }

  div {
    text-decoration: none;

    a {
      color: gray;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0;
      span {
        color: #000;
        font-weight: 600;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        width: 20ch;

        @media screen and (max-width: 768px) {
          width: 10ch;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 2fr 1fr;
    .modified {
      display: none;
    }
  }
`;

const OptionsContainer = styled.span`
  cursor: pointer;
`;

const OptionsMenu = styled.span`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  background-color: #fff;
  border: 2px solid #ccc;
  top: -200%;
  right: 100%;
  cursor: pointer;
  z-index: 10;
  width: max-content;
  min-width: 120px;
  border-radius: 10px;

  &::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: #fff;
    top: 100px;
    right: -8px;
    transform: rotate(45deg);
    border-right: 1px solid #ccc;
    border-top: 1px solid #ccc;
  }

  span {
    width: 100%;
    border-bottom: 2px solid #ccc;
    padding: 10px;
    display: flex;
    align-items: center;

    a {
      color: #000;
    }

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background-color: #ccc;
      z-index: 11;
    }
  }

  button {
    background-color: transparent;
    border: none;
    color: red;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    color: #000;
    background-color: transparent;
  }
`;

// Function to convert dates
const convertDates = (timestamp) => {
  // Implement your date conversion logic here
  return timestamp; // Placeholder, replace with actual logic
};

export default MainData;
