model = {
  site: document.getElementById(`app`),

  days: [
    //{taskDescription: ``,task: ``,answer: , correct: false},
    {
      taskDescription: `Hvor mange ganger står det "Jingle"/"jingle" i denne teksten?`,
      task: `Dashing through the snow
      In a one-horse open sleigh<br/>
      O'er the fields we go
      Laughing all the way<br/>
      Bells on bobtails ring
      Making spirits bright<br/>
      What fun it is to ride and sing
      A sleighing song tonight, oh!<br/>
      Jingle bells, jingle bells
      Jingle all the way<br/>
      Oh, what fun it is to ride
      In a one-horse open sleigh, hey!<br/>
      Jingle bells, jingle bells
      Jingle all the way<br/>
      Oh what fun it is to ride
      In a one-horse open sleigh<br/>
      Now the ground is white
      Go it while you're young<br/>
      Take the girls tonight
      Sing this sleighing song<br/>
      Get a bobtailed bay
      Two forty for his speed<br/>
      And hitch him to an open sleigh
      And you will take the lead<br/>
      Oh, jingle bells, jingle bells
      Jingle all the way<br/>
      Oh, what fun it is to ride
      In a one-horse open sleigh, hey!<br/>
      Jingle bells, jingle bells
      Jingle all the way<br/>
      Oh, what fun it is to ride
      In a one-horse open sleigh<br/>
      Oh, what fun it is to ride
      In one horse open sleigh!`,
      answer: 12,
      correct: false,
    },
    {
      taskDescription: `Hva står dette for? (Svar må ha ", " mellom svarene)`,
      task: `GET`,
      answer: "Geir, Eskil, Terje",
      correct: false,
    },
    {
      taskDescription: `Alle tegn på ett tastatur har en ASCII verdi, hva er tallet til(når de legges sammen):`,
      task: `GET`,
      answer: 224,
      correct: false,
    },
    {
      taskDescription: `Er dette en julefilm?`,
      task: `Die Hard`,
      answer: "Ja",
      correct: false,
    },
    {
      taskDescription: `En 40 fot container har interne mål på 5,89m l * 2,35m b * 2,39m h intern mål og slette vegger`,
      task: `Hva er den maksimale mengden med gløgg flasker i denne konteineren når hver flaske har en diameter på 65mm og en høyde på 165mm og første laget med flasker står med bunnen mot gulvet`,
      answer: 45864,
      correct: false,
    },
    {
    taskDescription: `Hva heter sangen som lyder slik? :`,
    task: `«Nå har vi vasket golvet og vi har børi ved»`,
    answer: "Julekveldsvisa",
    correct: false,
    },
    {
    taskDescription: `I hvilken Norsk TV-serie møter vi disse figurene?`,
    task: `Potetbonden Olaf og kona Gjertrud`,
    answer: "The Julekalender",
    correct: false,
    },
    {
    taskDescription: `Hva er dette på spansk?`,
    task: `God Jul`,
    answer: "Feliz Navidad",
    correct: false,
    },
    {
    taskDescription: `Hvilket selskap bruker denne figuren i sine reklamer?`,
    task: `Julenissen`,
    answer: "Coca-Cola",
    correct: false,
    },
    {
    taskDescription: `Hva er dette på svensk?`,
    task: `Julenissen`,
    answer: "Jultomten",
    correct: false,
    },
    {
        taskDescription: `Jøssoball, skjekker du enda?! Wow, eh.. This is akward.`,
        task: `Du kan jo komme tilbake imorgen, så starter vi på nytt? Er det greit?`,
        anwer: `Ja`,
        correct: false,
    },
    {
        taskDescription: `Hvor mange ganger står det "Jingle"/"jingle" i denne teksten?`,
        task: `Dashing through the snow
        In a one-horse open sleigh
        O'er the fields we go
        Laughing all the way
        Bells on bobtails ring
        Making spirits bright
        What fun it is to ride and sing
        A sleighing song tonight, oh!
        Jingle bells, jingle bells
        Jingle all the way
        Oh, what fun it is to ride
        In a one-horse open sleigh, hey!
        Jingle bells, jingle bells
        Jingle all the way
        Oh what fun it is to ride
        In a one-horse open sleigh
        Now the ground is white
        Go it while you're young
        Take the girls tonight
        Sing this sleighing song
        Get a bobtailed bay
        Two forty for his speed
        And hitch him to an open sleigh
        And you will take the lead
        Oh, jingle bells, jingle bells
        Jingle all the way
        Oh, what fun it is to ride
        In a one-horse open sleigh, hey!
        Jingle bells, jingle bells
        Jingle all the way
        Oh, what fun it is to ride
        In a one-horse open sleigh
        Oh, what fun it is to ride
        In one horse open sleigh!`,
        answer: 12,
        correct: false,
      },
      {
        taskDescription: `Hva står dette for? (Svar må ha ", " mellom svarene)`,
        task: `GET`,
        answer: "Geir, Eskil, Terje",
        correct: false,
      },
      {
        taskDescription: `Alle tegn på ett tastatur har en ASCII verdi, hva er tallet til(når de legges sammen):`,
        task: `GET`,
        answer: 224,
        correct: false,
      },
      {
        taskDescription: `Er dette en julefilm?`,
        task: `Die Hard`,
        answer: "Ja",
        correct: false,
      },
      {
        taskDescription: `En 40 fot container har interne mål på 5,89m l * 2,35m b * 2,39m h intern mål og slette vegger`,
        task: `Hva er den maksimale mengden med gløgg flasker i denne konteineren når hver flaske har en diameter på 65mm og en høyde på 165mm og første laget med flasker står med bunnen mot gulvet`,
        answer: 45864,
        correct: false,
      },
      {
      taskDescription: `Hva heter sangen som lyder slik? :`,
      task: `«Nå har vi vasket golvet og vi har børi ved»`,
      answer: "Julekveldsvisa",
      correct: false,
      },
      {
      taskDescription: `I hvilken Norsk TV-serie møter vi disse figurene?`,
      task: `Potetbonden Olaf og kona Gjertrud`,
      answer: "The Julekalender",
      correct: false,
      },
      {
      taskDescription: `Hva er dette på spansk?`,
      task: `God Jul`,
      answer: "Feliz Navidad",
      correct: false,
      },
      {
      taskDescription: `Hvilket selskap bruker denne figuren i sine reklamer?`,
      task: `Julenissen`,
      answer: "Coca-Cola",
      correct: false,
      },
      {
      taskDescription: `Hva er dette på svensk?`,
      task: `Julenissen`,
      answer: "Jultomten",
      correct: false,
      },
      {
        taskDescription: `Jøssoball, skjekker du enda?! Wow, eh.. This is akward.`,
        task: `Du kan jo komme tilbake imorgen, så starter vi på nytt? Er det greit?`,
        anwer: `Ja`,
        correct: false,
    },
    {
        taskDescription: `Hvor mange ganger står det "Jingle"/"jingle" i denne teksten?`,
        task: `Dashing through the snow
        In a one-horse open sleigh
        O'er the fields we go
        Laughing all the way
        Bells on bobtails ring
        Making spirits bright
        What fun it is to ride and sing
        A sleighing song tonight, oh!
        Jingle bells, jingle bells
        Jingle all the way
        Oh, what fun it is to ride
        In a one-horse open sleigh, hey!
        Jingle bells, jingle bells
        Jingle all the way
        Oh what fun it is to ride
        In a one-horse open sleigh
        Now the ground is white
        Go it while you're young
        Take the girls tonight
        Sing this sleighing song
        Get a bobtailed bay
        Two forty for his speed
        And hitch him to an open sleigh
        And you will take the lead
        Oh, jingle bells, jingle bells
        Jingle all the way
        Oh, what fun it is to ride
        In a one-horse open sleigh, hey!
        Jingle bells, jingle bells
        Jingle all the way
        Oh, what fun it is to ride
        In a one-horse open sleigh
        Oh, what fun it is to ride
        In one horse open sleigh!`,
        answer: 12,
        correct: false,
      },
      {
        taskDescription: `Hva står dette for? (Svar må ha ", " mellom svarene)`,
        task: `GET`,
        answer: "Geir, Eskil, Terje",
        correct: false,
      },
  ],

  door: [
    24, 9, 14, 23, 19, 5, 22, 11, 2, 15, 3, 12, 16, 4, 20, 6, 8, 21, 10, 13,
    17, 18, 1, 7
  ],
};
