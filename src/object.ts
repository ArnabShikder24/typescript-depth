const user: {
   company: 'Only4values',
   readonly name: string,
   age: number,
   newAge(newage: number):void,
   isMarried: boolean,
   wife?: string
}= {
   company: 'Only4values',
   name: 'arnab shikder',
   age: 20,
   newAge(newage: number) {
      console.log(this.age + newage);
   },
   isMarried: false,
   wife: 'Not availabe'
}

