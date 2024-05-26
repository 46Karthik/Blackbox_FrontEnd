// Import styled components and React dependencies
import styled from "styled-components";
import { useEffect, useState } from "react";

// Import Firebase utilities
import { db, auth } from "../../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

// Import custom Firebase API functions and components
import { getFilesForUser, postTrashCollection } from "../common/firebaseApi";
import Gallerygrid from "./Gallerygrid";
import MainData from "./MainData";
import PageHeader from "../common/PageHeader";
import { toast } from "react-toastify";
import axios from 'axios';

// Main component for displaying user's data
const Data = () => {
  // State variables to manage user files and options visibility
  const [files, setFiles] = useState([]);
  const [optionsVisible, setOptionsVisible] = useState(null);

  // Fetch user files on component mount and clean up subscriptions on unmount
  useEffect(() => {

    const fetchData = async () => {
      // Your first axios.get call
      try {
        const response = await axios.get('http://127.0.0.1:8000/filestore/123/');
        console.log(response.data, "data 7777777777");
        setFiles(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    // Call fetchData function
    fetchData();
    // const unsubscribe = onAuthStateChanged(auth, async (user) => {
    //   if (user) {
    //     // Subscribe to user's files and update state
    //     // const unsubscribeFiles = await getFilesForUser(user.uid, setFiles);
    //     // console.log(files,"files")
    //     // Cleanup the user subscription when the component unmounts
    //     return () => {
    //       unsubscribeFiles();
    //     };
    //   }


  
    // });
   
    // Cleanup the user subscription when the component unmounts
    // return () => unsubscribe();
    
  }, []);

  // Handle file deletion by moving it to the trash collection
  const handleDelete = async (id, data) => {
    try {
      // Confirm deletion with a window prompt
      const confirmed = window.confirm(
        "Are you sure you want to delete this file?"
      );

      if (confirmed) {
        // Reference to the document in Firestore
        const docRef = doc(db, "myfiles", id);

        // Add the file data to the "trash" collection before deleting the document
        await postTrashCollection(data);

        // Delete the document from the user's drive
        await deleteDoc(docRef);
        toast.warn("File moved to the trash");
      }
    } catch (error) {
      // Log any errors that occur during the deletion process
      console.error("Error deleting document: ", error);
    } finally {
      // Set options visibility after deletion attempt
      setOptionsVisible(id);
    }
  };

  // Handle click event for options button
  const handleOptionsClick = (id) => {
    // Toggle options visibility based on the previous state
    setOptionsVisible((prevVisible) => (prevVisible === id ? null : id));
  };

  // JSX structure for rendering the component
  return (
    <DataContainer>
      {/* Display page header */}
      <PageHeader pageTitle={"My Drive"} />
      <div className="mb-5 flex flex-col space-y-4">
                      <h2>Files</h2>
                      <div className="flex flex-wrap justify-start gap-x-3 gap-y-5 text-textC">
                      <Gallerygrid files={files} />
                      </div>
                    </div>
      {/* {files.length > 0 && <h4>Recents</h4>} */}
  
        {/* Display recent files in a grid */}
       
        {/* <div>
          
          <MainData
            files={files}
            handleOptionsClick={handleOptionsClick}
            optionsVisible={optionsVisible}
            handleDelete={handleDelete}
          />
        </div> */}
   {/* <DropdownMenu/> */}
    </DataContainer>
 
  );
};

// Styled component for the main container
const DataContainer = styled.div`
  flex: 1;
  padding: 10px 0px 0px 20px;

  h4 {
    font-size: 14px;
    margin-top: 30px;
    margin-bottom: -20px;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

// Export the Data component as the default export
export default Data;
