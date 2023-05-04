interface IUser {
   name: string;
   age: number;
}

type YoucanUse = IUser & {
   role: string;
}

interface IExtendedUser extends IUser {
   role: string;
}

const user5 : IExtendedUser = {
   name: "arnab",
   age: 200,
   role:"onekh boro maper developer"
}