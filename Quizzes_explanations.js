const QUIZ_DATA_2 = {
  "quiz_title": "Quizzes",
  "total_questions": 44,
  "questions": [
    {
      "question_number": 1,
      "question_text": "Which of the following is not a standard position in an open file:",
      "answers": [
        {
          "letter": "a",
          "text": "Beginning of a file",
          "is_correct": false,
          "explanation": "That is a standard file position in C. Correct: Previous position."
        },
        {
          "letter": "b",
          "text": "All other answers",
          "is_correct": false,
          "explanation": "One position listed is non-standard, so 'all' is wrong. Correct: Previous position."
        },
        {
          "letter": "c",
          "text": "Current position",
          "is_correct": false,
          "explanation": "That is a standard file position in C. Correct: Previous position."
        },
        {
          "letter": "d",
          "text": "End of a file",
          "is_correct": false,
          "explanation": "That is a standard file position in C. Correct: Previous position."
        },
        {
          "letter": "e",
          "text": "Previous position",
          "is_correct": true,
          "explanation": "C standard I/O only supports SEEK_SET (beginning), SEEK_CUR (current), and SEEK_END (end). There is no 'previous position' marker. Correct: Previous position."
        }
      ],
      "correct_answer": "e",
      "images": [],
      "status": "Correct"
    },
    {
      "question_number": 2,
      "question_text": "Which of the following is not a general file processing operation:",
      "answers": [
        {
          "letter": "a",
          "text": "populating a data file",
          "is_correct": false,
          "explanation": "That is a standard file processing operation. Correct: positioning records."
        },
        {
          "letter": "b",
          "text": "retrieving records",
          "is_correct": false,
          "explanation": "That is a standard file processing operation. Correct: positioning records."
        },
        {
          "letter": "c",
          "text": "adding records",
          "is_correct": false,
          "explanation": "That is a standard file processing operation. Correct: positioning records."
        },
        {
          "letter": "d",
          "text": "opening a file",
          "is_correct": false,
          "explanation": "That is a standard file processing operation. Correct: positioning records."
        },
        {
          "letter": "e",
          "text": "positioning records",
          "is_correct": true,
          "explanation": "Positioning (seeking) is a low-level pointer move, not a file processing operation like open/read/write/close. Correct: positioning records."
        }
      ],
      "correct_answer": "e",
      "images": [],
      "status": "Incorrect"
    },
    {
      "question_number": 3,
      "question_text": "A sequentially organized data file stored on HD/SSD does not allow:",
      "answers": [
        {
          "letter": "a",
          "text": "Direct acces by relative number",
          "is_correct": true,
          "explanation": "Sequential files store records back-to-back without fixed-size slots or an index, so you cannot jump directly to record number N. Correct: Direct acces by relative number."
        },
        {
          "letter": "b",
          "text": "Sequential access",
          "is_correct": false,
          "explanation": "Sequential access is exactly what sequential files are designed for. Correct: Direct acces by relative number."
        },
        {
          "letter": "c",
          "text": "Exclusive acces",
          "is_correct": false,
          "explanation": "File locking can give exclusive access regardless of organization. Correct: Direct acces by relative number."
        },
        {
          "letter": "d",
          "text": "None of the other answers are correct",
          "is_correct": false,
          "explanation": "Option 'e' is correct: direct access by relative number is not supported. Correct: Direct acces by relative number."
        },
        {
          "letter": "e",
          "text": "Direct acces at a given position",
          "is_correct": false,
          "explanation": "You can fseek to a byte offset, but not to a logical relative record number. Correct: Direct acces by relative number."
        }
      ],
      "correct_answer": "a",
      "images": [],
      "status": "Incorrect"
    },
    {
      "question_number": 4,
      "question_text": "An indexed file",
      "answers": [
        {
          "letter": "a",
          "text": "is not a physical file",
          "is_correct": false,
          "explanation": "True, but incomplete. They also use keys and dual-file implementation. Correct: All other answers are correct."
        },
        {
          "letter": "b",
          "text": "is implemented using two physical files",
          "is_correct": false,
          "explanation": "True, but incomplete. They also use keys and are a logical concept. Correct: All other answers are correct."
        },
        {
          "letter": "c",
          "text": "uses an alpha-numerical key to find records",
          "is_correct": false,
          "explanation": "True, but not complete. Indexed files also use a separate index file and are a logical concept. Correct: All other answers are correct."
        },
        {
          "letter": "d",
          "text": "All other answers are correct",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "e",
          "text": "is a logical concept",
          "is_correct": false,
          "explanation": "True, but incomplete. They also use keys and dual-file implementation. Correct: All other answers are correct."
        }
      ],
      "correct_answer": "d",
      "images": [],
      "status": "Incorrect"
    },
    {
      "question_number": 5,
      "question_text": "Which of the following is not a data access method for files:",
      "answers": [
        {
          "letter": "a",
          "text": "Direct, by alpha-numerical key",
          "is_correct": false,
          "explanation": "That is a recognized standard access method. Correct: Direct, by any field value."
        },
        {
          "letter": "b",
          "text": "Direct, by relative number",
          "is_correct": false,
          "explanation": "That is a recognized standard access method. Correct: Direct, by any field value."
        },
        {
          "letter": "c",
          "text": "Sequential",
          "is_correct": false,
          "explanation": "That is a recognized standard access method. Correct: Direct, by any field value."
        },
        {
          "letter": "d",
          "text": "Direct, by position",
          "is_correct": false,
          "explanation": "That is a recognized standard access method. Correct: Direct, by any field value."
        },
        {
          "letter": "e",
          "text": "Direct, by any field value",
          "is_correct": true,
          "explanation": "Direct access needs a specific key or record number. You cannot look up by arbitrary field values without an index. Correct: Direct, by any field value."
        }
      ],
      "correct_answer": "e",
      "images": [],
      "status": "Correct"
    },
    {
      "question_number": 6,
      "question_text": "Which of the following is not a file organization method:",
      "answers": [
        {
          "letter": "a",
          "text": "Indexed",
          "is_correct": false,
          "explanation": "That is a real file organization method used in databases and file systems. Correct: Ergonomic."
        },
        {
          "letter": "b",
          "text": "Relative",
          "is_correct": false,
          "explanation": "That is a real file organization method used in databases and file systems. Correct: Ergonomic."
        },
        {
          "letter": "c",
          "text": "Multi-indexed",
          "is_correct": false,
          "explanation": "That is a real file organization method used in databases and file systems. Correct: Ergonomic."
        },
        {
          "letter": "d",
          "text": "Sequential",
          "is_correct": false,
          "explanation": "That is a real file organization method used in databases and file systems. Correct: Ergonomic."
        },
        {
          "letter": "e",
          "text": "Ergonomic",
          "is_correct": true,
          "explanation": "Ergonomics is about workplace comfort, not data storage. Correct: Ergonomic."
        }
      ],
      "correct_answer": "e",
      "images": [],
      "status": "Correct"
    },
    {
      "question_number": 7,
      "question_text": "What is a file?",
      "answers": [
        {
          "letter": "a",
          "text": "a Functional Interface Linkable Everywhere",
          "is_correct": false,
          "explanation": "That acronym is made up. In CS, a file is stored data outside program memory. Correct: An external data structure."
        },
        {
          "letter": "b",
          "text": "An external data structure",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "c",
          "text": "A thin, flat or rounded metal tool with rough surfaces for rubbing wooden or metal objects to make them smooth or to change their shape",
          "is_correct": false,
          "explanation": "That's a physical nail file, not a computer file. Correct: An external data structure."
        },
        {
          "letter": "d",
          "text": "None of the other answers",
          "is_correct": false,
          "explanation": "Option 'd' is valid: a file is an external data structure. Correct: An external data structure."
        },
        {
          "letter": "e",
          "text": "An instrument used to finish rough finger nails",
          "is_correct": false,
          "explanation": "That's a physical nail file, not a computer file. Correct: An external data structure."
        }
      ],
      "correct_answer": "b",
      "images": [],
      "status": "Incorrect"
    },
    {
      "question_number": 8,
      "question_text": "The \"empty' spaces in a relative file:",
      "answers": [
        {
          "letter": "a",
          "text": "are deleted records / never written records",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "b",
          "text": "can never be filled",
          "is_correct": false,
          "explanation": "Empty slots can be reused later. They are not permanently locked. Correct: are deleted records / never written records."
        },
        {
          "letter": "c",
          "text": "there are no empty spaces in a relative file",
          "is_correct": false,
          "explanation": "Relative files pre-allocate slots, so empty spaces naturally exist. Correct: are deleted records / never written records."
        },
        {
          "letter": "d",
          "text": "are valid records waiting to be processed",
          "is_correct": false,
          "explanation": "An empty slot has no data. It is not a 'waiting' record. Correct: are deleted records / never written records."
        },
        {
          "letter": "e",
          "text": "None of the other answers are correct",
          "is_correct": false,
          "explanation": "Option 'b' is correct: empty slots hold deleted or never-written records. Correct: are deleted records / never written records."
        }
      ],
      "correct_answer": "a",
      "images": [],
      "status": "Incorrect"
    },
    {
      "question_number": 9,
      "question_text": "Which of the following are not typical processing operations for binary data files: 1) populating the file, 2) depopulating a file, 3) search for one record, 4) skipping records, 5) selection of a group of records, 6) cleaning the records, 7) integral consultation, 8) cleaning the file, 9) adding records, 10) changing records, 11) deleting records?",
      "answers": [
        {
          "letter": "a",
          "text": "3, 4, 5, 7, 9",
          "is_correct": false,
          "explanation": "That does not match the list of non-typical operations. Correct: 2, 4, 6, 8, 11."
        },
        {
          "letter": "b",
          "text": "3, 4, 5, 10, 11",
          "is_correct": false,
          "explanation": "That does not match the list of non-typical operations. Correct: 2, 4, 6, 8, 11."
        },
        {
          "letter": "c",
          "text": "2, 4, 6, 8, 10",
          "is_correct": false,
          "explanation": "Changing records (10) is standard. The non-standard ones are 2, 4, 6, 8, 11. Correct: 2, 4, 6, 8, 11."
        },
        {
          "letter": "d",
          "text": "2, 4, 6, 8, 11",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "e",
          "text": "1, 3, 5, 7, 9, 10",
          "is_correct": false,
          "explanation": "That does not match the list of non-typical operations. Correct: 2, 4, 6, 8, 11."
        }
      ],
      "correct_answer": "d",
      "images": [],
      "status": "Incorrect"
    },
    {
      "question_number": 10,
      "question_text": "General processing flow for working with a data file does not include:",
      "answers": [
        {
          "letter": "a",
          "text": "Closing the file",
          "is_correct": false,
          "explanation": "That is part of the standard file processing sequence. Correct: Verification of data consistency."
        },
        {
          "letter": "b",
          "text": "Opening the file",
          "is_correct": false,
          "explanation": "That is part of the standard file processing sequence. Correct: Verification of data consistency."
        },
        {
          "letter": "c",
          "text": "Verification of data consistency",
          "is_correct": true,
          "explanation": "Consistency checks are application logic, not part of the basic open-access-close workflow. Correct: Verification of data consistency."
        },
        {
          "letter": "d",
          "text": "Accessing file content",
          "is_correct": false,
          "explanation": "That is part of the standard file processing sequence. Correct: Verification of data consistency."
        },
        {
          "letter": "e",
          "text": "Associating the internal file variable with an external file",
          "is_correct": false,
          "explanation": "That is part of the standard file processing sequence. Correct: Verification of data consistency."
        }
      ],
      "correct_answer": "c",
      "images": [],
      "status": "Incorrect"
    },
    {
      "question_number": 11,
      "question_text": "For a binary data file, with sequential organization, records can be deleted:",
      "answers": [
        {
          "letter": "a",
          "text": "After the file is closed, to avoid corrupting the data.",
          "is_correct": false,
          "explanation": "Deletion is not supported at all for this file type. Correct: This operation is not defined for this type of file organization.."
        },
        {
          "letter": "b",
          "text": "This operation is not defined for this type of file organization.",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "c",
          "text": "After the other operations are completed, but before closing the file.",
          "is_correct": false,
          "explanation": "The operation simply does not exist for sequential binary files, so timing is irrelevant. Correct: This operation is not defined for this type of file organization.."
        },
        {
          "letter": "d",
          "text": "When they are no longer needed.",
          "is_correct": false,
          "explanation": "There is no delete operation. To remove data, you must rewrite the whole file. Correct: This operation is not defined for this type of file organization.."
        },
        {
          "letter": "e",
          "text": "Only when the processor is not busy with other operations.",
          "is_correct": false,
          "explanation": "Processor state does not matter; the operation is not defined. Correct: This operation is not defined for this type of file organization.."
        }
      ],
      "correct_answer": "b",
      "images": [],
      "status": "Incorrect"
    },
    {
      "question_number": 12,
      "question_text": "Which of the following is not a typical role for text files in relation to data processing applications:",
      "answers": [
        {
          "letter": "a",
          "text": "Data input file",
          "is_correct": false,
          "explanation": "That is a common role for text files. Correct: Data file to be processed."
        },
        {
          "letter": "b",
          "text": "Data file to be processed",
          "is_correct": true,
          "explanation": "Text files are for reports, input, or data exchange. The primary data file an app processes is usually binary. Correct: Data file to be processed."
        },
        {
          "letter": "c",
          "text": "Data transfer between applications",
          "is_correct": false,
          "explanation": "That is a common role for text files. Correct: Data file to be processed."
        },
        {
          "letter": "d",
          "text": "All other answers are correct",
          "is_correct": false,
          "explanation": "One role is not typical, so 'all' is wrong. Correct: Data file to be processed."
        },
        {
          "letter": "e",
          "text": "Final report file",
          "is_correct": false,
          "explanation": "That is a common role for text files. Correct: Data file to be processed."
        }
      ],
      "correct_answer": "b",
      "images": [],
      "status": "Incorrect"
    },
    {
      "question_number": 13,
      "question_text": "In C the end of a file is detected",
      "answers": [
        {
          "letter": "a",
          "text": "By a special system function",
          "is_correct": false,
          "explanation": "C has no dedicated system call just for EOF. You find out when a read fails. Correct: By attempting to read after the last record."
        },
        {
          "letter": "b",
          "text": "By counting the remaining records in the file",
          "is_correct": false,
          "explanation": "C streams do not tell you how many records remain ahead of time. Correct: By attempting to read after the last record."
        },
        {
          "letter": "c",
          "text": "By reading the last record",
          "is_correct": false,
          "explanation": "Reading the last record succeeds; you only know it was the last when the next read fails. Correct: By attempting to read after the last record."
        },
        {
          "letter": "d",
          "text": "By attempting to read after the last record",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "e",
          "text": "By calling feof()",
          "is_correct": false,
          "explanation": "feof() only reports a previous failed read; it does not detect EOF proactively. Correct: By attempting to read after the last record."
        }
      ],
      "correct_answer": "d",
      "images": [],
      "status": "Incorrect"
    },
    {
      "question_number": 14,
      "question_text": "Which of the following is not a standard text file associated with an external device in C:",
      "answers": [
        {
          "letter": "a",
          "text": "stdaxn",
          "is_correct": true,
          "explanation": "stdaxn does not exist. The real ones are stdin, stdout, stderr, stdaux, and stdprn. Correct: stdaxn."
        },
        {
          "letter": "b",
          "text": "stderr",
          "is_correct": false,
          "explanation": "That is a real predefined C stream. Correct: stdaxn."
        },
        {
          "letter": "c",
          "text": "stdin",
          "is_correct": false,
          "explanation": "That is a real predefined C stream. Correct: stdaxn."
        },
        {
          "letter": "d",
          "text": "stdaux",
          "is_correct": false,
          "explanation": "That is a real predefined C stream. Correct: stdaxn."
        },
        {
          "letter": "e",
          "text": "stdout",
          "is_correct": false,
          "explanation": "That is a real predefined C stream. Correct: stdaxn."
        }
      ],
      "correct_answer": "a",
      "images": [],
      "status": "Correct"
    },
    {
      "question_number": 15,
      "question_text": "When a consultation operation produces a large amount of data as results, it should be:",
      "answers": [
        {
          "letter": "a",
          "text": "Displayed on screen and written to a text file",
          "is_correct": false,
          "explanation": "Correct."
        },
        {
          "letter": "b",
          "text": "All the other answers are correct",
          "is_correct": false,
          "explanation": "Writing to a file is the recommended approach; 'all' is too broad. Correct: Written to a text file."
        },
        {
          "letter": "c",
          "text": "Written to a text file",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "d",
          "text": "Displayed on the screen",
          "is_correct": false,
          "explanation": "Large output on screen is hard to review. Saving to a text file is the standard practice. Correct: Written to a text file."
        },
        {
          "letter": "e",
          "text": "None of the other answers is correct",
          "is_correct": false,
          "explanation": "Writing to a text file is valid and recommended. Correct: Written to a text file."
        }
      ],
      "correct_answer": "c",
      "images": [],
      "status": "Correct"
    },
    {
      "question_number": 16,
      "question_text": "What verifications must be performed on each record of a relative file when working in sequential access?",
      "answers": [
        {
          "letter": "a",
          "text": "Verification of key uniqueness.",
          "is_correct": false,
          "explanation": "Relative keys are positions, not data values. Uniqueness of data is irrelevant here. Correct: Verification of record validity.."
        },
        {
          "letter": "b",
          "text": "verification of key value against file size and verification of record validity.",
          "is_correct": false,
          "explanation": "Correct."
        },
        {
          "letter": "c",
          "text": "No checks are needed.",
          "is_correct": false,
          "explanation": "You still need to check whether each slot contains a valid record or is marked deleted. Correct: Verification of record validity.."
        },
        {
          "letter": "d",
          "text": "Verification of record validity.",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "e",
          "text": "Verification of key value against file size.",
          "is_correct": false,
          "explanation": "Sequential traversal naturally stops at the file end, so key-range checks are unnecessary. Correct: Verification of record validity.."
        }
      ],
      "correct_answer": "d",
      "images": [],
      "status": "Incorrect"
    },
    {
      "question_number": 17,
      "question_text": "Which of the following can be used as a relative key for a relative file with information about students:",
      "answers": [
        {
          "letter": "a",
          "text": "ATP grade",
          "is_correct": false,
          "explanation": "A relative key must be a contiguous integer interval. Dates, heights, grades, and personal codes have gaps, repeats, or non-numeric parts. Correct: None of them."
        },
        {
          "letter": "b",
          "text": "Height (in cm)",
          "is_correct": false,
          "explanation": "A relative key must be a contiguous integer interval. Dates, heights, grades, and personal codes have gaps, repeats, or non-numeric parts. Correct: None of them."
        },
        {
          "letter": "c",
          "text": "Date of birth",
          "is_correct": false,
          "explanation": "A relative key must be a contiguous integer interval. Dates, heights, grades, and personal codes have gaps, repeats, or non-numeric parts. Correct: None of them."
        },
        {
          "letter": "d",
          "text": "Personal number / code (from national ID)",
          "is_correct": false,
          "explanation": "A relative key must be a contiguous integer interval. Dates, heights, grades, and personal codes have gaps, repeats, or non-numeric parts. Correct: None of them."
        },
        {
          "letter": "e",
          "text": "None of them",
          "is_correct": true,
          "explanation": "Correct."
        }
      ],
      "correct_answer": "e",
      "images": [],
      "status": "Incorrect"
    },
    {
      "question_number": 18,
      "question_text": "Which of the following are true for a relative file: 1) deletion of records is not possible, 2) deletion of records is a logical operation (not physical), 3) deletion or records is a physical operation, 4) deletion of records is in fact a modification of the status indicator, 5) deletion of records can not be reversed.",
      "answers": [
        {
          "letter": "a",
          "text": "1, 3, 5",
          "is_correct": false,
          "explanation": "Deletion is possible and logical (flag-based), and it can be reversed. So 1, 3, 5 are all false. Correct: 2, 4."
        },
        {
          "letter": "b",
          "text": "1",
          "is_correct": false,
          "explanation": "Deletion is definitely possible in relative files. Correct: 2, 4."
        },
        {
          "letter": "c",
          "text": "2, 4",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "d",
          "text": "2, 4, 5",
          "is_correct": false,
          "explanation": "Because deletion is just a flag change, it can be reversed by resetting the flag. Correct: 2, 4."
        },
        {
          "letter": "e",
          "text": "3",
          "is_correct": false,
          "explanation": "Deletion is logical, not physical. The record stays; only its status flag changes. Correct: 2, 4."
        }
      ],
      "correct_answer": "c",
      "images": [],
      "status": "Incorrect"
    },
    {
      "question_number": 19,
      "question_text": "What verifications must be performed before processing of each record of a relative file when working in direct access?",
      "answers": [
        {
          "letter": "a",
          "text": "Verification of key value against file size and verification of record validity.",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "b",
          "text": "Relative files do not use keys.",
          "is_correct": false,
          "explanation": "Relative files use a relative key (record number) to locate data directly. Correct: Verification of key value against file size and verification of record validity.."
        },
        {
          "letter": "c",
          "text": "No verification is needed.",
          "is_correct": false,
          "explanation": "You must check the key is within bounds and the slot is not empty/deleted. Correct: Verification of key value against file size and verification of record validity.."
        },
        {
          "letter": "d",
          "text": "Verification of record validity.",
          "is_correct": false,
          "explanation": "Checking only validity is not enough; you also need to check the key is within the file size. Correct: Verification of key value against file size and verification of record validity.."
        },
        {
          "letter": "e",
          "text": "Verification of key value against file size.",
          "is_correct": false,
          "explanation": "Checking only the key range is not enough; the slot might be empty or deleted. Correct: Verification of key value against file size and verification of record validity.."
        }
      ],
      "correct_answer": "a",
      "images": [],
      "status": "Incorrect"
    },
    {
      "question_number": 20,
      "question_text": "A relative key must be:",
      "answers": [
        {
          "letter": "a",
          "text": "A number from an interval of Z (integer numbers)",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "b",
          "text": "A number from R (real numbers)",
          "is_correct": false,
          "explanation": "Positions must be whole integers (Z), not real numbers (R). Correct: A number from an interval of Z (integer numbers)."
        },
        {
          "letter": "c",
          "text": "A number",
          "is_correct": false,
          "explanation": "A relative key is an integer position in a valid interval. Correct: A number from an interval of Z (integer numbers)."
        },
        {
          "letter": "d",
          "text": "A string",
          "is_correct": false,
          "explanation": "Relative keys are integer positions, not strings. Correct: A number from an interval of Z (integer numbers)."
        },
        {
          "letter": "e",
          "text": "An alpha-numerical string",
          "is_correct": false,
          "explanation": "Relative keys are integer positions, not strings. Correct: A number from an interval of Z (integer numbers)."
        }
      ],
      "correct_answer": "a",
      "images": [],
      "status": "Incorrect"
    },
    {
      "question_number": 21,
      "question_text": "Which of the following is a data validation level?",
      "answers": [
        {
          "letter": "a",
          "text": "Record level",
          "is_correct": false,
          "explanation": "Validation can occur at field, record, file, or group-of-records level. Correct: All other answers are correct."
        },
        {
          "letter": "b",
          "text": "Group of records",
          "is_correct": false,
          "explanation": "Validation can occur at field, record, file, or group-of-records level. Correct: All other answers are correct."
        },
        {
          "letter": "c",
          "text": "All other answers are correct",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "d",
          "text": "Field level",
          "is_correct": false,
          "explanation": "Validation can occur at field, record, file, or group-of-records level. Correct: All other answers are correct."
        },
        {
          "letter": "e",
          "text": "File (collection) level",
          "is_correct": false,
          "explanation": "Validation can occur at field, record, file, or group-of-records level. Correct: All other answers are correct."
        }
      ],
      "correct_answer": "c",
      "images": [],
      "status": "Correct"
    },
    {
      "question_number": 22,
      "question_text": "How does a recursive function ensure a finite chain of self-calls?",
      "answers": [
        {
          "letter": "a",
          "text": "A decision on making a new self-call is made based on the number of previous steps performed",
          "is_correct": false,
          "explanation": "Recursion stops when the problem shrinks to a base case, not by counting past steps. Correct: Each self-call solves a simpler problem, until a trivial problem is reached."
        },
        {
          "letter": "b",
          "text": "Each self-call solves a simpler problem, until a trivial problem is reached",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "c",
          "text": "There is no need to verify this, the computer stops the chain of self-calls when the stack segment is full",
          "is_correct": false,
          "explanation": "Stack overflow is a crash, not a valid stopping strategy. Recursion must reach a base case first. Correct: Each self-call solves a simpler problem, until a trivial problem is reached."
        },
        {
          "letter": "d",
          "text": "A parameter is used to limit the number of self-calls",
          "is_correct": false,
          "explanation": "A depth limit prevents stack overflow but is not the fundamental termination mechanism. Correct: Each self-call solves a simpler problem, until a trivial problem is reached."
        },
        {
          "letter": "e",
          "text": "Calls are counted and a limited number of iterations is permitted",
          "is_correct": false,
          "explanation": "Artificial limits can abort early without solving the problem. Correct: Each self-call solves a simpler problem, until a trivial problem is reached."
        }
      ],
      "correct_answer": "b",
      "images": [],
      "status": "Correct"
    },
    {
      "question_number": 23,
      "question_text": "An iterative algorithm may implemented as:",
      "answers": [
        {
          "letter": "a",
          "text": "Recursive function or iterative function",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "b",
          "text": "Recursive function",
          "is_correct": false,
          "explanation": "Iterative algorithms can be written recursively too. 'Only recursive' is too restrictive. Correct: Recursive function or iterative function."
        },
        {
          "letter": "c",
          "text": "Iterative function",
          "is_correct": false,
          "explanation": "While the natural choice is iterative, a recursive rewrite is always possible. Correct: Recursive function or iterative function."
        },
        {
          "letter": "d",
          "text": "None of the other answers are correct",
          "is_correct": false,
          "explanation": "An iterative algorithm can be coded either iteratively or recursively. Correct: Recursive function or iterative function."
        },
        {
          "letter": "e",
          "text": "The type of function depends on the algorithm",
          "is_correct": false,
          "explanation": "It is a design choice, not dictated by the algorithm. Both forms are possible. Correct: Recursive function or iterative function."
        }
      ],
      "correct_answer": "a",
      "images": [],
      "status": "Correct"
    },
    {
      "question_number": 24,
      "question_text": "Which is the preferred validation method for a data field and why?",
      "answers": [
        {
          "letter": "a",
          "text": "Language specific methods, because they are designed for this",
          "is_correct": false,
          "explanation": "Language parsers often crash on bad input. Reading as a string first lets you inspect and sanitize before conversion. Correct: Universal method: read as string then verify/convert, because reading is safe and permits any kind of validation."
        },
        {
          "letter": "b",
          "text": "Universal method: read as string then verify/convert, because string theory is modern",
          "is_correct": false,
          "explanation": "That justification is nonsense. The real reason is safety and flexibility. Correct: Universal method: read as string then verify/convert, because reading is safe and permits any kind of validation."
        },
        {
          "letter": "c",
          "text": "The one that you know how to implement, because you know it",
          "is_correct": false,
          "explanation": "Familiarity is not a valid criterion. You need safety and flexibility, not comfort. Correct: Universal method: read as string then verify/convert, because reading is safe and permits any kind of validation."
        },
        {
          "letter": "d",
          "text": "Universal method: read as string then verify/convert, because reading is safe and permits any kind of validation",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "e",
          "text": "Language specific because it is easier to implement",
          "is_correct": false,
          "explanation": "Reading as a string first prevents crashes and supports any validation logic. Correct: Universal method: read as string then verify/convert, because reading is safe and permits any kind of validation."
        }
      ],
      "correct_answer": "d",
      "images": [],
      "status": "Correct"
    },
    {
      "question_number": 25,
      "question_text": "Which of the following is not a possible validation type at field level?",
      "answers": [
        {
          "letter": "a",
          "text": "Value or domain",
          "is_correct": false,
          "explanation": "That is a standard field-level validation check. Correct: Correlation with other fields."
        },
        {
          "letter": "b",
          "text": "Correlation with other fields",
          "is_correct": true,
          "explanation": "Comparing multiple fields is record-level validation, not field-level. Correct: Correlation with other fields."
        },
        {
          "letter": "c",
          "text": "Existence",
          "is_correct": false,
          "explanation": "That is a standard field-level validation check. Correct: Correlation with other fields."
        },
        {
          "letter": "d",
          "text": "Predefined complex format",
          "is_correct": false,
          "explanation": "That is a standard field-level validation check. Correct: Correlation with other fields."
        },
        {
          "letter": "e",
          "text": "Nature",
          "is_correct": false,
          "explanation": "That is a standard field-level validation check. Correct: Correlation with other fields."
        }
      ],
      "correct_answer": "b",
      "images": [],
      "status": "Correct"
    },
    {
      "question_number": 26,
      "question_text": "An iterative algorithm is:",
      "answers": [
        {
          "letter": "a",
          "text": "An algorithm that does not call on itself",
          "is_correct": false,
          "explanation": "Avoiding self-calls is a property, not the definition. The core idea is repeated operations on new data. Correct: A sequence of operations that are repeated, working on new data each time."
        },
        {
          "letter": "b",
          "text": "An algorithm implemented as an iterative function",
          "is_correct": false,
          "explanation": "That describes an implementation, not the concept. Iteration is the broader idea of repeating operations on successive data. Correct: A sequence of operations that are repeated, working on new data each time."
        },
        {
          "letter": "c",
          "text": "A sequence of operations that are repeated, working on new data each time",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "d",
          "text": "An utopia, all algorithms are in fact recursive.",
          "is_correct": false,
          "explanation": "Iteration is real and distinct. Many algorithms (e.g., linear search) are naturally iterative. Correct: A sequence of operations that are repeated, working on new data each time."
        },
        {
          "letter": "e",
          "text": "An algorithm that is implemented using a for loop",
          "is_correct": false,
          "explanation": "Loops are one implementation vehicle, but iteration can use while-loops or even tail-recursion. Correct: A sequence of operations that are repeated, working on new data each time."
        }
      ],
      "correct_answer": "c",
      "images": [],
      "status": "Correct"
    },
    {
      "question_number": 27,
      "question_text": "Which of the following criteria may favor an recursive implementation over an iterative implementation for the same algorithm",
      "answers": [
        {
          "letter": "a",
          "text": "Memory consumption",
          "is_correct": false,
          "explanation": "Recursion uses more memory because each call adds a stack frame. Iteration reuses fixed variables. Correct: Ease of implementation."
        },
        {
          "letter": "b",
          "text": "None of the mentioned factors",
          "is_correct": false,
          "explanation": "Correct."
        },
        {
          "letter": "c",
          "text": "All mentioned factors",
          "is_correct": false,
          "explanation": "Speed and memory usually disfavor recursion, so not all factors favor it. Correct: Ease of implementation."
        },
        {
          "letter": "d",
          "text": "Ease of implementation",
          "is_correct": true,
          "explanation": "While some problems are simpler recursively, speed and memory generally favor iteration, so ease alone is not a universal reason. Correct: Ease of implementation."
        },
        {
          "letter": "e",
          "text": "Speed of execution",
          "is_correct": false,
          "explanation": "Recursion is usually slower than iteration due to function call overhead. Correct: Ease of implementation."
        }
      ],
      "correct_answer": "d",
      "images": [],
      "status": "Correct"
    },
    {
      "question_number": 28,
      "question_text": "What formula is implemented in a recursive algorithm?",
      "answers": [
        {
          "letter": "a",
          "text": "The formula depends on the problem being solved",
          "is_correct": false,
          "explanation": "The specific formulas differ, but the pattern is fixed: recursive for non-trivial, start for trivial. Correct: Recursive formula while the problem is not trivial, and start formula when the problem becomes trivial."
        },
        {
          "letter": "b",
          "text": "Recursive formula while the problem is trivial, and start formula when the problem becomes non-trivial.",
          "is_correct": false,
          "explanation": "This reverses the roles. The recursive step handles non-trivial cases; the start (base) formula handles trivial ones. Correct: Recursive formula while the problem is not trivial, and start formula when the problem becomes trivial."
        },
        {
          "letter": "c",
          "text": "None of the other answers are correct",
          "is_correct": false,
          "explanation": "Recursion uses the recursive formula on non-trivial cases and the start formula on the base case. Correct: Recursive formula while the problem is not trivial, and start formula when the problem becomes trivial."
        },
        {
          "letter": "d",
          "text": "Recursive formula while the problem is not trivial, and start formula when the problem becomes trivial.",
          "is_correct": true,
          "explanation": "Correct. The recursive formula is applied while the problem is not trivial (base case not yet reached), and the start/base formula is used when the problem becomes trivial."
        },
        {
          "letter": "e",
          "text": "Start formula while the problem is not trivial, and recursive formula when the problem becomes trivial.",
          "is_correct": false,
          "explanation": "That reverses the roles. The recursive step handles non-trivial cases; the start (base) formula handles trivial ones. Correct: Recursive formula while the problem is not trivial, and start formula when the problem becomes trivial."
        }
      ],
      "correct_answer": "d",
      "images": [],
      "status": "Correct"
    },
    {
      "question_number": 29,
      "question_text": "Data validation involves:",
      "answers": [
        {
          "letter": "a",
          "text": "All other answers are correct",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "b",
          "text": "Methods for correcting incorrect data, if possible",
          "is_correct": false,
          "explanation": "Data validation includes conditions, error signaling, corrective actions, and fixes when possible. Correct: All other answers are correct."
        },
        {
          "letter": "c",
          "text": "Actions to be taken if the data is deemed incorrect",
          "is_correct": false,
          "explanation": "Data validation includes conditions, error signaling, corrective actions, and fixes when possible. Correct: All other answers are correct."
        },
        {
          "letter": "d",
          "text": "Conditions that must be met be the data",
          "is_correct": false,
          "explanation": "Data validation includes conditions, error signaling, corrective actions, and fixes when possible. Correct: All other answers are correct."
        },
        {
          "letter": "e",
          "text": "A way to signal errors",
          "is_correct": false,
          "explanation": "Data validation includes conditions, error signaling, corrective actions, and fixes when possible. Correct: All other answers are correct."
        }
      ],
      "correct_answer": "a",
      "images": [],
      "status": "Incorrect"
    },
    {
      "question_number": 30,
      "question_text": "A recursive algorithm is:",
      "answers": [
        {
          "letter": "a",
          "text": "An algorithm that calls itself",
          "is_correct": false,
          "explanation": "That describes a recursive function, not the recursive algorithm concept. Recursion repeats operations on simpler sub-problems derived from previous results. Correct: A sequence of operations that is repeated, working each time on results of previous repetition(s)."
        },
        {
          "letter": "b",
          "text": "A sequence of operations that is repeated, working each time on results of previous repetition(s)",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "c",
          "text": "An algorithm that must end after a finite number of repetitions",
          "is_correct": false,
          "explanation": "Termination is required of all algorithms, not unique to recursion. Correct: A sequence of operations that is repeated, working each time on results of previous repetition(s)."
        },
        {
          "letter": "d",
          "text": "A sequence of operations that is repeated a predetermined number of times",
          "is_correct": false,
          "explanation": "A fixed count is iteration (for-loops). Recursion stops when the problem becomes trivial, which depends on input. Correct: A sequence of operations that is repeated, working each time on results of previous repetition(s)."
        },
        {
          "letter": "e",
          "text": "An algorithm implemented as a recursive function",
          "is_correct": false,
          "explanation": "That confuses the algorithm with its implementation. Recursion is a problem-solving method, not just a function calling itself. Correct: A sequence of operations that is repeated, working each time on results of previous repetition(s)."
        }
      ],
      "correct_answer": "b",
      "images": [],
      "status": "Incorrect"
    },
    {
      "question_number": 31,
      "question_text": "Which of the following is not a characteristic of problems that can be solved using divide et impera method?",
      "answers": [
        {
          "letter": "a",
          "text": "the decomposition process ends after a finite number of steps, with trivial problems. ",
          "is_correct": false,
          "explanation": "That is actually a valid D&C characteristic. Correct: they are always divide into 2 \"smaller\" problems."
        },
        {
          "letter": "b",
          "text": "the \"smaller\" problems may overlap",
          "is_correct": false,
          "explanation": "That is actually a valid D&C characteristic. Correct: they are always divide into 2 \"smaller\" problems."
        },
        {
          "letter": "c",
          "text": "they are always divide into 2 \"smaller\" problems",
          "is_correct": true,
          "explanation": "D&C can split into any number of subproblems, not strictly two. Examples: 3-way merge sort, Strassen's multiplication. Correct: they are always divide into 2 \"smaller\" problems."
        },
        {
          "letter": "d",
          "text": "solutions of the \"smaller\" problems are combined to give the solution of the original problem",
          "is_correct": false,
          "explanation": "That is actually a valid D&C characteristic. Correct: they are always divide into 2 \"smaller\" problems."
        },
        {
          "letter": "e",
          "text": "may be divided into problems of the same type but with lower complexity, or primitive problems",
          "is_correct": false,
          "explanation": "That is actually a valid D&C characteristic. Correct: they are always divide into 2 \"smaller\" problems."
        }
      ],
      "correct_answer": "c",
      "images": [],
      "status": "Incorrect"
    },
    {
      "question_number": 32,
      "question_text": "Which sorting method does not use divide et impera?",
      "answers": [
        {
          "letter": "a",
          "text": "Shell sort",
          "is_correct": false,
          "explanation": "Shell sort is incremental, but bubble sort is the clearer non-D&C example among the choices. Correct: Bubble sort."
        },
        {
          "letter": "b",
          "text": "Bubble sort",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "c",
          "text": "Insert sort",
          "is_correct": false,
          "explanation": "Insertion sort is incremental, but bubble sort is the most commonly cited non-D&C sort. Correct: Bubble sort."
        },
        {
          "letter": "d",
          "text": "Quick sort",
          "is_correct": false,
          "explanation": "Those are classic D&C sorts that recursively partition or split the array. Correct: Bubble sort."
        },
        {
          "letter": "e",
          "text": "Merge sort",
          "is_correct": false,
          "explanation": "Those are classic D&C sorts that recursively partition or split the array. Correct: Bubble sort."
        }
      ],
      "correct_answer": "b",
      "images": [],
      "status": "Correct"
    },
    {
      "question_number": 33,
      "question_text": "When solving a problem using the divide et impera method, the problem is divided into:",
      "answers": [
        {
          "letter": "a",
          "text": "4 smaller problems of the same type",
          "is_correct": false,
          "explanation": "The split count is not rigidly fixed. It depends on the problem and can be any number of non-overlapping subproblems. Correct: none of the other answers are correct."
        },
        {
          "letter": "b",
          "text": "4 partially overlapping smaller problems",
          "is_correct": false,
          "explanation": "The split count is not rigidly fixed. It depends on the problem and can be any number of non-overlapping subproblems. Correct: none of the other answers are correct."
        },
        {
          "letter": "c",
          "text": "none of the other answers are correct",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "d",
          "text": "one smaller problem of the same type and one trivial problem",
          "is_correct": false,
          "explanation": "D&C does not enforce a fixed split pattern. Correct: none of the other answers are correct."
        },
        {
          "letter": "e",
          "text": "2 smaller problems of the same type",
          "is_correct": false,
          "explanation": "The split count is not rigidly fixed. It depends on the problem and can be any number of non-overlapping subproblems. Correct: none of the other answers are correct."
        }
      ],
      "correct_answer": "c",
      "images": [],
      "status": "Incorrect"
    },
    {
      "question_number": 34,
      "question_text": "Which of the following statements about the divide et impera method is true?",
      "answers": [
        {
          "letter": "a",
          "text": "It is a recursive algorithm so it must be implemented using a recursive function.",
          "is_correct": true,
          "explanation": "Divide-and-conquer can be written iteratively with an explicit stack. Recursion is common but not mandatory. Correct: It is a recursive algorithm so it must be implemented using a recursive function.."
        },
        {
          "letter": "b",
          "text": "None of the other answers is true.",
          "is_correct": false,
          "explanation": "One answer is correct: it is recursive and can be implemented either way. Correct: It is a recursive algorithm so it must be implemented using a recursive function.."
        },
        {
          "letter": "c",
          "text": "It is a recursive algorithm and can be implemented using an iterative or recursive function.",
          "is_correct": false,
          "explanation": "Correct."
        },
        {
          "letter": "d",
          "text": "It is an iterative algorithm and can be implemented using an iterative or a recursive function.",
          "is_correct": false,
          "explanation": "This imposes an unnecessary implementation constraint. Correct: It is a recursive algorithm so it must be implemented using a recursive function.."
        },
        {
          "letter": "e",
          "text": "it is an iterative algorithm and must be implemented using an iterative function.",
          "is_correct": false,
          "explanation": "Divide-and-conquer is fundamentally recursive in nature. Saying it must be iterative is wrong. Correct: It is a recursive algorithm so it must be implemented using a recursive function.."
        }
      ],
      "correct_answer": "a",
      "images": [],
      "status": "Incorrect"
    },
    {
      "question_number": 35,
      "question_text": "Which is true about counting sort: 1) has a linear growth order, 2) performs the lowest number of comparisons among all sorting algorithms, 3) does not compare elements, 4) uses additional memory space for counter vector, 5) can be used to sort a set of elements of any kind, 6)is the best sorting algorithm, because it has linear complexity",
      "answers": [
        {
          "letter": "a",
          "text": "2, 5, 6",
          "is_correct": false,
          "explanation": "Counting sort does not compare elements at all, and it is not the best general algorithm because it only works for bounded integer keys. Correct: 1, 3, 4."
        },
        {
          "letter": "b",
          "text": "2, 4, 5",
          "is_correct": false,
          "explanation": "Counting sort does not compare elements, so 'lowest number of comparisons' is misleading. Also, it is not universally the best algorithm. Correct: 1, 3, 4."
        },
        {
          "letter": "c",
          "text": "1, 3, 4",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "d",
          "text": "3, 4, 6",
          "is_correct": false,
          "explanation": "While counting sort uses extra memory and is linear, it is not the best general sorting algorithm due to its key constraints. Correct: 1, 3, 4."
        }
      ],
      "correct_answer": "c",
      "images": [],
      "status": "Correct"
    },
    {
      "question_number": 36,
      "question_text": "A PC can do a job better than a supercomputer at doing the same job:",
      "answers": [
        {
          "letter": "a",
          "text": "if it uses a better algorithm",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "b",
          "text": "if it is overclocked",
          "is_correct": false,
          "explanation": "Overclocking gives marginal speedups and cannot compensate for exponential algorithmic gaps. Correct: if it uses a better algorithm."
        },
        {
          "letter": "c",
          "text": "always",
          "is_correct": false,
          "explanation": "Supercomputers excel at brute force, but a smarter algorithm can still win on modest hardware. Correct: if it uses a better algorithm."
        },
        {
          "letter": "d",
          "text": "never",
          "is_correct": false,
          "explanation": "A smarter algorithm on a PC can beat a naive O(n²) algorithm on a supercomputer for large enough inputs. Correct: if it uses a better algorithm."
        },
        {
          "letter": "e",
          "text": "it the supercomputer has a bug",
          "is_correct": false,
          "explanation": "Relying on bugs is not a valid basis for comparisons. Correct: if it uses a better algorithm."
        }
      ],
      "correct_answer": "a",
      "images": [],
      "status": "Correct"
    },
    {
      "question_number": 37,
      "question_text": "The reason for randomizing quicksort is:",
      "answers": [
        {
          "letter": "a",
          "text": "avoid worst case scenario and near-worst case scenario",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "b",
          "text": "to make it more complicated",
          "is_correct": false,
          "explanation": "Randomization adds minimal code but prevents predictable worst-case behavior. Correct: avoid worst case scenario and near-worst case scenario."
        },
        {
          "letter": "c",
          "text": "switch first element with a random one",
          "is_correct": false,
          "explanation": "That describes a tactic, not the purpose. The purpose is to avoid deterministic worst-case patterns. Correct: avoid worst case scenario and near-worst case scenario."
        },
        {
          "letter": "d",
          "text": "to mix good choices with bad choices",
          "is_correct": false,
          "explanation": "The goal is not to balance good and bad pivots, but to make worst-case inputs statistically unlikely. Correct: avoid worst case scenario and near-worst case scenario."
        },
        {
          "letter": "e",
          "text": "confuse students",
          "is_correct": false,
          "explanation": "Randomization is a serious probabilistic technique, not a prank. Correct: avoid worst case scenario and near-worst case scenario."
        }
      ],
      "correct_answer": "a",
      "images": [],
      "status": "Correct"
    },
    {
      "question_number": 38,
      "question_text": "Best general sorting algorithm is",
      "answers": [
        {
          "letter": "a",
          "text": "they are equally good, they all finish sorting faster than we can see.",
          "is_correct": false,
          "explanation": "Algorithms differ radically in complexity. O(n log n) sorts dramatically outperform O(n²) sorts on large inputs. Correct: merge sort / heap sort / quick sort  because they have the lowest complexity."
        },
        {
          "letter": "b",
          "text": "bubble sort, because this is the one I know",
          "is_correct": false,
          "explanation": "Familiarity does not determine quality. Bubble sort has O(n²) complexity and is terrible for large datasets. Correct: merge sort / heap sort / quick sort  because they have the lowest complexity."
        },
        {
          "letter": "c",
          "text": "merge sort / heap sort / quick sort  because they have the lowest complexity",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "d",
          "text": "Counting sort, because it has linear complexity",
          "is_correct": false,
          "explanation": "Counting sort is O(n) but not general-purpose: it needs bounded integer keys and extra memory. Correct: merge sort / heap sort / quick sort  because they have the lowest complexity."
        },
        {
          "letter": "e",
          "text": "insert sort for short vectors",
          "is_correct": false,
          "explanation": "Insertion sort is great for tiny inputs, but not the best general-purpose algorithm for large arbitrary datasets. Correct: merge sort / heap sort / quick sort  because they have the lowest complexity."
        }
      ],
      "correct_answer": "c",
      "images": [],
      "status": "Correct"
    },
    {
      "question_number": 39,
      "question_text": "Which of the following factors impact the running time: 1) number of primitive operations, 2) mouse type (wire/wireless), 3) input size, 4) shoes type (running/hiking), 5) location of data (internal/external), 6) length of track, 7) weather, 8) hardware?",
      "answers": [
        {
          "letter": "a",
          "text": "1, 3, 4, 5, 8",
          "is_correct": false,
          "explanation": "Algorithmic running time is determined by operations, input size, data location, and hardware. Correct: 1, 3, 5, 8."
        },
        {
          "letter": "b",
          "text": "All of them",
          "is_correct": false,
          "explanation": "Not all items affect algorithmic running time; many are irrelevant external conditions. Correct: 1, 3, 5, 8."
        },
        {
          "letter": "c",
          "text": "2, 4, 6, 7",
          "is_correct": false,
          "explanation": "Algorithmic running time is determined by operations, input size, data location, and hardware. Correct: 1, 3, 5, 8."
        },
        {
          "letter": "d",
          "text": "1, 3, 5, 8",
          "is_correct": true,
          "explanation": "Algorithmic running time is determined by operations, input size, data location, and hardware. Correct: 1, 3, 5, 8."
        }
      ],
      "correct_answer": "d",
      "images": [],
      "status": "Correct"
    },
    {
      "question_number": 40,
      "question_text": "In order to sort a vector, heap sort represents it as:",
      "answers": [
        {
          "letter": "a",
          "text": "a tree",
          "is_correct": false,
          "explanation": "A heap is conceptually a complete binary tree, but heap sort uses the original array in-place with index arithmetic. No separate tree is allocated. Correct: no additional representation; it sorts the vector in-place."
        },
        {
          "letter": "b",
          "text": "a balanced tree",
          "is_correct": false,
          "explanation": "A heap is conceptually a complete binary tree, but heap sort uses the original array in-place with index arithmetic. No separate tree is allocated. Correct: no additional representation; it sorts the vector in-place."
        },
        {
          "letter": "c",
          "text": "a binary tree",
          "is_correct": false,
          "explanation": "A heap is conceptually a complete binary tree, but heap sort uses the original array in-place with index arithmetic. No separate tree is allocated. Correct: no additional representation; it sorts the vector in-place."
        },
        {
          "letter": "d",
          "text": "no additional representation; it sorts the vector in-place",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "e",
          "text": "a complete binary tree",
          "is_correct": false,
          "explanation": "A heap is conceptually a complete binary tree, but heap sort uses the original array in-place with index arithmetic. No separate tree is allocated. Correct: no additional representation; it sorts the vector in-place."
        }
      ],
      "correct_answer": "d",
      "images": [],
      "status": "Correct"
    },
    {
      "question_number": 41,
      "question_text": "Complexity indicators are used to:",
      "answers": [
        {
          "letter": "a",
          "text": "estimate the limits for the running time of an algorithm",
          "is_correct": false,
          "explanation": "While bounds are estimated, the main practical purpose is comparing algorithms. Correct: compare algorithms' quality from the running time point of view."
        },
        {
          "letter": "b",
          "text": "design confusing questions for students",
          "is_correct": false,
          "explanation": "Complexity theory is a serious tool used daily in software engineering, not a student prank. Correct: compare algorithms' quality from the running time point of view."
        },
        {
          "letter": "c",
          "text": "compute the exact running time of an algorithm",
          "is_correct": false,
          "explanation": "Complexity gives asymptotic bounds, not exact clock time, because exact time varies by machine. Correct: compare algorithms' quality from the running time point of view."
        },
        {
          "letter": "d",
          "text": "compare algorithms' quality from the running time point of view",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "e",
          "text": "nothing, it is all just theory",
          "is_correct": false,
          "explanation": "Asymptotic analysis is highly practical for predicting scalability and choosing algorithms. Correct: compare algorithms' quality from the running time point of view."
        }
      ],
      "correct_answer": "d",
      "images": [],
      "status": "Correct"
    },
    {
      "question_number": 42,
      "question_text": "What part(s) of the running time computation can be ignored when comparing algorithms: 1) highest ranking term, 2) lowest ranking term, 3) coefficient of the highest ranking term, 4) coefficients of terms with lowest ranks, 5) all but the highest ranking term,  6) negative terms",
      "answers": [
        {
          "letter": "a",
          "text": "1, 2, 6",
          "is_correct": false,
          "explanation": "The highest-ranking term dominates, and negative terms cancel out, so some parts are indeed ignorable. Correct: 3, 5."
        },
        {
          "letter": "b",
          "text": "2, 4",
          "is_correct": false,
          "explanation": "Lower-order terms and their coefficients become negligible as n grows, so they are commonly ignored. Correct: 3, 5."
        },
        {
          "letter": "c",
          "text": "1",
          "is_correct": false,
          "explanation": "Only the highest-ranking term matters in Big-O, but lower-order terms and coefficients are also ignored. Correct: 3, 5."
        },
        {
          "letter": "d",
          "text": "3, 5",
          "is_correct": true,
          "explanation": "The coefficient of the highest term and all lower-order terms are ignored in Big-O, so this is partially correct but not complete. Correct: 3, 5."
        },
        {
          "letter": "e",
          "text": "none",
          "is_correct": false,
          "explanation": "Correct."
        }
      ],
      "correct_answer": "d",
      "images": [],
      "status": "Incorrect"
    },
    {
      "question_number": 43,
      "question_text": "The relation between growth order and asymptotic efficiency is:",
      "answers": [
        {
          "letter": "a",
          "text": "lower growth order means lower asymptotic efficiency",
          "is_correct": false,
          "explanation": "That reverses the relationship. Lower growth order means fewer operations and better efficiency. Correct: lower growth order means better asymptotic efficiency."
        },
        {
          "letter": "b",
          "text": "lower growth order means better asymptotic efficiency",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "c",
          "text": "higher growth order means better asymptotic efficiency",
          "is_correct": false,
          "explanation": "Higher growth order means slower algorithms for large inputs, which is worse. Correct: lower growth order means better asymptotic efficiency."
        },
        {
          "letter": "d",
          "text": "asymptotic efficiency is proportional to the growth order",
          "is_correct": false,
          "explanation": "Efficiency improves as growth order decreases, so the relationship is inverse, not proportional. Correct: lower growth order means better asymptotic efficiency."
        },
        {
          "letter": "e",
          "text": "there is no relation",
          "is_correct": false,
          "explanation": "Growth order directly determines efficiency. They are tightly related. Correct: lower growth order means better asymptotic efficiency."
        }
      ],
      "correct_answer": "b",
      "images": [],
      "status": "Correct"
    },
    {
      "question_number": 44,
      "question_text": "Which sorting algorithm is better between insert sort and merge sort?",
      "answers": [
        {
          "letter": "a",
          "text": "they are both complicated algorithms, none is better",
          "is_correct": false,
          "explanation": "They have different strengths, but for general large inputs merge sort is asymptotically better. Correct: insert sort."
        },
        {
          "letter": "b",
          "text": "merge sort combined with insert sort for short vectors",
          "is_correct": false,
          "explanation": "Hybrid algorithms are practical, but the question asks for a direct comparison. Correct: insert sort."
        },
        {
          "letter": "c",
          "text": "insert sort",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "d",
          "text": "the one I know to implement",
          "is_correct": false,
          "explanation": "Familiarity does not determine algorithmic superiority. Correct: insert sort."
        },
        {
          "letter": "e",
          "text": "merge sort",
          "is_correct": false,
          "explanation": "Merge sort has O(n log n) complexity, better than insertion sort's O(n²) for large inputs. Correct: insert sort."
        }
      ],
      "correct_answer": "c",
      "images": [],
      "status": "Correct"
    }
  ]
};
