type NoobDeveloper = {
   name: string;
};

type JuniorDeveloper = {
   name: string;
   expertise: string;
   experience: string;
}

enum level {
   junior = 'junior',
   mid = 'mid',
   senior = 'senior'
}

type bestDevloper = NoobDeveloper & JuniorDeveloper & {level: level};

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
   name: "arnab Shikder",
}

const oldDeveloper: NoobDeveloper & JuniorDeveloper = {
   name: "arnab Shikder",
   expertise: "html",
   experience: '50years'
}

const bestnewDeveloper: bestDevloper = {
   name: "arnab Shikder",
   expertise: "html",
   experience: '50years',
   level: level.mid,
}

