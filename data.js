let challenges = [
    {
      category: "Geography",
      q: 'What is the capital of Namibia?',
      a: { ans: 'Rundu', bool: false },
      b: { ans: 'Windhoek', bool: true },
      c: { ans: 'Khorixas', bool: false },
      d: { ans: 'Cape Town', bool: false }
    },
    {
      category: "Geography",
      q: 'What is the capital of Zambia?',
      a: { ans: 'Bamako', bool: false },
      b: { ans: 'Damascus', bool: false },
      c: { ans: 'Livingstone', bool: false },
      d: { ans: 'Lusaka', bool: true }
    },
    {
      category: "Geography",
      q: 'What is the administrative center of Eswatini?',
      a: { ans: 'Yaounde', bool: false },
      b: { ans: 'Amman', bool: false },
      c: { ans: 'Dakar', bool: false },
      d: { ans: 'Mbabane', bool: true }
    },
    {
      category: "Geography",
      q: 'What is the capital of Bhutan?',
      a: { ans: 'Thimpu', bool: true },
      b: { ans: 'Kinshasa', bool: false },
      c: { ans: 'Yamoussoukro', bool: false },
      d: { ans: 'Ngerulmud', bool: false }
    },
    {
      category: "Geography",
      q: 'What is the capital of Nepal?',
      a: { ans: 'Kathmandu', bool: true },
      b: { ans: 'Pokhara', bool: false },
      c: { ans: 'Lalitpur', bool: false },
      d: { ans: 'Bhaktapur', bool: false }
    },
    {
      category: "Geography",
      q: 'What is the capital of Myanmar?',
      a: { ans: 'Bhamo', bool: false },
      b: { ans: 'Nay Pyi Taw', bool: true },
      c: { ans: 'Pyinmana', bool: false },
      d: { ans: 'Yangon', bool: false }
    },
    {
      category: "Geography",
      q: 'What is the capital of Cambodia?',
      a: { ans: 'Kâmpóng Cham', bool: false },
      b: { ans: 'Poipet', bool: false },
      c: { ans: 'Battambang', bool: false },
      d: { ans: 'Phnom Penh', bool: true }
    },
    {
      category: "Geography",
      q: 'What is the capital of Laos?',
      a: { ans: 'Vientiane', bool: true },
      b: { ans: 'Muang Xay', bool: false },
      c: { ans: 'Hanoi', bool: false },
      d: { ans: 'Muang Pek', bool: false }
    },
    {
      category: "Geography",
      q: 'What is the capital of Malaysia?',
      a: { ans: 'Kuala Lumpur', bool: true },
      b: { ans: 'Kota Kinabalu', bool: false },
      c: { ans: 'Malacca', bool: false },
      d: { ans: 'Kuching', bool: false }
    },
    {
      category: "Geography",
      q: 'What is the capital of Thailand?',
      a: { ans: 'Chiang Mai', bool: false },
      b: { ans: 'Phucket', bool: false },
      c: { ans: 'Bangkok', bool: true },
      d: { ans: 'Khon Kaen', bool: false }
    },
  
    {
      category: "Science",
      q: 'Which is the weakest force in nature?',
      a: { ans: 'strong force', bool: false },
      b: { ans: 'gravity', bool: true },
      c: { ans: 'weak force', bool: false },
      d: { ans: 'electromagnetic force', bool: false }
    },
    {
      category: "Science",
      q: 'Who among these men was the first scientist to conduct a controlled nuclear chain reaction experiment?',
      a: { ans: 'Richard P. Feynman', bool: false },
      b: { ans: 'Enrico Fermi', bool: true },
      c: { ans: 'Albert Einstein', bool: false },
      d: { ans: 'Arthur Holly Compton', bool: false }
    },
    {
      category: "Science",
      q: 'What reaction involving atomic nuclei is the source of the Sun’s energy?',
      a: { ans: 'nuclear fission', bool: false },
      b: { ans: 'chemical combustion', bool: false },
      c: { ans: 'ionization', bool: false },
      d: { ans: 'nuclear fusion', bool: true }
    },
    {
      category: "Science",
      q: 'What is the unit of measure for cycles per second?',
      a: { ans: 'decibel', bool: false },
      b: { ans: 'ohm', bool: false },
      c: { ans: 'hertz', bool: true },
      d: { ans: 'ampere', bool: false }
    },
    {
      category: "Science",
      q: 'What is the SI unit of an electric charge?',
      a: { ans: 'kelvin', bool: false },
      b: { ans: 'ampere', bool: false },
      c: { ans: 'second', bool: false },
      d: { ans: 'coulomb', bool: true }
    },
    {
      category: "Science",
      q: 'Which type of electromagnetic radiation has the shortest wavelength?',
      a: { ans: 'X-ray', bool: false },
      b: { ans: 'gamma ray', bool: true },
      c: { ans: 'microwave', bool: false },
      d: { ans: 'radio wave', bool: false }
    },
    {
      category: "Science",
      q: 'Who discovered the rotating magnetic field?',
      a: { ans: 'Pierre Curie', bool: false },
      b: { ans: 'Nikola Tesla', bool: true },
      c: { ans: 'Paul Langevin', bool: false },
      d: { ans: 'Georgy Flerov', bool: false }
    },
    {
      category: "Science",
      q: 'What term defines work done per unit of time?',
      a: { ans: 'angular momentum', bool: false },
      b: { ans: 'magnetic flux', bool: false },
      c: { ans: 'power', bool: true },
      d: { ans: 'electric current', bool: false }
    },
    {
      category: "Science",
      q: 'What term refers to the change of velocity with time?',
      a: { ans: 'motion', bool: false },
      b: { ans: 'distance', bool: false },
      c: { ans: 'acceleration', bool: true },
      d: { ans: 'gravity', bool: false }
    },
    {
      category: "Science",
      q: 'What is vaporization of dry ice an example of?',
      a: { ans: 'cavitation', bool: false },
      b: { ans: 'sublimation', bool: true },
      c: { ans: 'condensation', bool: false },
      d: { ans: 'evaporation', bool: false }
    },
    {
      category: "History",
      q: 'Which dog did President George Bush refer to in reelection bid as knowing “more about foreign affairs than these two bozos?',
      a: { ans: 'Betty Bush', bool: false },
      b: { ans: 'Millie Bush', bool: true },
      c: { ans: 'Billie Bush', bool: false },
      d: { ans: 'Tillie Bush', bool: false }
    },
    {
      category: "History",
      q: 'Who drafted the U.S. Declaration of Independence?',
      a: { ans: 'Thomas Jefferson', bool: true },
      b: { ans: 'Abraham Lincoln', bool: false },
      c: { ans: 'King George III', bool: false },
      d: { ans: 'George Washington', bool: false }
    },
    {
      category: "History",
      q: 'Who wrote the American national anthem?',
      a: { ans: 'Francis Bellamy', bool: false },
      b: { ans: 'Francis Scott Key', bool: true },
      c: { ans: 'Francis Drake', bool: false },
      d: { ans: 'F. Scott Fitzgerald', bool: false }
    },
    {
      category: "History",
      q: 'What is the nickname for the old regulations requiring racial segregation?',
      a: { ans: 'Old Crow laws', bool: false },
      b: { ans: 'Jim Crow laws', bool: true },
      c: { ans: 'Blue laws', bool: false },
      d: { ans: 'Stone the Crows laws', bool: false }
    },
    {
      category: "History",
      q: 'Where did the U.S. Senate first meet, before moving to Philadelphia and then to Washington, D.C.?',
      a: { ans: 'Trenton', bool: false },
      b: { ans: 'Boston', bool: false },
      c: { ans: 'Richmond', bool: false },
      d: { ans: 'New York City', bool: true }
    },
    {
      category: "History",
      q: 'Which document does the Fourth of July commemorate?',
      a: { ans: 'Declaration of Independence', bool: true },
      b: { ans: 'Constitution', bool: false },
      c: { ans: 'Articles of Confederation', bool: false },
      d: { ans: 'Gettysburg Addressn', bool: false }
    },
    {
      category: "History",
      q: 'What kind of government does the United States have?',
      a: { ans: 'gerontocracy', bool: false },
      b: { ans: 'monarchy', bool: false },
      c: { ans: 'republic', bool: true },
      d: { ans: 'democracy', bool: false }
    },
    {
      category: "History",
      q: 'How many members are there of the U.S. Senate?',
      a: { ans: '200', bool: false },
      b: { ans: '150', bool: false },
      c: { ans: '100', bool: true },
      d: { ans: '50', bool: false }
    },
    {
      category: "History",
      q: 'Which site was the site of the international meeting in 1945 that established the United Nations?',
      a: { ans: 'San Francisco', bool: true },
      b: { ans: 'Chicago', bool: false },
      c: { ans: 'Seattle', bool: false },
      d: { ans: 'Philadelphia', bool: false }
    },
    {
      category: "History",
      q: `What was Japan's first treaty with the United States?`,
      a: { ans: 'Treaty of Peace with Japan', bool: false },
      b: { ans: 'Security Treaty', bool: false },
      c: { ans: 'Treaty of Kanagawa', bool: true },
      d: { ans: 'Treaty of Mutual Cooperation and Security', bool: false }
    },
    {
      category: "Sports",
      q: 'What stick-and-ball sport has long been recognized as the national pastime of Ireland?',
      a: { ans: 'curling', bool: false },
      b: { ans: 'lacrosse', bool: false },
      c: { ans: 'hurling', bool: true },
      d: { ans: 'hockey', bool: false }
    },
    {
      category: "Sports",
      q: `Which is a court or lawn game played with lightweight rackets and a shuttlecock?`,
      a: { ans: 'badminton', bool: true },
      b: { ans: 'baseball', bool: false },
      c: { ans: 'tennis', bool: false },
      d: { ans: 'cricket', bool: false }
    },
    {
      category: "Sports",
      q: `Which sport is considered the national summer sport of England?`,
      a: { ans: 'hockey', bool: false },
      b: { ans: 'rugby', bool: false },
      c: { ans: 'football (soccer)', bool: false },
      d: { ans: 'cricket', bool: true }
    },
    {
      category: "Sports",
      q: `Which sport evolved as a combination of tennis and squash?`,
      a: { ans: 'table tennis', bool: false },
      b: { ans: 'platform tennis', bool: true },
      c: { ans: 'royal tennis', bool: false },
      d: { ans: 'deck tennis', bool: false }
    },
    {
      category: "Sports",
      q: `What is the oldest professional sporting trophy in North America?`,
      a: { ans: 'Walker Cup', bool: false },
      b: { ans: 'Stanley Cup', bool: true},
      c: { ans: 'Grey Cup', bool: false },
      d: { ans: 'Canadian-American Challenge Cup', bool: false }
    },
    {
      category: "Sports",
      q: `Chukkers are associated with which sport?`,
      a: { ans: 'polo', bool: true },
      b: { ans: 'squash', bool: false },
      c: { ans: 'horse racing', bool: false },
      d: { ans: 'rugby', bool: false }
    },
    {
      category: "Sports",
      q: `The side horse is associated with which sport?`,
      a: { ans: 'gymnastics', bool: true },
      b: { ans: 'volleyball', bool: false },
      c: { ans: 'steeplechase', bool: false },
      d: { ans: 'show jumping', bool: false }
    },
    {
      category: "Sports",
      q: `What sport is the Ryder Cup associated with?`,
      a: { ans: 'golf', bool: true },
      b: { ans: 'trapshooting', bool: false },
      c: { ans: 'tennis', bool: false },
      d: { ans: 'archery', bool: false }
    },
    {
      category: "Sports",
      q: `The term pugilism is synonymous with what sport?`,
      a: { ans: 'boxing', bool: true },
      b: { ans: 'fencing', bool: false },
      c: { ans: 'cricket', bool: false },
      d: { ans: 'cockfighting', bool: false }
    },
    {
      category: "Sports",
      q: `Supercross is a form of what sport?`,
      a: { ans: 'skateboarding', bool: false },
      b: { ans: 'mountain biking', bool: false },
      c: { ans: 'skiing', bool: false },
      d: { ans: 'motorcycle racing', bool: true }
    },
    {
      category: "Technology",
      q: `Who founded Tesla Motors?`,
      a: { ans: 'Carol E. Reiley', bool: false },
      b: { ans: 'Elon Musk', bool: false },
      c: { ans: 'Nikola Tesla', bool: false },
      d: { ans: 'Martin Eberhard', bool: true }
    },
    {
      category: "Technology",
      q: `Who created the first thermometer?`,
      a: { ans: 'Daniel Fahrenheit', bool: false },
      b: { ans: 'Hypatia', bool: false },
      c: { ans: 'Anders Celsius', bool: false },
      d: { ans: 'Galileo', bool: true }
    },
    {
      category: "Technology",
      q: `Who invented wireless telegraphy?`,
      a: { ans: 'Heinrich Hertz', bool: false },
      b: { ans: 'Samuel F.B. Morse', bool: false },
      c: { ans: 'Evelyn Granville', bool: false },
      d: { ans: 'Guglielmo Marconi', bool: true }
    },
    {
      category: "Technology",
      q: `Who invented the safety elevator?`,
      a: { ans: 'Elisha Otis', bool: true },
      b: { ans: 'Gustave Eiffel', bool: false },
      c: { ans: 'George M. Pullman', bool: false },
      d: { ans: 'Emily Roebling', bool: false }
    },
    {
      category: "Technology",
      q: `Who invented the pendulum clock?`,
      a: { ans: 'Leonardo da Vinci', bool: false },
      b: { ans: 'Christiaan Huygens', bool: true },
      c: { ans: 'Maria Gaetana Agnesi', bool: false },
      d: { ans: 'Isaac Newton', bool: false }
    },
    {
      category: "Technology",
      q: `What early vehicles were known as “boneshakers”?`,
      a: { ans: 'stagecoaches', bool: false },
      b: { ans: 'bicycles', bool: true },
      c: { ans: 'railroad trains', bool: false },
      d: { ans: 'Ford Model Ts', bool: false }
    },
    {
      category: "Technology",
      q: `What is the formal name for a lie detector?`,
      a: { ans: 'seismograph', bool: false },
      b: { ans: 'polygraph', bool: true },
      c: { ans: 'anemometer', bool: false },
      d: { ans: 'electroencephalograph', bool: false }
    },
    {
      category: "Technology",
      q: `What device converts sunlight to electricity?`,
      a: { ans: 'liquid-crystal display', bool: false },
      b: { ans: 'reflector telescope', bool: false },
      c: { ans: 'optical fibre', bool: false },
      d: { ans: 'photovoltaic cell', bool: true }
    },
    {
      category: "Technology",
      q: `What did Alfred Nobel invent?`,
      a: { ans: 'stainless steel', bool: false },
      b: { ans: 'dynamite', bool: true },
      c: { ans: 'smallpox vaccine', bool: false },
      d: { ans: 'X-ray machine', bool: false }
    },
    {
      category: "Technology",
      q: `When did the first smartphone make its public debut?`,
      a: { ans: '2007', bool: false },
      b: { ans: '2014', bool: false },
      c: { ans: '2001', bool: false },
      d: { ans: '1993', bool: true }
    },

  ]
