// Question bank based on Life in the UK guide content
const questions = [
    {
        id: 1,
        question: "What is the minimum score required to pass the Life in the UK test?",
        options: ["60%", "70%", "75%", "80%"],
        correct: 2,
        explanation: "You need to score at least 75% (18 correct answers out of 24) to pass the Life in the UK test.",
        chapter: 1,
        section: "Taking the Life in the UK test"
    },
    {
        id: 2,
        question: "How many questions are in the Life in the UK test?",
        options: ["20", "24", "30", "36"],
        correct: 1,
        explanation: "The Life in the UK test consists of 24 questions about important aspects of life in the UK.",
        chapter: 1,
        section: "Taking the Life in the UK test"
    },
    {
        id: 3,
        question: "Which of the following is NOT one of the fundamental principles of British life?",
        options: ["Democracy", "The rule of law", "Individual liberty", "Religious uniformity"],
        correct: 3,
        explanation: "The fundamental principles of British life include: Democracy, The rule of law, Individual liberty, Tolerance of those with different faiths and beliefs, and Participation in community life. Religious uniformity is not a principle - tolerance of different faiths is.",
        chapter: 1,
        section: "The values and principles of the UK"
    },
    {
        id: 4,
        question: "What is the capital city of Scotland?",
        options: ["Glasgow", "Edinburgh", "Aberdeen", "Inverness"],
        correct: 1,
        explanation: "Edinburgh is the capital of Scotland. London is the capital of England and the UK, Cardiff is the capital of Wales, and Belfast is the capital of Northern Ireland.",
        chapter: 2,
        section: "What is the UK?"
    },
    {
        id: 5,
        question: "What is the capital city of Wales?",
        options: ["Swansea", "Cardiff", "Newport", "Wrexham"],
        correct: 1,
        explanation: "Cardiff is the capital of Wales.",
        chapter: 2,
        section: "What is the UK?"
    },
    {
        id: 6,
        question: "Approximately how long did the Romans rule Britain?",
        options: ["200 years", "300 years", "400 years", "500 years"],
        correct: 2,
        explanation: "The Romans ruled Britain from 43-410 AD (approximately 400 years).",
        chapter: 3,
        section: "Early Britain"
    },
    {
        id: 7,
        question: "Who built Hadrian's Wall?",
        options: ["Julius Caesar", "Emperor Hadrian", "King Alfred", "William the Conqueror"],
        correct: 1,
        explanation: "Hadrian's wall was built on orders of Roman Emperor Hadrian to keep out tribes (Picts) who lived in what is now Scotland.",
        chapter: 3,
        section: "Early Britain"
    },
    {
        id: 8,
        question: "In which year did William of Normandy conquer England at the Battle of Hastings?",
        options: ["1066", "1067", "1068", "1069"],
        correct: 0,
        explanation: "In 1066, William of Normandy conquered England at the Battle of Hastings. This event is depicted in the Bayeux Tapestry.",
        chapter: 3,
        section: "The Middle Ages"
    },
    {
        id: 9,
        question: "Which battle saw Scottish King Robert the Bruce defeat the English in 1314?",
        options: ["Battle of Hastings", "Battle of Bannockburn", "Battle of Bosworth Field", "Battle of Marston Moor"],
        correct: 1,
        explanation: "In 1314, the Battle of Bannockburn saw Scottish King Robert the Bruce defeat the English.",
        chapter: 3,
        section: "The Middle Ages"
    },
    {
        id: 10,
        question: "What was the War of the Roses?",
        options: ["A war between England and France", "A civil war between House of Lancaster and House of York", "A war between England and Scotland", "A religious war"],
        correct: 1,
        explanation: "The War of the Roses (1455) was a civil war between House of Lancaster (red rose) and House of York (white rose) to determine who should be king of England.",
        chapter: 3,
        section: "The Middle Ages"
    },
    {
        id: 11,
        question: "Which king was famous for marrying 6 times and breaking away from the Church of Rome?",
        options: ["Henry VII", "Henry VIII", "Edward VI", "James I"],
        correct: 1,
        explanation: "Henry VIII was famous for marrying 6 times and breaking away from Church of Rome so he could get a divorce. Wales was united with England under his rule.",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 12,
        question: "In which year was the Spanish Armada defeated?",
        options: ["1586", "1587", "1588", "1589"],
        correct: 2,
        explanation: "In 1588, the Spanish Armada was defeated under Elizabeth I.",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 13,
        question: "Who was titled Lord Protector and led Britain whilst it was without a monarch?",
        options: ["Charles I", "Charles II", "Oliver Cromwell", "William of Orange"],
        correct: 2,
        explanation: "Oliver Cromwell was titled Lord Protector (circa 1640s-1650s) and led Britain whilst it was without a monarch.",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 14,
        question: "What was the Glorious Revolution?",
        options: ["The defeat of the Spanish Armada", "When English Protestants asked William of Orange to become king", "The Industrial Revolution", "The establishment of the NHS"],
        correct: 1,
        explanation: "The Glorious Revolution (1688): English Protestants asked Mary's husband William of Orange (of the Netherlands) to proclaim himself king, as they didn't want a Catholic king. He faced no resistance.",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 15,
        question: "In which year did the Act of Union unite England and Scotland?",
        options: ["1701", "1707", "1714", "1721"],
        correct: 1,
        explanation: "The Act of Union (1707) united kingdoms of England and Scotland and created Kingdom of Great Britain.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 16,
        question: "Who was the first Prime Minister of Britain?",
        options: ["Robert Walpole", "William Pitt", "Robert Peel", "Benjamin Disraeli"],
        correct: 0,
        explanation: "Sir Robert Walpole was the first PM (1721-1742) as King George I (a German) relied heavily on ministers because of his poor English.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 17,
        question: "Which battle saw Lord Horatio Nelson defeat the French and Spanish fleet?",
        options: ["Battle of Waterloo", "Battle of Trafalgar", "Battle of the Somme", "Battle of Britain"],
        correct: 1,
        explanation: "In 1805, the Battle of Trafalgar saw Lord Horatio Nelson (of Nelson's Column) defeat French (Napoleon) + Spanish fleet.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 18,
        question: "In which year was slavery abolished throughout the British Empire?",
        options: ["1823", "1833", "1843", "1853"],
        correct: 1,
        explanation: "The Emancipation Act (1833) abolished slavery throughout British Empire. William Wilberforce was leading abolitionist and Quakers set up first anti-slavery groups.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 19,
        question: "Who was the founder of modern nursing?",
        options: ["Emmeline Pankhurst", "Florence Nightingale", "Mary Seacole", "Edith Cavell"],
        correct: 1,
        explanation: "Florence Nightingale was the founder of modern nursing.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 20,
        question: "In which year did women first get the right to vote (at age 30+)?",
        options: ["1916", "1917", "1918", "1919"],
        correct: 2,
        explanation: "Women's suffrage - 1918 (vote at 30+ yrs) and 1928 (vote at 21 yrs, same as men).",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 21,
        question: "Who was the leader of the women's suffrage movement?",
        options: ["Florence Nightingale", "Emmeline Pankhurst", "Mary Wollstonecraft", "Virginia Woolf"],
        correct: 1,
        explanation: "Emmeline Pankhurst was a suffrage leader.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 22,
        question: "In which year did World War I end?",
        options: ["1916", "1917", "1918", "1919"],
        correct: 2,
        explanation: "WWI ended at 11.00 on 11/11/1918.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 23,
        question: "Who discovered penicillin?",
        options: ["Alexander Fleming", "Louis Pasteur", "Joseph Lister", "Robert Koch"],
        correct: 0,
        explanation: "Alexander Fleming was a Scottish doctor who discovered penicillin (1928).",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 24,
        question: "In which year was the NHS established?",
        options: ["1943-1947", "1945-1950", "1947-1952", "1950-1955"],
        correct: 1,
        explanation: "In 1945-1950, NHS and social security system were established.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 25,
        question: "Who became Prime Minister in 1945 and created the NHS?",
        options: ["Winston Churchill", "Clement Attlee", "Harold Macmillan", "Anthony Eden"],
        correct: 1,
        explanation: "Clement Attlee was Churchill's Deputy PM. Became PM in 1945. Nationalised major industries and created NHS.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 26,
        question: "In which year did the UK join the EEC (European Economic Community)?",
        options: ["1971", "1972", "1973", "1974"],
        correct: 2,
        explanation: "In 1973, UK joined the EEC.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 27,
        question: "Who was the first female Prime Minister of the UK?",
        options: ["Margaret Thatcher", "Theresa May", "Liz Truss", "None of the above"],
        correct: 0,
        explanation: "Margaret Thatcher was first female PM and the longest serving PM of the 20th century.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 28,
        question: "In which year was the Good Friday Agreement signed?",
        options: ["1996", "1997", "1998", "1999"],
        correct: 2,
        explanation: "In 1998, the Good Friday Agreement led to establishment of Northern Irish parliament.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 29,
        question: "In which year were the Scottish parliament and Welsh assembly established?",
        options: ["1997", "1998", "1999", "2000"],
        correct: 2,
        explanation: "In 1999, Scottish parliament & Welsh assembly were established.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 30,
        question: "Who invented the World Wide Web?",
        options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Mark Zuckerberg"],
        correct: 2,
        explanation: "TV & World Wide Web (Tim Berners-Lee) invented.",
        chapter: 3,
        section: "Britain since 1945"
    },
    {
        id: 31,
        question: "Which Welsh poet wrote 'Under Milk Wood' and 'Do Not Go Gentle into that Good Night'?",
        options: ["Dylan Thomas", "Robert Burns", "W.H. Auden", "Philip Larkin"],
        correct: 0,
        explanation: "Dylan Thomas: Welsh poet ('Under Milk Wood' & 'Do Not Go Gentle into that Good Night').",
        chapter: 4,
        section: "Arts and culture"
    },
    {
        id: 32,
        question: "Which Scottish poet is known as 'The Bard' and wrote 'Auld Lang Syne'?",
        options: ["Robert Burns", "Dylan Thomas", "William Wordsworth", "Lord Byron"],
        correct: 0,
        explanation: "Robert Burns: Scottish poet ('The Bard'), Auld Lang Syne.",
        chapter: 4,
        section: "Arts and culture"
    },
    {
        id: 33,
        question: "Who wrote 'Charlie and the Chocolate Factory' and 'George's Marvellous Medicine'?",
        options: ["J.K. Rowling", "Roald Dahl", "C.S. Lewis", "Enid Blyton"],
        correct: 1,
        explanation: "Roald Dahl: Welsh author ('Charlie and the Chocolate Factory' & 'George's Marvellous Medicine').",
        chapter: 4,
        section: "Arts and culture"
    },
    {
        id: 34,
        question: "Who created the character Sherlock Holmes?",
        options: ["Charles Dickens", "Sir Arthur Conan Doyle", "Agatha Christie", "P.G. Wodehouse"],
        correct: 1,
        explanation: "Sir Arthur Conan Doyle: Scottish author ('Sherlock Holmes').",
        chapter: 4,
        section: "Arts and culture"
    },
    {
        id: 35,
        question: "What does the Habeas Corpus Act (1679) forbid?",
        options: ["Religious discrimination", "Unlawful imprisonment", "Taxation without representation", "Cruel and unusual punishment"],
        correct: 1,
        explanation: "The Habeas Corpus Act (1679) forbade unlawful imprisonment.",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 36,
        question: "What did the Bill of Rights (1689) confirm?",
        options: ["The rights of Parliament and limits of the king's power", "The right to free speech", "The right to bear arms", "The right to religious freedom"],
        correct: 0,
        explanation: "The Bill of Rights (1689) confirmed the rights of Parliament and the limits of the king's power.",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 37,
        question: "What did the Reform Act (1832) do?",
        options: ["Abolished slavery", "Established the NHS", "Abolished pocket and rotten boroughs and gave more parliamentary seats to towns", "Gave women the right to vote"],
        correct: 2,
        explanation: "The Reform Act (1832) abolished pocket and rotten boroughs and gave more parliamentary seats to towns and cities. Increased number of (male) voters.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 38,
        question: "Who was King Alfred the Great?",
        options: ["First King of England", "King who united the Anglo-Saxon kingdoms and defeated the Vikings", "First Norman king", "King during the Industrial Revolution"],
        correct: 1,
        explanation: "King Alfred the Great united the Anglo-Saxon kingdoms of England and defeated the Vikings.",
        chapter: 3,
        section: "Early Britain"
    },
    {
        id: 39,
        question: "What was the Industrial Revolution?",
        options: ["A political revolution", "A period when Britain produced over half of the world's supplies of cotton cloth, coal and iron", "A religious movement", "A war"],
        correct: 1,
        explanation: "The Industrial Revolution (from mid-1700s to 1800s) saw Britain produce over half of the world's supplies of cotton cloth, coal and iron. Machinery and steam power developed.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 40,
        question: "In which year did the American colonies declare independence?",
        options: ["1774", "1775", "1776", "1777"],
        correct: 2,
        explanation: "In 1776, American colonies declared independence over taxation.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 41,
        question: "What was the Battle of Britain?",
        options: ["A naval battle", "A German/British aerial battle", "A land battle in France", "A battle in North Africa"],
        correct: 1,
        explanation: "In 1940 (WWII), the Battle of Britain was a German/British aerial battle.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 42,
        question: "What was the Beveridge Report?",
        options: ["A report on education", "A report that set out ideas which led to the foundation of the modern welfare state", "A report on immigration", "A report on the economy"],
        correct: 1,
        explanation: "In 1942, the Beveridge Report (William Beveridge) set out ideas which led to foundation of modern welfare state.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 43,
        question: "What did the Education Act (1944) introduce?",
        options: ["Free primary education", "Free secondary education and clear distinction between primary and secondary", "University education", "Technical training"],
        correct: 1,
        explanation: "In 1944, the Education Act (R A Butler) introduced free secondary education and clear distinction between primary and secondary education.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 44,
        question: "In which year did Argentina invade the Falkland Islands?",
        options: ["1980", "1981", "1982", "1983"],
        correct: 2,
        explanation: "In 1982, Argentina invaded Falkland Islands.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 45,
        question: "What is the passing score for the Life in the UK test?",
        options: ["15 out of 24", "16 out of 24", "17 out of 24", "18 out of 24"],
        correct: 3,
        explanation: "You need to score at least 75% (18 correct answers out of 24) to pass the Life in the UK test.",
        chapter: 1,
        section: "Taking the Life in the UK test"
    },
    {
        id: 46,
        question: "How long do you have to complete the Life in the UK test?",
        options: ["30 minutes", "45 minutes", "60 minutes", "90 minutes"],
        correct: 1,
        explanation: "You have 45 minutes to complete the Life in the UK test.",
        chapter: 1,
        section: "Taking the Life in the UK test"
    },
    {
        id: 47,
        question: "Which of these is a responsibility of UK residents?",
        options: ["To vote in all elections", "To respect and obey the law", "To speak only English", "To join a political party"],
        correct: 1,
        explanation: "If you wish to be a permanent resident or citizen of the UK, you should: respect and obey the law, respect the rights of others, treat others with fairness, look after yourself and your family, and look after the area in which you live and the environment.",
        chapter: 1,
        section: "The values and principles of the UK"
    },
    {
        id: 48,
        question: "What does the UK offer in return for respecting its values?",
        options: ["Free housing", "Freedom of belief and religion, freedom of speech, freedom from unfair discrimination", "Free healthcare only", "Guaranteed employment"],
        correct: 1,
        explanation: "In return, the UK offers: freedom of belief and religion, freedom of speech, freedom from unfair discrimination, a right to a fair trial, and a right to join in the election of a government.",
        chapter: 1,
        section: "The values and principles of the UK"
    },
    {
        id: 49,
        question: "What is the capital city of Northern Ireland?",
        options: ["Belfast", "Dublin", "Derry", "Lisburn"],
        correct: 0,
        explanation: "Belfast is the capital of Northern Ireland.",
        chapter: 2,
        section: "What is the UK?"
    },
    {
        id: 50,
        question: "Which of these is NOT a country in the United Kingdom?",
        options: ["England", "Scotland", "Wales", "Ireland"],
        correct: 3,
        explanation: "The United Kingdom consists of England, Scotland, Wales and Northern Ireland. Ireland is a separate country.",
        chapter: 2,
        section: "What is the UK?"
    },
    {
        id: 51,
        question: "What is the capital city of England?",
        options: ["Manchester", "Birmingham", "London", "Liverpool"],
        correct: 2,
        explanation: "London is the capital of England and also the capital of the UK.",
        chapter: 2,
        section: "What is the UK?"
    },
    {
        id: 52,
        question: "How many test centres are there for the Life in the UK test?",
        options: ["About 40", "About 50", "About 60", "About 70"],
        correct: 2,
        explanation: "There are about 60 test centres around the UK.",
        chapter: 1,
        section: "Taking the Life in the UK test"
    },
    {
        id: 53,
        question: "Where can you book the Life in the UK test?",
        options: ["At a test centre", "By phone", "Online at www.lifeintheuktest.gov.uk", "By post"],
        correct: 2,
        explanation: "You can only book your test online, at www.lifeintheuktest.gov.uk.",
        chapter: 1,
        section: "Taking the Life in the UK test"
    },
    {
        id: 54,
        question: "In which languages can you take the Life in the UK test?",
        options: ["English only", "English, Welsh and Scottish Gaelic", "English and Welsh", "Any language"],
        correct: 1,
        explanation: "The Life in the UK test is usually taken in English, although special arrangements can be made if you wish to take it in Welsh or Scottish Gaelic.",
        chapter: 1,
        section: "Taking the Life in the UK test"
    },
    {
        id: 55,
        question: "What level of English is required for the Life in the UK test?",
        options: ["ESOL Entry Level 1", "ESOL Entry Level 2", "ESOL Entry Level 3", "ESOL Level 1"],
        correct: 2,
        explanation: "The questions are written in a way that requires an understanding of the English language at English for Speakers of Other Languages (ESOL) Entry Level 3.",
        chapter: 1,
        section: "Becoming a permanent resident"
    },
    {
        id: 56,
        question: "What is the Common European Framework level required for English speaking and listening skills?",
        options: ["A1", "A2", "B1", "B2"],
        correct: 2,
        explanation: "From October 2013, for settlement or permanent residence, you need to produce acceptable evidence of speaking and listening skills in English at B1 of the Common European Framework of Reference.",
        chapter: 1,
        section: "Becoming a permanent resident"
    },
    {
        id: 57,
        question: "Which of these is a fundamental principle of British life?",
        options: ["Religious uniformity", "Tolerance of those with different faiths and beliefs", "Economic equality", "Cultural assimilation"],
        correct: 1,
        explanation: "The fundamental principles of British life include: Democracy, The rule of law, Individual liberty, Tolerance of those with different faiths and beliefs, and Participation in community life.",
        chapter: 1,
        section: "The values and principles of the UK"
    },
    {
        id: 58,
        question: "What do new citizens pledge during the citizenship ceremony?",
        options: ["To pay taxes", "To uphold democratic values", "To speak English", "To vote in elections"],
        correct: 1,
        explanation: "As part of the citizenship ceremony, new citizens pledge to uphold democratic values. The pledge includes: 'I will give my loyalty to the United Kingdom and respect its rights and freedoms. I will uphold its democratic values.'",
        chapter: 1,
        section: "The values and principles of the UK"
    },
    {
        id: 59,
        question: "Which of these is NOT a responsibility of UK residents?",
        options: ["Respect and obey the law", "Look after the environment", "Vote in all elections", "Treat others with fairness"],
        correct: 2,
        explanation: "If you wish to be a permanent resident or citizen of the UK, you should: respect and obey the law, respect the rights of others, treat others with fairness, look after yourself and your family, and look after the area in which you live and the environment. Voting is a right, not a responsibility.",
        chapter: 1,
        section: "The values and principles of the UK"
    },
    {
        id: 60,
        question: "What right does the UK offer regarding religion?",
        options: ["Freedom of belief and religion", "State religion only", "Religious registration required", "No religious freedom"],
        correct: 0,
        explanation: "In return, the UK offers: freedom of belief and religion, freedom of speech, freedom from unfair discrimination, a right to a fair trial, and a right to join in the election of a government.",
        chapter: 1,
        section: "The values and principles of the UK"
    },
    {
        id: 61,
        question: "What was Hadrian's Wall built to keep out?",
        options: ["The Romans", "The Vikings", "Tribes (Picts) who lived in what is now Scotland", "The Anglo-Saxons"],
        correct: 2,
        explanation: "Hadrian's wall was built on orders of Roman Emperor Hadrian to keep out tribes (Picts) who lived in what is now Scotland.",
        chapter: 3,
        section: "Early Britain"
    },
    {
        id: 62,
        question: "Who united the Anglo-Saxon kingdoms of England?",
        options: ["William the Conqueror", "King Alfred the Great", "King Henry VIII", "King Edward I"],
        correct: 1,
        explanation: "King Alfred the Great united the Anglo-Saxon kingdoms of England and defeated the Vikings.",
        chapter: 3,
        section: "Early Britain"
    },
    {
        id: 63,
        question: "What period is known as the Middle Ages in British history?",
        options: ["500-1000 AD", "1066-1485", "1485-1603", "1603-1714"],
        correct: 1,
        explanation: "The Middle Ages (1066-1485) was a period of constant war, including Crusades and Hundred Years' War.",
        chapter: 3,
        section: "The Middle Ages"
    },
    {
        id: 64,
        question: "What is the Bayeux Tapestry?",
        options: ["A painting of the Battle of Hastings", "A depiction of the Battle of Hastings", "A medieval manuscript", "A royal crown"],
        correct: 1,
        explanation: "In 1066, William of Normandy conquered England at the Battle of Hastings. This event is depicted in the Bayeux Tapestry.",
        chapter: 3,
        section: "The Middle Ages"
    },
    {
        id: 65,
        question: "Who was the Scottish king who defeated the English at Bannockburn?",
        options: ["William Wallace", "Robert the Bruce", "James I", "Mary Queen of Scots"],
        correct: 1,
        explanation: "In 1314, the Battle of Bannockburn saw Scottish King Robert the Bruce defeat the English.",
        chapter: 3,
        section: "The Middle Ages"
    },
    {
        id: 66,
        question: "When did English become the preferred language of courts and official documents?",
        options: ["1200", "1300", "1400", "1500"],
        correct: 2,
        explanation: "In 1400, English became the preferred language of courts and official documents.",
        chapter: 3,
        section: "The Middle Ages"
    },
    {
        id: 67,
        question: "What were the two houses involved in the War of the Roses?",
        options: ["House of Tudor and House of Stuart", "House of Lancaster and House of York", "House of Plantagenet and House of Tudor", "House of York and House of Stuart"],
        correct: 1,
        explanation: "The War of the Roses (1455) was a civil war between House of Lancaster (red rose) and House of York (white rose) to determine who should be king of England.",
        chapter: 3,
        section: "The Middle Ages"
    },
    {
        id: 68,
        question: "Where did the War of the Roses end?",
        options: ["Battle of Hastings", "Battle of Bosworth Field", "Battle of Marston Moor", "Battle of Naseby"],
        correct: 1,
        explanation: "The War of the Roses ended at the Battle of Bosworth Field (1485). Henry Tudor of House of Lancaster became King Henry VII.",
        chapter: 3,
        section: "The Middle Ages"
    },
    {
        id: 69,
        question: "Who became King Henry VII?",
        options: ["Henry Tudor", "Henry Plantagenet", "Henry of York", "Henry Lancaster"],
        correct: 0,
        explanation: "Henry Tudor of House of Lancaster became King Henry VII and married Elizabeth of York, uniting the two families as the House of Tudor.",
        chapter: 3,
        section: "The Middle Ages"
    },
    {
        id: 70,
        question: "What was the Elizabethan period known for?",
        options: ["Religious conflict", "Growing patriotism, expanded trade and rich poetry and drama", "Industrial development", "Colonial expansion"],
        correct: 1,
        explanation: "The Elizabethan period (1500s) was known for growing patriotism, expanded trade and rich poetry and drama.",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 71,
        question: "During whose reign did English settlers begin to move to North American colonies?",
        options: ["Henry VIII", "Mary I", "Elizabeth I", "James I"],
        correct: 2,
        explanation: "During Queen Elizabeth I's reign, English settlers began to move to North American colonies.",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 72,
        question: "How many times did Henry VIII marry?",
        options: ["4 times", "5 times", "6 times", "7 times"],
        correct: 2,
        explanation: "Henry VIII was famous for marrying 6 times and breaking away from Church of Rome so he could get a divorce.",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 73,
        question: "Why did Henry VIII break away from the Church of Rome?",
        options: ["Religious reasons", "Political reasons", "To get a divorce", "Economic reasons"],
        correct: 2,
        explanation: "Henry VIII was famous for marrying 6 times and breaking away from Church of Rome so he could get a divorce.",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 74,
        question: "When was Wales united with England?",
        options: ["Under Henry VII", "Under Henry VIII", "Under Elizabeth I", "Under James I"],
        correct: 1,
        explanation: "Wales was united with England under Henry VIII's rule.",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 75,
        question: "What was the Act for the Government of Wales?",
        options: ["An act that separated Wales from England", "An act that united England and Wales", "An act that gave Wales independence", "An act that established Welsh parliament"],
        correct: 1,
        explanation: "The Act for the Government of Wales (under King Henry VII, 1500s) united England and Wales.",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 76,
        question: "When did the English Civil War begin?",
        options: ["1630", "1640", "1650", "1660"],
        correct: 1,
        explanation: "In 1640, the English Civil War began. Parliament (supporters: Roundheads) vs the King (Cavaliers).",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 77,
        question: "What were the supporters of Parliament called during the English Civil War?",
        options: ["Cavaliers", "Roundheads", "Royalists", "Puritans"],
        correct: 1,
        explanation: "In 1640, the English Civil War began. Parliament (supporters: Roundheads) vs the King (Cavaliers).",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 78,
        question: "What were the supporters of the King called during the English Civil War?",
        options: ["Roundheads", "Cavaliers", "Parliamentarians", "Republicans"],
        correct: 1,
        explanation: "In 1640, the English Civil War began. Parliament (supporters: Roundheads) vs the King (Cavaliers).",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 79,
        question: "Who introduced the Prayer Book that led to conflict with Parliament?",
        options: ["Charles I", "Charles II", "James I", "James II"],
        correct: 0,
        explanation: "Charles I introduced Prayer Book; Parliament, made of Puritans, didn't back him.",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 80,
        question: "Where was the King's army defeated during the English Civil War?",
        options: ["Battles of Marston Moor and Naseby", "Battle of Bosworth Field", "Battle of Hastings", "Battle of Bannockburn"],
        correct: 0,
        explanation: "King's army was defeated at Battles of Marston Moor and Naseby.",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 81,
        question: "What happened to King Charles I?",
        options: ["He was exiled", "He was imprisoned", "He was executed", "He abdicated"],
        correct: 2,
        explanation: "King Charles I was executed after the English Civil War.",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 82,
        question: "What was Oliver Cromwell's title?",
        options: ["King", "Prime Minister", "Lord Protector", "President"],
        correct: 2,
        explanation: "Oliver Cromwell was titled Lord Protector (circa 1640s-1650s) and led Britain whilst it was without a monarch.",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 83,
        question: "When did The Restoration occur?",
        options: ["1650", "1660", "1670", "1680"],
        correct: 1,
        explanation: "In 1660, The Restoration (of the monarchy) occurred. Charles (King of Scotland) was invited to come back as King Charles II after Oliver Cromwell's death.",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 84,
        question: "Who was restored to the throne in 1660?",
        options: ["Charles I", "Charles II", "James I", "James II"],
        correct: 1,
        explanation: "In 1660, The Restoration (of the monarchy) occurred. Charles (King of Scotland) was invited to come back as King Charles II.",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 85,
        question: "When did the Great Plague occur?",
        options: ["1665", "1666", "1667", "1668"],
        correct: 0,
        explanation: "In 1665, the Great Plague occurred.",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 86,
        question: "What did the Habeas Corpus Act (1679) forbid?",
        options: ["Religious discrimination", "Unlawful imprisonment", "Taxation without representation", "Cruel punishment"],
        correct: 1,
        explanation: "The Habeas Corpus Act (1679) forbade unlawful imprisonment.",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 87,
        question: "What did the Bill of Rights (1689) confirm?",
        options: ["The rights of Parliament and limits of the king's power", "The right to free speech", "The right to bear arms", "The right to vote"],
        correct: 0,
        explanation: "The Bill of Rights (1689) confirmed the rights of Parliament and the limits of the king's power.",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 88,
        question: "When did the Glorious Revolution occur?",
        options: ["1685", "1688", "1689", "1690"],
        correct: 1,
        explanation: "The Glorious Revolution (1688): English Protestants asked Mary's husband William of Orange (of the Netherlands) to proclaim himself king.",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 89,
        question: "Who was William of Orange?",
        options: ["King of France", "King of Spain", "From the Netherlands", "From Germany"],
        correct: 2,
        explanation: "The Glorious Revolution (1688): English Protestants asked Mary's husband William of Orange (of the Netherlands) to proclaim himself king, as they didn't want a Catholic king.",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 90,
        question: "Why did English Protestants want William of Orange as king?",
        options: ["They wanted a Dutch king", "They didn't want a Catholic king", "They wanted a stronger monarchy", "They wanted economic benefits"],
        correct: 1,
        explanation: "English Protestants asked Mary's husband William of Orange (of the Netherlands) to proclaim himself king, as they didn't want a Catholic king.",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 91,
        question: "What did the Act of Union (1707) create?",
        options: ["United Kingdom", "Kingdom of Great Britain", "British Empire", "Commonwealth"],
        correct: 1,
        explanation: "The Act of Union (1707) united kingdoms of England and Scotland and created Kingdom of Great Britain.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 92,
        question: "Who was the first Prime Minister of Britain?",
        options: ["Robert Walpole", "William Pitt", "Robert Peel", "Benjamin Disraeli"],
        correct: 0,
        explanation: "Sir Robert Walpole was the first PM (1721-1742) as King George I (a German) relied heavily on ministers because of his poor English.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 93,
        question: "When was Sir Robert Walpole Prime Minister?",
        options: ["1701-1721", "1721-1742", "1742-1763", "1763-1784"],
        correct: 1,
        explanation: "Sir Robert Walpole was the first PM (1721-1742).",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 94,
        question: "Why did King George I rely heavily on ministers?",
        options: ["He was ill", "He had poor English", "He was lazy", "He was away often"],
        correct: 1,
        explanation: "Sir Robert Walpole was the first PM (1721-1742) as King George I (a German) relied heavily on ministers because of his poor English.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 95,
        question: "What was The Enlightenment?",
        options: ["A religious movement", "Development of new ideas about politics, philosophy and science", "An industrial period", "A war"],
        correct: 1,
        explanation: "The Enlightenment (1700s) saw development of new ideas about politics, philosophy and science.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 96,
        question: "Who were influential Scottish thinkers during The Enlightenment?",
        options: ["Adam Smith and David Hume", "Robert Burns and Walter Scott", "James Watt and Adam Smith", "David Hume and Robert Burns"],
        correct: 0,
        explanation: "Adam Smith (economics) and David Hume (philosopher) were influential Scottish thinkers.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 97,
        question: "What field was Adam Smith known for?",
        options: ["Philosophy", "Economics", "Science", "Literature"],
        correct: 1,
        explanation: "Adam Smith (economics) and David Hume (philosopher) were influential Scottish thinkers.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 98,
        question: "What field was David Hume known for?",
        options: ["Economics", "Philosophy", "Science", "Literature"],
        correct: 1,
        explanation: "Adam Smith (economics) and David Hume (philosopher) were influential Scottish thinkers.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 99,
        question: "Why did the American colonies declare independence?",
        options: ["Religious reasons", "Over taxation", "Territorial disputes", "Trade restrictions"],
        correct: 1,
        explanation: "In 1776, American colonies declared independence over taxation.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 100,
        question: "When did the Industrial Revolution occur?",
        options: ["From mid-1600s to 1700s", "From mid-1700s to 1800s", "From mid-1800s to 1900s", "From mid-1900s to 2000s"],
        correct: 1,
        explanation: "The Industrial Revolution (from mid-1700s to 1800s) saw Britain produce over half of the world's supplies of cotton cloth, coal and iron.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 101,
        question: "What percentage of the world's supplies did Britain produce during the Industrial Revolution?",
        options: ["Over half", "About one-third", "About one-quarter", "About three-quarters"],
        correct: 0,
        explanation: "The Industrial Revolution saw Britain produce over half of the world's supplies of cotton cloth, coal and iron.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 102,
        question: "What did Britain produce over half of the world's supplies of during the Industrial Revolution?",
        options: ["Cotton cloth, coal and iron", "Steel, textiles and machinery", "Coal, steel and textiles", "Iron, machinery and textiles"],
        correct: 0,
        explanation: "The Industrial Revolution saw Britain produce over half of the world's supplies of cotton cloth, coal and iron.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 103,
        question: "What power source developed during the Industrial Revolution?",
        options: ["Electric power", "Steam power", "Nuclear power", "Wind power"],
        correct: 1,
        explanation: "The Industrial Revolution saw Britain produce over half of the world's supplies of cotton cloth, coal and iron. Machinery and steam power developed.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 104,
        question: "Who was Richard Arkwright?",
        options: ["A politician", "An efficient and profitable factory owner during Industrial Revolution", "A scientist", "A writer"],
        correct: 1,
        explanation: "Richard Arkwright was an efficient and profitable factory owner during Industrial Revolution.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 105,
        question: "Who were famous pioneers of railway engines?",
        options: ["George and Robert Stevenson", "James Watt and Matthew Boulton", "Richard Trevithick and George Stephenson", "Isambard Kingdom Brunel"],
        correct: 0,
        explanation: "George and Robert Stevenson were famous pioneers of railway engines.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 106,
        question: "What was Isambard Kingdom Brunel known for?",
        options: ["Politics", "Engineering (bridges, trains, tunnels, ships)", "Literature", "Science"],
        correct: 1,
        explanation: "Isambard Kingdom Brunel was an engineer (bridges, trains, tunnels, ships).",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 107,
        question: "Who defeated the French and Spanish fleet at the Battle of Trafalgar?",
        options: ["Lord Wellington", "Lord Horatio Nelson", "Sir Francis Drake", "Admiral Blake"],
        correct: 1,
        explanation: "In 1805, the Battle of Trafalgar saw Lord Horatio Nelson (of Nelson's Column) defeat French (Napoleon) + Spanish fleet.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 108,
        question: "What is Nelson's Column?",
        options: ["A monument to Lord Horatio Nelson", "A building", "A ship", "A bridge"],
        correct: 0,
        explanation: "In 1805, the Battle of Trafalgar saw Lord Horatio Nelson (of Nelson's Column) defeat French (Napoleon) + Spanish fleet.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 109,
        question: "Who did Lord Wellington defeat at the Battle of Waterloo?",
        options: ["The Spanish", "Napoleon", "The Germans", "The Russians"],
        correct: 1,
        explanation: "In 1815, the Battle of Waterloo saw Lord Wellington defeat Napoleon.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 110,
        question: "When was the Battle of Waterloo?",
        options: ["1805", "1815", "1825", "1835"],
        correct: 1,
        explanation: "In 1815, the Battle of Waterloo saw Lord Wellington defeat Napoleon.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 111,
        question: "Who was the leading abolitionist in the campaign against slavery?",
        options: ["William Pitt", "William Wilberforce", "Robert Peel", "Benjamin Disraeli"],
        correct: 1,
        explanation: "The Emancipation Act (1833) abolished slavery throughout British Empire. William Wilberforce was leading abolitionist and Quakers set up first anti-slavery groups.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 112,
        question: "Who set up the first anti-slavery groups?",
        options: ["Quakers", "Methodists", "Anglicans", "Catholics"],
        correct: 0,
        explanation: "The Emancipation Act (1833) abolished slavery throughout British Empire. William Wilberforce was leading abolitionist and Quakers set up first anti-slavery groups.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 113,
        question: "How many migrants came from India and China to replace the labour force after slavery was abolished?",
        options: ["More than 1 million", "More than 2 million", "More than 3 million", "More than 4 million"],
        correct: 1,
        explanation: "More than 2 million migrants came from India and China to replace labour force after slavery was abolished.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 114,
        question: "What did the Reform Act (1832) abolish?",
        options: ["Slavery", "Pocket and rotten boroughs", "The monarchy", "Parliament"],
        correct: 1,
        explanation: "The Reform Act (1832) abolished pocket and rotten boroughs and gave more parliamentary seats to towns and cities.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 115,
        question: "What did the Reform Act (1832) do for voters?",
        options: ["Gave women the right to vote", "Increased number of (male) voters", "Abolished voting", "Lowered voting age"],
        correct: 1,
        explanation: "The Reform Act (1832) abolished pocket and rotten boroughs and gave more parliamentary seats to towns and cities. Increased number of (male) voters.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 116,
        question: "When was the Victorian Age?",
        options: ["1827-1901", "1837-1901", "1847-1911", "1857-1921"],
        correct: 1,
        explanation: "The Victorian Age (1837-1901): Queen Victoria reigned; Britain increased power and influence abroad.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 117,
        question: "Who reigned during the Victorian Age?",
        options: ["Queen Elizabeth I", "Queen Victoria", "Queen Anne", "Queen Mary"],
        correct: 1,
        explanation: "The Victorian Age (1837-1901): Queen Victoria reigned; Britain increased power and influence abroad.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 118,
        question: "What did Britain become during the Victorian Age?",
        options: ["The largest empire in world history", "The richest country", "The most populated country", "The most industrialised country"],
        correct: 0,
        explanation: "The Victorian Age (1837-1901): Queen Victoria reigned; Britain increased power and influence abroad. Became largest empire in world history.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 119,
        question: "What happened to the middle classes during the Victorian Age?",
        options: ["They decreased", "They grew significantly", "They stayed the same", "They were abolished"],
        correct: 1,
        explanation: "The Victorian Age (1837-1901): Middle classes grew significantly and reformers improved conditions for the poor.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 120,
        question: "Who set up the first curry house in Britain?",
        options: ["Rudyard Kipling", "Sake Dean Mahomet", "Florence Nightingale", "Isambard Kingdom Brunel"],
        correct: 1,
        explanation: "Sake Dean Mahomet set up first curry house in Britain and introduced shampooing.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 121,
        question: "What did Sake Dean Mahomet introduce to Britain?",
        options: ["Curry", "Shampooing", "Both curry house and shampooing", "Tea"],
        correct: 2,
        explanation: "Sake Dean Mahomet set up first curry house in Britain and introduced shampooing.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 122,
        question: "Where was Rudyard Kipling born?",
        options: ["England", "Scotland", "India", "Wales"],
        correct: 2,
        explanation: "Rudyard Kipling was an Indian-born author and poet. Work reflected idea that British empire was a force for good.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 123,
        question: "What did Rudyard Kipling's work reflect?",
        options: ["Criticism of the empire", "The idea that British empire was a force for good", "Neutral views", "Support for independence"],
        correct: 1,
        explanation: "Rudyard Kipling was an Indian-born author and poet. Work reflected idea that British empire was a force for good.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 124,
        question: "When did the Boer War occur?",
        options: ["1879-1889", "1889-1902", "1899-1912", "1909-1922"],
        correct: 1,
        explanation: "The Boer War in South Africa occurred from 1889-1902.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 125,
        question: "Where did the Boer War take place?",
        options: ["India", "South Africa", "Australia", "Canada"],
        correct: 1,
        explanation: "The Boer War in South Africa occurred from 1889-1902.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 126,
        question: "In which year did women first get the right to vote at age 21 (same as men)?",
        options: ["1916", "1918", "1928", "1938"],
        correct: 2,
        explanation: "Women's suffrage - 1918 (vote at 30+ yrs) and 1928 (vote at 21 yrs, same as men).",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 127,
        question: "What was Home Rule?",
        options: ["A proposal for Irish independence", "A proposal for a self-governing Ireland with its own parliament that still remained part of the UK", "A proposal to unite Ireland", "A proposal to abolish Irish parliament"],
        correct: 1,
        explanation: "In 1913, Home Rule was proposed in Ireland. Idea was to have a self-governing Ireland with its own parliament that still remained part of the UK.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 128,
        question: "When was Home Rule proposed in Ireland?",
        options: ["1911", "1913", "1915", "1917"],
        correct: 1,
        explanation: "In 1913, Home Rule was proposed in Ireland.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 129,
        question: "What postponed changes to Home Rule?",
        options: ["WWI", "WWII", "The Great Depression", "The Easter Rising"],
        correct: 0,
        explanation: "In 1913, Home Rule was proposed in Ireland. WWI postponed any changes.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 130,
        question: "What was the Easter Rising?",
        options: ["A celebration", "An uprising against the British in Dublin in 1916", "A religious event", "A political meeting"],
        correct: 1,
        explanation: "Irish nationalists didn't want to wait and the Easter Rising against the British in Dublin took place in 1916.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 131,
        question: "When did the Easter Rising take place?",
        options: ["1914", "1915", "1916", "1917"],
        correct: 2,
        explanation: "The Easter Rising against the British in Dublin took place in 1916.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 132,
        question: "What followed the Easter Rising?",
        options: ["Peace talks", "Guerrilla war", "Independence", "Reunification"],
        correct: 1,
        explanation: "The Easter Rising against the British in Dublin took place in 1916. Guerrilla war followed.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 133,
        question: "How many casualties did British forces suffer on the first day of the Battle of the Somme?",
        options: ["40,000", "50,000", "60,000", "70,000"],
        correct: 2,
        explanation: "In 1916, the Battle of the Somme WW1 saw British forces suffer 60,000 casualties on the first day.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 134,
        question: "At what time did WWI end?",
        options: ["10.00 on 11/11/1918", "11.00 on 11/11/1918", "12.00 on 11/11/1918", "13.00 on 11/11/1918"],
        correct: 1,
        explanation: "WWI ended at 11.00 on 11/11/1918.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 135,
        question: "What happened to Ireland in 1921?",
        options: ["It gained full independence", "A peace treaty was signed splitting Ireland in two", "It was united", "It became a republic"],
        correct: 1,
        explanation: "In 1921, a peace treaty was signed splitting Ireland in two.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 136,
        question: "What was introduced before WWI?",
        options: ["NHS", "State retirement pension and free school meals", "Unemployment benefits", "Free healthcare"],
        correct: 1,
        explanation: "State retirement pension and free school meals were introduced before WWI.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 137,
        question: "When did the Great Depression occur?",
        options: ["1927", "1928", "1929", "1930"],
        correct: 2,
        explanation: "In 1929, the Great Depression occurred.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 138,
        question: "What industries developed during the Great Depression?",
        options: ["Aviation and automobile industries", "Textile and mining", "Shipbuilding and steel", "Coal and iron"],
        correct: 0,
        explanation: "In 1929, the Great Depression occurred. Aviation and automobile industries developed.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 139,
        question: "Which industries had high unemployment during the Great Depression?",
        options: ["Light industries", "Heavy industries (e.g. shipbuilding)", "Service industries", "Agricultural industries"],
        correct: 1,
        explanation: "High unemployment, especially in 'heavy' industries (e.g. shipbuilding).",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 140,
        question: "When did Alexander Fleming discover penicillin?",
        options: ["1926", "1927", "1928", "1929"],
        correct: 2,
        explanation: "Alexander Fleming was a Scottish doctor who discovered penicillin (1928).",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 141,
        question: "What led UK and France to declare war on Germany in 1939?",
        options: ["German invasion of Austria", "German invasion of Poland", "German invasion of Czechoslovakia", "German invasion of France"],
        correct: 1,
        explanation: "In 1939, German invasion of Poland led UK and France to declare war on Germany.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 142,
        question: "How many men were rescued during the Evacuation of Dunkirk?",
        options: ["200,000", "300,000", "400,000", "500,000"],
        correct: 1,
        explanation: "In 1940 (WWII), the Evacuation of Dunkirk saw rescue of 300,000 men by volunteers and small boats.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 143,
        question: "Who rescued the men at Dunkirk?",
        options: ["The navy only", "Volunteers and small boats", "The air force", "Allied forces"],
        correct: 1,
        explanation: "In 1940 (WWII), the Evacuation of Dunkirk saw rescue of 300,000 men by volunteers and small boats.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 144,
        question: "What was the Battle of Britain?",
        options: ["A naval battle", "A German/British aerial battle", "A land battle", "A submarine battle"],
        correct: 1,
        explanation: "In 1940 (WWII), the Battle of Britain was a German/British aerial battle.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 145,
        question: "Who wrote the Beveridge Report?",
        options: ["Clement Attlee", "Winston Churchill", "William Beveridge", "R A Butler"],
        correct: 2,
        explanation: "In 1942, the Beveridge Report (William Beveridge) set out ideas which led to foundation of modern welfare state.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 146,
        question: "What did the Beveridge Report lead to?",
        options: ["The NHS", "Foundation of modern welfare state", "Education reform", "Economic reform"],
        correct: 1,
        explanation: "In 1942, the Beveridge Report (William Beveridge) set out ideas which led to foundation of modern welfare state.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 147,
        question: "Who introduced the Education Act (1944)?",
        options: ["William Beveridge", "R A Butler", "Clement Attlee", "Winston Churchill"],
        correct: 1,
        explanation: "In 1944, the Education Act (R A Butler) introduced free secondary education.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 148,
        question: "What did the Education Act (1944) introduce?",
        options: ["Free primary education", "Free secondary education and clear distinction between primary and secondary", "Free university education", "Free technical training"],
        correct: 1,
        explanation: "In 1944, the Education Act (R A Butler) introduced free secondary education and clear distinction between primary and secondary education.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 149,
        question: "When were the NHS and social security system established?",
        options: ["1943-1947", "1945-1950", "1947-1952", "1950-1955"],
        correct: 1,
        explanation: "In 1945-1950, NHS and social security system were established.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 150,
        question: "What was Clement Attlee's role before becoming PM?",
        options: ["Home Secretary", "Foreign Secretary", "Churchill's Deputy PM", "Chancellor"],
        correct: 2,
        explanation: "Clement Attlee was Churchill's Deputy PM. Became PM in 1945.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 151,
        question: "What did Clement Attlee do as PM?",
        options: ["Created the NHS and nationalised major industries", "Started WWII", "Ended the empire", "Joined the EEC"],
        correct: 0,
        explanation: "Clement Attlee became PM in 1945. Nationalised major industries and created NHS.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 152,
        question: "How many colonies gained independence in 1947?",
        options: ["5", "7", "9", "11"],
        correct: 2,
        explanation: "In 1947, 9 colonies gained independence, including India, Pakistan, and Sri Lanka.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 153,
        question: "Which countries gained independence in 1947?",
        options: ["India and Pakistan", "India, Pakistan, and Sri Lanka", "India, Pakistan, Sri Lanka and Bangladesh", "India only"],
        correct: 1,
        explanation: "In 1947, 9 colonies gained independence, including India, Pakistan, and Sri Lanka.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 154,
        question: "Why were workers recruited from India, Pakistan, West Indies and Bangladesh in the 1950s?",
        options: ["Post-war labour shortages", "Economic boom", "Skills shortage", "Population decline"],
        correct: 0,
        explanation: "In 1950s, post-war labour shortages led to recruitment of workers from India, Pakistan, West Indies and Bangladesh.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 155,
        question: "What happened in the 1960s?",
        options: ["Increased wealth and liberalisation of social laws", "Economic decline", "War", "Recession"],
        correct: 0,
        explanation: "In 1960s, increased wealth and liberalisation of social laws (e.g. abortion and divorce).",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 156,
        question: "What is an example of social law liberalisation in the 1960s?",
        options: ["Marriage laws", "Abortion and divorce", "Property laws", "Tax laws"],
        correct: 1,
        explanation: "In 1960s, increased wealth and liberalisation of social laws (e.g. abortion and divorce).",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 157,
        question: "What does EEC stand for?",
        options: ["European Economic Community", "European Economic Council", "European Economic Commission", "European Economic Committee"],
        correct: 0,
        explanation: "In 1973, UK joined the EEC (European Economic Community).",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 158,
        question: "When did Argentina invade the Falkland Islands?",
        options: ["1980", "1981", "1982", "1983"],
        correct: 2,
        explanation: "In 1982, Argentina invaded Falkland Islands.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 159,
        question: "What was Margaret Thatcher known for?",
        options: ["Being the first female PM and longest serving PM of the 20th century", "Creating the NHS", "Ending WWII", "Joining the EEC"],
        correct: 0,
        explanation: "Margaret Thatcher was first female PM and the longest serving PM of the 20th century.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 160,
        question: "What did the Good Friday Agreement lead to?",
        options: ["Irish independence", "Establishment of Northern Irish parliament", "Unification of Ireland", "End of the Troubles"],
        correct: 1,
        explanation: "In 1998, the Good Friday Agreement led to establishment of Northern Irish parliament.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 161,
        question: "When were the Scottish parliament and Welsh assembly established?",
        options: ["1997", "1998", "1999", "2000"],
        correct: 2,
        explanation: "In 1999, Scottish parliament & Welsh assembly were established.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 162,
        question: "Who invented the jet engine?",
        options: ["Tim Berners-Lee", "Sir Christopher Cockrell", "Sir Alexander Fleming", "Not specified in content"],
        correct: 3,
        explanation: "1900s inventions: jet engine and radar invented.",
        chapter: 3,
        section: "Britain since 1945"
    },
    {
        id: 163,
        question: "What was invented in the 1900s?",
        options: ["Jet engine and radar", "TV and World Wide Web", "Both jet engine/radar and TV/World Wide Web", "Computer"],
        correct: 2,
        explanation: "1900s inventions: jet engine and radar invented. TV & World Wide Web (Tim Berners-Lee) invented.",
        chapter: 3,
        section: "Britain since 1945"
    },
    {
        id: 164,
        question: "Who invented the World Wide Web?",
        options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Mark Zuckerberg"],
        correct: 2,
        explanation: "TV & World Wide Web (Tim Berners-Lee) invented.",
        chapter: 3,
        section: "Britain since 1945"
    },
    {
        id: 165,
        question: "Who invented the hovercraft?",
        options: ["Sir Christopher Cockrell", "Sir Alexander Fleming", "Tim Berners-Lee", "Isambard Kingdom Brunel"],
        correct: 0,
        explanation: "Hovercraft invented (Sir Christopher Cockrell).",
        chapter: 3,
        section: "Britain since 1945"
    },
    {
        id: 166,
        question: "Who discovered penicillin?",
        options: ["Sir Christopher Cockrell", "Sir Alexander Fleming", "Alexander Fleming", "Both B and C"],
        correct: 3,
        explanation: "Penicillin discovered (Sir Alexander Fleming). Alexander Fleming was a Scottish doctor who discovered penicillin (1928).",
        chapter: 3,
        section: "Britain since 1945"
    },
    {
        id: 167,
        question: "What was invented in Britain?",
        options: ["ATM", "Computer", "Telephone", "Radio"],
        correct: 0,
        explanation: "ATM invented.",
        chapter: 3,
        section: "Britain since 1945"
    },
    {
        id: 168,
        question: "What was Dolly?",
        options: ["A robot", "A cloned sheep", "A computer", "A spacecraft"],
        correct: 1,
        explanation: "Cloned sheep Dolly.",
        chapter: 3,
        section: "Britain since 1945"
    },
    {
        id: 169,
        question: "What was Concorde?",
        options: ["A ship", "A supersonic jet", "A train", "A car"],
        correct: 1,
        explanation: "Developed Concorde (supersonic jet) with the French.",
        chapter: 3,
        section: "Britain since 1945"
    },
    {
        id: 170,
        question: "Who did Britain develop Concorde with?",
        options: ["The Americans", "The French", "The Germans", "The Russians"],
        correct: 1,
        explanation: "Developed Concorde (supersonic jet) with the French.",
        chapter: 3,
        section: "Britain since 1945"
    },
    {
        id: 171,
        question: "What did Britain co-discover?",
        options: ["Penicillin", "Insulin", "DNA", "Radar"],
        correct: 1,
        explanation: "Co-discovered insulin and co-invented the MRI.",
        chapter: 3,
        section: "Britain since 1945"
    },
    {
        id: 172,
        question: "What did Britain co-invent?",
        options: ["The MRI", "The computer", "The telephone", "The radio"],
        correct: 0,
        explanation: "Co-discovered insulin and co-invented the MRI.",
        chapter: 3,
        section: "Britain since 1945"
    },
    {
        id: 173,
        question: "What was discovered about DNA?",
        options: ["Its function", "Its structure", "Its location", "Its purpose"],
        correct: 1,
        explanation: "Structure of DNA molecule discovered.",
        chapter: 3,
        section: "Britain since 1945"
    },
    {
        id: 174,
        question: "Where is Jodrell Bank?",
        options: ["Scotland", "Wales", "England", "Northern Ireland"],
        correct: 2,
        explanation: "Radio telescope at Jodrell Bank was for many years the world's largest.",
        chapter: 3,
        section: "Britain since 1945"
    },
    {
        id: 175,
        question: "What is special about the radio telescope at Jodrell Bank?",
        options: ["It was the first", "It was for many years the world's largest", "It discovered planets", "It was the smallest"],
        correct: 1,
        explanation: "Radio telescope at Jodrell Bank was for many years the world's largest.",
        chapter: 3,
        section: "Britain since 1945"
    },
    {
        id: 176,
        question: "What is special about the Harrier jump jet?",
        options: ["It's the fastest", "It takes off vertically", "It's the largest", "It's the quietest"],
        correct: 1,
        explanation: "Harrier jump jet (takes off vertically).",
        chapter: 3,
        section: "Britain since 1945"
    },
    {
        id: 177,
        question: "What is IVF therapy?",
        options: ["A medical treatment", "In vitro fertilisation therapy", "A type of surgery", "A drug treatment"],
        correct: 1,
        explanation: "IVF therapy.",
        chapter: 3,
        section: "Britain since 1945"
    },
    {
        id: 178,
        question: "What is the UK described as?",
        options: ["A traditional society", "A modern, thriving society", "A developing society", "A conservative society"],
        correct: 1,
        explanation: "The UK is a modern, thriving society with a diverse population and rich cultural heritage.",
        chapter: 4,
        section: "The UK today"
    },
    {
        id: 179,
        question: "What does the UK have regarding religion?",
        options: ["State religion", "Freedom of religion", "Religious restrictions", "No religion"],
        correct: 1,
        explanation: "The UK has freedom of religion. Various faiths are practiced throughout the country.",
        chapter: 4,
        section: "Religion"
    },
    {
        id: 180,
        question: "What role does sport play in UK culture?",
        options: ["A minor role", "An important role", "No role", "A declining role"],
        correct: 1,
        explanation: "Sport plays an important role in UK culture.",
        chapter: 4,
        section: "Sport"
    },
    {
        id: 181,
        question: "Which sports are popular in the UK?",
        options: ["Football, rugby, cricket, and tennis", "Football and rugby only", "Cricket and tennis only", "Football only"],
        correct: 0,
        explanation: "Football, rugby, cricket, and tennis are popular sports.",
        chapter: 4,
        section: "Sport"
    },
    {
        id: 182,
        question: "What is Dylan Thomas known for?",
        options: ["Being a Scottish poet", "Being a Welsh poet", "Being an English author", "Being an Irish writer"],
        correct: 1,
        explanation: "Dylan Thomas: Welsh poet ('Under Milk Wood' & 'Do Not Go Gentle into that Good Night').",
        chapter: 4,
        section: "Arts and culture"
    },
    {
        id: 183,
        question: "What did Dylan Thomas write?",
        options: ["'Under Milk Wood' & 'Do Not Go Gentle into that Good Night'", "'Auld Lang Syne'", "'Sherlock Holmes'", "'Charlie and the Chocolate Factory'"],
        correct: 0,
        explanation: "Dylan Thomas: Welsh poet ('Under Milk Wood' & 'Do Not Go Gentle into that Good Night').",
        chapter: 4,
        section: "Arts and culture"
    },
    {
        id: 184,
        question: "What is Robert Burns known as?",
        options: ["The Poet", "The Bard", "The Writer", "The Author"],
        correct: 1,
        explanation: "Robert Burns: Scottish poet ('The Bard'), Auld Lang Syne.",
        chapter: 4,
        section: "Arts and culture"
    },
    {
        id: 185,
        question: "What did Robert Burns write?",
        options: ["'Under Milk Wood'", "'Auld Lang Syne'", "'Sherlock Holmes'", "'Charlie and the Chocolate Factory'"],
        correct: 1,
        explanation: "Robert Burns: Scottish poet ('The Bard'), Auld Lang Syne.",
        chapter: 4,
        section: "Arts and culture"
    },
    {
        id: 186,
        question: "What did Roald Dahl write?",
        options: ["'Under Milk Wood'", "'Auld Lang Syne'", "'Charlie and the Chocolate Factory' & 'George's Marvellous Medicine'", "'Sherlock Holmes'"],
        correct: 2,
        explanation: "Roald Dahl: Welsh author ('Charlie and the Chocolate Factory' & 'George's Marvellous Medicine').",
        chapter: 4,
        section: "Arts and culture"
    },
    {
        id: 187,
        question: "What character did Sir Arthur Conan Doyle create?",
        options: ["James Bond", "Sherlock Holmes", "Harry Potter", "Dr. Who"],
        correct: 1,
        explanation: "Sir Arthur Conan Doyle: Scottish author ('Sherlock Holmes').",
        chapter: 4,
        section: "Arts and culture"
    },
    {
        id: 188,
        question: "How has British democracy developed?",
        options: ["Quickly", "Over many centuries, evolving from absolute monarchy to parliamentary democracy", "Recently", "Through revolution"],
        correct: 1,
        explanation: "British democracy has developed over many centuries, evolving from absolute monarchy to parliamentary democracy.",
        chapter: 5,
        section: "The development of British democracy"
    },
    {
        id: 189,
        question: "What is the British constitution?",
        options: ["A single written document", "Made up of various sources including statutes, common law, and conventions", "Only statutes", "Only common law"],
        correct: 1,
        explanation: "The British constitution is not written in a single document but is made up of various sources including statutes, common law, and conventions.",
        chapter: 5,
        section: "The British constitution"
    },
    {
        id: 190,
        question: "What sources make up the British constitution?",
        options: ["Only statutes", "Statutes, common law, and conventions", "Only common law", "Only conventions"],
        correct: 1,
        explanation: "The British constitution is made up of various sources including statutes, common law, and conventions.",
        chapter: 5,
        section: "The British constitution"
    },
    {
        id: 191,
        question: "What are the fundamental principles?",
        options: ["Democracy, the rule of law, individual liberty, tolerance, and participation in community life", "Only democracy", "Democracy and law", "Democracy, law and tolerance"],
        correct: 0,
        explanation: "The fundamental principles include democracy, the rule of law, individual liberty, tolerance, and participation in community life.",
        chapter: 5,
        section: "Fundamental principles"
    },
    {
        id: 192,
        question: "What are all residents of the UK expected to do?",
        options: ["Vote", "Respect and obey the law", "Pay taxes", "Speak English"],
        correct: 1,
        explanation: "All residents of the UK are expected to respect and obey the law.",
        chapter: 5,
        section: "Respecting the law"
    },
    {
        id: 193,
        question: "What system of government does the UK have?",
        options: ["Presidential system", "Parliamentary system", "Federal system", "Confederal system"],
        correct: 1,
        explanation: "The UK has a parliamentary system of government.",
        chapter: 5,
        section: "The government"
    },
    {
        id: 194,
        question: "Who is the head of government in the UK?",
        options: ["The King/Queen", "The Prime Minister", "The Speaker", "The Chancellor"],
        correct: 1,
        explanation: "The UK has a parliamentary system of government. The Prime Minister is the head of government.",
        chapter: 5,
        section: "The government"
    },
    {
        id: 195,
        question: "Which international institutions is the UK a member of?",
        options: ["United Nations only", "United Nations, NATO, and the Commonwealth", "NATO only", "Commonwealth only"],
        correct: 1,
        explanation: "The UK is a member of various international institutions including the United Nations, NATO, and the Commonwealth.",
        chapter: 5,
        section: "The UK and international institutions"
    },
    {
        id: 196,
        question: "What are your responsibilities as a resident of the UK?",
        options: ["Only paying taxes", "Respecting others, obeying the law, and participating in community life", "Only voting", "Only speaking English"],
        correct: 1,
        explanation: "As a resident of the UK, you have responsibilities to your community including respecting others, obeying the law, and participating in community life.",
        chapter: 5,
        section: "Your role in the community"
    },
    {
        id: 197,
        question: "What is the House of Lancaster's symbol?",
        options: ["White rose", "Red rose", "Lion", "Crown"],
        correct: 1,
        explanation: "The War of the Roses was between House of Lancaster (red rose) and House of York (white rose).",
        chapter: 3,
        section: "The Middle Ages"
    },
    {
        id: 198,
        question: "What is the House of York's symbol?",
        options: ["Red rose", "White rose", "Lion", "Crown"],
        correct: 1,
        explanation: "The War of the Roses was between House of Lancaster (red rose) and House of York (white rose).",
        chapter: 3,
        section: "The Middle Ages"
    },
    {
        id: 199,
        question: "What did the House of Tudor symbol represent?",
        options: ["Red rose only", "White rose only", "Red rose with a white rose inside", "Lion"],
        correct: 2,
        explanation: "Henry Tudor of House of Lancaster became King Henry VII and married Elizabeth of York, uniting the two families as the House of Tudor (red rose with a white rose inside).",
        chapter: 3,
        section: "The Middle Ages"
    },
    {
        id: 200,
        question: "What wars occurred during the Middle Ages?",
        options: ["World Wars", "Crusades and Hundred Years' War", "Civil wars only", "No major wars"],
        correct: 1,
        explanation: "The Middle Ages (1066-1485) was a period of constant war, including Crusades and Hundred Years' War.",
        chapter: 3,
        section: "The Middle Ages"
    },
    {
        id: 201,
        question: "What was the period of the Tudors and Stuarts known for?",
        options: ["Industrial development", "Religious and political changes", "Colonial expansion only", "Economic decline"],
        correct: 1,
        explanation: "The Tudors and Stuarts period saw significant religious and political changes including the break from Rome, Civil War, and Restoration.",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 202,
        question: "What happened during the Elizabethan period?",
        options: ["Industrial Revolution", "Growing patriotism, expanded trade and rich poetry and drama", "Civil War", "Restoration"],
        correct: 1,
        explanation: "The Elizabethan period (1500s) was known for growing patriotism, expanded trade and rich poetry and drama.",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 203,
        question: "What was the result of the English Civil War?",
        options: ["King won", "Parliament won and King was executed", "Compromise", "Foreign intervention"],
        correct: 1,
        explanation: "King's army was defeated at Battles of Marston Moor and Naseby. King Charles I was executed.",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 204,
        question: "What happened after Oliver Cromwell's death?",
        options: ["Republic continued", "The Restoration occurred", "Foreign invasion", "Civil war"],
        correct: 1,
        explanation: "In 1660, The Restoration (of the monarchy) occurred. Charles (King of Scotland) was invited to come back as King Charles II after Oliver Cromwell's death.",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 205,
        question: "What was the Glorious Revolution called 'glorious'?",
        options: ["It was violent", "It was bloodless - William faced no resistance", "It was long", "It was expensive"],
        correct: 1,
        explanation: "The Glorious Revolution (1688): English Protestants asked Mary's husband William of Orange to proclaim himself king. He faced no resistance.",
        chapter: 3,
        section: "The Tudors and Stuarts"
    },
    {
        id: 206,
        question: "What did the Act of Union (1707) unite?",
        options: ["England and Wales", "England and Scotland", "Scotland and Wales", "All of Britain"],
        correct: 1,
        explanation: "The Act of Union (1707) united kingdoms of England and Scotland and created Kingdom of Great Britain.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 207,
        question: "What was King George I's nationality?",
        options: ["English", "Scottish", "German", "Dutch"],
        correct: 2,
        explanation: "Sir Robert Walpole was the first PM (1721-1742) as King George I (a German) relied heavily on ministers because of his poor English.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 208,
        question: "What period saw development of new ideas about politics, philosophy and science?",
        options: ["The Renaissance", "The Enlightenment", "The Industrial Revolution", "The Victorian Age"],
        correct: 1,
        explanation: "The Enlightenment (1700s) saw development of new ideas about politics, philosophy and science.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 209,
        question: "What did the Industrial Revolution develop?",
        options: ["Political systems", "Machinery and steam power", "Religious ideas", "Artistic movements"],
        correct: 1,
        explanation: "The Industrial Revolution saw Britain produce over half of the world's supplies of cotton cloth, coal and iron. Machinery and steam power developed.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 210,
        question: "What was the Victorian Age known for?",
        options: ["Economic decline", "Britain becoming the largest empire in world history", "Loss of colonies", "Isolation"],
        correct: 1,
        explanation: "The Victorian Age (1837-1901): Britain increased power and influence abroad. Became largest empire in world history.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 211,
        question: "What happened to conditions for the poor during the Victorian Age?",
        options: ["They worsened", "Reformers improved conditions for the poor", "They stayed the same", "No changes"],
        correct: 1,
        explanation: "The Victorian Age (1837-1901): Middle classes grew significantly and reformers improved conditions for the poor.",
        chapter: 3,
        section: "A global power"
    },
    {
        id: 212,
        question: "What was the age requirement for women to vote in 1918?",
        options: ["18+", "21+", "25+", "30+"],
        correct: 3,
        explanation: "Women's suffrage - 1918 (vote at 30+ yrs) and 1928 (vote at 21 yrs, same as men).",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 213,
        question: "What was the age requirement for women to vote in 1928?",
        options: ["18", "21", "25", "30"],
        correct: 1,
        explanation: "Women's suffrage - 1918 (vote at 30+ yrs) and 1928 (vote at 21 yrs, same as men).",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 214,
        question: "What was the Easter Rising?",
        options: ["A celebration", "An uprising against the British in Dublin", "A religious ceremony", "A political meeting"],
        correct: 1,
        explanation: "Irish nationalists didn't want to wait and the Easter Rising against the British in Dublin took place in 1916.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 215,
        question: "What battle saw 60,000 British casualties on the first day?",
        options: ["Battle of Britain", "Battle of the Somme", "Battle of Trafalgar", "Battle of Waterloo"],
        correct: 1,
        explanation: "In 1916, the Battle of the Somme WW1 saw British forces suffer 60,000 casualties on the first day.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 216,
        question: "What was the date of the end of WWI?",
        options: ["10/11/1918", "11/11/1918", "12/11/1918", "13/11/1918"],
        correct: 1,
        explanation: "WWI ended at 11.00 on 11/11/1918.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 217,
        question: "What happened to Ireland in 1921?",
        options: ["Full independence", "Split into two", "Unified", "Became a republic"],
        correct: 1,
        explanation: "In 1921, a peace treaty was signed splitting Ireland in two.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 218,
        question: "What was introduced before WWI?",
        options: ["NHS", "State retirement pension and free school meals", "Unemployment benefits", "Free healthcare"],
        correct: 1,
        explanation: "State retirement pension and free school meals were introduced before WWI.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 219,
        question: "What happened during the Great Depression?",
        options: ["Economic boom", "High unemployment, especially in heavy industries", "Full employment", "No economic impact"],
        correct: 1,
        explanation: "In 1929, the Great Depression occurred. High unemployment, especially in 'heavy' industries (e.g. shipbuilding).",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 220,
        question: "What was discovered in 1928?",
        options: ["Radar", "Penicillin", "Insulin", "DNA"],
        correct: 1,
        explanation: "Alexander Fleming was a Scottish doctor who discovered penicillin (1928).",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 221,
        question: "What event led to UK declaring war on Germany in 1939?",
        options: ["German invasion of Austria", "German invasion of Poland", "German invasion of Czechoslovakia", "German invasion of France"],
        correct: 1,
        explanation: "In 1939, German invasion of Poland led UK and France to declare war on Germany.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 222,
        question: "How many men were rescued at Dunkirk?",
        options: ["200,000", "300,000", "400,000", "500,000"],
        correct: 1,
        explanation: "In 1940 (WWII), the Evacuation of Dunkirk saw rescue of 300,000 men by volunteers and small boats.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 223,
        question: "What type of battle was the Battle of Britain?",
        options: ["Naval", "Aerial", "Land", "Submarine"],
        correct: 1,
        explanation: "In 1940 (WWII), the Battle of Britain was a German/British aerial battle.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 224,
        question: "What did the Beveridge Report lead to?",
        options: ["The NHS only", "Foundation of modern welfare state", "Education reform", "Economic reform"],
        correct: 1,
        explanation: "In 1942, the Beveridge Report (William Beveridge) set out ideas which led to foundation of modern welfare state.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 225,
        question: "What did the Education Act (1944) do?",
        options: ["Introduced free primary education", "Introduced free secondary education and clear distinction between primary and secondary", "Introduced free university education", "Abolished education"],
        correct: 1,
        explanation: "In 1944, the Education Act (R A Butler) introduced free secondary education and clear distinction between primary and secondary education.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 226,
        question: "When was the NHS established?",
        options: ["1943-1947", "1945-1950", "1947-1952", "1950-1955"],
        correct: 1,
        explanation: "In 1945-1950, NHS and social security system were established.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 227,
        question: "What did Clement Attlee do as PM?",
        options: ["Created the NHS and nationalised major industries", "Started WWII", "Ended the empire", "Joined the EEC"],
        correct: 0,
        explanation: "Clement Attlee became PM in 1945. Nationalised major industries and created NHS.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 228,
        question: "Which colonies gained independence in 1947?",
        options: ["India only", "India, Pakistan, and Sri Lanka", "All colonies", "None"],
        correct: 1,
        explanation: "In 1947, 9 colonies gained independence, including India, Pakistan, and Sri Lanka.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 229,
        question: "Why were workers recruited in the 1950s?",
        options: ["Economic boom", "Post-war labour shortages", "Skills shortage", "Population decline"],
        correct: 1,
        explanation: "In 1950s, post-war labour shortages led to recruitment of workers from India, Pakistan, West Indies and Bangladesh.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 230,
        question: "What happened in the 1960s?",
        options: ["Economic decline", "Increased wealth and liberalisation of social laws", "War", "Recession"],
        correct: 1,
        explanation: "In 1960s, increased wealth and liberalisation of social laws (e.g. abortion and divorce).",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 231,
        question: "When did the UK join the EEC?",
        options: ["1971", "1972", "1973", "1974"],
        correct: 2,
        explanation: "In 1973, UK joined the EEC.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 232,
        question: "What happened in 1982?",
        options: ["UK left EEC", "Argentina invaded Falkland Islands", "Thatcher became PM", "Good Friday Agreement"],
        correct: 1,
        explanation: "In 1982, Argentina invaded Falkland Islands.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 233,
        question: "What was Margaret Thatcher?",
        options: ["First female PM and longest serving PM of the 20th century", "First PM", "Longest serving PM ever", "First Scottish PM"],
        correct: 0,
        explanation: "Margaret Thatcher was first female PM and the longest serving PM of the 20th century.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 234,
        question: "What did the Good Friday Agreement establish?",
        options: ["Irish independence", "Northern Irish parliament", "Unification", "Republic"],
        correct: 1,
        explanation: "In 1998, the Good Friday Agreement led to establishment of Northern Irish parliament.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 235,
        question: "What was established in 1999?",
        options: ["Northern Irish parliament", "Scottish parliament & Welsh assembly", "English parliament", "UK parliament"],
        correct: 1,
        explanation: "In 1999, Scottish parliament & Welsh assembly were established.",
        chapter: 3,
        section: "The 20th century"
    },
    {
        id: 236,
        question: "What inventions came from Britain in the 1900s?",
        options: ["Jet engine, radar, TV, World Wide Web", "Computer only", "Telephone only", "Radio only"],
        correct: 0,
        explanation: "1900s inventions: jet engine and radar invented. TV & World Wide Web (Tim Berners-Lee) invented.",
        chapter: 3,
        section: "Britain since 1945"
    },
    {
        id: 237,
        question: "Who invented the hovercraft?",
        options: ["Sir Christopher Cockrell", "Sir Alexander Fleming", "Tim Berners-Lee", "Isambard Kingdom Brunel"],
        correct: 0,
        explanation: "Hovercraft invented (Sir Christopher Cockrell).",
        chapter: 3,
        section: "Britain since 1945"
    },
    {
        id: 238,
        question: "What was Dolly?",
        options: ["A robot", "A cloned sheep", "A computer", "A spacecraft"],
        correct: 1,
        explanation: "Cloned sheep Dolly.",
        chapter: 3,
        section: "Britain since 1945"
    },
    {
        id: 239,
        question: "What was Concorde?",
        options: ["A ship", "A supersonic jet", "A train", "A car"],
        correct: 1,
        explanation: "Developed Concorde (supersonic jet) with the French.",
        chapter: 3,
        section: "Britain since 1945"
    },
    {
        id: 240,
        question: "What did Britain co-discover and co-invent?",
        options: ["Penicillin and computer", "Insulin and MRI", "DNA and radar", "TV and jet engine"],
        correct: 1,
        explanation: "Co-discovered insulin and co-invented the MRI.",
        chapter: 3,
        section: "Britain since 1945"
    },
    {
        id: 241,
        question: "What was discovered about DNA?",
        options: ["Its function", "Its structure", "Its location", "Its purpose"],
        correct: 1,
        explanation: "Structure of DNA molecule discovered.",
        chapter: 3,
        section: "Britain since 1945"
    },
    {
        id: 242,
        question: "What is special about Jodrell Bank?",
        options: ["First radio telescope", "Was for many years the world's largest radio telescope", "Discovered planets", "Smallest radio telescope"],
        correct: 1,
        explanation: "Radio telescope at Jodrell Bank was for many years the world's largest.",
        chapter: 3,
        section: "Britain since 1945"
    },
    {
        id: 243,
        question: "What is special about the Harrier jump jet?",
        options: ["Fastest", "Takes off vertically", "Largest", "Quietest"],
        correct: 1,
        explanation: "Harrier jump jet (takes off vertically).",
        chapter: 3,
        section: "Britain since 1945"
    },
    {
        id: 244,
        question: "What is IVF?",
        options: ["A medical treatment", "In vitro fertilisation", "A type of surgery", "A drug"],
        correct: 1,
        explanation: "IVF therapy.",
        chapter: 3,
        section: "Britain since 1945"
    },
    {
        id: 245,
        question: "What describes the UK?",
        options: ["Traditional society", "Modern, thriving society with diverse population", "Developing society", "Conservative society"],
        correct: 1,
        explanation: "The UK is a modern, thriving society with a diverse population and rich cultural heritage.",
        chapter: 4,
        section: "The UK today"
    },
    {
        id: 246,
        question: "What does the UK have?",
        options: ["State religion", "Freedom of religion", "Religious restrictions", "No religion"],
        correct: 1,
        explanation: "The UK has freedom of religion. Various faiths are practiced throughout the country.",
        chapter: 4,
        section: "Religion"
    },
    {
        id: 247,
        question: "What role does sport play?",
        options: ["Minor role", "Important role in UK culture", "No role", "Declining role"],
        correct: 1,
        explanation: "Sport plays an important role in UK culture.",
        chapter: 4,
        section: "Sport"
    },
    {
        id: 248,
        question: "Which are popular UK sports?",
        options: ["Football, rugby, cricket, and tennis", "Football only", "Cricket only", "Tennis only"],
        correct: 0,
        explanation: "Football, rugby, cricket, and tennis are popular sports.",
        chapter: 4,
        section: "Sport"
    },
    {
        id: 249,
        question: "Where is Dylan Thomas from?",
        options: ["Scotland", "Wales", "England", "Ireland"],
        correct: 1,
        explanation: "Dylan Thomas: Welsh poet.",
        chapter: 4,
        section: "Arts and culture"
    },
    {
        id: 250,
        question: "What is Robert Burns known as?",
        options: ["The Poet", "The Bard", "The Writer", "The Author"],
        correct: 1,
        explanation: "Robert Burns: Scottish poet ('The Bard'), Auld Lang Syne.",
        chapter: 4,
        section: "Arts and culture"
    },
    {
        id: 251,
        question: "Where is Roald Dahl from?",
        options: ["Scotland", "Wales", "England", "Ireland"],
        correct: 1,
        explanation: "Roald Dahl: Welsh author.",
        chapter: 4,
        section: "Arts and culture"
    },
    {
        id: 252,
        question: "Where is Sir Arthur Conan Doyle from?",
        options: ["Scotland", "Wales", "England", "Ireland"],
        correct: 0,
        explanation: "Sir Arthur Conan Doyle: Scottish author ('Sherlock Holmes').",
        chapter: 4,
        section: "Arts and culture"
    },
    {
        id: 253,
        question: "How did British democracy develop?",
        options: ["Quickly", "Over many centuries, evolving from absolute monarchy to parliamentary democracy", "Recently", "Through revolution"],
        correct: 1,
        explanation: "British democracy has developed over many centuries, evolving from absolute monarchy to parliamentary democracy.",
        chapter: 5,
        section: "The development of British democracy"
    },
    {
        id: 254,
        question: "Is the British constitution written?",
        options: ["Yes, in a single document", "No, it's made up of various sources", "Yes, in multiple documents", "No, it doesn't exist"],
        correct: 1,
        explanation: "The British constitution is not written in a single document but is made up of various sources including statutes, common law, and conventions.",
        chapter: 5,
        section: "The British constitution"
    },
    {
        id: 255,
        question: "What makes up the British constitution?",
        options: ["Only statutes", "Statutes, common law, and conventions", "Only common law", "Only conventions"],
        correct: 1,
        explanation: "The British constitution is made up of various sources including statutes, common law, and conventions.",
        chapter: 5,
        section: "The British constitution"
    },
    {
        id: 256,
        question: "What are fundamental principles?",
        options: ["Democracy, rule of law, individual liberty, tolerance, participation", "Only democracy", "Democracy and law", "Democracy, law, tolerance"],
        correct: 0,
        explanation: "The fundamental principles include democracy, the rule of law, individual liberty, tolerance, and participation in community life.",
        chapter: 5,
        section: "Fundamental principles"
    },
    {
        id: 257,
        question: "What must all UK residents do?",
        options: ["Vote", "Respect and obey the law", "Pay taxes", "Speak English"],
        correct: 1,
        explanation: "All residents of the UK are expected to respect and obey the law.",
        chapter: 5,
        section: "Respecting the law"
    },
    {
        id: 258,
        question: "What system does the UK have?",
        options: ["Presidential", "Parliamentary", "Federal", "Confederal"],
        correct: 1,
        explanation: "The UK has a parliamentary system of government.",
        chapter: 5,
        section: "The government"
    },
    {
        id: 259,
        question: "Who is head of government?",
        options: ["King/Queen", "Prime Minister", "Speaker", "Chancellor"],
        correct: 1,
        explanation: "The Prime Minister is the head of government.",
        chapter: 5,
        section: "The government"
    },
    {
        id: 260,
        question: "Which institutions is the UK a member of?",
        options: ["UN only", "UN, NATO, and Commonwealth", "NATO only", "Commonwealth only"],
        correct: 1,
        explanation: "The UK is a member of various international institutions including the United Nations, NATO, and the Commonwealth.",
        chapter: 5,
        section: "The UK and international institutions"
    },
    {
        id: 261,
        question: "What are your community responsibilities?",
        options: ["Only paying taxes", "Respecting others, obeying law, participating in community", "Only voting", "Only speaking English"],
        correct: 1,
        explanation: "As a resident of the UK, you have responsibilities to your community including respecting others, obeying the law, and participating in community life.",
        chapter: 5,
        section: "Your role in the community"
    },
    {
        id: 262,
        question: "What does NATO stand for?",
        options: ["North Atlantic Treaty Organization", "National Atlantic Treaty Organization", "North Atlantic Trade Organization", "National Atlantic Trade Organization"],
        correct: 0,
        explanation: "The UK is a member of various international institutions including the United Nations, NATO, and the Commonwealth.",
        chapter: 5,
        section: "The UK and international institutions"
    },
    {
        id: 263,
        question: "What is the Commonwealth?",
        options: ["A trade organization", "An international institution", "A military alliance", "A political party"],
        correct: 1,
        explanation: "The UK is a member of various international institutions including the United Nations, NATO, and the Commonwealth.",
        chapter: 5,
        section: "The UK and international institutions"
    },
    {
        id: 264,
        question: "What does participation in community life mean?",
        options: ["Only voting", "Being involved in your local community", "Only paying taxes", "Only working"],
        correct: 1,
        explanation: "The fundamental principles include democracy, the rule of law, individual liberty, tolerance, and participation in community life.",
        chapter: 5,
        section: "Fundamental principles"
    },
    {
        id: 265,
        question: "What is individual liberty?",
        options: ["Freedom from government", "A fundamental principle", "Only for citizens", "Not important"],
        correct: 1,
        explanation: "The fundamental principles include democracy, the rule of law, individual liberty, tolerance, and participation in community life.",
        chapter: 5,
        section: "Fundamental principles"
    },
    {
        id: 266,
        question: "What is the rule of law?",
        options: ["Laws only", "A fundamental principle meaning everyone is subject to law", "Only for some people", "Not important"],
        correct: 1,
        explanation: "The fundamental principles include democracy, the rule of law, individual liberty, tolerance, and participation in community life.",
        chapter: 5,
        section: "Fundamental principles"
    },
    {
        id: 267,
        question: "What does tolerance mean?",
        options: ["Accepting everyone", "Tolerance of those with different faiths and beliefs", "Only religious tolerance", "Not important"],
        correct: 1,
        explanation: "The fundamental principles include democracy, the rule of law, individual liberty, tolerance of those with different faiths and beliefs, and participation in community life.",
        chapter: 5,
        section: "Fundamental principles"
    },
    {
        id: 268,
        question: "What is democracy?",
        options: ["A type of government", "A fundamental principle", "Only voting", "Not important"],
        correct: 1,
        explanation: "The fundamental principles include democracy, the rule of law, individual liberty, tolerance, and participation in community life.",
        chapter: 5,
        section: "Fundamental principles"
    },
    {
        id: 269,
        question: "What are statutes?",
        options: ["Laws passed by Parliament", "Court decisions", "Traditions", "Conventions"],
        correct: 0,
        explanation: "The British constitution is made up of various sources including statutes, common law, and conventions.",
        chapter: 5,
        section: "The British constitution"
    },
    {
        id: 270,
        question: "What is common law?",
        options: ["Laws passed by Parliament", "Law developed through court decisions", "Traditions", "Conventions"],
        correct: 1,
        explanation: "The British constitution is made up of various sources including statutes, common law, and conventions.",
        chapter: 5,
        section: "The British constitution"
    },
    {
        id: 271,
        question: "What are conventions?",
        options: ["Laws", "Court decisions", "Unwritten rules and practices", "Traditions only"],
        correct: 2,
        explanation: "The British constitution is made up of various sources including statutes, common law, and conventions.",
        chapter: 5,
        section: "The British constitution"
    },
    {
        id: 272,
        question: "What did British democracy evolve from?",
        options: ["Republic", "Absolute monarchy to parliamentary democracy", "Dictatorship", "Anarchy"],
        correct: 1,
        explanation: "British democracy has developed over many centuries, evolving from absolute monarchy to parliamentary democracy.",
        chapter: 5,
        section: "The development of British democracy"
    },
    {
        id: 273,
        question: "What is a parliamentary system?",
        options: ["Government by parliament", "System where Prime Minister is head of government", "Both A and B", "Presidential system"],
        correct: 2,
        explanation: "The UK has a parliamentary system of government. The Prime Minister is the head of government.",
        chapter: 5,
        section: "The government"
    },
    {
        id: 274,
        question: "What does respecting the law mean?",
        options: ["Only not breaking laws", "Respecting and obeying the law", "Only obeying some laws", "Not important"],
        correct: 1,
        explanation: "All residents of the UK are expected to respect and obey the law.",
        chapter: 5,
        section: "Respecting the law"
    },
    {
        id: 275,
        question: "What does participating in community life involve?",
        options: ["Only voting", "Being involved in your local community and activities", "Only paying taxes", "Only working"],
        correct: 1,
        explanation: "As a resident of the UK, you have responsibilities to your community including respecting others, obeying the law, and participating in community life.",
        chapter: 5,
        section: "Your role in the community"
    },
    {
        id: 276,
        question: "What does respecting others mean?",
        options: ["Only family", "Respecting rights of others, including their right to their own opinions", "Only friends", "Not important"],
        correct: 1,
        explanation: "If you wish to be a permanent resident or citizen of the UK, you should: respect the rights of others, including their right to their own opinions.",
        chapter: 1,
        section: "The values and principles of the UK"
    },
    {
        id: 277,
        question: "What does treating others with fairness mean?",
        options: ["Only some people", "Treating others with fairness", "Only family", "Not important"],
        correct: 1,
        explanation: "If you wish to be a permanent resident or citizen of the UK, you should: treat others with fairness.",
        chapter: 1,
        section: "The values and principles of the UK"
    },
    {
        id: 278,
        question: "What should you look after?",
        options: ["Only yourself", "Yourself and your family", "Only family", "Only others"],
        correct: 1,
        explanation: "If you wish to be a permanent resident or citizen of the UK, you should: look after yourself and your family.",
        chapter: 1,
        section: "The values and principles of the UK"
    },
    {
        id: 279,
        question: "What should you look after in your area?",
        options: ["Only your house", "The area in which you live and the environment", "Only the environment", "Nothing"],
        correct: 1,
        explanation: "If you wish to be a permanent resident or citizen of the UK, you should: look after the area in which you live and the environment.",
        chapter: 1,
        section: "The values and principles of the UK"
    },
    {
        id: 280,
        question: "What right does the UK offer regarding speech?",
        options: ["Limited speech", "Freedom of speech", "No speech rights", "Censored speech"],
        correct: 1,
        explanation: "In return, the UK offers: freedom of belief and religion, freedom of speech, freedom from unfair discrimination, a right to a fair trial, and a right to join in the election of a government.",
        chapter: 1,
        section: "The values and principles of the UK"
    },
    {
        id: 281,
        question: "What right does the UK offer regarding discrimination?",
        options: ["Some discrimination allowed", "Freedom from unfair discrimination", "No protection", "Full discrimination"],
        correct: 1,
        explanation: "In return, the UK offers: freedom of belief and religion, freedom of speech, freedom from unfair discrimination, a right to a fair trial, and a right to join in the election of a government.",
        chapter: 1,
        section: "The values and principles of the UK"
    },
    {
        id: 282,
        question: "What right does the UK offer regarding trials?",
        options: ["Some trials", "A right to a fair trial", "No trial rights", "Unfair trials"],
        correct: 1,
        explanation: "In return, the UK offers: freedom of belief and religion, freedom of speech, freedom from unfair discrimination, a right to a fair trial, and a right to join in the election of a government.",
        chapter: 1,
        section: "The values and principles of the UK"
    },
    {
        id: 283,
        question: "What right does the UK offer regarding government?",
        options: ["No rights", "A right to join in the election of a government", "Only some can vote", "No elections"],
        correct: 1,
        explanation: "In return, the UK offers: freedom of belief and religion, freedom of speech, freedom from unfair discrimination, a right to a fair trial, and a right to join in the election of a government.",
        chapter: 1,
        section: "The values and principles of the UK"
    },
    {
        id: 284,
        question: "What is the citizenship pledge?",
        options: ["To pay taxes", "To uphold democratic values and observe laws", "To speak English", "To vote"],
        correct: 1,
        explanation: "As part of the citizenship ceremony, new citizens pledge to uphold these values. The pledge is: 'I will give my loyalty to the United Kingdom and respect its rights and freedoms. I will uphold its democratic values. I will observe its laws faithfully and fulfil my duties and obligations as a British citizen.'",
        chapter: 1,
        section: "The values and principles of the UK"
    },
    {
        id: 285,
        question: "What do new citizens pledge loyalty to?",
        options: ["The government", "The United Kingdom", "The Prime Minister", "The King"],
        correct: 1,
        explanation: "The pledge is: 'I will give my loyalty to the United Kingdom and respect its rights and freedoms.'",
        chapter: 1,
        section: "The values and principles of the UK"
    },
    {
        id: 286,
        question: "What do new citizens pledge to observe?",
        options: ["Only some laws", "Laws faithfully", "No laws", "Only important laws"],
        correct: 1,
        explanation: "The pledge includes: 'I will observe its laws faithfully and fulfil my duties and obligations as a British citizen.'",
        chapter: 1,
        section: "The values and principles of the UK"
    },
    {
        id: 287,
        question: "What do new citizens pledge to fulfil?",
        options: ["Only rights", "Duties and obligations", "Only duties", "Nothing"],
        correct: 1,
        explanation: "The pledge includes: 'I will observe its laws faithfully and fulfil my duties and obligations as a British citizen.'",
        chapter: 1,
        section: "The values and principles of the UK"
    },
    {
        id: 288,
        question: "What are British values based on?",
        options: ["Recent events", "History and traditions", "Foreign ideas", "Only laws"],
        correct: 1,
        explanation: "British society is founded on fundamental values and principles which all those living in the UK should respect and support. These values are reflected in the responsibilities, rights and privileges of being a British citizen or permanent resident of the UK.",
        chapter: 1,
        section: "The values and principles of the UK"
    },
    {
        id: 289,
        question: "How are British values protected?",
        options: ["Only by law", "By law, customs and expectations", "Only by customs", "Not protected"],
        correct: 1,
        explanation: "They are based on history and traditions and are protected by law, customs and expectations.",
        chapter: 1,
        section: "The values and principles of the UK"
    },
    {
        id: 290,
        question: "Is there place for extremism in British society?",
        options: ["Yes", "No, there is no place for extremism or intolerance", "Sometimes", "Only for some"],
        correct: 1,
        explanation: "There is no place in British society for extremism or intolerance.",
        chapter: 1,
        section: "The values and principles of the UK"
    },
    {
        id: 291,
        question: "Is there place for intolerance in British society?",
        options: ["Yes", "No, there is no place for extremism or intolerance", "Sometimes", "Only for some"],
        correct: 1,
        explanation: "There is no place in British society for extremism or intolerance.",
        chapter: 1,
        section: "The values and principles of the UK"
    },
    {
        id: 292,
        question: "What do British values reflect?",
        options: ["Only rights", "Responsibilities, rights and privileges", "Only responsibilities", "Only privileges"],
        correct: 1,
        explanation: "These values are reflected in the responsibilities, rights and privileges of being a British citizen or permanent resident of the UK.",
        chapter: 1,
        section: "The values and principles of the UK"
    },
    {
        id: 293,
        question: "Who should respect British values?",
        options: ["Only citizens", "All those living in the UK", "Only permanent residents", "Only some people"],
        correct: 1,
        explanation: "British society is founded on fundamental values and principles which all those living in the UK should respect and support.",
        chapter: 1,
        section: "The values and principles of the UK"
    },
    {
        id: 294,
        question: "What is required to become a permanent resident?",
        options: ["Only English", "Speak and read English, and have good understanding of life in the UK", "Only understanding", "Nothing"],
        correct: 1,
        explanation: "To apply to become a permanent resident or citizen of the UK, you will need to: speak and read English, and have a good understanding of life in the UK.",
        chapter: 1,
        section: "Becoming a permanent resident"
    },
    {
        id: 295,
        question: "What are the two ways to be tested?",
        options: ["Only Life in the UK test", "Take the Life in the UK test or pass an ESOL course", "Only ESOL course", "No test needed"],
        correct: 1,
        explanation: "There are currently two ways you can be tested on these requirements: Take the Life in the UK test, or Pass an ESOL course in English with Citizenship.",
        chapter: 1,
        section: "Becoming a permanent resident"
    },
    {
        id: 296,
        question: "When do you need to take an ESOL course?",
        options: ["Always", "If your standard of English is below ESOL Entry Level 3", "Never", "Only if you want"],
        correct: 1,
        explanation: "You will need to take this course if your standard of English is below ESOL Entry Level 3.",
        chapter: 1,
        section: "Becoming a permanent resident"
    },
    {
        id: 297,
        question: "What changed from October 2013?",
        options: ["Nothing", "For settlement, need to pass Life in the UK test and produce B1 English evidence", "Only test", "Only English"],
        correct: 1,
        explanation: "From October 2013, for settlement or permanent residence, you will need to: Pass the Life in the UK test, and Produce acceptable evidence of speaking and listening skills in English at B1 of the Common European Framework of Reference.",
        chapter: 1,
        section: "Becoming a permanent resident"
    },
    {
        id: 298,
        question: "What is B1 level?",
        options: ["A1 level", "Equivalent to ESOL Entry Level 3", "A2 level", "B2 level"],
        correct: 1,
        explanation: "This is equivalent to ESOL Entry Level 3.",
        chapter: 1,
        section: "Becoming a permanent resident"
    },
    {
        id: 299,
        question: "How many questions are different for each person?",
        options: ["All the same", "The 24 questions will be different for each person", "Some same", "None different"],
        correct: 1,
        explanation: "The 24 questions will be different for each person taking the test at that test session.",
        chapter: 1,
        section: "Taking the Life in the UK test"
    },
    {
        id: 300,
        question: "What are questions based on?",
        options: ["Some parts", "ALL parts of the handbook", "Only one part", "Not specified"],
        correct: 1,
        explanation: "Questions are based on ALL parts of the handbook.",
        chapter: 1,
        section: "Taking the Life in the UK test"
    }
];

