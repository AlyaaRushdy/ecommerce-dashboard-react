/* eslint-disable no-unused-vars */
import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { IconUpload} from "@tabler/icons-react";
import { TrashIcon } from "lucide-react";
import { useDropzone } from "react-dropzone";

const mainVariant = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: 20,
    y: -20,
    opacity: 0.9,
  },
};

const secondaryVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

// eslint-disable-next-line react/prop-types
export const FileUpload = ({ onChange, maxFiles = 5 }) => {
  const [files, setFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (newFiles) => {
    const supportedTypes = ["image/png", "image/jpeg", "image/gif"]; // Supported types
    const allFiles = [...files];
    let isValid = true;

    newFiles.forEach((file) => {
      if (supportedTypes.includes(file.type)) {
        allFiles.push(file);
      } else {
        isValid = false;
        setErrorMessage(`File type ${file.type} is not supported`);
      }
    });

    if (isValid) {
      if (allFiles.length > maxFiles) {
        setErrorMessage(`You can upload up to ${maxFiles} files.`);
        return;
      }
      setFiles(allFiles);
      setErrorMessage(null); // Reset error message if valid
      onChange && onChange(allFiles); // Notify parent about file changes
    }
  };

  const handleRemoveFile = (e, fileName) => {
    e.stopPropagation(); // Prevent file upload window from opening
    const updatedFiles = files.filter((file) => file.name !== fileName);
    setFiles(updatedFiles);
    onChange && onChange(updatedFiles); // Notify parent about file removal
  };

  const handleClick = (e) => {
    e.stopPropagation(); // Ensure that clicking won't open the file selector when removing
    fileInputRef.current?.click();
  };

  const { getRootProps, isDragActive } = useDropzone({
    multiple: true,
    noClick: true,
    onDrop: handleFileChange,
    onDropRejected: (fileRejections) => {
      // Handle rejected files
      const unsupportedFiles = fileRejections.map(
        (rejection) => rejection.file.name
      );
      setErrorMessage(`Unsupported files: ${unsupportedFiles.join(", ")}`);
    },
    accept: {
      "image/png": [],
      "image/jpeg": [],
      "image/gif": [],
    },
  });

  return (
    <div className="w-full" {...getRootProps()}>
      <motion.div
        onClick={handleClick}
        whileHover="animate"
        className="p-10 group/file block rounded-lg cursor-pointer w-full relative overflow-hidden"
      >
        <input
          ref={fileInputRef}
          id="file-upload-handle"
          type="file"
          onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
          className="hidden"
          multiple
        />
        <div className="flex flex-col items-center justify-center">
          <p className="relative z-20 font-sans font-normal text-neutral-400 dark:text-neutral-400 text-base mt-2">
            Drag or drop your files here or click to upload
          </p>
          <p className="relative z-20 font-sans font-normal text-neutral-400 dark:text-neutral-400 text-sm mt-1">
            1600 x 1200 (4:3) recommended. PNG, JPG, and GIF files are allowed
          </p>

          {/* Error message display */}
          {errorMessage && (
            <p className="text-red-500 font-semibold mt-2">{errorMessage}</p>
          )}

          <div className="relative w-full mt-10 max-w-xl mx-auto">
            {files.length > 0 &&
              files.map((file, idx) => (
                <motion.div
                  key={"file" + idx}
                  layoutId={idx === 0 ? "file-upload" : "file-upload-" + idx}
                  className={cn(
                    "relative overflow-hidden z-40 bg-white dark:bg-neutral-900 flex flex-col items-start justify-start md:h-24 p-4 mt-4 w-full mx-auto rounded-md",
                    "shadow-sm"
                  )}
                >
                  <div className="flex justify-between w-full items-center gap-4">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      layout
                      className="text-base text-neutral-700 dark:text-neutral-300 truncate max-w-xs"
                    >
                      {file.name}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      layout
                      className="rounded-lg px-2 py-1 w-fit flex-shrink-0 text-sm text-neutral-600 dark:bg-neutral-800 dark:text-white shadow-input"
                    >
                      {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </motion.p>
                  </div>

                  <div className="flex text-sm md:flex-row flex-col items-start md:items-center w-full mt-2 justify-between text-neutral-600 dark:text-neutral-400">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      layout
                      className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 "
                    >
                      {file.type}
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      layout
                    >
                      modified{" "}
                      {new Date(file.lastModified).toLocaleDateString()}
                    </motion.p>

                    {/* Trash Icon for removing file */}
                    <motion.button
                      className="text-red-500 hover:text-red-700"
                      onClick={(e) => handleRemoveFile(e, file.name)} // Prevent file upload window from opening
                    >
                      <TrashIcon />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            {!files.length && (
              <motion.div
                layoutId="file-upload"
                variants={mainVariant}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className={cn(
                  "relative group-hover/file:shadow-2xl z-40 bg-white dark:bg-neutral-900 flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto rounded-md",
                  "shadow-[0px_10px_50px_rgba(0,0,0,0.1)]"
                )}
              >
                {isDragActive ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-neutral-600 flex flex-col items-center"
                  >
                    Drop it
                    <IconUpload className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                  </motion.p>
                ) : (
                  <IconUpload className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
                )}
              </motion.div>
            )}

            {!files.length && (
              <motion.div
                variants={secondaryVariant}
                className="absolute opacity-0 border border-dashed border-sky-400 inset-0 z-30 bg-transparent flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto rounded-md"
              ></motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
