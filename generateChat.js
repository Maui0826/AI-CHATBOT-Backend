const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require('@google/generative-ai');
const fs = require('node:fs');
const mime = require('mime-types');
const dotenv = require('dotenv');

dotenv.config();

const apiKey = process.env.GENERATE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-2.0-flash',
  systemInstruction: 'You are an information provider and an AI chat ',
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseModalities: [],
  responseMimeType: 'text/plain',
};

const generateChat = async (req, res, next) => {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: 'user',
        parts: [{ text: 'what is valnat\n' }],
      },
      {
        role: 'model',
        parts: [
          {
            text: 'Valenzuela National Highschool also known as ValNat is a public secondary school located at A. Fernando Street, Marulas, Valenzuela City, Philippines. It is one of the largest and most recognized public high schools in the city, offering education for Special Education, Junior High School (Grades 7-10), and sometimes Senior High School (Grades 11-12), depending on the specific campus or program.\n\nHISTORY:\nValenzuela National High School, originally known as Valenzuela Municipal High School, traces its roots back to 1968 when Maysan Barrio High School was established through the initiative of Mayor Geronimo S. Angeles. By 1969, other barrio high schools in Marulas, Malinta, Gen. T. de Leon, and Polo were also founded. That same year, these schools were unified under the Valenzuela Municipal High School, with Mrs. Josefina A. Lizaso as the first principal.\n\nDue to the growing student population, additional annexes were opened in Lawang Bato, Canumay, and Caruhatan between 1970 and 1972. In 1975, leadership passed to Mrs. Filipina M. Tetangco, and the main office was transferred to the Marulas Annex.\n\nSignificant developments followed in the 1980s:\n\nSeveral annexes were relocated to new sites.\n\nIn 1988, the school was nationalized and became Valenzuela National High School (VNHS).\n\nFrom the late 1980s to the 2000s, leadership changed several times, and more annexes were created to serve Valenzuela’s growing youth population. Many annexes eventually became independent national high schools.\n\nIn 1996, ValNat launched a Science-Oriented Experimental Class (SOEC) to support students with advanced Math and Science talents, which ran until 2006. Later, Special Education classes and the Science and Technology Engineering Program (STEP) were also introduced.\n\nThe school adapted to educational reforms, including the K to 12 Basic Education Program in 2012. In 2014, Mr. Filmore R. Caballero became the 6th principal.\n\nToday, ValNat continues to thrive with its commitment to providing real-life, quality education, guided by its mantra: "Learn Life @ ValNat, your gateway to quality life."\n\nVISION:\nWe dream of Filipinos \nwho passionately love their country \nand whose values and competencies  \nenable them to realize their full potential \nand contribute meaningfully to building the nation.\nAs a learner-centered public institution, \nthe Department of Education \ncontinuously improves itself \nto better serve its stakeholders.\n\nCORE VALUES:\nMaka-Diyos\nMaka-Tao\nMakakalikasan\nMakabansa\n\nMISSION \nTo protect and promote the right of every Filipino to quality, equitable, culture-based, and complete basic education where:\n•\tStudents learn in a child-friendly, gender-sensitive, safe, and motivating environment.\n•\tTeachers facilitate learning and constantly nurture every learner.\n•\tAdministrators and staff, as stewards of the institution, ensure an enabling and supportive environment for effective learning to happen.\n•\tFamily, community, and other stakeholders are actively engaged and share responsibility for developing life-long learners.',
          },
        ],
      },
      {
        role: 'user',
        parts: [{ text: 'what are the programs of ValNat?' }],
      },
      {
        role: 'model',
        parts: [
          {
            text: "Valenzuela National High School (ValNat) offers a range of programs across different levels. Here's a breakdown:\n\n**Junior High School (Grades 7-10):**\n\n*   **Regular Program:** The standard curriculum for all students.\n*   **Special Education (SPED) Program:** Designed for students with special needs and exceptionalities, providing tailored support and instruction.\n*   **Science, Technology, and Engineering Program (STE):** A specialized program focused on developing students' skills and knowledge in science, technology, and engineering fields.\n\n**Senior High School (Grades 11-12):**\n\n*   **Academic Track:**\n    *   **Science, Technology, Engineering, and Mathematics (STEM):** Geared towards students interested in pursuing careers in science, engineering, mathematics, and related fields.\n    *   **Accountancy, Business, and Management (ABM):** Designed for students who plan to take up business-related courses in college, such as accounting, marketing, and management.\n    *   **Information and Communications Technology (ICT) Strand:** This strand is ideal for those who wish to enter the workforce in the ICT industry right after graduation or pursue further studies in ICT-related fields.\n    *   **Home Economics(HE):** this strand focuses on practical skills and knowledge for home management, culinary arts, and related fields, preparing students for careers in food service, hospitality, and entrepreneurship",
          },
        ],
      },
      {
        role: 'user',
        parts: [{ text: 'what is the mission of Valnat?' }],
      },
      {
        role: 'model',
        parts: [
          {
            text: 'The mission of Valenzuela National High School is to protect and promote the right of every Filipino to quality, equitable, culture-based, and complete basic education where:\n•\tStudents learn in a child-friendly, gender-sensitive, safe, and motivating environment.\n•\tTeachers facilitate learning and constantly nurture every learner.\n•\tAdministrators and staff, as stewards of the institution, ensure an enabling and supportive environment for effective learning to happen.\n•\tFamily, community, and other stakeholders are actively engaged and share responsibility for developing life-long learners.',
          },
        ],
      },
      {
        role: 'user',
        parts: [{ text: 'when was establish valnat?' }],
      },
      {
        role: 'model',
        parts: [
          {
            text: 'Valenzuela National High School (ValNat) can trace its roots back to 1968 with the establishment of Maysan Barrio High School. In 1969, several barrio high schools were unified under the name Valenzuela Municipal High School. It was nationalized and became Valenzuela National High School in 1988.\n',
          },
        ],
      },
      {
        role: 'user',
        parts: [{ text: 'who is the current principal of ValNat?' }],
      },
      {
        role: 'model',
        parts: [
          {
            text: "Finding up-to-the-minute information on the current principal can be a little tricky, as school leadership can change. To get the most accurate answer, I recommend checking the following:\n\n*   **Valenzuela National High School's Official Website:** Many schools have websites that list key personnel.\n*   **Valenzuela City Department of Education (DepEd) Office:** Contacting the local DepEd office might provide the latest information.\n",
          },
        ],
      },
      {
        role: 'user',
        parts: [{ text: 'give me the history of ValNat' }],
      },
      {
        role: 'model',
        parts: [
          {
            text: 'Okay, here\'s a more detailed history of Valenzuela National High School (ValNat):\n\n**Early Beginnings (1968-1975):**\n\n*   **1968: The Seed is Planted:** The story begins with the establishment of *Maysan Barrio High School* through the initiative of then-Mayor Geronimo S. Angeles. This was a response to the growing need for secondary education in the local communities.\n*   **1969: Expansion and Unification:** Recognizing the need for more accessible education, barrio high schools in Marulas, Malinta, Gen. T. de Leon, and Polo were also founded.  These separate schools were then unified under the name **Valenzuela Municipal High School**. Mrs. Josefina A. Lizaso was appointed as the first principal, tasked with guiding the newly formed institution.\n*   **1970-1972: Growing to Meet Demand:** As the student population increased, Valenzuela Municipal High School opened annexes in Lawang Bato, Canumay, and Caruhatan to accommodate more students.\n*   **1975: Leadership Change:** Mrs. Filipina M. Tetangco took over as principal, and the main office was moved to the Marulas Annex.\n\n**Growth and Development (1980s - 2000s):**\n\n*   **The 1980s: Relocation and Reorganization:** Several annexes were relocated to better serve their communities. This period likely involved addressing logistical challenges and ensuring adequate facilities.\n*   **1988: Nationalization - Valenzuela National High School is Born:** A significant milestone occurred when the school was nationalized, officially becoming **Valenzuela National High School (VNHS)**. This likely brought increased resources and standardized curriculum.\n*   **Late 1980s - 2000s: Continued Expansion and Annex Independence:** During this period, there were several changes in leadership.  To address the continuing growth in the student population, more annexes were created. Importantly, many of these annexes eventually became independent national high schools in their own right, demonstrating ValNat\'s role in expanding secondary education in Valenzuela.\n\n**Modern Era (2000s - Present):**\n\n*   **Specialized Programs:** In 1996, ValNat launched a Science-Oriented Experimental Class (SOEC) designed for students with exceptional aptitude in math and science (this ran until 2006). Later, the school introduced Special Education (SPED) classes to cater to students with diverse learning needs, and the Science and Technology Engineering Program (STEP) to further enhance STEM education.\n*   **Adapting to Educational Reforms:** ValNat embraced educational reforms, including the implementation of the K to 12 Basic Education Program in 2012, which added Senior High School (Grades 11 and 12).\n*    Mr. Filmore R. Caballero became the 6th principal in 2014.\n*    Christopher J. Delino, PhD bacame the principal after Mr. Filmore R. Caballero.\n*    Ma. Christina C. Salonga, PhD is the current principal. \n*   **Present Day:** Valenzuela National High School continues to be a prominent educational institution in Valenzuela City, committed to providing quality education and preparing students for future success. Its guiding mantra is "Learn Life @ ValNat, your gateway to quality life."\n\nIn summary, ValNat has evolved from a small collection of barrio high schools to a large and established national high school, playing a vital role in educating generations of students in Valenzuela City. It has adapted to changing educational landscapes and continues to strive for excellence in education.\n',
          },
        ],
      },
      {
        role: 'user',
        parts: [
          { text: 'Who is the department head of english, math, and filipino' },
        ],
      },
      {
        role: 'model',
        parts: [
          {
            text: 'These are the department head of Valenzuela National High school:\n\nEnglish: Rufina G. Tabino\nMathematics:  Emma D. Tejuco\nFilipino: Rose Marie A. Abellera',
          },
        ],
      },
      {
        role: 'user',
        parts: [
          { text: 'what are the requirements for the enrollment for STE?' },
        ],
      },
      {
        role: 'model',
        parts: [
          {
            text: "The specific requirements for enrollment in the Science, Technology, and Engineering (STE) Program at Valenzuela National High School (ValNat) can vary slightly from year to year. However, here are the typical requirements and qualifications you can expect:\n\n**General Requirements (Common to most STE programs):**\n\n*   **Academic Excellence:**\n    *   A high Grade Point Average (GPA) in Science, Mathematics, and English. A grade of 85 and above for the mentioned subjects.\n    *   A general average of 83 and above.\n*   **Entrance Exam:**\n    *   Passing the STE Program entrance examination. This exam typically covers Science, Mathematics, and logical reasoning.\n*   **Interview:**\n    *   Successful completion of an interview. This interview is used to assess the student's interest in the STE program, their communication skills, and their overall suitability for the program.\n*   **Recommendation Letters:**\n    *   Recommendation letters from the applicant's science and math teachers.\n\n**Specific Documents Usually Required:**\n\n*   **Form 138 (Report Card):** Original copy of the student's Grade 6/Grade 10 report card, showing the required grades.\n*   **Birth Certificate:** Original and photocopy of the student's birth certificate from the Philippine Statistics Authority (PSA).\n*   **Certificate of Good Moral Character:** A certificate from the previous school indicating good behavior and conduct.\n*   **Two Passport-Size Photos:** Recent passport-size photos of the applicant.\n*   **Medical Certificate:** A medical certificate from a licensed physician, certifying that the student is in good health.\n*   **Application Form:** A completed application form (available from the school).\n*   **Proof of Residency:**Proof of Parent/ Guardian's Residency such as any of the following:\n1. Voters ID/ Certification\n2. Utility Bills (Meralco , Maynilad, etc.)\n\nApplication Process:\nStep 1: Download the Application form from the link provided below or get a copy at VNHS Guidance office.\n\nhttps://drive.google.com/drive/folders/lp-9ZJu_WqWOWxJsVIUsRSAbp6bbZXfzw\n\nStep 2: Fill out the application form completely and submit with necessary requirements placed inside \n\n**Important Notes:**\n\n*   **Check the Official Announcement:** The most accurate information will always come from the official announcements released by Valenzuela National High School, typically available on their school website or posted on bulletin boards within the school.\n*   **Contact the School Directly:** If you have specific questions or need clarification, don't hesitate to contact the school's registrar or the STE program coordinator directly. They can provide the most up-to-date information and address any concerns you may have.\n*   **Deadlines:** Pay close attention to the application deadlines and ensure that all required documents are submitted on time.\n*   **Residence Requirements:** Some schools may have specific residency requirements for admission to specialized programs. Check if there are any such requirements for ValNat's STE program.\n\nGood luck with your application!\n",
          },
        ],
      },
      {
        role: 'user',
        parts: [{ text: 'who is the principal' }],
      },
      {
        role: 'model',
        parts: [
          {
            text: 'The current principal of Valenzuela National High School (ValNat) is Ms. Ma. Christina C. Salonga, PhD.\n\nShe is the latest school head after Dr. Christopher J. Delino and Mr. Filmore R. Caballero.\nDr. Salonga is leading ValNat in continuing its vision of providing quality and life-ready education to the students of Valenzuela City.',
          },
        ],
      },
      {
        role: 'user',
        parts: [{ text: 'give me the list of all former principals' }],
      },
      {
        role: 'model',
        parts: [
          {
            text: "Okay, here's a list of the former principals of Valenzuela National High School (ValNat), in chronological order, based on the information available:\n\n1. Mrs. Josefina A. Lizaso – First Principal (1969)\n\n2. Mrs. Filipina M. Tetangco – Second Principal (1975)\n\n3. Dr. Joel T. San Luis – Third Principal (1989)\n\n4. Mrs. Saturnina R. Bulan – Officer-in-Charge during Dr. San Luis’ leave\n\n5. Mrs. Madarang – Fourth Principal (Transferred to Dalandanan National High School in 2004)\n\n6. Dr. Margarito B. Materum – Fifth Principal (2004)\n\n7. Mr. Filmore R. Caballero – Sixth Principal (2014)\n\n8. Dr. Christopher J. Delino – Principal after Mr. Caballero\n\n9. Ms. Ma. Christina C. Salonga, PhD – Current Principal\n",
          },
        ],
      },
      {
        role: 'user',
        parts: [{ text: 'what are the school hours' }],
      },
      {
        role: 'model',
        parts: [
          {
            text: 'The school hours in Valenzuela National High School (ValNat) are from 6:00 AM to 7:00 PM',
          },
        ],
      },
      {
        role: 'user',
        parts: [{ text: 'How can I contact ValNat?' }],
      },
      {
        role: 'model',
        parts: [
          {
            text: '*   **Address:** A. Fernando Street, Marulas, Valenzuela City, Philippines\n*   **Telephone:** Information regarding the phone number for this school is unavailable.\n*   **Facebook:** DepEd ValNat HS\n*   **Website:** valnaths.com\n*   **Email:** vnhs.valnat@yahoo.com',
          },
        ],
      },
      {
        role: 'user',
        parts: [{ text: 'Is there a school uniform policy in ValNat?' }],
      },
      {
        role: 'model',
        parts: [
          {
            text: "Yes, Valenzuela National High School has a school uniform policy. The specific details of the uniform (design, colors, etc.) are usually provided by the school administration to enrolled students. It's best to inquire directly with the school for the most accurate and up-to-date information.\n\nGenerally, public schools in the Philippines require students to wear uniforms as it promotes discipline, equality, and a sense of belonging.\n",
          },
        ],
      },
      {
        role: 'user',
        parts: [
          {
            text: 'What academic tracks are offered in Senior High School at ValNat?',
          },
        ],
      },
      {
        role: 'model',
        parts: [
          {
            text: 'Valenzuela National High School (ValNat) offers the following academic tracks in Senior High School (Grades 11-12):\n\n*   **Academic Track:**\n    *   **Science, Technology, Engineering, and Mathematics (STEM):** Geared towards students interested in pursuing careers in science, engineering, mathematics, and related fields.\n    *   **Accountancy, Business, and Management (ABM):** Designed for students who plan to take up business-related courses in college, such as accounting, marketing, and management.\n\n*   **Technical-Vocational-Livelihood (TVL) Track:**\n\n    *   **Information and Communications Technology (ICT) Strand:** This strand is ideal for those who wish to enter the workforce in the ICT industry right after graduation or pursue further studies in ICT-related fields.\n    *   **Home Economics(HE):** This strand focuses on practical skills and knowledge for home management, culinary arts, and related fields, preparing students for careers in food service, hospitality, and entrepreneurship',
          },
        ],
      },
      {
        role: 'user',
        parts: [{ text: 'How many sections are there per academic track?' }],
      },
      {
        role: 'model',
        parts: [
          {
            text: '* 2 sections for STEM\n\n* 2 sections for ABM\n\n* 2 sections for ICT\n\n* 2 sections for HE',
          },
        ],
      },
      {
        role: 'user',
        parts: [
          { text: 'Can I shift to another strand after enrollment in ValNat?' },
        ],
      },
      {
        role: 'model',
        parts: [
          {
            text: 'No, shifting to another strand after enrollment is not allowed.',
          },
        ],
      },
      {
        role: 'user',
        parts: [
          { text: 'How do I enroll at Valenzuela National High School?' },
        ],
      },
      {
        role: 'model',
        parts: [
          {
            text: 'Enrollment is done at the Guidance Center Lobby. You must submit the required documents within the enrollment period.',
          },
        ],
      },
      {
        role: 'user',
        parts: [{ text: 'What are the requirements for Grade 11 admission?' }],
      },
      {
        role: 'model',
        parts: [
          {
            text: "Okay, here are the typical requirements for Grade 11 admission at Valenzuela National High School (ValNat). Keep in mind that it's always best to check with the school directly for the most up-to-date and specific details.\n\n**Basic Requirements (Documents):**\n\n*   **Junior High School Completion:**\n    *   **Original copy of Grade 10 Report Card (Form 138):** This shows your grades and that you successfully completed Junior High School.\n    *   **Certificate of Completion:** Official certification of finishing Grade 10.\n*   **Birth Certificate:**\n    *   **Original and Photocopy of Birth Certificate:** Issued by the Philippine Statistics Authority (PSA).\n*   **Good Moral Character:**\n    *   **Certificate of Good Moral Character:** From your previous Junior High School.\n\n**General Steps for Enrollment:**\n\n1.  **Check for Announcements:** Watch for announcements from Valenzuela National High School regarding the enrollment period, specific instructions, and any updated requirements. Look for these announcements on the school's website, social media pages, or posted within the school.\n2.  **Obtain and Fill Out the Application Form:** Get the official application form from the school (Guidance Office, usually). Fill it out completely and accurately.\n3.  **Prepare Documents:** Gather all the required documents listed above. Make sure you have both the original documents and photocopies as needed.\n4.  **Submit the Application and Documents:** Submit the completed application form and all required documents to the designated enrollment personnel during the enrollment period. This is usually done at the Guidance Center Lobby.\n5.  **Follow Instructions:** The enrollment personnel will guide you through the remaining steps of the enrollment process, which may include paying fees (if applicable), getting your student ID, and attending orientation.\n6.  **Attend Orientation:** Attend the orientation session to learn about the school's policies, curriculum, and other important information.\n\n**Important Reminders:**\n\n*   **Enrollment Period:** Adhere to the announced enrollment period. Late enrollment may have consequences.\n*   **Accurate Information:** Provide accurate and truthful information on your application form and documents.\n*   **Ask Questions:** Don't hesitate to ask questions if you are unsure about any part of the enrollment process. Contact the school's Registrar or Guidance Counselor for assistance.\n*   **Keep Copies:** It's a good idea to keep copies of all submitted documents for your own records.\n\nBy following these steps and preparing the necessary documents, you can smoothly enroll in Grade 11 at Valenzuela National High School.\n",
          },
        ],
      },
      {
        role: 'user',
        parts: [{ text: 'When is the enrollment period in ValNat?' }],
      },
      {
        role: 'model',
        parts: [
          {
            text: 'Enrollment is from January 27 to February 28 (Early Registration), 8:00 AM – 3:00 PM.',
          },
        ],
      },
      {
        role: 'user',
        parts: [{ text: 'Can transferees enroll at ValNat?' }],
      },
      {
        role: 'model',
        parts: [{ text: 'Yes, transferees are allowed to enroll.' }],
      },
      {
        role: 'user',
        parts: [{ text: 'Is there an entrance exam in ValNat?' }],
      },
      {
        role: 'model',
        parts: [{ text: 'Yes, there is an entrance exam.' }],
      },
      {
        role: 'user',
        parts: [{ text: 'Does ValNat offer remedial classes?' }],
      },
      {
        role: 'model',
        parts: [{ text: 'Yes, remedial classes are offered.' }],
      },
      {
        role: 'user',
        parts: [{ text: 'Does ValNat have Saturday classes?' }],
      },
      {
        role: 'model',
        parts: [{ text: 'No, there are no Saturday classes.' }],
      },
      {
        role: 'user',
        parts: [
          { text: 'Does ValNat offer a Special Education (SPED) Program?' },
        ],
      },
      {
        role: 'model',
        parts: [
          {
            text: 'Yes, Valenzuela National High School (ValNat) does offer a Special Education (SPED) Program.\n',
          },
        ],
      },
      {
        role: 'user',
        parts: [{ text: 'When is the enrollment for Junior High School?' }],
      },
      {
        role: 'model',
        parts: [
          {
            text: 'Based on the most recent information, early registration for junior high school starts on January 27 and ends on February 28.',
          },
        ],
      },
      {
        role: 'user',
        parts: [{ text: 'Does ValNat offer an STE Program?' }],
      },
      {
        role: 'model',
        parts: [
          {
            text: 'Yes, Valenzuela National High School (ValNat) does offer a Science, Technology, and Engineering (STE) Program. It is a specialized program for junior high school students (Grades 7-10) who have a strong aptitude and interest in science, technology, engineering, and mathematics.\n',
          },
        ],
      },
      {
        role: 'user',
        parts: [{ text: 'When is the enrollment for the STE Program?' }],
      },
      {
        role: 'model',
        parts: [
          {
            text: 'The enrollment schedule for the Science, Technology, and Engineering (STE) Program at Valenzuela National High School (ValNat) is as follows:\n\nFebruary 3-21, 2025 – Filing and submission of application and requirements\n\nMarch 1, 2025 – Written examination (8:00 AM - 12:00 NN)\n\nMarch 10-14, 2025 – Interview (1:00 PM - 3:00 PM)\n\nMarch 24, 2025 – Posting of qualified STE Grade 7 learners for SY 2025-2026',
          },
        ],
      },
      {
        role: 'user',
        parts: [
          {
            text: 'Are transferees allowed to enroll in the STE Program or Junior High School at ValNat?',
          },
        ],
      },
      {
        role: 'model',
        parts: [
          {
            text: 'Yes, transferees are generally allowed to enroll in both the regular Junior High School program and, potentially, the Science, Technology, and Engineering (STE) Program at Valenzuela National High School (ValNat).\n\nFor the STE program, transferees usually need to meet the same rigorous admission requirements as incoming Grade 7 students, including:\n\n1. Academic Excellence\n2. Entrance Exam\n3. Interview\n4. Recommendation Letters\n\n**Therefore, while transferees are allowed, admission to the STE program is competitive, and they need to demonstrate their qualifications.**\n',
          },
        ],
      },
      {
        role: 'user',
        parts: [{ text: 'Does ValNat have an official Facebook page?' }],
      },
      {
        role: 'model',
        parts: [
          {
            text: 'Yes, Valenzuela National High School (ValNat) has an official Facebook page. It is under the name, DepEd ValNat HS.\nYou can visit it here: https://www.facebook.com/DepEdValNatHS',
          },
        ],
      },
    ],
  });

  try {
    const { question } = req.body;
    const result = await chatSession.sendMessage(question);
    // TODO: Following code needs to be updated for client-side apps.
    const candidates = result.response.candidates;
    for (
      let candidate_index = 0;
      candidate_index < candidates.length;
      candidate_index++
    ) {
      for (
        let part_index = 0;
        part_index < candidates[candidate_index].content.parts.length;
        part_index++
      ) {
        const part = candidates[candidate_index].content.parts[part_index];
        if (part.inlineData) {
          try {
            const filename = `output_${candidate_index}_${part_index}.${mime.extension(
              part.inlineData.mimeType
            )}`;
            fs.writeFileSync(
              filename,
              Buffer.from(part.inlineData.data, 'base64')
            );
            console.log(`Output written to: ${filename}`);
          } catch (err) {
            console.error(err);
          }
        }
      }
    }
    res.json({ answer: result.response.text() });
  } catch (error) {
    res.status(500).json({ error: 'internal server error' });
  }
};

module.exports = generateChat;
