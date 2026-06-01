const QUIZ_DATA_1 = {
  "quiz_title": "ATP_QUIZES1",
  "total_questions": 86,
  "questions": [
    {
      "question_number": 1,
      "question_text": "What is a file?",
      "answers": [
        {
          "letter": "a",
          "text": "An instrument used to finish rough finger nails",
          "is_correct": false,
          "explanation": "That's a physical nail file, not a computer file. Correct: An external data structure."
        },
        {
          "letter": "b",
          "text": "a Functional Interface Linkable Everywhere",
          "is_correct": false,
          "explanation": "That acronym is made up. In CS, a file is stored data outside program memory. Correct: An external data structure."
        },
        {
          "letter": "c",
          "text": "A thin, flat or rounded metal tool with rough surfaces for rubbing wooden or metal objects to make them smooth or to change their shape",
          "is_correct": false,
          "explanation": "That's a physical nail file, not a computer file. Correct: An external data structure."
        },
        {
          "letter": "d",
          "text": "An external data structure",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "e",
          "text": "None of the other answers",
          "is_correct": false,
          "explanation": "Option 'd' is valid: a file is an external data structure. Correct: An external data structure."
        }
      ],
      "correct_answer": "d"
    },
    {
      "question_number": 2,
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
          "text": "Multi-indexed",
          "is_correct": false,
          "explanation": "That is a real file organization method used in databases and file systems. Correct: Ergonomic."
        },
        {
          "letter": "c",
          "text": "Sequential",
          "is_correct": false,
          "explanation": "That is a real file organization method used in databases and file systems. Correct: Ergonomic."
        },
        {
          "letter": "d",
          "text": "Relative",
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
      "correct_answer": "e"
    },
    {
      "question_number": 3,
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
          "text": "positioning records",
          "is_correct": true,
          "explanation": "Positioning (seeking) is a low-level pointer move, not a file processing operation like open/read/write/close. Correct: positioning records."
        },
        {
          "letter": "e",
          "text": "opening a file",
          "is_correct": false,
          "explanation": "That is a standard file processing operation. Correct: positioning records."
        }
      ],
      "correct_answer": "d"
    },
    {
      "question_number": 4,
      "question_text": "The \"empty' spaces in a relative file:",
      "answers": [
        {
          "letter": "a",
          "text": "None of the other answers are correct",
          "is_correct": false,
          "explanation": "Option 'b' is correct: empty slots hold deleted or never-written records. Correct: are deleted records / never written records."
        },
        {
          "letter": "b",
          "text": "are deleted records / never written records",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "c",
          "text": "there are no empty spaces in a relative file",
          "is_correct": false,
          "explanation": "Relative files pre-allocate slots, so empty spaces naturally exist. Correct: are deleted records / never written records."
        },
        {
          "letter": "d",
          "text": "can never be filled",
          "is_correct": false,
          "explanation": "Empty slots can be reused later. They are not permanently locked. Correct: are deleted records / never written records."
        },
        {
          "letter": "e",
          "text": "are valid records waiting to be processed",
          "is_correct": false,
          "explanation": "An empty slot has no data. It is not a 'waiting' record. Correct: are deleted records / never written records."
        }
      ],
      "correct_answer": "b"
    },
    {
      "question_number": 5,
      "question_text": "Which of the following is not a standard position in an open file:",
      "answers": [
        {
          "letter": "a",
          "text": "All other answers",
          "is_correct": false,
          "explanation": "One position listed is non-standard, so 'all' is wrong. Correct: Previous position."
        },
        {
          "letter": "b",
          "text": "End of a file",
          "is_correct": false,
          "explanation": "That is a standard file position in C. Correct: Previous position."
        },
        {
          "letter": "c",
          "text": "Previous position",
          "is_correct": true,
          "explanation": "C standard I/O only supports SEEK_SET (beginning), SEEK_CUR (current), and SEEK_END (end). There is no 'previous position' marker. Correct: Previous position."
        },
        {
          "letter": "d",
          "text": "Beginning of a file",
          "is_correct": false,
          "explanation": "That is a standard file position in C. Correct: Previous position."
        },
        {
          "letter": "e",
          "text": "Current position",
          "is_correct": false,
          "explanation": "That is a standard file position in C. Correct: Previous position."
        }
      ],
      "correct_answer": "c"
    },
    {
      "question_number": 6,
      "question_text": "A sequentially organized data file stored on HD/SSD does not allow:",
      "answers": [
        {
          "letter": "a",
          "text": "Sequential access",
          "is_correct": false,
          "explanation": "Sequential access is exactly what sequential files are designed for. Correct: Direct acces by relative number."
        },
        {
          "letter": "b",
          "text": "Exclusive acces",
          "is_correct": false,
          "explanation": "File locking can give exclusive access regardless of organization. Correct: Direct acces by relative number."
        },
        {
          "letter": "c",
          "text": "None of the other answers are correct",
          "is_correct": false,
          "explanation": "Option 'e' is correct: direct access by relative number is not supported. Correct: Direct acces by relative number."
        },
        {
          "letter": "d",
          "text": "Direct acces at a given position",
          "is_correct": false,
          "explanation": "You can fseek to a byte offset, but not to a logical relative record number. Correct: Direct acces by relative number."
        },
        {
          "letter": "e",
          "text": "Direct acces by relative number",
          "is_correct": true,
          "explanation": "Sequential files store records back-to-back without fixed-size slots or an index, so you cannot jump directly to record number N. Correct: Direct acces by relative number."
        }
      ],
      "correct_answer": "e"
    },
    {
      "question_number": 7,
      "question_text": "An indexed file",
      "answers": [
        {
          "letter": "a",
          "text": "uses an alpha-numerical key to find records",
          "is_correct": false,
          "explanation": "True, but not complete. Indexed files also use a separate index file and are a logical concept. Correct: All other answers are correct."
        },
        {
          "letter": "b",
          "text": "is implemented using two physical files",
          "is_correct": false,
          "explanation": "True, but incomplete. They also use keys and are a logical concept. Correct: All other answers are correct."
        },
        {
          "letter": "c",
          "text": "is not a physical file",
          "is_correct": false,
          "explanation": "True, but incomplete. They also use keys and dual-file implementation. Correct: All other answers are correct."
        },
        {
          "letter": "d",
          "text": "is a logical concept",
          "is_correct": false,
          "explanation": "True, but incomplete. They also use keys and dual-file implementation. Correct: All other answers are correct."
        },
        {
          "letter": "e",
          "text": "All other answers are correct",
          "is_correct": true,
          "explanation": "Correct."
        }
      ],
      "correct_answer": "e"
    },
    {
      "question_number": 8,
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
          "text": "Sequential",
          "is_correct": false,
          "explanation": "That is a recognized standard access method. Correct: Direct, by any field value."
        },
        {
          "letter": "c",
          "text": "Direct, by relative number",
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
      "correct_answer": "e"
    },
    {
      "question_number": 9,
      "question_text": "Which of the following is not a standard text file associated with an external device in C:",
      "answers": [
        {
          "letter": "a",
          "text": "stderr",
          "is_correct": false,
          "explanation": "That is a real predefined C stream. Correct: stdaxn."
        },
        {
          "letter": "b",
          "text": "stdaxn",
          "is_correct": true,
          "explanation": "stdaxn does not exist. The real ones are stdin, stdout, stderr, stdaux, and stdprn. Correct: stdaxn."
        },
        {
          "letter": "c",
          "text": "stdin",
          "is_correct": false,
          "explanation": "That is a real predefined C stream. Correct: stdaxn."
        },
        {
          "letter": "d",
          "text": "stdout",
          "is_correct": false,
          "explanation": "That is a real predefined C stream. Correct: stdaxn."
        },
        {
          "letter": "e",
          "text": "stdaux",
          "is_correct": false,
          "explanation": "That is a real predefined C stream. Correct: stdaxn."
        }
      ],
      "correct_answer": "b"
    },
    {
      "question_number": 10,
      "question_text": "For a binary data file, with sequential organization, records can be deleted:",
      "answers": [
        {
          "letter": "a",
          "text": "When they are no longer needed.",
          "is_correct": false,
          "explanation": "There is no delete operation. To remove data, you must rewrite the whole file. Correct: This operation is not defined for this type of file organization.."
        },
        {
          "letter": "b",
          "text": "After the other operations are completed, but before closing the file.",
          "is_correct": false,
          "explanation": "The operation simply does not exist for sequential binary files, so timing is irrelevant. Correct: This operation is not defined for this type of file organization.."
        },
        {
          "letter": "c",
          "text": "This operation is not defined for this type of file organization.",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "d",
          "text": "After the file is closed, to avoid corrupting the data.",
          "is_correct": false,
          "explanation": "Deletion is not supported at all for this file type. Correct: This operation is not defined for this type of file organization.."
        },
        {
          "letter": "e",
          "text": "Only when the processor is not busy with other operations.",
          "is_correct": false,
          "explanation": "Processor state does not matter; the operation is not defined. Correct: This operation is not defined for this type of file organization.."
        }
      ],
      "correct_answer": "c"
    },
    {
      "question_number": 11,
      "question_text": "In C the end of a file is detected",
      "answers": [
        {
          "letter": "a",
          "text": "By attempting to read after the last record",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "b",
          "text": "By a special system function",
          "is_correct": false,
          "explanation": "C has no dedicated system call just for EOF. You find out when a read fails. Correct: By attempting to read after the last record."
        },
        {
          "letter": "c",
          "text": "By counting the remaining records in the file",
          "is_correct": false,
          "explanation": "C streams do not tell you how many records remain ahead of time. Correct: By attempting to read after the last record."
        },
        {
          "letter": "d",
          "text": "By calling feof()",
          "is_correct": false,
          "explanation": "feof() only reports a previous failed read; it does not detect EOF proactively. Correct: By attempting to read after the last record."
        },
        {
          "letter": "e",
          "text": "By reading the last record",
          "is_correct": false,
          "explanation": "Reading the last record succeeds; you only know it was the last when the next read fails. Correct: By attempting to read after the last record."
        }
      ],
      "correct_answer": "a"
    },
    {
      "question_number": 12,
      "question_text": "General processing flow for working with a data file does not include:",
      "answers": [
        {
          "letter": "a",
          "text": "Opening the file",
          "is_correct": false,
          "explanation": "That is part of the standard file processing sequence. Correct: Verification of data consistency."
        },
        {
          "letter": "b",
          "text": "Accessing file content",
          "is_correct": false,
          "explanation": "That is part of the standard file processing sequence. Correct: Verification of data consistency."
        },
        {
          "letter": "c",
          "text": "Associating the internal file variable with an external file",
          "is_correct": false,
          "explanation": "That is part of the standard file processing sequence. Correct: Verification of data consistency."
        },
        {
          "letter": "d",
          "text": "Verification of data consistency",
          "is_correct": true,
          "explanation": "Consistency checks are application logic, not part of the basic open-access-close workflow. Correct: Verification of data consistency."
        },
        {
          "letter": "e",
          "text": "Closing the file",
          "is_correct": false,
          "explanation": "That is part of the standard file processing sequence. Correct: Verification of data consistency."
        }
      ],
      "correct_answer": "d"
    },
    {
      "question_number": 13,
      "question_text": "Which of the following is not a typical role for text files in relation to data processing applications:",
      "answers": [
        {
          "letter": "a",
          "text": "All other answers are correct",
          "is_correct": false,
          "explanation": "One role is not typical, so 'all' is wrong. Correct: Data file to be processed."
        },
        {
          "letter": "b",
          "text": "Final report file",
          "is_correct": false,
          "explanation": "That is a common role for text files. Correct: Data file to be processed."
        },
        {
          "letter": "c",
          "text": "Data input file",
          "is_correct": false,
          "explanation": "That is a common role for text files. Correct: Data file to be processed."
        },
        {
          "letter": "d",
          "text": "Data file to be processed",
          "is_correct": true,
          "explanation": "Text files are for reports, input, or data exchange. The primary data file an app processes is usually binary. Correct: Data file to be processed."
        },
        {
          "letter": "e",
          "text": "Data transfer between applications",
          "is_correct": false,
          "explanation": "That is a common role for text files. Correct: Data file to be processed."
        }
      ],
      "correct_answer": "d"
    },
    {
      "question_number": 14,
      "question_text": "Which of the following are not typical processing operations for binary data files: 1) populating the file, 2) depopulating a file, 3) search for one record, 4) skipping records, 5) selection of a group of records, 6) cleaning the records, 7) integral consultation, 8) cleaning the file, 9) adding records, 10) changing records, 11) deleting records?",
      "answers": [
        {
          "letter": "a",
          "text": "1, 3, 5, 7, 9, 10",
          "is_correct": false,
          "explanation": "That does not match the list of non-typical operations. Correct: 2, 4, 6, 8, 11."
        },
        {
          "letter": "b",
          "text": "3, 4, 5, 7, 9",
          "is_correct": false,
          "explanation": "That does not match the list of non-typical operations. Correct: 2, 4, 6, 8, 11."
        },
        {
          "letter": "c",
          "text": "2, 4, 6, 8, 11",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "d",
          "text": "3, 4, 5, 10, 11",
          "is_correct": false,
          "explanation": "That does not match the list of non-typical operations. Correct: 2, 4, 6, 8, 11."
        },
        {
          "letter": "e",
          "text": "2, 4, 6, 8, 10",
          "is_correct": false,
          "explanation": "Changing records (10) is standard. The non-standard ones are 2, 4, 6, 8, 11. Correct: 2, 4, 6, 8, 11."
        }
      ],
      "correct_answer": "c"
    },
    {
      "question_number": 15,
      "question_text": "When a consultation operation produces a large amount of data as results, it should be:",
      "answers": [
        {
          "letter": "a",
          "text": "All the other answers are correct",
          "is_correct": false,
          "explanation": "Writing to a file is the recommended approach; 'all' is too broad. Correct: Written to a text file."
        },
        {
          "letter": "b",
          "text": "Displayed on the screen",
          "is_correct": false,
          "explanation": "Large output on screen is hard to review. Saving to a text file is the standard practice. Correct: Written to a text file."
        },
        {
          "letter": "c",
          "text": "Displayed on screen and written to a text file",
          "is_correct": false,
          "explanation": "Correct."
        },
        {
          "letter": "d",
          "text": "None of the other answers is correct",
          "is_correct": false,
          "explanation": "Writing to a text file is valid and recommended. Correct: Written to a text file."
        },
        {
          "letter": "e",
          "text": "Written to a text file",
          "is_correct": true,
          "explanation": "Correct."
        }
      ],
      "correct_answer": "e"
    },
    {
      "question_number": 16,
      "question_text": "Which of the following are true for a relative file: 1) deletion of records is not possible, 2) deletion of records is a logical operation (not physical), 3) deletion or records is a physical operation, 4) deletion of records is in fact a modification of the status indicator, 5) deletion of records can not be reversed.",
      "answers": [
        {
          "letter": "a",
          "text": "2, 4, 5",
          "is_correct": false,
          "explanation": "Because deletion is just a flag change, it can be reversed by resetting the flag. Correct: 2, 4."
        },
        {
          "letter": "b",
          "text": "3",
          "is_correct": false,
          "explanation": "Deletion is logical, not physical. The record stays; only its status flag changes. Correct: 2, 4."
        },
        {
          "letter": "c",
          "text": "1, 3, 5",
          "is_correct": false,
          "explanation": "Deletion is possible and logical (flag-based), and it can be reversed. So 1, 3, 5 are all false. Correct: 2, 4."
        },
        {
          "letter": "d",
          "text": "2, 4",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "e",
          "text": "1",
          "is_correct": false,
          "explanation": "Deletion is definitely possible in relative files. Correct: 2, 4."
        }
      ],
      "correct_answer": "d"
    },
    {
      "question_number": 17,
      "question_text": "What verifications must be performed before processing of each record of a relative file when working in direct access?",
      "answers": [
        {
          "letter": "a",
          "text": "Relative files do not use keys.",
          "is_correct": false,
          "explanation": "Relative files use a relative key (record number) to locate data directly. Correct: Verification of key value against file size and verification of record validity.."
        },
        {
          "letter": "b",
          "text": "Verification of key value against file size.",
          "is_correct": false,
          "explanation": "Checking only the key range is not enough; the slot might be empty or deleted. Correct: Verification of key value against file size and verification of record validity.."
        },
        {
          "letter": "c",
          "text": "No verification is needed.",
          "is_correct": false,
          "explanation": "You must check the key is within bounds and the slot is not empty/deleted. Correct: Verification of key value against file size and verification of record validity.."
        },
        {
          "letter": "d",
          "text": "Verification of key value against file size and verification of record validity.",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "e",
          "text": "Verification of record validity.",
          "is_correct": false,
          "explanation": "Checking only validity is not enough; you also need to check the key is within the file size. Correct: Verification of key value against file size and verification of record validity.."
        }
      ],
      "correct_answer": "d"
    },
    {
      "question_number": 18,
      "question_text": "What verifications must be performed on each record of a relative file when working in sequential access?",
      "answers": [
        {
          "letter": "a",
          "text": "Verification of key value against file size.",
          "is_correct": false,
          "explanation": "Sequential traversal naturally stops at the file end, so key-range checks are unnecessary. Correct: Verification of record validity.."
        },
        {
          "letter": "b",
          "text": "Verification of key uniqueness.",
          "is_correct": false,
          "explanation": "Relative keys are positions, not data values. Uniqueness of data is irrelevant here. Correct: Verification of record validity.."
        },
        {
          "letter": "c",
          "text": "verification of key value against file size and verification of record validity.",
          "is_correct": false,
          "explanation": "Correct."
        },
        {
          "letter": "d",
          "text": "Verification of record validity.",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "e",
          "text": "No checks are needed.",
          "is_correct": false,
          "explanation": "You still need to check whether each slot contains a valid record or is marked deleted. Correct: Verification of record validity.."
        }
      ],
      "correct_answer": "d"
    },
    {
      "question_number": 19,
      "question_text": "A relative key must be:",
      "answers": [
        {
          "letter": "a",
          "text": "A number",
          "is_correct": false,
          "explanation": "A relative key is an integer position in a valid interval. Correct: A number from an interval of Z (integer numbers)."
        },
        {
          "letter": "b",
          "text": "An alpha-numerical string",
          "is_correct": false,
          "explanation": "Relative keys are integer positions, not strings. Correct: A number from an interval of Z (integer numbers)."
        },
        {
          "letter": "c",
          "text": "A number from R (real numbers)",
          "is_correct": false,
          "explanation": "Positions must be whole integers (Z), not real numbers (R). Correct: A number from an interval of Z (integer numbers)."
        },
        {
          "letter": "d",
          "text": "A number from an interval of Z (integer numbers)",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "e",
          "text": "A string",
          "is_correct": false,
          "explanation": "Relative keys are integer positions, not strings. Correct: A number from an interval of Z (integer numbers)."
        }
      ],
      "correct_answer": "d"
    },
    {
      "question_number": 20,
      "question_text": "Which of the following can be used as a relative key for a relative file with information about students:",
      "answers": [
        {
          "letter": "a",
          "text": "Date of birth",
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
          "text": "Personal number / code (from national ID)",
          "is_correct": false,
          "explanation": "A relative key must be a contiguous integer interval. Dates, heights, grades, and personal codes have gaps, repeats, or non-numeric parts. Correct: None of them."
        },
        {
          "letter": "d",
          "text": "None of them",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "e",
          "text": "ATP grade",
          "is_correct": false,
          "explanation": "A relative key must be a contiguous integer interval. Dates, heights, grades, and personal codes have gaps, repeats, or non-numeric parts. Correct: None of them."
        }
      ],
      "correct_answer": "d"
    },
    {
      "question_number": 21,
      "question_text": "An iterative algorithm may implemented as:",
      "answers": [
        {
          "letter": "a",
          "text": "None of the other answers are correct",
          "is_correct": false,
          "explanation": "An iterative algorithm can be coded either iteratively or recursively. Correct: Recursive function or iterative function."
        },
        {
          "letter": "b",
          "text": "Recursive function or iterative function",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "c",
          "text": "The type of function depends on the algorithm",
          "is_correct": false,
          "explanation": "It is a design choice, not dictated by the algorithm. Both forms are possible. Correct: Recursive function or iterative function."
        },
        {
          "letter": "d",
          "text": "Iterative function",
          "is_correct": false,
          "explanation": "While the natural choice is iterative, a recursive rewrite is always possible. Correct: Recursive function or iterative function."
        },
        {
          "letter": "e",
          "text": "Recursive function",
          "is_correct": false,
          "explanation": "Iterative algorithms can be written recursively too. 'Only recursive' is too restrictive. Correct: Recursive function or iterative function."
        }
      ],
      "correct_answer": "b"
    },
    {
      "question_number": 22,
      "question_text": "Which of the following is not a possible validation type at field level?",
      "answers": [
        {
          "letter": "a",
          "text": "Predefined complex format",
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
          "text": "Nature",
          "is_correct": false,
          "explanation": "That is a standard field-level validation check. Correct: Correlation with other fields."
        },
        {
          "letter": "d",
          "text": "Value or domain",
          "is_correct": false,
          "explanation": "That is a standard field-level validation check. Correct: Correlation with other fields."
        },
        {
          "letter": "e",
          "text": "Existence",
          "is_correct": false,
          "explanation": "That is a standard field-level validation check. Correct: Correlation with other fields."
        }
      ],
      "correct_answer": "b"
    },
    {
      "question_number": 23,
      "question_text": "What formula is implemented in a recursive algorithm?",
      "answers": [
        {
          "letter": "a",
          "text": "Start formula while the problem is not trivial, and recursive formula when the problem becomes trivial.",
          "is_correct": false,
          "explanation": "That reverses the roles. The recursive step handles non-trivial cases; the start (base) formula handles trivial ones. Correct: Recursive formula while the problem is not trivial, and start formula when the problem becomes trivial.."
        },
        {
          "letter": "b",
          "text": "Recursive formula while the problem is not trivial, and start formula when the problem becomes trivial.",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "c",
          "text": "The formula depends on the problem being solved",
          "is_correct": false,
          "explanation": "The specific formulas differ, but the pattern is fixed: recursive for non-trivial, start for trivial. Correct: Recursive formula while the problem is not trivial, and start formula when the problem becomes trivial.."
        },
        {
          "letter": "d",
          "text": "None of the other answers are correct",
          "is_correct": false,
          "explanation": "Recursion uses the recursive formula on non-trivial cases and the start formula on the base case. Correct: Recursive formula while the problem is not trivial, and start formula when the problem becomes trivial.."
        },
        {
          "letter": "e",
          "text": "Recursive formula while the problem is trivial, and start formula when the problem becomes non- trivial.",
          "is_correct": false,
          "explanation": "The recursive formula is for non-trivial cases. The trivial case uses the start formula. Correct: Recursive formula while the problem is not trivial, and start formula when the problem becomes trivial.."
        }
      ],
      "correct_answer": "b"
    },
    {
      "question_number": 24,
      "question_text": "Which is the preferred validation method for a data field and why?",
      "answers": [
        {
          "letter": "a",
          "text": "Universal method: read as string then verify/convert, because reading is safe and permits any kind of validation",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "b",
          "text": "The one that you know how to implement, because you know it",
          "is_correct": false,
          "explanation": "Familiarity is not a valid criterion. You need safety and flexibility, not comfort. Correct: Universal method: read as string then verify/convert, because reading is safe and permits any kind of validation."
        },
        {
          "letter": "c",
          "text": "Language specific methods, because they are designed for this",
          "is_correct": false,
          "explanation": "Language parsers often crash on bad input. Reading as a string first lets you inspect and sanitize before conversion. Correct: Universal method: read as string then verify/convert, because reading is safe and permits any kind of validation."
        },
        {
          "letter": "d",
          "text": "Universal method: read as string then verify/convert, because string theory is modern",
          "is_correct": false,
          "explanation": "That justification is nonsense. The real reason is safety and flexibility. Correct: Universal method: read as string then verify/convert, because reading is safe and permits any kind of validation."
        }
      ],
      "correct_answer": "a"
    },
    {
      "question_number": 25,
      "question_text": "Which of the following criteria may favor an recursive implementation over an iterative implementation for the same algorithm",
      "answers": [
        {
          "letter": "a",
          "text": "Speed of execution",
          "is_correct": false,
          "explanation": "Recursion is usually slower than iteration due to function call overhead. Correct: None of the mentioned factors."
        },
        {
          "letter": "b",
          "text": "Memory consumption",
          "is_correct": false,
          "explanation": "Recursion uses more memory because each call adds a stack frame. Iteration reuses fixed variables. Correct: None of the mentioned factors."
        },
        {
          "letter": "c",
          "text": "None of the mentioned factors",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "d",
          "text": "Ease of implementation",
          "is_correct": false,
          "explanation": "While some problems are simpler recursively, speed and memory generally favor iteration, so ease alone is not a universal reason. Correct: None of the mentioned factors."
        },
        {
          "letter": "e",
          "text": "All mentioned factors",
          "is_correct": false,
          "explanation": "Speed and memory usually disfavor recursion, so not all factors favor it. Correct: None of the mentioned factors."
        }
      ],
      "correct_answer": "c"
    },
    {
      "question_number": 26,
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
          "text": "A way to signal errors",
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
          "text": "Methods for correcting incorrect data, if possible",
          "is_correct": false,
          "explanation": "Data validation includes conditions, error signaling, corrective actions, and fixes when possible. Correct: All other answers are correct."
        }
      ],
      "correct_answer": "a"
    },
    {
      "question_number": 27,
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
          "text": "An algorithm that must end after a finite number of repetitions",
          "is_correct": false,
          "explanation": "Termination is required of all algorithms, not unique to recursion. Correct: A sequence of operations that is repeated, working each time on results of previous repetition(s)."
        },
        {
          "letter": "c",
          "text": "A sequence of operations that is repeated, working each time on results of previous repetition(s)",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "d",
          "text": "An algorithm implemented as a recursive function",
          "is_correct": false,
          "explanation": "That confuses the algorithm with its implementation. Recursion is a problem-solving method, not just a function calling itself. Correct: A sequence of operations that is repeated, working each time on results of previous repetition(s)."
        },
        {
          "letter": "e",
          "text": "A sequence of operations that is repeated a predetermined number of times",
          "is_correct": false,
          "explanation": "A fixed count is iteration (for-loops). Recursion stops when the problem becomes trivial, which depends on input. Correct: A sequence of operations that is repeated, working each time on results of previous repetition(s)."
        }
      ],
      "correct_answer": "c"
    },
    {
      "question_number": 28,
      "question_text": "An iterative algorithm is:",
      "answers": [
        {
          "letter": "a",
          "text": "An algorithm implemented as an iterative function",
          "is_correct": false,
          "explanation": "That describes an implementation, not the concept. Iteration is the broader idea of repeating operations on successive data. Correct: A sequence of operations that are repeated, working on new data each time."
        },
        {
          "letter": "b",
          "text": "An algorithm that is implemented using a for loop",
          "is_correct": false,
          "explanation": "Loops are one implementation vehicle, but iteration can use while-loops or even tail-recursion. Correct: A sequence of operations that are repeated, working on new data each time."
        },
        {
          "letter": "c",
          "text": "An utopia, all algorithms are in fact recursive.",
          "is_correct": false,
          "explanation": "Iteration is real and distinct. Many algorithms (e.g., linear search) are naturally iterative. Correct: A sequence of operations that are repeated, working on new data each time."
        },
        {
          "letter": "d",
          "text": "An algorithm that does not call on itself",
          "is_correct": false,
          "explanation": "Avoiding self-calls is a property, not the definition. The core idea is repeated operations on new data. Correct: A sequence of operations that are repeated, working on new data each time."
        },
        {
          "letter": "e",
          "text": "A sequence of operations that are repeated, working on new data each time",
          "is_correct": true,
          "explanation": "Correct."
        }
      ],
      "correct_answer": "e"
    },
    {
      "question_number": 29,
      "question_text": "How does a recursive function ensure a finite chain of self-calls?",
      "answers": [
        {
          "letter": "a",
          "text": "Each self-call solves a simpler problem, until a trivial problem is reached",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "b",
          "text": "A decision on making a new self-call is made based on the number of previous steps performed",
          "is_correct": false,
          "explanation": "Recursion stops when the problem shrinks to a base case, not by counting past steps. Correct: Each self-call solves a simpler problem, until a trivial problem is reached."
        },
        {
          "letter": "c",
          "text": "Calls are counted and a limited number of iterations is permitted",
          "is_correct": false,
          "explanation": "Artificial limits can abort early without solving the problem. Correct: Each self-call solves a simpler problem, until a trivial problem is reached."
        },
        {
          "letter": "d",
          "text": "A parameter is used to limit the number of self-calls",
          "is_correct": false,
          "explanation": "A depth limit prevents stack overflow but is not the fundamental termination mechanism. Correct: Each self-call solves a simpler problem, until a trivial problem is reached."
        },
        {
          "letter": "e",
          "text": "There is no need to verify this, the computer stops the chain of self-calls when the stack segment is full",
          "is_correct": false,
          "explanation": "Stack overflow is a crash, not a valid stopping strategy. Recursion must reach a base case first. Correct: Each self-call solves a simpler problem, until a trivial problem is reached."
        }
      ],
      "correct_answer": "a"
    },
    {
      "question_number": 30,
      "question_text": "Which of the following is a data validation level?",
      "answers": [
        {
          "letter": "a",
          "text": "File (collection) level",
          "is_correct": false,
          "explanation": "Validation can occur at field, record, file, or group-of-records level. Correct: All other answers are correct."
        },
        {
          "letter": "b",
          "text": "Record level",
          "is_correct": false,
          "explanation": "Validation can occur at field, record, file, or group-of-records level. Correct: All other answers are correct."
        },
        {
          "letter": "c",
          "text": "Field level",
          "is_correct": false,
          "explanation": "Validation can occur at field, record, file, or group-of-records level. Correct: All other answers are correct."
        },
        {
          "letter": "d",
          "text": "Group of records",
          "is_correct": false,
          "explanation": "Validation can occur at field, record, file, or group-of-records level. Correct: All other answers are correct."
        },
        {
          "letter": "e",
          "text": "All other answers are correct",
          "is_correct": true,
          "explanation": "Correct."
        }
      ],
      "correct_answer": "e"
    },
    {
      "question_number": 31,
      "question_text": "Which of the following statements about the divide et impera method is true?",
      "answers": [
        {
          "letter": "a",
          "text": "It is a recursive algorithm so it must be implemented using a recursive function.",
          "is_correct": false,
          "explanation": "Divide-and-conquer can be written iteratively with an explicit stack. Recursion is common but not mandatory. Correct: It is a recursive algorithm and can be implemented using an iterative or recursive function.."
        },
        {
          "letter": "b",
          "text": "it is an iterative algorithm and must be implemented using an iterative function.",
          "is_correct": false,
          "explanation": "Divide-and-conquer is fundamentally recursive in nature. Saying it must be iterative is wrong. Correct: It is a recursive algorithm and can be implemented using an iterative or recursive function.."
        },
        {
          "letter": "c",
          "text": "It is a recursive algorithm and can be implemented using an iterative or recursive function.",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "d",
          "text": "None of the other answers is true.",
          "is_correct": false,
          "explanation": "One answer is correct: it is recursive and can be implemented either way. Correct: It is a recursive algorithm and can be implemented using an iterative or recursive function.."
        },
        {
          "letter": "e",
          "text": "It is an iterative algorithm and can be implemented using an iterative or a recursive function.",
          "is_correct": false,
          "explanation": "This imposes an unnecessary implementation constraint. Correct: It is a recursive algorithm and can be implemented using an iterative or recursive function.."
        }
      ],
      "correct_answer": "c"
    },
    {
      "question_number": 32,
      "question_text": "Which of the following is not a characteristic of problems that can be solved using divide et impera method?",
      "answers": [
        {
          "letter": "a",
          "text": "may be divided into problems of the same type but with lower complexity, or primitive problems",
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
          "text": "solutions of the \"smaller\" problems are combined to give the solution of the original problem",
          "is_correct": false,
          "explanation": "That is actually a valid D&C characteristic. Correct: they are always divide into 2 \"smaller\" problems."
        },
        {
          "letter": "d",
          "text": "the decomposition process ends after a finite number of steps, with trivial problems.",
          "is_correct": false,
          "explanation": "That is actually a valid D&C characteristic. Correct: they are always divide into 2 \"smaller\" problems."
        },
        {
          "letter": "e",
          "text": "they are always divide into 2 \"smaller\" problems",
          "is_correct": true,
          "explanation": "D&C can split into any number of subproblems, not strictly two. Examples: 3-way merge sort, Strassen's multiplication. Correct: they are always divide into 2 \"smaller\" problems."
        }
      ],
      "correct_answer": "e"
    },
    {
      "question_number": 33,
      "question_text": "When solving a problem using the divide et impera method, the problem is divided into:",
      "answers": [
        {
          "letter": "a",
          "text": "none of the other answers are correct",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "b",
          "text": "one smaller problem of the same type and one trivial problem",
          "is_correct": false,
          "explanation": "D&C does not enforce a fixed split pattern. Correct: none of the other answers are correct."
        },
        {
          "letter": "c",
          "text": "4 smaller problems of the same type",
          "is_correct": false,
          "explanation": "The split count is not rigidly fixed. It depends on the problem and can be any number of non-overlapping subproblems. Correct: none of the other answers are correct."
        },
        {
          "letter": "d",
          "text": "4 partially overlapping smaller problems",
          "is_correct": false,
          "explanation": "The split count is not rigidly fixed. It depends on the problem and can be any number of non-overlapping subproblems. Correct: none of the other answers are correct."
        },
        {
          "letter": "e",
          "text": "2 smaller problems of the same type",
          "is_correct": false,
          "explanation": "The split count is not rigidly fixed. It depends on the problem and can be any number of non-overlapping subproblems. Correct: none of the other answers are correct."
        }
      ],
      "correct_answer": "a"
    },
    {
      "question_number": 34,
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
          "text": "Quick sort",
          "is_correct": false,
          "explanation": "Those are classic D&C sorts that recursively partition or split the array. Correct: Bubble sort."
        },
        {
          "letter": "c",
          "text": "Insert sort",
          "is_correct": false,
          "explanation": "Insertion sort is incremental, but bubble sort is the most commonly cited non-D&C sort. Correct: Bubble sort."
        },
        {
          "letter": "d",
          "text": "Bubble sort",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "e",
          "text": "Merge sort",
          "is_correct": false,
          "explanation": "Those are classic D&C sorts that recursively partition or split the array. Correct: Bubble sort."
        }
      ],
      "correct_answer": "d"
    },
    {
      "question_number": 35,
      "question_text": "The relation between growth order and asymptotic efficiency is:",
      "answers": [
        {
          "letter": "a",
          "text": "there is no relation",
          "is_correct": false,
          "explanation": "Growth order directly determines efficiency. They are tightly related. Correct: lower growth order means better asymptotic efficiency."
        },
        {
          "letter": "b",
          "text": "lower growth order means better asymptotic efficiency",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "c",
          "text": "asymptotic efficiency is proportional to the growth order",
          "is_correct": false,
          "explanation": "Efficiency improves as growth order decreases, so the relationship is inverse, not proportional. Correct: lower growth order means better asymptotic efficiency."
        },
        {
          "letter": "d",
          "text": "lower growth order means lower asymptotic efficiency",
          "is_correct": false,
          "explanation": "That reverses the relationship. Lower growth order means fewer operations and better efficiency. Correct: lower growth order means better asymptotic efficiency."
        },
        {
          "letter": "e",
          "text": "higher growth order means better asymptotic efficiency",
          "is_correct": false,
          "explanation": "Higher growth order means slower algorithms for large inputs, which is worse. Correct: lower growth order means better asymptotic efficiency."
        }
      ],
      "correct_answer": "b"
    },
    {
      "question_number": 36,
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
          "text": "a binary tree",
          "is_correct": false,
          "explanation": "A heap is conceptually a complete binary tree, but heap sort uses the original array in-place with index arithmetic. No separate tree is allocated. Correct: no additional representation; it sorts the vector in-place."
        },
        {
          "letter": "c",
          "text": "a balanced tree",
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
      "correct_answer": "d"
    },
    {
      "question_number": 37,
      "question_text": "Which of the following factors impact the running time: 1) number of primitive operations, 2) mouse type (wire/wireless), 3) input size, 4) shoes type (running/hiking), 5) location of data (internal/external), 6) length of track, 7) weather, 8) hardware?",
      "answers": [
        {
          "letter": "a",
          "text": "2, 4, 6, 7",
          "is_correct": false,
          "explanation": "Algorithmic running time is determined by operations, input size, and data characteristics. Correct: 1, 3, 5, 8."
        },
        {
          "letter": "b",
          "text": "All of them",
          "is_correct": false,
          "explanation": "Not all items affect algorithmic running time; many are irrelevant external conditions. Correct: 1, 3, 5, 8."
        },
        {
          "letter": "c",
          "text": "1, 3, 5, 8",
          "is_correct": true,
          "explanation": "Algorithmic running time is determined by operations, input size, and data characteristics. Correct: 1, 3, 5, 8."
        },
        {
          "letter": "d",
          "text": "1, 3, 4, 5, 8",
          "is_correct": false,
          "explanation": "Algorithmic running time is determined by operations, input size, and data characteristics. Correct: 1, 3, 5, 8."
        }
      ],
      "correct_answer": "c"
    },
    {
      "question_number": 38,
      "question_text": "Complexity indicators are used to:",
      "answers": [
        {
          "letter": "a",
          "text": "design confusing questions for students",
          "is_correct": false,
          "explanation": "Complexity theory is a serious tool used daily in software engineering, not a student prank. Correct: compare algorithms' quality from the running time point of view."
        },
        {
          "letter": "b",
          "text": "compute the exact running time of an algorithm",
          "is_correct": false,
          "explanation": "Complexity gives asymptotic bounds, not exact clock time, because exact time varies by machine. Correct: compare algorithms' quality from the running time point of view."
        },
        {
          "letter": "c",
          "text": "nothing, it is all just theory",
          "is_correct": false,
          "explanation": "Asymptotic analysis is highly practical for predicting scalability and choosing algorithms. Correct: compare algorithms' quality from the running time point of view."
        },
        {
          "letter": "d",
          "text": "estimate the limits for the running time of an algorithm",
          "is_correct": false,
          "explanation": "While bounds are estimated, the main practical purpose is comparing algorithms. Correct: compare algorithms' quality from the running time point of view."
        },
        {
          "letter": "e",
          "text": "compare algorithms' quality from the running time point of view",
          "is_correct": true,
          "explanation": "Correct."
        }
      ],
      "correct_answer": "e"
    },
    {
      "question_number": 39,
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
          "text": "merge sort / heap sort / quick sort  because they have the lowest complexity",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "c",
          "text": "insert sort for short vectors",
          "is_correct": false,
          "explanation": "Insertion sort is great for tiny inputs, but not the best general-purpose algorithm for large arbitrary datasets. Correct: merge sort / heap sort / quick sort  because they have the lowest complexity."
        },
        {
          "letter": "d",
          "text": "bubble sort, because this is the one I know",
          "is_correct": false,
          "explanation": "Familiarity does not determine quality. Bubble sort has O(n²) complexity and is terrible for large datasets. Correct: merge sort / heap sort / quick sort  because they have the lowest complexity."
        },
        {
          "letter": "e",
          "text": "Counting sort, because it has linear complexity",
          "is_correct": false,
          "explanation": "Counting sort is O(n) but not general-purpose: it needs bounded integer keys and extra memory. Correct: merge sort / heap sort / quick sort  because they have the lowest complexity."
        }
      ],
      "correct_answer": "b"
    },
    {
      "question_number": 40,
      "question_text": "The reason for randomizing quicksort is:",
      "answers": [
        {
          "letter": "a",
          "text": "confuse students",
          "is_correct": false,
          "explanation": "Randomization is a serious probabilistic technique, not a prank. Correct: avoid worst case scenario and near-worst case scenario."
        },
        {
          "letter": "b",
          "text": "to mix good choices with bad choices",
          "is_correct": false,
          "explanation": "The goal is not to balance good and bad pivots, but to make worst-case inputs statistically unlikely. Correct: avoid worst case scenario and near-worst case scenario."
        },
        {
          "letter": "c",
          "text": "to make it more complicated",
          "is_correct": false,
          "explanation": "Randomization adds minimal code but prevents predictable worst-case behavior. Correct: avoid worst case scenario and near-worst case scenario."
        },
        {
          "letter": "d",
          "text": "avoid worst case scenario and near-worst case scenario",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "e",
          "text": "switch first element with a random one",
          "is_correct": false,
          "explanation": "That describes a tactic, not the purpose. The purpose is to avoid deterministic worst-case patterns. Correct: avoid worst case scenario and near-worst case scenario."
        }
      ],
      "correct_answer": "d"
    },
    {
      "question_number": 41,
      "question_text": "A PC can do a job better than a supercomputer at doing the same job:",
      "answers": [
        {
          "letter": "a",
          "text": "never",
          "is_correct": false,
          "explanation": "A smarter algorithm on a PC can beat a naive O(n²) algorithm on a supercomputer for large enough inputs. Correct: if it uses a better algorithm."
        },
        {
          "letter": "b",
          "text": "always",
          "is_correct": false,
          "explanation": "Supercomputers excel at brute force, but a smarter algorithm can still win on modest hardware. Correct: if it uses a better algorithm."
        },
        {
          "letter": "c",
          "text": "it the supercomputer has a bug",
          "is_correct": false,
          "explanation": "Relying on bugs is not a valid basis for comparisons. Correct: if it uses a better algorithm."
        },
        {
          "letter": "d",
          "text": "if it uses a better algorithm",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "e",
          "text": "if it is overclocked",
          "is_correct": false,
          "explanation": "Overclocking gives marginal speedups and cannot compensate for exponential algorithmic gaps. Correct: if it uses a better algorithm."
        }
      ],
      "correct_answer": "d"
    },
    {
      "question_number": 42,
      "question_text": "Which sorting algorithm is better between insert sort and merge sort?",
      "answers": [
        {
          "letter": "a",
          "text": "merge sort",
          "is_correct": false,
          "explanation": "Merge sort has O(n log n) complexity, better than insertion sort's O(n²) for large inputs. Correct: insert sort."
        },
        {
          "letter": "b",
          "text": "the one I know to implement",
          "is_correct": false,
          "explanation": "Familiarity does not determine algorithmic superiority. Correct: insert sort."
        },
        {
          "letter": "c",
          "text": "they are both complicated algorithms, none is better",
          "is_correct": false,
          "explanation": "They have different strengths, but for general large inputs merge sort is asymptotically better. Correct: insert sort."
        },
        {
          "letter": "d",
          "text": "insert sort",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "e",
          "text": "merge sort combined with insert sort for short vectors",
          "is_correct": false,
          "explanation": "Hybrid algorithms are practical, but the question asks for a direct comparison. Correct: insert sort."
        }
      ],
      "correct_answer": "d"
    },
    {
      "question_number": 43,
      "question_text": "What part(s) of the running time computation can be ignored when comparing algorithms: 1) highest ranking term, 2) lowest ranking term, 3) coefficient of the highest ranking term, 4) coefficients of terms with lowest ranks, 5) all but the highest ranking term,  6) negative terms",
      "answers": [
        {
          "letter": "a",
          "text": "2, 4",
          "is_correct": false,
          "explanation": "Lower-order terms and their coefficients become negligible as n grows, so they are commonly ignored. Correct: none."
        },
        {
          "letter": "b",
          "text": "1, 2, 6",
          "is_correct": false,
          "explanation": "The highest-ranking term dominates, and negative terms cancel out, so some parts are indeed ignorable. Correct: none."
        },
        {
          "letter": "c",
          "text": "3, 5",
          "is_correct": false,
          "explanation": "The coefficient of the highest term and all lower-order terms are ignored in Big-O, so this is partially correct but not complete. Correct: none."
        },
        {
          "letter": "d",
          "text": "1",
          "is_correct": false,
          "explanation": "Only the highest-ranking term matters in Big-O, but lower-order terms and coefficients are also ignored. Correct: none."
        },
        {
          "letter": "e",
          "text": "none",
          "is_correct": true,
          "explanation": "Correct."
        }
      ],
      "correct_answer": "e"
    },
    {
      "question_number": 44,
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
          "text": "3, 4, 6",
          "is_correct": false,
          "explanation": "While counting sort uses extra memory and is linear, it is not the best general sorting algorithm due to its key constraints. Correct: 1, 3, 4."
        },
        {
          "letter": "c",
          "text": "1, 3, 4",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "d",
          "text": "2, 4, 5",
          "is_correct": false,
          "explanation": "Counting sort does not compare elements, so 'lowest number of comparisons' is misleading. Also, it is not universally the best algorithm. Correct: 1, 3, 4."
        }
      ],
      "correct_answer": "c"
    },
    {
      "question_number": 45,
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
          "text": "compare algorithms' quality from the running time point of view",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "d",
          "text": "compute the exact running time of an algorithm",
          "is_correct": false,
          "explanation": "Complexity gives asymptotic bounds, not exact clock time, because exact time varies by machine. Correct: compare algorithms' quality from the running time point of view."
        },
        {
          "letter": "e",
          "text": "nothing, it is all just theory",
          "is_correct": false,
          "explanation": "Asymptotic analysis is highly practical for predicting scalability and choosing algorithms. Correct: compare algorithms' quality from the running time point of view."
        }
      ],
      "correct_answer": "c"
    },
    {
      "question_number": 47,
      "question_text": "Relative key must be:",
      "answers": [
        {
          "letter": "a",
          "text": "A string",
          "is_correct": false,
          "explanation": "Relative keys are integer positions, not strings. Correct: A number from an interval of Z (integer numbers)."
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
          "text": "A number from an interval of Z (integer numbers)",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "e",
          "text": "An alpha-numerical string",
          "is_correct": false,
          "explanation": "Relative keys are integer positions, not strings. Correct: A number from an interval of Z (integer numbers)."
        }
      ],
      "correct_answer": "d"
    },
    {
      "question_number": 49,
      "question_text": "In C the end of a file is detected",
      "answers": [
        {
          "letter": "a",
          "text": "By attempting to read after the last record",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "b",
          "text": "By reading the last record",
          "is_correct": false,
          "explanation": "Reading the last record succeeds; you only know it was the last when the next read fails. Correct: By attempting to read after the last record."
        },
        {
          "letter": "c",
          "text": "By counting the remaining records in the file",
          "is_correct": false,
          "explanation": "C streams do not tell you how many records remain ahead of time. Correct: By attempting to read after the last record."
        },
        {
          "letter": "d",
          "text": "By calling feof()",
          "is_correct": false,
          "explanation": "feof() only reports a previous failed read; it does not detect EOF proactively. Correct: By attempting to read after the last record."
        },
        {
          "letter": "e",
          "text": "By a special system function",
          "is_correct": false,
          "explanation": "C has no dedicated system call just for EOF. You find out when a read fails. Correct: By attempting to read after the last record."
        }
      ],
      "correct_answer": "a"
    },
    {
      "question_number": 50,
      "question_text": "An indexed file",
      "answers": [
        {
          "letter": "a",
          "text": "uses an alpha-numerical key to find records",
          "is_correct": false,
          "explanation": "True, but not complete. Indexed files also use a separate index file and are a logical concept. Correct: All other answers are correct."
        },
        {
          "letter": "b",
          "text": "is implemented using two physical files",
          "is_correct": false,
          "explanation": "True, but incomplete. They also use keys and are a logical concept. Correct: All other answers are correct."
        },
        {
          "letter": "c",
          "text": "All other answers are correct",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "d",
          "text": "is not a physical file",
          "is_correct": false,
          "explanation": "True, but incomplete. They also use keys and dual-file implementation. Correct: All other answers are correct."
        },
        {
          "letter": "e",
          "text": "is a logical concept",
          "is_correct": false,
          "explanation": "True, but incomplete. They also use keys and dual-file implementation. Correct: All other answers are correct."
        }
      ],
      "correct_answer": "c"
    },
    {
      "question_number": 51,
      "question_text": "General processing flow for working with a data file does not include:",
      "answers": [
        {
          "letter": "a",
          "text": "Accessing file content",
          "is_correct": false,
          "explanation": "That is part of the standard file processing sequence. Correct: Verification of data consistency."
        },
        {
          "letter": "b",
          "text": "Closing the file",
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
          "text": "Opening the file",
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
      "correct_answer": "c"
    },
    {
      "question_number": 52,
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
          "text": "stdaux",
          "is_correct": false,
          "explanation": "That is a real predefined C stream. Correct: stdaxn."
        },
        {
          "letter": "c",
          "text": "stderr",
          "is_correct": false,
          "explanation": "That is a real predefined C stream. Correct: stdaxn."
        },
        {
          "letter": "d",
          "text": "stdout",
          "is_correct": false,
          "explanation": "That is a real predefined C stream. Correct: stdaxn."
        },
        {
          "letter": "e",
          "text": "stdin",
          "is_correct": false,
          "explanation": "That is a real predefined C stream. Correct: stdaxn."
        }
      ],
      "correct_answer": "a"
    },
    {
      "question_number": 53,
      "question_text": "Which of the following factors do not affect the choices made when choosing an implementation to solve a problem:",
      "answers": [
        {
          "letter": "a",
          "text": "Data location",
          "is_correct": false,
          "explanation": "Algorithmic running time is determined by operations, input size, and data characteristics. Correct: Hardware."
        },
        {
          "letter": "b",
          "text": "Input size",
          "is_correct": false,
          "explanation": "Algorithmic running time is determined by operations, input size, and data characteristics. Correct: Hardware."
        },
        {
          "letter": "c",
          "text": "Memory used",
          "is_correct": false,
          "explanation": "Algorithmic running time is determined by operations, input size, and data characteristics. Correct: Hardware."
        },
        {
          "letter": "d",
          "text": "Hardware",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "e",
          "text": "Number of primitive operations",
          "is_correct": false,
          "explanation": "Algorithmic running time is determined by operations, input size, and data characteristics. Correct: Hardware."
        }
      ],
      "correct_answer": "d"
    },
    {
      "question_number": 54,
      "question_text": "Big omega notation indicates:",
      "answers": [
        {
          "letter": "a",
          "text": "indicates an iterative algorithm",
          "is_correct": false,
          "explanation": "Big-Omega is a complexity notation and has nothing to do with iteration vs recursion. Correct: lower bound for an algorithm complexity."
        },
        {
          "letter": "b",
          "text": "lower bound for an algorithm complexity",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "c",
          "text": "exact running time for an algorithm",
          "is_correct": false,
          "explanation": "Big-Omega gives an asymptotic lower bound, not an exact clock time. Correct: lower bound for an algorithm complexity."
        },
        {
          "letter": "d",
          "text": "upper and lower bounds for an algorithm complexity",
          "is_correct": false,
          "explanation": "That describes Big-Theta, which requires both bounds to match. Correct: lower bound for an algorithm complexity."
        },
        {
          "letter": "e",
          "text": "upper bound for an algorithm complexity",
          "is_correct": false,
          "explanation": "That describes Big-O, not Big-Omega. Big-O gives an upper bound; Big-Omega gives a lower bound. Correct: lower bound for an algorithm complexity."
        }
      ],
      "correct_answer": "b"
    },
    {
      "question_number": 55,
      "question_text": "Which of the following is not true regarding complexity indicators?",
      "answers": [
        {
          "letter": "a",
          "text": "they are hardware independent",
          "is_correct": false,
          "explanation": "Complexity intentionally ignores hardware details. This statement is true. Correct: they are designed for best case scenarios."
        },
        {
          "letter": "b",
          "text": "it is not worth doing exact calculation of running time",
          "is_correct": false,
          "explanation": "Exact runtime varies by machine, so asymptotic analysis is the standard. This statement is true. Correct: they are designed for best case scenarios."
        },
        {
          "letter": "c",
          "text": "they are designed for large input sizes",
          "is_correct": false,
          "explanation": "Asymptotic analysis specifically describes behavior as input grows. This statement is true. Correct: they are designed for best case scenarios."
        },
        {
          "letter": "d",
          "text": "Lower growth order means better algorithm",
          "is_correct": false,
          "explanation": "Lower growth order means fewer operations for large inputs. This statement is true. Correct: they are designed for best case scenarios."
        },
        {
          "letter": "e",
          "text": "they are designed for best case scenarios",
          "is_correct": true,
          "explanation": "Correct."
        }
      ],
      "correct_answer": "e"
    },
    {
      "question_number": 56,
      "question_text": "The purpose of randomizing quicksort is:",
      "answers": [
        {
          "letter": "a",
          "text": "Quick sort cannot be randomized",
          "is_correct": false,
          "explanation": "Randomizing the pivot prevents adversarial or sorted inputs from triggering O(n²) behavior. Correct: make sure worst-case scenario never happens."
        },
        {
          "letter": "b",
          "text": "sort a random vector",
          "is_correct": false,
          "explanation": "Randomizing the pivot prevents adversarial or sorted inputs from triggering O(n²) behavior. Correct: make sure worst-case scenario never happens."
        },
        {
          "letter": "c",
          "text": "use a random algorithm for sorting",
          "is_correct": false,
          "explanation": "Randomizing the pivot prevents adversarial or sorted inputs from triggering O(n²) behavior. Correct: make sure worst-case scenario never happens."
        },
        {
          "letter": "d",
          "text": "randomly chose the pivot",
          "is_correct": false,
          "explanation": "Randomizing the pivot prevents adversarial or sorted inputs from triggering O(n²) behavior. Correct: make sure worst-case scenario never happens."
        },
        {
          "letter": "e",
          "text": "make sure worst-case scenario never happens",
          "is_correct": true,
          "explanation": "Correct."
        }
      ],
      "correct_answer": "e"
    },
    {
      "question_number": 57,
      "question_text": "If BF traversing of a graph does not visit all vertices, then the graph",
      "answers": [
        {
          "letter": "a",
          "text": "Is symmetrical",
          "is_correct": false,
          "explanation": "Symmetry does not prevent BFS from visiting all vertices within a connected component. Correct: Is not connected."
        },
        {
          "letter": "b",
          "text": "None of the other answers are correct",
          "is_correct": false,
          "explanation": "One answer is correct: a disconnected graph explains why BFS cannot reach all vertices from a single start. Correct: Is not connected."
        },
        {
          "letter": "c",
          "text": "Is not connected",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "d",
          "text": "Is a tree",
          "is_correct": false,
          "explanation": "A tree is connected by definition, so BFS would visit all its vertices. Correct: Is not connected."
        },
        {
          "letter": "e",
          "text": "Does not have cycles",
          "is_correct": false,
          "explanation": "Acyclicity does not imply disconnectedness. BFS can traverse all vertices in a connected acyclic graph. Correct: Is not connected."
        }
      ],
      "correct_answer": "c"
    },
    {
      "question_number": 58,
      "question_text": "Which of the following algorithms cannot be used to compute a partial tree for a given graph:",
      "answers": [
        {
          "letter": "a",
          "text": "Roy - Warshall algorithm",
          "is_correct": true,
          "explanation": "Roy-Warshall (Floyd-Warshall) computes all-pairs shortest paths, not a spanning tree. Correct: Roy - Warshall algorithm."
        },
        {
          "letter": "b",
          "text": "Kruskal’s algorithm",
          "is_correct": false,
          "explanation": "Kruskal's algorithm explicitly builds a minimum spanning tree by adding edges. Correct: Roy - Warshall algorithm."
        },
        {
          "letter": "c",
          "text": "Breadth first traversing",
          "is_correct": false,
          "explanation": "BFS traversal naturally produces a BFS tree, which is a valid spanning tree. Correct: Roy - Warshall algorithm."
        },
        {
          "letter": "d",
          "text": "Depth first traversing",
          "is_correct": false,
          "explanation": "DFS traversal naturally produces a DFS tree, which is a valid spanning tree. Correct: Roy - Warshall algorithm."
        },
        {
          "letter": "e",
          "text": "Prim’s algorithm",
          "is_correct": false,
          "explanation": "Prim's algorithm directly constructs a minimum spanning tree by adding vertices. Correct: Roy - Warshall algorithm."
        }
      ],
      "correct_answer": "a"
    },
    {
      "question_number": 59,
      "question_text": "Generalized traversing of a graph can be performed:",
      "answers": [
        {
          "letter": "a",
          "text": "breadth first",
          "is_correct": false,
          "explanation": "While BFS is valid, DFS is equally valid. Correct: breadth first or depth first."
        },
        {
          "letter": "b",
          "text": "depth first",
          "is_correct": false,
          "explanation": "While DFS is valid, BFS is equally valid. Correct: breadth first or depth first."
        },
        {
          "letter": "c",
          "text": "only if the graph is connected",
          "is_correct": false,
          "explanation": "Traversal can restart from each unvisited vertex; connectivity is not a prerequisite for the algorithm itself. Correct: breadth first or depth first."
        },
        {
          "letter": "d",
          "text": "breadth first or depth first",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "e",
          "text": "Diagonally",
          "is_correct": false,
          "explanation": "There is no standard diagonal graph traversal algorithm. Correct: breadth first or depth first."
        }
      ],
      "correct_answer": "d"
    },
    {
      "question_number": 60,
      "question_text": "Consider the graph G=(V, E) where V={1,2,3,4,5,6,7,8,9,10} and E={(1,2), (1,4), (1,6), (2,4), (2,5), (3,8), (3,10), (4,5), (4,6), (4,7), (5,7), (7,8), (7,9), (8,9), (9,10)}. If 3 is the initial vertex, which of the following is the correct breadth first traversing order:",
      "image": "images1/4.png",
      "answers": [
        {
          "letter": "a",
          "text": "3, 8, 10, 7, 9, 4, 5, 1, 2, 6",
          "is_correct": false,
          "explanation": "BFS visits all neighbors at distance d before any vertex at distance d+1. This sequence breaks that level-order rule. Correct: All of them."
        },
        {
          "letter": "b",
          "text": "3, 8, 10, 9, 7, 4, 5, 2, 1, 6",
          "is_correct": false,
          "explanation": "BFS visits all neighbors at distance d before any vertex at distance d+1. This sequence breaks that level-order rule. Correct: All of them."
        },
        {
          "letter": "c",
          "text": "All of them",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "d",
          "text": "3, 10, 8, 9, 7, 4, 5, 6, 2, 1",
          "is_correct": false,
          "explanation": "BFS visits all neighbors at distance d before any vertex at distance d+1. This sequence breaks that level-order rule. Correct: All of them."
        },
        {
          "letter": "e",
          "text": "3, 10, 8, 9, 7, 5, 4, 2, 6, 1",
          "is_correct": false,
          "explanation": "BFS visits all neighbors at distance d before any vertex at distance d+1. This sequence breaks that level-order rule. Correct: All of them."
        }
      ],
      "correct_answer": "c"
    },
    {
      "question_number": 61,
      "question_text": "Consider Prim’s algorithm for building a minimum spanning tree. Selecting an edge to be added to the tree corresponds to this general operation in Greedy method:",
      "answers": [
        {
          "letter": "a",
          "text": "verify the acceptability of the selected element",
          "is_correct": false,
          "explanation": "Verification happens after selection to check for cycles, not during the selection step itself. Correct: select an element from the initial set."
        },
        {
          "letter": "b",
          "text": "simplify the problem",
          "is_correct": false,
          "explanation": "Simplification is not the specific greedy operation represented by edge selection in Prim's algorithm. Correct: select an element from the initial set."
        },
        {
          "letter": "c",
          "text": "select an element from the initial set",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "d",
          "text": "none of the other answers",
          "is_correct": false,
          "explanation": "One answer is correct: selecting an edge corresponds to selecting a candidate element from the available set. Correct: select an element from the initial set."
        }
      ],
      "correct_answer": "c"
    },
    {
      "question_number": 62,
      "question_text": "Local optimum method (Greedy) finds:",
      "answers": [
        {
          "letter": "a",
          "text": "Always the optimum solution",
          "is_correct": false,
          "explanation": "Greedy only guarantees optimal solutions for problems with the greedy-choice property and optimal substructure. Many problems yield suboptimal results. Correct: Optimum / acceptable / worst solution, depending on the problem solved and implementation."
        },
        {
          "letter": "b",
          "text": "None of the other answers is correct",
          "is_correct": false,
          "explanation": "One answer is correct: greedy outcomes vary by problem and implementation. Correct: Optimum / acceptable / worst solution, depending on the problem solved and implementation."
        },
        {
          "letter": "c",
          "text": "Optimum / acceptable / worst solution, depending on the problem solved and implementation",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "d",
          "text": "Always the worst solution",
          "is_correct": false,
          "explanation": "Greedy methods often produce acceptable or good solutions. They are not guaranteed to be the worst. Correct: Optimum / acceptable / worst solution, depending on the problem solved and implementation."
        },
        {
          "letter": "e",
          "text": "Always an acceptable solution",
          "is_correct": false,
          "explanation": "Greedy can produce worst-case results for problems that lack the required properties, so 'always acceptable' is too strong. Correct: Optimum / acceptable / worst solution, depending on the problem solved and implementation."
        }
      ],
      "correct_answer": "c"
    },
    {
      "question_number": 63,
      "question_text": "Which operation of backtracking algorithm is represented by this notation",
      "answers": [
        {
          "letter": "a",
          "text": "Return after building a solution",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "b",
          "text": "Return",
          "is_correct": false,
          "explanation": "A plain 'return' does not distinguish between returning after finding a solution versus returning due to a dead end. The notation specifically means returning after a complete solution is built. Correct: Return after building a solution."
        },
        {
          "letter": "c",
          "text": "Assign and advance",
          "is_correct": false,
          "explanation": "Assign-and-advance extends the partial solution, which is different from returning after a solution is complete. Correct: Return after building a solution."
        },
        {
          "letter": "d",
          "text": "There is no such thing in backtracking",
          "is_correct": false,
          "explanation": "Backtracking explicitly uses this operation to record and return completed solutions. Correct: Return after building a solution."
        },
        {
          "letter": "e",
          "text": "Failed attempt",
          "is_correct": false,
          "explanation": "Failed attempts trigger backtracking, not the return-after-solution operation. Correct: Return after building a solution."
        }
      ],
      "correct_answer": "a",
      "image": "images1/q1_page32_img1.png"
    },
    {
      "question_number": 64,
      "question_text": "For backtracking algorithm, this configuration means:",
      "answers": [
        {
          "letter": "a",
          "text": "there is no such thing in backtracking",
          "is_correct": false,
          "explanation": "Backtracking explicitly manages initial, partial, solution, and final configurations. Correct: solution configuration."
        },
        {
          "letter": "b",
          "text": "final configuration",
          "is_correct": false,
          "explanation": "'Final' usually means the end of the search space or a dead end, not necessarily a valid solution. Correct: solution configuration."
        },
        {
          "letter": "c",
          "text": "none of the other answers are correct",
          "is_correct": false,
          "explanation": "One answer is correct: the configuration represents a valid solution state. Correct: solution configuration."
        },
        {
          "letter": "d",
          "text": "initial configuration",
          "is_correct": false,
          "explanation": "The initial state is the starting point before any assignments are made. Correct: solution configuration."
        },
        {
          "letter": "e",
          "text": "solution configuration",
          "is_correct": true,
          "explanation": "Correct."
        }
      ],
      "correct_answer": "e",
      "image": "images1/q1_page33_img1.png"
    },
    {
      "question_number": 65,
      "question_text": "The bisection method for solving an equation:",
      "answers": [
        {
          "letter": "a",
          "text": "None of the other answers is correct",
          "is_correct": false,
          "explanation": "One answer is correct: bisection is recursive, belongs to divide-and-conquer, and can sometimes find the exact solution. Correct: All of the other answers."
        },
        {
          "letter": "b",
          "text": "Is a recursive method",
          "is_correct": false,
          "explanation": "Bisection repeatedly halves the interval, which is a recursive divide-and-conquer approach. This statement is true. Correct: All of the other answers."
        },
        {
          "letter": "c",
          "text": "All of the other answers",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "d",
          "text": "Belongs to the Divide & Impera category",
          "is_correct": false,
          "explanation": "Bisection divides the interval into smaller subintervals, which is the essence of divide and conquer. This statement is true. Correct: All of the other answers."
        },
        {
          "letter": "e",
          "text": "Sometimes finds the exact solution",
          "is_correct": false,
          "explanation": "When the midpoint exactly hits the root, bisection finds the exact solution. This statement is true. Correct: All of the other answers."
        }
      ],
      "correct_answer": "c"
    },
    {
      "question_number": 66,
      "question_text": "The number of iterations for the local optimum method (Greedy) is:",
      "answers": [
        {
          "letter": "a",
          "text": "Less or equal to the number of elements in the given set",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "b",
          "text": "1 less than the number of elements in the given set",
          "is_correct": false,
          "explanation": "Greedy may process all elements or fewer, depending on acceptance criteria. It is not necessarily exactly n-1. Correct: Less or equal to the number of elements in the given set."
        },
        {
          "letter": "c",
          "text": "Equal to the number of elements in the given set",
          "is_correct": false,
          "explanation": "The iteration count depends on whether each candidate passes the acceptability test. It may be less than n if some elements are rejected. Correct: Less or equal to the number of elements in the given set."
        },
        {
          "letter": "d",
          "text": "Cannot be established in advance",
          "is_correct": false,
          "explanation": "While the exact count varies, the upper bound is the size of the set. Correct: Less or equal to the number of elements in the given set."
        },
        {
          "letter": "e",
          "text": "None of the other answers is correct",
          "is_correct": false,
          "explanation": "One answer is correct: iterations are bounded by the number of elements. Correct: Less or equal to the number of elements in the given set."
        }
      ],
      "correct_answer": "a"
    },
    {
      "question_number": 67,
      "question_text": "O(·) defines:",
      "answers": [
        {
          "letter": "a",
          "text": "Asymptotic lower bound for a function",
          "is_correct": false,
          "explanation": "That describes Big-Omega, not Big-O. Correct: Asymptotic upper bound for a function."
        },
        {
          "letter": "b",
          "text": "Asymptotic upper bound for a function",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "c",
          "text": "None of the other answers are correct",
          "is_correct": false,
          "explanation": "One answer is correct: Big-O is the asymptotic upper bound. Correct: Asymptotic upper bound for a function."
        },
        {
          "letter": "d",
          "text": "All other answers are correct",
          "is_correct": false,
          "explanation": "Big-O has a specific meaning (upper bound) and is not all of the above. Correct: Asymptotic upper bound for a function."
        },
        {
          "letter": "e",
          "text": "Asymptotic upper and lower bound for a function",
          "is_correct": false,
          "explanation": "That describes Big-Theta, which requires both bounds to match. Correct: Asymptotic upper bound for a function."
        }
      ],
      "correct_answer": "b"
    },
    {
      "question_number": 68,
      "question_text": "Consider this function:\nvoid gigel(char a[], int i)\n{ if (a[i])\n{ printf_s(\"%c\", a[i]);\ngigel(a,i+1);\nprintf_s(\"%c\", a[i]);\n}\n}\n\nWhich of the following (ignore the quotes) is the result of calling gigel(“Am trecut!”,1);?",
      "answers": [
        {
          "letter": "a",
          "text": "„Am trecut!”",
          "is_correct": false,
          "explanation": "The function performs a forward print on the way down and a reverse print on the way back up, starting from index 1. Correct: „m trecut!!tucert m”."
        },
        {
          "letter": "b",
          "text": "„N-am trecut!”",
          "is_correct": false,
          "explanation": "The function performs a forward print on the way down and a reverse print on the way back up, starting from index 1. Correct: „m trecut!!tucert m”."
        },
        {
          "letter": "c",
          "text": "„!tucert mA”",
          "is_correct": false,
          "explanation": "The function performs a forward print on the way down and a reverse print on the way back up, starting from index 1. Correct: „m trecut!!tucert m”."
        },
        {
          "letter": "d",
          "text": "„m trecut!!tucert m”",
          "is_correct": true,
          "explanation": "The function performs a forward print on the way down and a reverse print on the way back up, starting from index 1. Correct: „m trecut!!tucert m”."
        },
        {
          "letter": "e",
          "text": "„Am trecut!!tucert mA”",
          "is_correct": false,
          "explanation": "The function performs a forward print on the way down and a reverse print on the way back up, starting from index 1. Correct: „m trecut!!tucert m”."
        }
      ],
      "correct_answer": "d"
    },
    {
      "question_number": 69,
      "question_text": "Recursive implementation is preferable to iterative implementation:",
      "answers": [
        {
          "letter": "a",
          "text": "never",
          "is_correct": false,
          "explanation": "Recursion is sometimes preferable when the problem structure (e.g., trees) makes the recursive solution much simpler. Correct: when iterative implementation is too complicated and recursive implementation is very simple."
        },
        {
          "letter": "b",
          "text": "Always, because it runs faster",
          "is_correct": false,
          "explanation": "Recursion is generally slower than iteration due to function call overhead. Correct: when iterative implementation is too complicated and recursive implementation is very simple."
        },
        {
          "letter": "c",
          "text": "it does not matter, it is only a programmer’s choice",
          "is_correct": false,
          "explanation": "Implementation choice matters: it affects readability, performance, memory usage, and stack safety. Correct: when iterative implementation is too complicated and recursive implementation is very simple."
        },
        {
          "letter": "d",
          "text": "when iterative implementation is too complicated and recursive implementation is very simple",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "e",
          "text": "Always, because it uses less computing",
          "is_correct": false,
          "explanation": "Recursion usually uses more memory and CPU due to stack frames, not less. Correct: when iterative implementation is too complicated and recursive implementation is very simple."
        }
      ],
      "correct_answer": "d"
    },
    {
      "question_number": 70,
      "question_text": "Which of the following algorithms are not recursive: 1. Prim's algorithm; 2. Kruskal's algorithm; 3. Dijkstra's algorithm; 4. Roy-Floyd algorithm; 5. Breadth first traversing algorithm ; 6. Depth first traversing algorithm; 7. Euclid's algorithm; 8. Computing the sum of elements in a vector; 9. Bubble sort; 10. Computing the greatest common factor of two numbers?",
      "answers": [
        {
          "letter": "a",
          "text": "4, 8, 9",
          "is_correct": false,
          "explanation": "While those specific algorithms may have iterative forms, the question considers all listed algorithms as having recursive formulations. Correct: All of the above algorithms are recursive."
        },
        {
          "letter": "b",
          "text": "There are no non-recursive algorithms",
          "is_correct": false,
          "explanation": "Many GCD algorithms have well-known iterative forms using a simple while-loop, so non-recursive versions exist. Correct: All of the above algorithms are recursive."
        },
        {
          "letter": "c",
          "text": "All of the above algorithms are recursive",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "d",
          "text": "1, 2, 3",
          "is_correct": false,
          "explanation": "While those specific algorithms may have iterative forms, the question considers all listed algorithms as having recursive formulations. Correct: All of the above algorithms are recursive."
        },
        {
          "letter": "e",
          "text": "5, 6",
          "is_correct": false,
          "explanation": "While those specific algorithms may have iterative forms, the question considers all listed algorithms as having recursive formulations. Correct: All of the above algorithms are recursive."
        }
      ],
      "correct_answer": "c"
    },
    {
      "question_text": "Best complexity for a general sorting algorithm is:",
      "answers": [
        {
          "letter": "a",
          "text": "O(n²)",
          "is_correct": false,
          "explanation": "O(n²) is the complexity of naive quadratic sorts like bubble sort, not the best possible for comparison-based sorting. Correct: O(n*log(n))."
        },
        {
          "letter": "b",
          "text": "All sorting algorithms are very complex",
          "is_correct": false,
          "explanation": "Sorting complexity is well-understood and bounded by Ω(n log n) for comparison sorts. Correct: O(n*log(n))."
        },
        {
          "letter": "c",
          "text": "O(log(n))",
          "is_correct": false,
          "explanation": "Sorting requires at least linear time to inspect every element, so O(log n) is impossible. Correct: O(n*log(n))."
        },
        {
          "letter": "d",
          "text": "O(n*log(n))",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "e",
          "text": "O(n)",
          "is_correct": false,
          "explanation": "Linear-time sorting is only possible for special cases (e.g., counting sort with bounded integers), not for general comparison-based sorting where the proven lower bound is Ω(n log n). Correct: O(n*log(n))."
        }
      ],
      "correct_answer": "d",
      "question_number": 71
    },
    {
      "question_text": "If BF traversing of a graph does not visit all vertices, then the graph:",
      "answers": [
        {
          "letter": "a",
          "text": "Is symmetrical",
          "is_correct": false,
          "explanation": "Symmetry does not prevent BFS from visiting all vertices within a connected component. Correct: Is not connected."
        },
        {
          "letter": "b",
          "text": "Is not connected",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "c",
          "text": "None of the other answers are correct",
          "is_correct": false,
          "explanation": "One answer is correct: a disconnected graph explains why BFS cannot reach all vertices from a single start. Correct: Is not connected."
        },
        {
          "letter": "d",
          "text": "Does not have cycles",
          "is_correct": false,
          "explanation": "Acyclicity does not imply disconnectedness. BFS can traverse all vertices in a connected acyclic graph. Correct: Is not connected."
        },
        {
          "letter": "e",
          "text": "Is a tree",
          "is_correct": false,
          "explanation": "A tree is connected by definition, so BFS would visit all its vertices. Correct: Is not connected."
        }
      ],
      "correct_answer": "b",
      "question_number": 73
    },
    {
      "question_text": "Consider the graph G=(V, E) where V={1,2,3,4,5,6,7,8,9,10} and E={(1,2), (1,4), (1,6), (2,4), (2,5), (3,8), (3,10), (4,5), (4,6), (4,7), (5,7), (7,8), (7,9), (8,9), (9,10)}. If 7 is the initial vertex, which of the following is the correct breadth first traversing order:",
      "answers": [
        {
          "letter": "a",
          "text": "7, 4, 1, 2, 5, 6, 8, 3, 10, 9",
          "is_correct": false,
          "explanation": "BFS visits all neighbors at distance d before any vertex at distance d+1. This sequence breaks that level-order rule. Correct: 7, 9, 8, 5, 4, 10, 3, 2, 6, 1."
        },
        {
          "letter": "b",
          "text": "10, 3, 1, 2, 6, 4, 5, 8, 9, 7",
          "is_correct": false,
          "explanation": "BFS visits all neighbors at distance d before any vertex at distance d+1. This sequence breaks that level-order rule. Correct: 7, 9, 8, 5, 4, 10, 3, 2, 6, 1."
        },
        {
          "letter": "c",
          "text": "All answers are correct",
          "is_correct": false,
          "explanation": "BFS visits all neighbors at distance d before any vertex at distance d+1. This sequence breaks that level-order rule. Correct: 7, 9, 8, 5, 4, 10, 3, 2, 6, 1."
        },
        {
          "letter": "d",
          "text": "7, 9, 8, 5, 4, 10, 3, 2, 6, 1",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "e",
          "text": "7, 8, 9, 10, 3, 4, 1, 2, 5, 6",
          "is_correct": false,
          "explanation": "BFS visits all neighbors at distance d before any vertex at distance d+1. This sequence breaks that level-order rule. Correct: 7, 9, 8, 5, 4, 10, 3, 2, 6, 1."
        }
      ],
      "correct_answer": "d",
      "question_number": 74
    },
    {
      "question_text": "Consider the graph G=(V, E) where V={1,2,3,4,5,6,7,8} and E={(1,2), (1,4), (2,3), (2,4), (3,4), (4,5), (4,6), (4,8), (6,7), (7,8)}. If 7 is the initial vertex, which of the following is the correct breadth first traversing order:",
      "answers": [
        {
          "letter": "a",
          "text": "7, 1, 2, 3, 4, 5, 6, 7",
          "is_correct": false,
          "explanation": "BFS visits all neighbors at distance d before any vertex at distance d+1. This sequence contains a duplicate vertex (7 appears twice) and breaks level-order. Correct: 7, 6, 8, 4, 1, 2, 3, 5."
        },
        {
          "letter": "b",
          "text": "7, 8, 4, 1, 2, 3, 5, 6",
          "is_correct": false,
          "explanation": "BFS visits all neighbors at distance d before any vertex at distance d+1. This sequence visits 4 before 6, but 6 is a direct neighbor of 7 (distance 1) while 4 is at distance 2. Correct: 7, 6, 8, 4, 1, 2, 3, 5."
        },
        {
          "letter": "c",
          "text": "7, 6, 4, 5, 1, 2, 3, 8",
          "is_correct": false,
          "explanation": "BFS visits all neighbors at distance d before any vertex at distance d+1. This sequence places 8 at the end, but 8 is a direct neighbor of 7 (distance 1) and must appear before 4, 5, 1, 2, 3 (distance 2 or 3). Correct: 7, 6, 8, 4, 1, 2, 3, 5."
        },
        {
          "letter": "d",
          "text": "7, 8, 6, 1, 2, 3, 4, 5",
          "is_correct": false,
          "explanation": "BFS visits all neighbors at distance d before any vertex at distance d+1. This sequence visits 1, 2, 3 before 4, but 1, 2, 3 are only reachable through 4 (distance 3) while 4 itself is at distance 2. Correct: 7, 6, 8, 4, 1, 2, 3, 5."
        },
        {
          "letter": "e",
          "text": "7, 6, 8, 4, 1, 2, 3, 5",
          "is_correct": true,
          "explanation": "Correct. Starting from 7, BFS explores all neighbors at distance 1 first (6 and 8), then distance 2 (4), then distance 3 (1, 2, 3, 5)."
        }
      ],
      "correct_answer": "e",
      "question_number": 75
    },
    {
      "question_text": "Considering a graph, the partial trees built by Kruskal's algorithm and Prim's algorithm are identical:",
      "answers": [
        {
          "letter": "a",
          "text": "If the graph is unweighted",
          "is_correct": false,
          "explanation": "Unweighted graphs still allow multiple valid spanning trees, so Kruskal and Prim may differ. Correct: Not always identical."
        },
        {
          "letter": "b",
          "text": "If the graph is connected",
          "is_correct": false,
          "explanation": "Connectivity does not force identical spanning trees. Multiple valid ones can exist. Correct: Not always identical."
        },
        {
          "letter": "c",
          "text": "Always",
          "is_correct": false,
          "explanation": "Kruskal and Prim may choose different edges when weights are equal, leading to different valid MSTs. Correct: Not always identical."
        },
        {
          "letter": "d",
          "text": "If the same initial vertex is used",
          "is_correct": false,
          "explanation": "Prim depends on the start vertex, but Kruskal does not use a start vertex at all, so they can still differ. Correct: Not always identical."
        },
        {
          "letter": "e",
          "text": "Not always identical",
          "is_correct": true,
          "explanation": "Correct."
        }
      ],
      "correct_answer": "e",
      "question_number": 76
    },
    {
      "question_text": "Ω(·) defines:",
      "answers": [
        {
          "letter": "a",
          "text": "Asymptotic lower bound for a function",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "b",
          "text": "All other answers are correct",
          "is_correct": false,
          "explanation": "Not all listed options are correct; at least one is false. Correct: Asymptotic lower bound for a function."
        },
        {
          "letter": "c",
          "text": "None of the other answers are correct",
          "is_correct": false,
          "explanation": "There is a valid correct option among the choices. 'None' is incorrect because at least one answer is right. Correct: Asymptotic lower bound for a function."
        },
        {
          "letter": "d",
          "text": "Asymptotic upper bound for a function",
          "is_correct": false,
          "explanation": "This answer does not match the established theory for this topic. Correct: Asymptotic lower bound for a function."
        },
        {
          "letter": "e",
          "text": "Asymptotic upper and lower bound for a function",
          "is_correct": false,
          "explanation": "This answer does not match the established theory for this topic. Correct: Asymptotic lower bound for a function."
        }
      ],
      "correct_answer": "a",
      "question_number": 77
    },
    {
      "question_text": "Consider the graph G=(V, E, W) where V={1,2,3,4,5,6,7,8,9,10}, E={(1,2), (1,4), (1,5), (2,3), (2,5), (3,5), (4,7), (5,6), (5,8), (6,10), (7,8), (7,9), (8,9), (8,10)} and W={1,2,3,4,5,6,7,8,9,10,11,12,13,14}. The root of the minimum spanning tree built using Kruskal's algorithm is:",
      "answers": [
        {
          "letter": "a",
          "text": "6",
          "is_correct": false,
          "explanation": "An MST is an undirected acyclic graph. Unlike rooted trees, an MST has no designated root vertex. Correct: No root is defined for the minimum spanning tree."
        },
        {
          "letter": "b",
          "text": "5",
          "is_correct": false,
          "explanation": "An MST is an undirected acyclic graph. Unlike rooted trees, an MST has no designated root vertex. Correct: No root is defined for the minimum spanning tree."
        },
        {
          "letter": "c",
          "text": "9",
          "is_correct": false,
          "explanation": "An MST is an undirected acyclic graph. Unlike rooted trees, an MST has no designated root vertex. Correct: No root is defined for the minimum spanning tree."
        },
        {
          "letter": "d",
          "text": "No root is defined for the minimum spanning tree",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "e",
          "text": "4",
          "is_correct": false,
          "explanation": "An MST is an undirected acyclic graph. Unlike rooted trees, an MST has no designated root vertex. Correct: No root is defined for the minimum spanning tree."
        }
      ],
      "correct_answer": "d",
      "question_number": 78
    },
    {
      "question_text": "Which of the following are not general operations of Greedy method: 1. sort the initial set, 2. add accepted element to the solution set, 3. Select a candidate element from the initial set, 4. normalization of received data, 5. verify the acceptability of the selected element, 6. select the highest element (maximum) from the initial set, 7. return to previous element, 8. reset the consumed values, 9. set",
      "answers": [
        {
          "letter": "a",
          "text": "4, 7, 8",
          "is_correct": false,
          "explanation": "That does not correctly identify the non-standard greedy operations. Correct: 1, 4, 6, 7, 8."
        },
        {
          "letter": "b",
          "text": "1, 4, 6, 7, 8",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "c",
          "text": "2, 4, 6",
          "is_correct": false,
          "explanation": "That does not correctly identify the non-standard greedy operations. Correct: 1, 4, 6, 7, 8."
        },
        {
          "letter": "d",
          "text": "1, 3, 6, 7, 8",
          "is_correct": false,
          "explanation": "That does not correctly identify the non-standard greedy operations. Correct: 1, 4, 6, 7, 8."
        },
        {
          "letter": "e",
          "text": "2, 3, 5",
          "is_correct": false,
          "explanation": "That does not correctly identify the non-standard greedy operations. Correct: 1, 4, 6, 7, 8."
        }
      ],
      "correct_answer": "b",
      "question_number": 79
    },
    {
      "question_text": "For optimal merging of n vectors:",
      "answers": [
        {
          "letter": "a",
          "text": "There is no optimal merging order",
          "is_correct": false,
          "explanation": "Optimal merging does exist: always merge the two shortest vectors first to minimize total element moves. Correct: Merge two at a time, in increasing order of vector length."
        },
        {
          "letter": "b",
          "text": "Merge two at a time, in decreasing order of vector length",
          "is_correct": false,
          "explanation": "Merging larger vectors first increases total moves and comparisons, which is suboptimal. Correct: Merge two at a time, in increasing order of vector length."
        },
        {
          "letter": "c",
          "text": "Merge two at a time, in increasing order of the highest element in each vector",
          "is_correct": false,
          "explanation": "Merge cost depends on vector length, not on the maximum element value. Correct: Merge two at a time, in increasing order of vector length."
        },
        {
          "letter": "d",
          "text": "Merge two at a time, in decreasing order of the highest element in each vector",
          "is_correct": false,
          "explanation": "The cost is driven by the number of elements (length), not by the highest element value. Correct: Merge two at a time, in increasing order of vector length."
        },
        {
          "letter": "e",
          "text": "Merge two at a time, in increasing order of vector length",
          "is_correct": true,
          "explanation": "Correct."
        }
      ],
      "correct_answer": "e",
      "question_number": 80
    },
    {
      "question_text": "O(·) defines:",
      "answers": [
        {
          "letter": "a",
          "text": "Asymptotic upper and lower bound for a function",
          "is_correct": false,
          "explanation": "That describes Big-Theta, which requires both bounds to match. Correct: Asymptotic upper bound for a function."
        },
        {
          "letter": "b",
          "text": "Asymptotic lower bound for a function",
          "is_correct": false,
          "explanation": "That describes Big-Omega, not Big-O. Correct: Asymptotic upper bound for a function."
        },
        {
          "letter": "c",
          "text": "None of the other answers are correct",
          "is_correct": false,
          "explanation": "One answer is correct: Big-O is the asymptotic upper bound. Correct: Asymptotic upper bound for a function."
        },
        {
          "letter": "d",
          "text": "Asymptotic upper bound for a function",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "e",
          "text": "All other answers are correct",
          "is_correct": false,
          "explanation": "Big-O has a specific meaning (upper bound) and is not all of the above. Correct: Asymptotic upper bound for a function."
        }
      ],
      "correct_answer": "d",
      "question_number": 81
    },
    {
      "question_text": "The best complexity of the sorting methods studied is:",
      "answers": [
        {
          "letter": "a",
          "text": "O(n+k)",
          "is_correct": false,
          "explanation": "Counting sort has O(n+k) complexity, which is linear when k is bounded, but O(n) is achievable with appropriate sorts. Correct: O(n)."
        },
        {
          "letter": "b",
          "text": "O(n*log(n))",
          "is_correct": false,
          "explanation": "That is the optimal bound for comparison-based sorting, but non-comparison sorts like counting sort can achieve O(n). Correct: O(n)."
        },
        {
          "letter": "c",
          "text": "O(n²)",
          "is_correct": false,
          "explanation": "Quadratic complexity is worse than linear and is not the best achievable. Correct: O(n)."
        },
        {
          "letter": "d",
          "text": "O(n)",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "e",
          "text": "None of the other answers",
          "is_correct": false,
          "explanation": "One answer is correct: O(n) is the best complexity achievable with appropriate sorting methods. Correct: O(n)."
        }
      ],
      "correct_answer": "d",
      "question_number": 82
    },
    {
      "question_text": "Consider these functions: f1(x)=x², f2(x)=2x³+3x²+3x, f3(x)=3x³+2x, f4(x)=x⁵+x². If each represents the number of operations in an algorithm, which one indicates the best algorithm from the complexity point of view?",
      "answers": [
        {
          "letter": "a",
          "text": "f3(x)",
          "is_correct": false,
          "explanation": "f3 is dominated by the 3x³ term, giving O(n³). The test treats this as the encompassing choice. Correct: All indicate the same complexity order."
        },
        {
          "letter": "b",
          "text": "All indicate the same complexity order",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "c",
          "text": "f2(x)",
          "is_correct": false,
          "explanation": "f2 is dominated by the 2x³ term, giving O(n³). The test treats this as the encompassing choice. Correct: All indicate the same complexity order."
        },
        {
          "letter": "d",
          "text": "f4(x)",
          "is_correct": false,
          "explanation": "f4 has the highest degree (x⁵), making it O(n⁵). The test treats this as the encompassing choice. Correct: All indicate the same complexity order."
        },
        {
          "letter": "e",
          "text": "f1(x)",
          "is_correct": false,
          "explanation": "In this context, the question groups all functions as having the same order. From a strict view f1 is O(n²), but the test treats this as the encompassing choice. Correct: All indicate the same complexity order."
        }
      ],
      "correct_answer": "b",
      "question_number": 83
    },
    {
      "question_text": "Which operation of backtracking algorithm is represented by this notation:",
      "image": "images1/q1_page34_img1.png",
      "answers": [
        {
          "letter": "a",
          "text": "Assign and advance",
          "is_correct": false,
          "explanation": "Assign-and-advance extends the partial solution, which is different from returning after a solution is complete. Correct: Failed attempt."
        },
        {
          "letter": "b",
          "text": "Return",
          "is_correct": false,
          "explanation": "A plain 'return' does not distinguish between returning after finding a solution versus returning due to a dead end. The notation specifically means returning after a complete solution is built. Correct: Failed attempt."
        },
        {
          "letter": "c",
          "text": "There is no such thing in backtracking",
          "is_correct": false,
          "explanation": "Backtracking explicitly uses this operation to record and return completed solutions. Correct: Failed attempt."
        },
        {
          "letter": "d",
          "text": "Failed attempt",
          "is_correct": true,
          "explanation": "Failed attempts trigger backtracking, not the return-after-solution operation. Correct: Failed attempt."
        },
        {
          "letter": "e",
          "text": "Return after building a solution",
          "is_correct": false,
          "explanation": "This describes returning after finding a valid solution, which is different from the failed-attempt/backtrack operation. Correct: Failed attempt."
        }
      ],
      "correct_answer": "d",
      "question_number": 84
    },
    {
      "question_text": "For a recursive algorithm, the start formula:",
      "answers": [
        {
          "letter": "a",
          "text": "The start is given in Formula 1",
          "is_correct": false,
          "explanation": "The start formula is the base case that handles the trivial instance. Correct: Is applied when a trivial problem is reached."
        },
        {
          "letter": "b",
          "text": "Is verified before starting the first iteration",
          "is_correct": false,
          "explanation": "The start (base) formula handles the trivial case directly; it is not a pre-iteration check. Correct: Is applied when a trivial problem is reached."
        },
        {
          "letter": "c",
          "text": "Shows if the algorithm may be used",
          "is_correct": false,
          "explanation": "Applicability is determined by the problem structure, not by the start formula alone. Correct: Is applied when a trivial problem is reached."
        },
        {
          "letter": "d",
          "text": "There is no start formula",
          "is_correct": false,
          "explanation": "Every recursive definition needs a start (base) formula to terminate and avoid infinite loops. Correct: Is applied when a trivial problem is reached."
        },
        {
          "letter": "e",
          "text": "Is applied when a trivial problem is reached",
          "is_correct": true,
          "explanation": "Correct."
        }
      ],
      "correct_answer": "e",
      "question_number": 85
    },
    {
      "question_text": "For a recursive algorithm, the recursive formula:",
      "answers": [
        {
          "letter": "a",
          "text": "Is non-linear",
          "is_correct": false,
          "explanation": "The recursive formula can be linear or non-linear; linearity is not its defining feature. Correct: Is applied to decompose/reduce the problem."
        },
        {
          "letter": "b",
          "text": "Suggests the condition to stop generating recursive calls",
          "is_correct": false,
          "explanation": "The stopping condition is separate from the recursive formula. The recursive formula describes how to break the problem down. Correct: Is applied to decompose/reduce the problem."
        },
        {
          "letter": "c",
          "text": "Is applied to decompose/reduce the problem",
          "is_correct": true,
          "explanation": "Correct."
        },
        {
          "letter": "d",
          "text": "There is no 'recursive formula'",
          "is_correct": false,
          "explanation": "The recursive formula describes how to break the problem into smaller sub-problems. Correct: Is applied to decompose/reduce the problem."
        },
        {
          "letter": "e",
          "text": "Shows when the algorithm ends",
          "is_correct": false,
          "explanation": "Termination is determined by the base case (start formula), not by the recursive step. Correct: Is applied to decompose/reduce the problem."
        }
      ],
      "correct_answer": "c",
      "question_number": 86
    },
    {
      "question_text": "A supercomputer can solve a problem faster than a personal computer:",
      "answers": [
        {
          "letter": "a",
          "text": "Always",
          "is_correct": false,
          "explanation": "Supercomputers have more resources, but an asymptotically inferior algorithm will eventually lose on large inputs. Correct: Depends on the algorithm and input size."
        },
        {
          "letter": "b",
          "text": "There are no supercomputers",
          "is_correct": false,
          "explanation": "Supercomputers exist and are used for high-performance computing. Correct: Depends on the algorithm and input size."
        },
        {
          "letter": "c",
          "text": "Depends on the problem",
          "is_correct": false,
          "explanation": "While the problem domain matters, the specific algorithm and input size are the decisive factors. Correct: Depends on the algorithm and input size."
        },
        {
          "letter": "d",
          "text": "Never",
          "is_correct": false,
          "explanation": "For small inputs or poorly optimized algorithms, a supercomputer's raw speed can still win. Correct: Depends on the algorithm and input size."
        },
        {
          "letter": "e",
          "text": "Depends on the algorithm and input size",
          "is_correct": true,
          "explanation": "Correct."
        }
      ],
      "correct_answer": "e",
      "question_number": 88
    },
    {
      "question_text": "Quick sort has a better complexity than merge sort:",
      "answers": [
        {
          "letter": "a",
          "text": "In worst-case scenario",
          "is_correct": false,
          "explanation": "Quick sort's worst case is O(n²), which is worse than merge sort's guaranteed O(n log n). Correct: Both have the same complexity in average cases."
        },
        {
          "letter": "b",
          "text": "In best case scenario",
          "is_correct": false,
          "explanation": "Both can achieve O(n log n) in favorable conditions, so quick sort is not better in the best case. Correct: Both have the same complexity in average cases."
        },
        {
          "letter": "c",
          "text": "Never",
          "is_correct": false,
          "explanation": "They do have the same average-case complexity of O(n log n), so 'never' is false. Correct: Both have the same complexity in average cases."
        },
        {
          "letter": "d",
          "text": "Always",
          "is_correct": false,
          "explanation": "Merge sort has a better worst-case guarantee, so quick sort is not always better. Correct: Both have the same complexity in average cases."
        },
        {
          "letter": "e",
          "text": "Both have the same complexity in average cases",
          "is_correct": true,
          "explanation": "Correct."
        }
      ],
      "correct_answer": "e",
      "question_number": 89
    },
    {
      "question_text": "For backtracking algorithm, this configuration means:",
      "image": "images1/q1_page33_img1.png",
      "answers": [
        {
          "letter": "a",
          "text": "There is no such thing in backtracking",
          "is_correct": false,
          "explanation": "Backtracking explicitly manages initial, partial, solution, and final configurations. Correct: Solution configuration."
        },
        {
          "letter": "b",
          "text": "Final configuration",
          "is_correct": false,
          "explanation": "'Final' usually means the end of the search space or a dead end, not necessarily a valid solution. Correct: Solution configuration."
        },
        {
          "letter": "c",
          "text": "None of the other answers are correct",
          "is_correct": false,
          "explanation": "One answer is correct: the configuration represents a valid solution state. Correct: Solution configuration."
        },
        {
          "letter": "d",
          "text": "Initial configuration",
          "is_correct": false,
          "explanation": "The initial state is the starting point before any assignments are made. Correct: Solution configuration."
        },
        {
          "letter": "e",
          "text": "Solution configuration",
          "is_correct": true,
          "explanation": "Correct."
        }
      ],
      "correct_answer": "e",
      "question_number": 90
    }
  ]
};
